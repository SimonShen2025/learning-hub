---
title: "SQS + Auto Scaling Group"
lectureId: 188
section: "s17"
sectionTitle: "Decoupling applications: SQS, SNS, Kinesis, Active MQ"
date: "2026-03-05"
tags: [sqs, auto-scaling, cloudwatch, decoupling, buffer, aws]
---

## 中文短总结

SQS 队列与 Auto Scaling Group 配合使用的两个核心架构模式：（1）基于 CloudWatch 的 ApproximateNumberOfMessages 指标自动扩缩消费者实例；（2）SQS 作为数据库写入缓冲区，防止数据库过载丢失事务。此外还可用于前后端解耦——前端接收请求入队，后端独立处理。

## 中文长总结

### 模式一：SQS + ASG 自动扩缩

1. EC2 实例在 ASG 中运行，从 SQS 队列轮询消息
2. 利用 CloudWatch 指标 **ApproximateNumberOfMessages**（队列中近似消息数）
3. 设置 CloudWatch Alarm：例如 "队列中超过 1000 条消息" 触发警报
4. 警报触发 ASG 扩展动作，增加 EC2 实例数量
5. 更多实例 → 更快消费消息 → 队列长度下降
6. 支持双向扩缩（Scale Up / Scale Down）

### 模式二：SQS 作为数据库写入缓冲

场景：大规模营销活动导致海量订单，直接写入数据库（RDS/Aurora/DynamoDB）可能导致过载和数据丢失。

解决方案：
1. 前端应用将所有事务请求作为消息发送到 SQS 队列
2. SQS 具有**无限可扩展性**，不存在吞吐量瓶颈
3. 另一个 ASG 负责从队列中读取消息并写入数据库
4. 只有确认写入数据库成功后才删除队列中的消息
5. 保证**每笔事务都不会丢失**

**前提条件**：客户端不需要立即确认写入已完成（最终一致性）

### 模式三：前后端应用层解耦

- 前端应用接收请求 → 发送消息到 SQS 队列
- 后端处理作业从队列接收消息并处理
- 前后端可独立扩展

## 考试要点

- **SQS + ASG** = 通过 CloudWatch ApproximateNumberOfMessages 指标自动扩缩
- **SQS 作为缓冲区** = 防止数据库过载，保证每条消息都被处理
- 考试关键词：**decoupling**（解耦）、**spike load**（突发负载）、**timeout**（超时）→ 想到 SQS
- SQS 队列 = **无限吞吐量 + 无限消息数量** → 不存在瓶颈
- 写入数据库时使用 SQS 缓冲 → 消息只在确认写入后删除

## English Short Summary

Two key architectural patterns with **SQS + Auto Scaling Group**: (1) **Auto-scaling consumers** based on CloudWatch's `ApproximateNumberOfMessages` metric — set alarms to add/remove EC2 instances as queue depth changes; (2) **SQS as a database write buffer** — front-end enqueues transactions into SQS (infinitely scalable), a separate ASG dequeues and writes to RDS/DynamoDB, deleting messages only after confirmed writes, ensuring zero transaction loss. Also applicable for **application tier decoupling** where front-end and back-end scale independently. Key exam trigger words: decoupling, spike load, timeouts → think SQS.

---
title: "Amazon SQS - Standard Queues Overview"
lectureId: 183
section: "s17"
sectionTitle: "Decoupling applications: SQS, SNS, Kinesis, Active MQ"
date: "2026-03-05"
tags: [sqs, standard-queue, producer, consumer, decoupling, auto-scaling, aws]
---

## 中文短总结

Amazon SQS 标准队列是 AWS 最古老的服务之一，提供无限吞吐量、最多 14 天的消息保留期、低延迟（<10ms），以及最大 256KB 的消息大小。生产者通过 SendMessage API 发送消息，消费者（可运行在 EC2、Lambda 等上）轮询并处理消息后删除。SQS 常与 Auto Scaling Group 配合使用，通过 CloudWatch 的队列长度指标自动扩缩容。

## 中文长总结

### SQS 基础概念

Amazon SQS（Simple Queue Service）是 AWS 最早提供的服务之一，已有 10 年以上历史。核心概念是 **队列（Queue）**：
- **生产者（Producer）**：通过 SendMessage SDK/API 将消息发送到队列
- **消费者（Consumer）**：从队列中轮询（poll）消息，处理后通过 Delete Message API 删除

### 标准队列特性

| 特性 | 说明 |
|------|------|
| 吞吐量 | **无限制**（发送和接收均无限制） |
| 消息数量 | 队列中可存储**无限数量**的消息 |
| 默认保留期 | 4 天（最大 14 天） |
| 延迟 | <10ms（发送和接收） |
| 消息大小 | 最大 **256 KB**（注意：原文说 1024KB 但实际限制为 256KB） |
| 交付保证 | **至少一次交付**（At Least Once Delivery），可能有重复 |
| 消息排序 | **尽力排序**（Best Effort Ordering），可能乱序 |

### 消费者扩展

消费者可运行在：
- **EC2 实例**
- **本地服务器**（On-premises）
- **AWS Lambda**

每次轮询最多可接收 **10 条消息**。处理完成后必须调用 Delete Message API 删除消息。

### SQS + Auto Scaling Group（关键架构）

1. 消费者运行在 Auto Scaling Group 中的 EC2 实例上
2. 利用 CloudWatch 指标 **ApproximateNumberOfMessages**（队列长度）
3. 设置 CloudWatch Alarm：当队列长度超过阈值时触发扩展
4. ASG 自动增加 EC2 实例数量以提高处理吞吐量

### 应用层解耦架构

典型场景：视频处理
- **前端层**（Front-end Tier）：接收请求 → 发送消息到 SQS 队列
- **后端处理层**（Backend Processing）：从 SQS 拉取消息 → 处理视频 → 存入 S3
- 两层可以独立扩展，且可使用不同类型的 EC2 实例（如后端使用 GPU 实例）

### 安全性

- **传输加密**：HTTPS API
- **静态加密**：KMS 密钥
- **客户端加密**：需客户端自行处理
- **访问控制**：IAM 策略 + SQS 访问策略（类似 S3 Bucket Policy）
- SQS 访问策略适用于：跨账户访问、允许 SNS/S3 等服务写入队列

## 考试要点

- **看到 "应用解耦"（application decoupling）** → 想到 Amazon SQS
- SQS 标准队列 = **无限吞吐量 + 无限消息数量**
- 消息保留期：默认 4 天，最大 **14 天**
- 消息大小上限：**256 KB**
- 至少一次交付 + 尽力排序（非严格有序）
- **SQS + ASG** 通过 CloudWatch ApproximateNumberOfMessages 指标自动扩缩
- SQS 访问策略 = 类似 S3 Bucket Policy，用于跨账户或跨服务访问
- 前后端解耦架构：前端 → SQS → 后端处理层（各自独立扩展）

## English Short Summary

Amazon SQS Standard Queue is one of the oldest AWS services, offering **unlimited throughput**, up to **14 days** message retention, <10ms latency, and max **256 KB** per message. Producers send messages via `SendMessage` API; consumers (EC2, Lambda, on-prem) poll, process, and delete messages. Key architectural pattern: **SQS + Auto Scaling Group** using CloudWatch `ApproximateNumberOfMessages` metric to auto-scale consumers. SQS enables **application tier decoupling** — front-end and back-end scale independently via the queue buffer. Security includes HTTPS encryption, KMS at-rest encryption, IAM policies, and SQS access policies (similar to S3 bucket policies) for cross-account and cross-service access.

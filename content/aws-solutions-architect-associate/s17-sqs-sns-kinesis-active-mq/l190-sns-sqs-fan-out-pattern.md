---
title: "SNS and SQS - Fan Out Pattern"
lectureId: 190
section: "s17"
sectionTitle: "Decoupling applications: SQS, SNS, Kinesis, Active MQ"
date: "2026-03-05"
tags: [sns, sqs, fan-out, fifo, message-filtering, s3-events, aws]
---

## 中文短总结

SNS + SQS Fan Out 模式是将消息推送到 SNS Topic，然后多个 SQS 队列作为订阅者接收消息副本的架构。适用于需要将同一消息发送给多个消费者的场景（如 S3 事件通知到多个队列）。还介绍了 SNS FIFO Topic（配合 SQS FIFO Queue 实现有序 Fan Out）和 SNS 消息过滤（通过 JSON 过滤策略让不同订阅者只接收特定消息）。

## 中文长总结

### Fan Out 基础模式

将消息单独发送到每个 SQS 队列存在问题：应用崩溃可能导致投递失败、难以扩展。

**Fan Out 解决方案**：
1. 生产者发送**一条消息**到 SNS Topic
2. 多个 SQS 队列作为 Topic 的**订阅者**
3. 每个队列接收消息的**完整副本**
4. 完全解耦、无数据丢失、支持延迟处理和重试

**前提条件**：SQS 队列的访问策略（Queue Access Policy）必须允许 SNS Topic 写入。

### S3 事件 Fan Out

S3 事件规则限制：同一事件类型 + 前缀组合只能有**一个事件规则**。

解决方案：
```
S3 Event → SNS Topic → 多个 SQS 队列
                     → Lambda 函数
                     → Email 通知
```

### SNS → Kinesis Data Firehose → S3

SNS 可直接集成 Kinesis Data Firehose：
```
Producer → SNS Topic → KDF → S3 / Redshift / 其他 KDF 目标
```

### SNS FIFO Topic（有序 Fan Out）

- SNS FIFO Topic 保证消息**严格有序**
- 订阅者只能是 **SQS FIFO 队列**（或标准队列）
- 支持基于 **Message Group ID** 排序和 **Deduplication ID** 去重
- 吞吐量与 SQS FIFO 相同（300/3000 msg/s）

典型场景：
```
Producer → SNS FIFO Topic → SQS FIFO Queue (Fraud Service)
                          → SQS FIFO Queue (Shipping Service)
```

### SNS 消息过滤（Message Filtering）

使用 **JSON 过滤策略**（Filter Policy）让不同订阅者只接收匹配的消息：

```json
// 示例消息
{
  "orderNumber": "123",
  "product": "pencil",
  "quantity": 4,
  "state": "placed"
}
```

- SQS 队列 A（过滤策略：state = "placed"）→ 只接收已下单的订单
- SQS 队列 B（过滤策略：state = "cancelled"）→ 只接收已取消的订单
- SQS 队列 C（无过滤策略）→ 接收**所有消息**
- Email 订阅（过滤策略：state = "cancelled"）→ 取消订单邮件通知

## 考试要点

- **Fan Out** = SNS Topic → 多个 SQS 队列（一对多，完全解耦）
- S3 事件只能有一个事件规则 → 用 **SNS Fan Out** 发送到多个目的地
- SNS 可直接集成 **Kinesis Data Firehose** → 数据持久化到 S3/Redshift
- **SNS FIFO Topic** + **SQS FIFO Queue** = 有序 Fan Out
- **消息过滤**：JSON Filter Policy 让订阅者只接收特定消息
- 无过滤策略的订阅者接收所有消息
- SQS 队列访问策略必须允许 SNS Topic 写入
- 支持跨 Region 投递

## English Short Summary

The **SNS + SQS Fan Out** pattern pushes one message to an SNS Topic, and multiple SQS queues (subscribers) each receive a full copy — fully decoupled with no data loss. This solves S3 event limitations (one rule per event type+prefix combo) by fanning out through SNS to multiple destinations. **SNS FIFO Topics** support ordered fan-out to SQS FIFO queues with deduplication. **SNS Message Filtering** uses JSON filter policies to route specific messages to specific subscribers (e.g., "placed" orders to one queue, "cancelled" to another). SNS also integrates directly with Kinesis Data Firehose for data persistence to S3/Redshift.

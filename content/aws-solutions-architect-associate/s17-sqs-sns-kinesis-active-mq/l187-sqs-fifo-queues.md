---
title: "SQS - FIFO Queues"
lectureId: 187
section: "s17"
sectionTitle: "Decoupling applications: SQS, SNS, Kinesis, Active MQ"
date: "2026-03-05"
tags: [sqs, fifo, deduplication, message-group-id, aws]
---

## 中文短总结

SQS FIFO 队列保证消息的先进先出顺序，支持精确一次发送（Exactly-Once Send）通过去重 ID 实现 5 分钟内的消息去重。FIFO 队列吞吐量有限：不使用批处理时 300 消息/秒，使用批处理时 3000 消息/秒。队列名称必须以 `.fifo` 结尾，排序基于 Message Group ID。

## 中文长总结

### FIFO 队列特性

**FIFO**（First In First Out）= 先进先出，保证消息按发送顺序被消费。

| 特性 | 说明 |
|------|------|
| 排序保证 | 消息严格按发送顺序被消费者接收 |
| 吞吐量限制 | 无批处理：**300 msg/s**；有批处理：**3,000 msg/s** |
| 去重（Deduplication） | 通过 **Deduplication ID**，5 分钟内自动移除重复消息 |
| 排序依据 | 基于 **Message Group ID** 进行分组排序 |
| 命名规则 | 队列名称必须以 **`.fifo`** 结尾 |

### 与标准队列对比

| | 标准队列 | FIFO 队列 |
|---|---------|-----------|
| 排序 | 尽力排序（可能乱序） | **严格有序** |
| 吞吐量 | 无限 | 有限（300/3000 msg/s） |
| 交付保证 | 至少一次（可能重复） | **精确一次**（Exactly-Once） |
| 去重 | 不支持 | 支持（5 分钟窗口） |

### 关键概念

- **Message Group ID**：每次发送消息时必须指定，相同 Group ID 的消息保持顺序
- **Deduplication ID**：用于去重，5 分钟内相同 ID 的消息只保留一条
- **Content-based Deduplication**：可选功能，自动根据消息内容计算去重

## 考试要点

- **FIFO 队列** = 严格有序 + 精确一次交付
- 吞吐量限制：**300 msg/s**（无批处理）/ **3,000 msg/s**（有批处理）
- 队列名称必须以 **`.fifo`** 结尾
- 排序基于 **Message Group ID**
- 去重基于 **Deduplication ID**（5 分钟窗口）
- 考试中看到 "有序消息处理" → 想到 SQS FIFO

## English Short Summary

**SQS FIFO queues** guarantee **First-In-First-Out** message ordering and support **exactly-once delivery** through deduplication (using a Deduplication ID within a 5-minute window). Throughput is limited to **300 msg/s** without batching or **3,000 msg/s** with batching. Queue names must end with **`.fifo`**. Message ordering is guaranteed per **Message Group ID**. Content-based deduplication is optionally available. FIFO queues trade unlimited throughput for strict ordering and deduplication guarantees.

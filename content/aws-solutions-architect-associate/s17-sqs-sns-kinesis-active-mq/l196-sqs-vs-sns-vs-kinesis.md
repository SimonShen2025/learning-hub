---
title: "SQS vs SNS vs Kinesis"
lectureId: 196
section: "s17"
sectionTitle: "Decoupling applications: SQS, SNS, Kinesis, Active MQ"
date: "2026-03-05"
tags: [sqs, sns, kinesis, comparison, aws]
---

## 中文短总结

三大消息服务对比：SQS 是消费者拉取模型（Pull），处理后删除消息，无序（除非 FIFO），无限吞吐量；SNS 是发布/订阅推送模型（Push），消息不持久存储，支持 1250 万+订阅者，可结合 SQS Fan Out 和 FIFO；Kinesis 支持标准拉取（2MB/s/shard）和增强 Fan Out推送（2MB/s/shard/consumer），数据持久存储（1~365 天），适合实时大数据和 ETL，按 Shard 排序。

## 中文长总结

### 三大服务对比

| 特性 | SQS | SNS | Kinesis Data Streams |
|------|-----|-----|---------------------|
| 模型 | **Pull**（消费者拉取） | **Push**（推送给订阅者） | **Pull** 或 **Push**（Enhanced Fan Out） |
| 消息处理 | 处理后**删除** | 发送后**不持久存储** | **持久存储**（1~365 天），可重放 |
| 消费者 | 无限数量消费者协作消费 | 每 Topic 最多 **1250 万+** 订阅者 | 每 Shard 标准 2MB/s 或 Enhanced Fan Out 2MB/s/consumer |
| 吞吐量 | **无限**（无需预置） | **无限**（无需预置） | **受限**（按 Shard 扩缩） |
| 排序 | 仅 **FIFO 队列**有序 | 仅 **FIFO Topic** 有序 | 按 **Shard** 排序 |
| 去重 | 仅 FIFO 队列 | 仅 FIFO Topic | - |
| 延迟消息 | ✅ 支持（Individual Message Delay） | ❌ | ❌ |
| 适用场景 | 应用解耦、缓冲 | 通知、一对多分发 | **实时大数据、分析、ETL** |
| 容量模式 | 无需管理 | 无需管理 | Provisioned / On-demand |
| 数据过期 | 默认 4 天，最长 14 天 | 即时发送 | 1~365 天 |

### 消费模式详解

**SQS**：
- 消费者主动拉取（Poll）
- 多个消费者协作处理（每条消息只被一个消费者处理）
- 处理后删除消息

**SNS**：
- 推送给所有订阅者（每个订阅者都收到完整副本）
- 消息不持久存储（未交付可能丢失）
- 可配合 SQS Fan Out 或 FIFO Topic

**Kinesis**：
- 标准消费：消费者 Pull（2 MB/s per shard，共享带宽）
- Enhanced Fan Out：Kinesis Push 到消费者（2 MB/s per shard per consumer，独享带宽）
- 数据持久存储，支持重放

## 考试要点

- **SQS** = Pull + 删除消息 + 无限吞吐量 + 应用解耦
- **SNS** = Push + 不持久 + 一对多通知 + Fan Out
- **Kinesis** = 实时（Real-time）+ 持久存储 + 可重放 + 大数据/ETL
- SQS 支持 **Individual Message Delay**
- Kinesis Enhanced Fan Out = **Push** 模式（2 MB/s/shard/consumer）
- 考试场景：需要**解耦** → SQS；需要**一对多通知** → SNS；需要**实时分析** → Kinesis
- Kinesis 需手动管理 Shard（Provisioned）或使用 On-demand

## English Short Summary

**SQS vs SNS vs Kinesis** comparison: **SQS** — consumer pull model, messages deleted after processing, unlimited throughput, ordering only with FIFO queues, supports individual message delay. **SNS** — pub/sub push model, no data persistence, up to 12.5M+ subscribers per topic, combine with SQS for fan-out and FIFO topics. **Kinesis** — standard pull (2MB/s/shard shared) or enhanced fan-out push (2MB/s/shard/consumer), persistent data storage (1–365 days) with replay, used for real-time big data analytics and ETL, ordering per shard, capacity managed via Provisioned or On-demand modes.

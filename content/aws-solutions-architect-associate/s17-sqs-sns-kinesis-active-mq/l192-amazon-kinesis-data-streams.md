---
title: "Amazon Kinesis Data Streams"
lectureId: 192
section: "s17"
sectionTitle: "Decoupling applications: SQS, SNS, Kinesis, Active MQ"
date: "2026-03-05"
tags: [kinesis, data-streams, real-time, streaming, shards, aws]
---

## 中文短总结

Amazon Kinesis Data Streams 是实时数据收集和存储服务。生产者（应用/SDK/Kinesis Agent）将实时数据（点击流、IoT、日志）发送到数据流，消费者（应用/Lambda/Data Firehose/Flink）实时消费。数据保留最多 365 天，支持重放，不可删除。两种容量模式：Provisioned（按 Shard 计费，每 Shard 1MB/s 写入、2MB/s 读取）和 On-demand（自动扩缩，默认 4MB/s）。

## 中文长总结

### 核心概念

Kinesis Data Streams 用于**实时**（Real-time）收集和存储流式数据。

```
生产者 (Producers)              →  Kinesis Data Streams  →  消费者 (Consumers)
- 应用程序 (SDK)                    [Shards]                - 应用程序 (SDK/KCL)
- Kinesis Agent                                            - Lambda
                                                           - Data Firehose
                                                           - Managed Apache Flink
```

### 实时数据来源

- **点击流**（Clickstream）：用户在网站上的点击行为
- **IoT 设备**：如联网自行车等物联网数据
- **服务器指标和日志**：通过 Kinesis Agent 发送

### 数据特性

| 特性 | 说明 |
|------|------|
| 数据保留 | 最长 **365 天** |
| 数据重放 | ✅ 支持（因为数据持久存储） |
| 数据删除 | ❌ 不可删除，只能等待过期 |
| 数据大小 | 最大 **10 MB**（典型场景是大量小数据） |
| 数据排序 | 相同 **Partition Key** 的数据有序 |
| 加密 | KMS 静态加密 + HTTPS 传输加密 |

### 生产者和消费者库

- **Kinesis Producer Library (KPL)**：优化的高吞吐量生产者库
- **Kinesis Client Library (KCL)**：优化的消费者库

### 容量模式

#### Provisioned 模式（预置模式）
- 手动选择 **Shard 数量**
- 每个 Shard：**1 MB/s**（或 1000 records/s）写入
- 每个 Shard：**2 MB/s** 读取
- 需手动扩缩 Shard 数量
- 按 Shard 数量**每小时**计费

#### On-demand 模式（按需模式）
- 无需管理容量，自动扩缩
- 默认容量：**4 MB/s**（或 4000 records/s）
- 基于过去 30 天的观测吞吐量自动调整
- 按**流每小时** + **数据吞吐量**计费

## 考试要点

- **Kinesis Data Streams** = **实时**（Real-time）数据流处理
- 考试中看到 "real-time" → 想到 Kinesis Data Streams
- 数据保留最长 **365 天**，支持**重放**，不可删除
- **Shard** 是吞吐量单位：每 Shard 1 MB/s 写入 + 2 MB/s 读取
- 两种模式：**Provisioned**（手动扩缩 Shard）和 **On-demand**（自动扩缩）
- 相同 **Partition Key** 保证数据有序并发送到同一 Shard
- 消费者可以是应用（KCL）、Lambda、Data Firehose、Apache Flink

## English Short Summary

**Amazon Kinesis Data Streams** is a real-time streaming data collection and storage service. Producers (applications via SDK, Kinesis Agent) send real-time data (clickstreams, IoT, logs) into the stream. Consumers (applications via KCL, Lambda, Data Firehose, Apache Flink) process data in real-time. Data is retained up to **365 days**, supports **replay**, and cannot be deleted. Two capacity modes: **Provisioned** (manually scale shards; each shard = 1 MB/s in, 2 MB/s out; pay per shard/hour) and **On-demand** (auto-scales based on 30-day observed throughput, default 4 MB/s). Data with the same **Partition Key** is ordered and routed to the same shard.

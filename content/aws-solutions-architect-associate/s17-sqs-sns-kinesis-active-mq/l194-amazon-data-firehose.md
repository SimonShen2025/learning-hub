---
title: "Amazon Data Firehose"
lectureId: 194
section: "s17"
sectionTitle: "Decoupling applications: SQS, SNS, Kinesis, Active MQ"
date: "2026-03-05"
tags: [data-firehose, kinesis, near-real-time, etl, s3, redshift, aws]
---

## 中文短总结

Amazon Data Firehose（原 Kinesis Data Firehose）是全托管的近实时数据加载服务，将流式数据从数据源（Kinesis Data Streams、CloudWatch、IoT、SDK）通过可选的 Lambda 转换，批量写入目标存储（S3、Redshift、OpenSearch、第三方如 Datadog/Splunk、或自定义 HTTP 端点）。关键特征：近实时（有 Buffer）、自动扩缩、无数据存储、无重放、完全 Serverless。

## 中文长总结

### 核心概念

Amazon Data Firehose 是一种**加载（Load）**服务，负责将流式数据从源端批量发送到目的端。

### 数据流架构

```
数据源 (Sources)                      →  Amazon Data Firehose  →  目标 (Destinations)
- 应用程序 (SDK)                          [可选 Lambda 转换]     AWS 目标:
- Kinesis Agent                           [Buffer 缓冲区]       - Amazon S3
- Kinesis Data Streams (pull)                                   - Amazon Redshift
- CloudWatch Logs/Events                                        - Amazon OpenSearch
- AWS IoT                                                       第三方:
                                                                - Datadog, Splunk, MongoDB...
                                                                自定义:
                                                                - HTTP Endpoint
                                                                备份:
                                                                - S3 (全部或失败数据)
```

### 核心特性

| 特性 | 说明 |
|------|------|
| 服务类型 | **近实时**（Near Real-time） |
| 缓冲机制 | Buffer 按大小或时间累积后批量写入 |
| 扩展性 | **自动扩缩**，完全 Serverless |
| 数据存储 | ❌ 无存储，无重放能力 |
| 数据格式支持 | CSV、JSON、Parquet、Avro、Text、Binary |
| 格式转换 | 支持转换为 **Parquet/ORC** 格式 |
| 压缩 | GZIP、Snappy 等 |
| 自定义转换 | 通过 **Lambda 函数**（如 CSV → JSON） |
| 计费 | 按使用量付费（Pay per use） |

### Kinesis Data Streams vs Amazon Data Firehose

| | Kinesis Data Streams | Amazon Data Firehose |
|---|---------------------|---------------------|
| 类型 | 数据**收集** | 数据**加载** |
| 代码 | 需自行编写 Producer/Consumer | 完全托管 |
| 实时性 | **实时** | **近实时** |
| 容量 | Provisioned / On-demand | 自动扩缩 |
| 数据存储 | 最长 365 天 | 无存储 |
| 重放 | ✅ 支持 | ❌ 不支持 |

## 考试要点

- **Amazon Data Firehose** = **近实时**（Near Real-time），有 Buffer
- 考试中看到 "near real-time" → 想到 Firehose
- 目标存储：**S3、Redshift、OpenSearch** + 第三方 + HTTP 端点
- 可选 Lambda 转换 + 格式转换（Parquet/ORC）
- **无数据存储、无重放** → 与 Kinesis Data Streams 的关键区别
- 完全托管，自动扩缩，按使用量付费
- 曾用名 "Kinesis Data Firehose"，现更名为 "Amazon Data Firehose"

## English Short Summary

**Amazon Data Firehose** (formerly Kinesis Data Firehose) is a fully managed, **near real-time** data loading service. It ingests data from sources (Kinesis Data Streams, CloudWatch, IoT, SDK/Agent), optionally transforms it via Lambda, and batch-writes to destinations: **S3, Redshift, OpenSearch**, third-party (Datadog, Splunk, MongoDB), or custom HTTP endpoints. Key characteristics: near real-time (uses a buffer for batching), auto-scaling, serverless, no data storage, no replay capability. Supports format conversion (Parquet/ORC) and compression (GZIP/Snappy). Key difference from Kinesis Data Streams: Firehose is for **loading** data (no storage/replay) while Data Streams is for **collecting** real-time data (with storage and replay).

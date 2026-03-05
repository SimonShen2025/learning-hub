---
title: "Amazon Managed Service for Apache Flink"
lectureId: 251
section: "s22"
sectionTitle: "Data & Analytics"
date: "2026-03-05"
tags: [flink, kinesis, msk, kafka, streaming, real-time, analytics]
---

## 中文短总结

Amazon Managed Service for Apache Flink（原 Kinesis Data Analytics for Apache Flink）是托管的实时流数据处理服务，使用 Java/SQL/Scala 编写 Flink 应用。可从 Kinesis Data Streams 或 Amazon MSK（Apache Kafka）读取数据。AWS 提供：计算资源预置、并行计算、自动扩展、应用备份（checkpoint/snapshot）。**考试陷阱：Flink 不能从 Kinesis Data Firehose 读取数据**。仅用于实时流处理场景。

## 中文长总结

Amazon Managed Service for Apache Flink（原名 Kinesis Data Analytics for Apache Flink）是 AWS 上的托管实时流数据处理服务。

**核心特性：**
- Apache Flink 框架：使用 Java、SQL 或 Scala 语言处理实时数据流
- 数据源：Kinesis Data Streams 或 Amazon MSK（Apache Kafka）
- 运行在 AWS 托管集群上

**AWS 提供的管理功能：**
- 计算资源预置
- 并行计算支持
- 自动扩展
- 应用备份：通过 Checkpoint 和 Snapshot 实现
- 支持任何 Apache Flink 编程特性进行数据转换

**考试陷阱：**
- Flink **可以**从 Kinesis Data Streams 读取 ✅
- Flink **可以**从 Amazon MSK 读取 ✅
- Flink **不能**从 Kinesis Data Firehose 读取 ❌

**适用场景：** 仅用于实时流数据处理

## 考试要点

- Managed Service for Apache Flink = 托管实时流处理
- 支持读取：Kinesis Data Streams ✅、Amazon MSK ✅
- **不支持读取：Kinesis Data Firehose ❌**（考试陷阱）
- 使用 Java/SQL/Scala
- AWS 管理：计算资源、自动扩展、Checkpoint/Snapshot 备份

## English Short Summary

Amazon Managed Service for Apache Flink (formerly Kinesis Data Analytics for Apache Flink) is a managed real-time stream processing service using Java/SQL/Scala. Reads from Kinesis Data Streams or Amazon MSK (Apache Kafka). AWS manages compute provisioning, parallel computation, auto-scaling, and application backups (checkpoints/snapshots). **Exam trap: Flink cannot read from Kinesis Data Firehose.** Used exclusively for real-time stream processing.

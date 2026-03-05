---
title: "Big Data Ingestion Pipeline"
lectureId: 254
section: "s22"
sectionTitle: "Data & Analytics"
date: "2026-03-05"
tags: [big-data, pipeline, iot, kinesis, firehose, athena, quicksight, redshift, serverless]
---

## 中文短总结

全无服务器大数据摄入管道架构：IoT 设备→IoT Core→Kinesis Data Streams（实时收集）→Kinesis Data Firehose（每 1 分钟写入 S3，可选 Lambda 做数据转换）→ S3 摄入桶。后续处理：S3 事件→（可选 SQS）→Lambda→触发 Athena SQL 查询→结果存入 S3 报告桶→QuickSight 可视化 或 加载到 Redshift 数据仓库做进一步分析。关键点：IoT Core 管理设备、Kinesis 实时收集、Firehose 最低 1 分钟间隔写入 S3、Athena 无服务器 SQL、QuickSight 可视化、Redshift 数据仓库。

## 中文长总结

一个全无服务器的大数据摄入管道架构设计，涵盖实时摄入、转换、查询和可视化。

**完整架构流程：**

1. **数据采集层：**
   - IoT 设备 → **IoT Core**（管理 IoT 设备）→ **Kinesis Data Streams**（实时大数据管道）

2. **数据传输层：**
   - Kinesis Data Streams → **Kinesis Data Firehose**（每 1 分钟批量写入 S3）
   - 可选：Firehose 连接 **Lambda** 做实时数据清洗/转换
   - 输出：**S3 摄入桶**（Ingestion Bucket）

3. **数据处理层：**
   - S3 摄入桶 → 事件通知 → （可选 SQS 队列）→ **Lambda** → 触发 **Athena SQL 查询**
   - Athena 从摄入桶读取数据，执行无服务器 SQL 分析
   - 查询结果存入 **S3 报告桶**（Reporting Bucket）

4. **数据消费层：**
   - S3 报告桶 → **QuickSight** 可视化仪表板
   - 或 → **Redshift** 数据仓库做进一步分析
   - Redshift 也可作为 QuickSight 的数据源

**各组件职责总结：**
- **IoT Core**：管理大量 IoT 设备
- **Kinesis Data Streams**：实时数据收集
- **Kinesis Data Firehose**：近实时数据投递到 S3（最低 1 分钟间隔）
- **Lambda**：数据转换（在 Firehose 中）和触发 Athena 查询
- **S3**：存储原始数据和分析结果
- **Athena**：无服务器 SQL 查询
- **QuickSight**：数据可视化
- **Redshift**：数据仓库，深度分析

## 考试要点

- 全无服务器大数据管道架构
- IoT Core 管理 IoT 设备
- Kinesis Data Streams = 实时收集
- Firehose 最低频率 1 分钟写入 S3
- Lambda 可在 Firehose 中做数据转换
- S3 事件可触发 SQS/SNS/Lambda
- Athena = 无服务器 SQL 分析 S3 数据
- QuickSight = 可视化、Redshift = 数据仓库
- 整个管道全部无服务器

## English Short Summary

Fully serverless big data ingestion pipeline: IoT devices→IoT Core→Kinesis Data Streams (real-time collection)→Kinesis Data Firehose (writes to S3 every 1 min, optional Lambda for transformation)→S3 ingestion bucket. Processing: S3 events→(optional SQS)→Lambda→triggers Athena SQL query→results to S3 reporting bucket→QuickSight visualization or load into Redshift data warehouse for deeper analytics. All components are fully serverless and managed by AWS.

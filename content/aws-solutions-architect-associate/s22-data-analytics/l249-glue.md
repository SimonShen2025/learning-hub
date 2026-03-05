---
title: "Glue"
lectureId: 249
section: "s22"
sectionTitle: "Data & Analytics"
date: "2026-03-05"
tags: [glue, etl, data-catalog, parquet, serverless, analytics]
---

## 中文短总结

AWS Glue 是完全无服务器的托管 ETL（Extract-Transform-Load）服务。典型用例：从 S3/RDS 提取数据 → 转换 → 加载到 Redshift。考试重点场景：CSV→Parquet 格式转换（配合 Athena 提效），可通过 S3 事件→Lambda/EventBridge 触发自动化。Glue Data Catalog：爬虫程序扫描 S3/RDS/DynamoDB 等数据源，记录表/列/数据类型元数据，被 Athena/Redshift Spectrum/EMR 共用。其他功能：Job Bookmarks（防重复处理）、DataBrew（数据清洗）、Studio（可视化 ETL GUI）、Streaming ETL（基于 Spark Streaming，读取 Kinesis/Kafka）。

## 中文长总结

AWS Glue 是一项完全无服务器的托管 ETL（提取-转换-加载）服务，用于准备和转换数据以进行分析。

**核心 ETL 功能：**
- 从数据源（S3 桶、RDS 数据库）提取数据
- 转换数据（过滤、添加列等）
- 加载到目标（如 Redshift 数据仓库）
- 只需编写代码、启动 ETL 任务即可

**CSV→Parquet 转换（考试高频场景）：**
- Parquet 是列式格式，Athena 分析效率显著提升
- 流程：S3（CSV）→ Glue ETL → S3（Parquet）→ Athena 高效分析
- 自动化：S3 事件通知 → Lambda 函数 或 EventBridge → 触发 Glue ETL 任务

**Glue Data Catalog（数据目录）：**
- Glue Data Crawler 扫描多种数据源：S3、RDS、DynamoDB、JDBC 兼容数据库
- 自动记录：数据库、表、列、数据类型等元数据
- **被多个服务共用**：
  - Athena：数据发现和 Schema 发现
  - Redshift Spectrum
  - Amazon EMR
- 是多个 AWS 分析服务的**核心元数据层**

**其他重要功能：**
- **Glue Job Bookmarks**：防止重新处理已处理过的数据（增量 ETL）
- **Glue DataBrew**：使用预建转换清洗和规范化数据
- **Glue Studio**：创建、运行和监控 ETL 作业的图形界面
- **Glue Streaming ETL**：基于 Apache Spark Structured Streaming，从 Kinesis Data Streams 或 Kafka/MSK 读取流数据

## 考试要点

- Glue = 无服务器 ETL 服务
- CSV→Parquet 转换 → 用 Glue，提升 Athena 性能
- Glue Data Catalog = 中央元数据仓库，被 Athena/Redshift Spectrum/EMR 共用
- Job Bookmarks 防止重复处理数据
- Streaming ETL 支持从 Kinesis/Kafka 读取流数据
- S3 事件→Lambda→Glue ETL 实现自动化转换流水线

## English Short Summary

AWS Glue is a fully serverless managed ETL service for data preparation and transformation. Key exam scenario: CSV→Parquet conversion (via Glue ETL) to improve Athena performance, automatable via S3 events→Lambda/EventBridge→Glue. Glue Data Catalog uses crawlers to scan S3/RDS/DynamoDB/JDBC sources, storing table/column/type metadata used by Athena, Redshift Spectrum, and EMR as a central metadata layer. Additional features: Job Bookmarks (prevent reprocessing), DataBrew (data cleansing), Studio (visual GUI), and Streaming ETL (Spark Streaming from Kinesis/Kafka).

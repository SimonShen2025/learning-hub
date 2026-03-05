---
title: "OpenSearch (ex: ElasticSearch)"
lectureId: 246
section: "s22"
sectionTitle: "Data & Analytics"
date: "2026-03-05"
tags: [opensearch, elasticsearch, search, analytics, dynamodb, kinesis]
---

## 中文短总结

Amazon OpenSearch（原 ElasticSearch）支持任意字段搜索（含部分匹配），常作为其他数据库的搜索补充。两种模式：Managed Cluster 和 Serverless。自有查询语言（可通过插件启用 SQL）。核心架构模式：DynamoDB→DynamoDB Streams→Lambda→OpenSearch（实时索引+搜索），通过 item name 模糊搜索得到 item ID 再回查 DynamoDB。CloudWatch Logs 摄入：Subscription Filter→Lambda（实时）或→Firehose（近实时）。Kinesis 摄入：通过 Firehose（近实时+可选 Lambda 转换）或 Lambda 直读 Data Streams（实时）。支持 OpenSearch Dashboards 做可视化分析。

## 中文长总结

Amazon OpenSearch Service（原 Amazon ElasticSearch，因授权问题更名）是一项托管搜索和分析服务。

**核心优势对比 DynamoDB：**
- DynamoDB 只能按主键或索引查询
- OpenSearch 支持任意字段搜索，包括**部分匹配**
- 通常作为其他数据库的**搜索补充**使用

**部署模式：**
- **Managed Cluster**：实际物理实例，可见可管理
- **Serverless**：AWS 全托管扩展和运维

**查询与安全：**
- 自有查询语言（非原生 SQL），可通过插件启用 SQL 兼容
- 安全：Cognito、IAM 集成，静态加密和传输加密
- OpenSearch Dashboards：可视化分析工具

**核心架构模式（考试重点）：**

1. **DynamoDB + OpenSearch 搜索模式：**
   - DynamoDB（主数据源）→ DynamoDB Streams → Lambda → OpenSearch（实时索引）
   - 用户在 OpenSearch 中模糊搜索 item name → 获取 item ID → 回查 DynamoDB 获取完整数据

2. **CloudWatch Logs 摄入：**
   - 方式一：Subscription Filter → Lambda → OpenSearch（实时）
   - 方式二：Subscription Filter → Kinesis Data Firehose → OpenSearch（近实时）

3. **Kinesis 数据摄入：**
   - 方式一：Kinesis Data Streams → Firehose → OpenSearch（近实时，可选 Lambda 转换）
   - 方式二：Kinesis Data Streams → Lambda（自定义代码）→ OpenSearch（实时）

## 考试要点

- OpenSearch = 搜索补充数据库，支持任意字段部分匹配搜索
- DynamoDB + OpenSearch 模式：Streams→Lambda→OpenSearch 索引，搜索返回 ID 再查 DynamoDB
- 两种部署：Managed Cluster vs Serverless
- 非原生 SQL，需插件启用
- CloudWatch Logs 摄入：实时（Lambda）vs 近实时（Firehose）
- Kinesis 摄入：实时（Lambda）vs 近实时（Firehose）
- 可做搜索也可做分析（OpenSearch Dashboards）

## English Short Summary

Amazon OpenSearch (formerly ElasticSearch) enables searching any field including partial matches, commonly used as a search complement to other databases. Two modes: Managed Cluster and Serverless. Key pattern: DynamoDB→Streams→Lambda→OpenSearch for real-time indexing, search by item name to get ID then query DynamoDB for full data. CloudWatch Logs ingestion via Subscription Filter→Lambda (real-time) or →Firehose (near real-time). Kinesis ingestion via Firehose or Lambda. Supports OpenSearch Dashboards for analytics visualization.

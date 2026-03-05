---
title: "Amazon DynamoDB - Advanced Features"
lectureId: 224
section: "19"
sectionTitle: "Serverless Overviews from a Solution Architect Perspective"
date: "2026-03-05"
tags: ["dynamodb", "dax", "streams", "global-tables", "ttl", "backups", "s3-export"]
---

## 中文短总结

DynamoDB 高级特性：**DAX**（内存缓存，微秒延迟，5 分钟默认 TTL），**DynamoDB Streams**（24 小时保留 + Lambda 触发器）或 **Kinesis Data Streams**（1 年保留，更多消费者），**Global Tables**（多区域 Active-Active 复制，需启用 Streams），**TTL**（自动过期删除项，Web Session 用例），**备份**（PITR 35 天 + 按需备份），**S3 集成**（导出需 PITR 用于 Athena 分析，导入 CSV/JSON/ION）。

## 中文长总结

### 1. DynamoDB Accelerator (DAX)

- **完全托管的内存缓存**，专为 DynamoDB 设计
- **微秒级延迟** (microseconds) — 比 DynamoDB 本身更快
- 与现有 DynamoDB API **完全兼容**，无需修改应用代码
- 默认 TTL **5 分钟**
- 架构：Application → DAX Cluster (缓存节点) → DynamoDB Table

**DAX vs ElastiCache**：
| 场景 | 推荐 |
|------|------|
| 单个对象缓存 / 查询缓存 | **DAX** |
| 聚合结果 / 复杂计算结果 | **ElastiCache** |
- 两者互补，不可互相替代

### 2. Stream Processing

**DynamoDB Streams**：
- 捕获所有表修改（Create / Update / Delete）
- **24 小时保留**
- 有限数量消费者
- 与 **Lambda Triggers** 深度集成
- 也可使用 DynamoDB Stream Kinesis Adapter

**Kinesis Data Streams（替代方案）**：
- **1 年保留**
- 更多消费者数量
- 更多处理选项：Lambda、Kinesis Data Analytics、Firehose、Glue Streaming ETL

**用例**：实时响应表变更、发送欢迎邮件、实时分析、跨区域复制、派生表

**架构示例**：
```
DynamoDB → Kinesis Data Streams → Firehose → S3 / Redshift / OpenSearch
DynamoDB → DynamoDB Streams → Lambda → SNS / 另一 DynamoDB 表 / OpenSearch
```

### 3. Global Tables

- **多区域 Active-Active 复制**
- 双向复制，可在任意区域读写
- 目的：**低延迟多区域访问**
- ⚠️ **必须先启用 DynamoDB Streams**

### 4. Time To Live (TTL)

- 自动删除过期项（基于 Epoch 时间戳）
- **用例**：
  - Web Session 管理（如 2 小时后过期）
  - 仅保留最新数据
  - 遵守法规（如 2 年后删除数据）

### 5. 备份与恢复

| 备份方式 | 保留期 | 特点 |
|----------|--------|------|
| **PITR** (Point-in-Time Recovery) | **35 天** | 可选启用，恢复到任意时间点 |
| **On-Demand 备份** | 手动删除前一直保留 | 不影响性能 |
| **AWS Backup** | 自定义生命周期 | 支持跨区域复制 |

- 恢复操作会**创建新表**

### 6. S3 集成

| 操作 | 要求 | 格式 |
|------|------|------|
| **导出到 S3** | 需启用 PITR | DynamoDB JSON / ION |
| **从 S3 导入** | 无需写容量 | CSV / JSON / ION |

- 导出不影响读容量 → 可用于 **Athena 分析**、审计快照、ETL
- 导入会创建新表，错误记录在 CloudWatch Logs

## 考试要点

- **DAX** — 微秒延迟内存缓存，兼容 DynamoDB API，默认 5 分钟 TTL
- **DAX vs ElastiCache**：DAX 用于单对象/查询缓存，ElastiCache 用于聚合结果
- **DynamoDB Streams**：24h 保留，Lambda 触发器；**Kinesis Data Streams**：1 年保留，更多选项
- **Global Tables**：多区域 Active-Active，**必须启用 Streams**
- **TTL** — 自动过期删除，经典用例：Web Session 管理
- **PITR**：35 天内任意时间点恢复
- **S3 导出**需启用 PITR，用于 Athena 分析；**S3 导入**不消耗写容量
- 恢复和导入操作都会**创建新表**

## English Short Summary

DynamoDB advanced features: **DAX** (in-memory cache, microsecond latency, compatible with DynamoDB APIs, 5-min TTL; use DAX for object/query cache, ElastiCache for aggregation). **Streams**: DynamoDB Streams (24h retention, Lambda triggers) or Kinesis Data Streams (1-year retention, more consumers). **Global Tables** (multi-region Active-Active replication, requires Streams enabled). **TTL** (auto-delete expired items, e.g., web session management). **Backups**: PITR (35 days) + on-demand + AWS Backup; recovery creates new table. **S3 integration**: export requires PITR (for Athena analysis), import from CSV/JSON/ION creates new table.

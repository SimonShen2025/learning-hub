---
title: "Choosing the Right Database"
lectureId: 233
section: "21"
sectionTitle: "Databases in AWS"
date: "2026-03-05"
tags: ["databases", "rds", "aurora", "dynamodb", "elasticache", "neptune", "redshift", "overview"]
---

## 中文短总结

AWS 数据库选型指南：根据工作负载特征选择 — 读写模式、数据量、延迟要求、查询模式（SQL/NoSQL/Join）、Schema 灵活性等。分类：RDBMS (RDS/Aurora)、NoSQL (DynamoDB/ElastiCache/Neptune/DocumentDB/Keyspaces)、对象存储 (S3/Glacier)、数据仓库 (Redshift/Athena/EMR)、搜索 (OpenSearch)、图数据库 (Neptune)、账本 (QLDB)、时间序列 (Timestream)。

## 中文长总结

### 数据库选型维度

| 维度 | 考量因素 |
|------|----------|
| 读写模式 | 读密集 / 写密集 / 均衡 |
| 负载波动 | 是否白天/夜间波动 |
| 数据量 | 存储多少、存多久、是否增长 |
| 对象大小 | 平均对象大小 |
| 访问频率 | 访问模式 |
| 延迟要求 | 毫秒级 / 微秒级 |
| 并发用户 | 并发量 |
| 数据模型 | 关系型 / NoSQL / 是否需要 Join |
| Schema | 强 Schema / 灵活 Schema |
| 查询方式 | SQL / Key-Value / 图 / 全文搜索 |
| 报表/分析 | 是否需要 |
| 许可成本 | 商业 vs 云原生 |

### AWS 数据库分类

| 类型 | 服务 | 关键特征 |
|------|------|----------|
| **RDBMS (SQL/OLTP)** | RDS, Aurora | Join、SQL、事务 |
| **NoSQL** | DynamoDB, ElastiCache, Neptune, DocumentDB, Keyspaces | 灵活 Schema、无 Join |
| **对象存储** | S3, Glacier | 大对象、备份归档 |
| **数据仓库 (OLAP)** | Redshift, Athena, EMR | SQL 分析、BI |
| **搜索** | OpenSearch | 全文搜索、非结构化数据 |
| **图数据库** | Neptune | 关系图谱、社交网络 |
| **账本数据库** | QLDB | 事务记录、不可变 |
| **时间序列** | Timestream | 时间序列数据 |

## 考试要点

- 根据**工作负载特征**选择数据库（读写模式、延迟、Schema 灵活性等）
- **RDBMS/OLTP** → RDS / Aurora
- **NoSQL + 灵活 Schema** → DynamoDB / DocumentDB
- **Key-Value 缓存** → ElastiCache
- **图数据库** → Neptune
- **时间序列** → Timestream
- **数据仓库/分析 (OLAP)** → Redshift / Athena
- **全文搜索** → OpenSearch
- **对象存储** → S3

## English Short Summary

AWS database selection guide: choose based on workload characteristics — read/write patterns, data volume, latency requirements, query model (SQL/NoSQL/joins), schema flexibility, etc. Categories: RDBMS (RDS/Aurora), NoSQL (DynamoDB/ElastiCache/Neptune/DocumentDB/Keyspaces), object store (S3/Glacier), data warehouse (Redshift/Athena/EMR), search (OpenSearch), graph (Neptune), ledger (QLDB), time series (Timestream).

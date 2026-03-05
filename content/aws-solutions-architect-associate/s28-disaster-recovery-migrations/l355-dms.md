---
title: "Database Migration Service (DMS)"
lectureId: 355
section: "s28"
sectionTitle: "Disaster Recovery & Migrations"
date: "2026-03-05"
tags: [dms, database-migration, sct, schema-conversion, cdc]
---

## 中文短总结

AWS DMS（Database Migration Service）：安全迁移数据库到 AWS，迁移期间源数据库保持可用。支持同构迁移（Oracle→Oracle）和异构迁移（SQL Server→Aurora）。使用 **CDC（Change Data Capture）** 持续复制。需要创建 **EC2 复制实例** 运行 DMS。异构迁移需要 **SCT（Schema Conversion Tool）** 转换数据库 Schema。同构迁移（如 PostgreSQL→RDS PostgreSQL）**不需要 SCT**。DMS 支持 Multi-AZ 部署保证高可用。

## 中文长总结

DMS 是 AWS 数据库迁移的核心服务。

**源和目标支持：**

| 源 | 目标 |
|----|------|
| On-premises（Oracle/MySQL/PostgreSQL/MongoDB 等） | RDS/Aurora/DynamoDB |
| Azure SQL Database | Redshift/S3 |
| Amazon RDS/Aurora | OpenSearch/Kinesis/Kafka |
| Amazon S3/DocumentDB | DocumentDB/Neptune/Redis |

**SCT（Schema Conversion Tool）：**
- **异构迁移需要 SCT**：Oracle → PostgreSQL ✅ 需要
- **同构迁移不需要 SCT**：PostgreSQL → RDS PostgreSQL ❌ 不需要
- OLTP：SQL Server/Oracle → MySQL/PostgreSQL/Aurora
- OLAP：Teradata/Oracle → Redshift

**持续复制架构：**
```
源 Oracle DB → [SCT（Schema 转换）] → RDS MySQL
              → [DMS EC2（Full Load + CDC）] → ↑
```

**Multi-AZ DMS：**
- 主复制实例 + 备 AZ 同步副本
- 提供数据冗余、消除 IO 冻结、降低延迟抖动

## 考试要点

- 同构迁移不需要 SCT，异构迁移需要
- DMS 使用 EC2 实例执行复制
- CDC 支持持续数据复制
- 源数据库在迁移过程中保持可用
- Multi-AZ DMS 提高可靠性

## English Short Summary

AWS DMS: secure database migration to AWS with source remaining available. Supports **homogeneous** (Oracle→Oracle) and **heterogeneous** (SQL Server→Aurora) migrations. Uses **CDC** for continuous replication. Requires EC2 replication instance. **SCT (Schema Conversion Tool)** needed only for heterogeneous migrations (different engines). Same-engine migration (PostgreSQL→RDS PostgreSQL) does **not need SCT**. Multi-AZ DMS deployment for HA.

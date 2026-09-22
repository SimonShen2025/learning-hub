---
title: "Intro to Azure Database for PostgreSQL"
lectureId: 68
section: 8
sectionTitle: "Develop AI Solutions with Azure Database for PostgreSQL"
date: "2026-09-22"
tags: ["postgresql", "azure-database", "relational-database"]
---

## 中文短总结

Azure Database for PostgreSQL 是 Azure 托管的开源 PostgreSQL 关系型数据库服务（PaaS），Azure 负责硬件采购、升级、高可用、灾备、备份、安全补丁等运维工作，开发者只需关注业务逻辑。资源层级为服务器 → 数据库 → schema → 表；查询语言为 PG SQL（与 T-SQL 类似但有细节差异）。部署时可选 Burstable（低成本，适合开发测试）、General Purpose（均衡，适合 Web 应用/API）、Memory Optimized（高内存，适合数仓/分析/AI 场景）三种计算规格。

## 中文长总结

### 定位

- Azure 关系型数据库产品线中，Azure SQL Database 是专有方案，而 Azure Database for PostgreSQL 是托管版的开源 PostgreSQL
- 作为 PaaS 服务，Azure 负责底层硬件采购与管理、高可用实现、灾难恢复、数据备份、安全补丁和升级，开发者只需专注业务逻辑（建表、存数据）
- 内置地理冗余（geo-redundancy）、地理复制（geo-replication），并支持"时间点还原"（point-in-time restore），可一键将数据恢复到副本故障前的状态

### 查询语言

- PostgreSQL 使用的查询语言是 PG SQL，与标准 T-SQL 思路相似，但存在一些细节差异

### 资源层级

- **服务器（Server）**：Azure 中创建的顶层资源
- **数据库（Database）**：服务器下可创建多个数据库
- **Schema**：用于逻辑上区分不同类型的表和数据，例如 sales schema 存放销售相关表，production schema 存放生产相关表；访问表时需带 schema 前缀，如 `sales.order`、`production.product`

### 部署规格选项

| 规格系列 | 适用场景 | 成本 |
|---|---|---|
| Burstable（B 系列） | 间歇性负载，开发/测试/小型应用 | 最低 |
| General Purpose（D 系列） | Web 应用、API、后端服务，需要高可用和一致性能，事务（读写）较多 | 中等 |
| Memory Optimized（E 系列） | 数据仓库、缓存、分析、AI 工作负载，涉及多表连接等内存密集型操作 | 最高 |

## English Short Summary

Azure Database for PostgreSQL is Azure's fully managed PaaS offering of open-source PostgreSQL, handling hardware, high availability, disaster recovery, backups, and patching so developers only focus on business logic. Resources follow a Server → Database → Schema → Table hierarchy, queried with PG SQL. Deployment options range from cost-optimized Burstable (dev/test) to balanced General Purpose (web apps/APIs) to Memory Optimized (data warehousing/analytics/AI).

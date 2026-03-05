---
title: "Redshift"
lectureId: 245
section: "s22"
sectionTitle: "Data & Analytics"
date: "2026-03-05"
tags: [redshift, data-warehouse, olap, analytics, spectrum]
---

## 中文短总结

Amazon Redshift 是基于 PostgreSQL 的 OLAP 数据仓库（非 OLTP），列式存储 + 并行查询引擎，比其他数据仓库快 10 倍，支持 PB 级数据。架构：Leader Node（查询规划+结果聚合）+ Compute Nodes（执行查询）。两种模式：Provisioned（选实例类型，可用 Reserved 省钱）和 Serverless。数据加载三种方式：Kinesis Data Firehose（先写 S3 再 COPY）、S3 COPY 命令（可走 VPC 或公网）、JDBC 驱动批量写入。快照支持跨区域自动复制实现 DR。Redshift Spectrum 可直接查询 S3 数据无需加载，利用数千 Spectrum 节点处理。

## 中文长总结

Amazon Redshift 是一项基于 PostgreSQL 的云数据仓库服务，专为 OLAP（在线分析处理）场景设计，不适用于 OLTP（事务处理）。

**核心特性：**
- 列式存储（Columnar），擅长聚合分析
- 并行查询引擎（MPP），性能比其他数据仓库好 10 倍
- 可扩展至 PB 级数据
- 支持标准 SQL 查询
- 与 QuickSight 和 Tableau 等 BI 工具直接集成

**集群架构：**
- **Leader Node**：查询规划和结果聚合
- **Compute Nodes**：执行查询并返回结果给 Leader Node
- **Provisioned 模式**：选择实例类型，可使用 Reserved Instances 节省成本
- **Serverless 模式**：AWS 全托管，无需管理集群

**快照与灾难恢复：**
- 大多数集群为单 AZ，部分支持 Multi-AZ
- 快照：增量备份，存储在 S3 内部
- 自动快照：每 8 小时或每 5GB 数据变更
- 手动快照：保留到手动删除
- **跨区域快照自动复制**：关键 DR 策略

**数据摄入方式：**
1. **Kinesis Data Firehose**：先写入 S3，再自动执行 S3 COPY 命令加载到 Redshift
2. **S3 COPY 命令**：手动从 S3 加载，可选增强 VPC 路由保持流量私有
3. **JDBC 驱动**：应用程序直接写入，应使用批量写入而非逐行插入

**Redshift Spectrum：**
- 在已有 Redshift 集群上发起查询
- 数千 Spectrum 节点直接读取 S3 数据并聚合
- 无需将数据预先加载到 Redshift
- 提供远超集群自身的处理能力

**Athena vs Redshift：** Athena 完全无服务器+数据在 S3，适合临时查询；Redshift 有索引、更快的 join 和聚合，适合持续性分析工作负载。

## 考试要点

- Redshift = OLAP 数据仓库，不是 OLTP
- 列式存储 → 适合分析查询
- Leader Node + Compute Nodes 架构
- Provisioned vs Serverless 两种模式
- 数据加载：Firehose→S3→COPY / S3 COPY / JDBC 批量
- 增强 VPC 路由：让 S3→Redshift 流量走 VPC 私网
- 快照支持跨区域自动复制 → DR 策略
- Redshift Spectrum：不加载数据，直接在 S3 上查询，利用数千外部节点
- Athena vs Redshift：无服务器临时查询 vs 预置集群持续分析

## English Short Summary

Amazon Redshift is a PostgreSQL-based OLAP data warehouse (not OLTP) with columnar storage, MPP engine, 10x faster than alternatives, scaling to PBs. Architecture: Leader Node (query planning/aggregation) + Compute Nodes (execution). Two modes: Provisioned (with Reserved Instance savings) and Serverless. Data ingestion: Kinesis Firehose (→S3→COPY), S3 COPY command (with optional Enhanced VPC Routing for private traffic), or JDBC batch inserts. Snapshots support cross-region automatic copy for DR. Redshift Spectrum queries S3 data directly using thousands of external nodes without loading data into the cluster.

---
title: "Athena"
lectureId: 243
section: "s22"
sectionTitle: "Data & Analytics"
date: "2026-03-05"
tags: [athena, s3, sql, serverless, parquet, federated-query, analytics]
---

## 中文短总结

Amazon Athena 是无服务器 SQL 查询服务，直接分析 S3 中的数据（CSV/JSON/ORC/Avro/Parquet），按扫描数据量（每 TB）计费。性能优化四要点：①使用列式格式（Parquet/ORC，用 Glue 转换）②压缩数据③按列分区（S3 路径 /year=XX/month=XX/）④使用大文件（≥128MB）。Federated Query 通过 Lambda Data Source Connector 查询任意数据源（RDS/DynamoDB/ElastiCache 等），结果可存回 S3。常与 QuickSight 搭配做报表。

## 中文长总结

Amazon Athena 是一项完全无服务器的交互式查询服务，基于 Presto 引擎，使用标准 SQL 语言直接对存储在 Amazon S3 中的数据进行查询和分析，无需移动数据或预置任何数据库。

**核心特性：**
- 支持多种数据格式：CSV、JSON、ORC、Avro、Parquet
- 计费简单：按每 TB 扫描数据量收费
- 常与 Amazon QuickSight 配合创建报表和仪表板

**性能优化（考试重点）：**
1. **使用列式格式**：推荐 Apache Parquet 和 ORC，仅扫描所需列，大幅节省成本和提升性能。使用 AWS Glue ETL 将 CSV 转换为 Parquet
2. **压缩数据**：减少扫描数据量
3. **数据分区**：在 S3 中按列值组织路径（如 `/year=1991/month=1/day=1/`），查询时只扫描特定分区文件夹
4. **使用大文件**：≥128MB，减少开销，提高扫描效率

**Federated Query（联合查询）：**
- 通过 Lambda 函数（Data Source Connector）查询任意数据源
- 支持：CloudWatch Logs、DynamoDB、RDS、ElastiCache、DocumentDB、Aurora、SQL Server、MySQL、EMR HBase、本地数据库等
- 查询结果可存储到 S3 供后续分析

**典型用例：** 临时查询（ad-hoc）、BI 分析、报表、AWS 服务日志分析（VPC Flow Logs、ELB Logs、CloudTrail 等）

## 考试要点

- **考试提示**：需要在 S3 上使用无服务器 SQL 引擎分析数据 → 选 Athena
- Athena 按扫描数据量计费 → 使用列式格式（Parquet/ORC）减少扫描量
- 用 Glue 做 ETL 将 CSV 转换为 Parquet
- 分区策略：S3 路径按列值组织，缩小扫描范围
- 大文件（≥128MB）比大量小文件性能更好
- Federated Query 通过 Lambda Connector 支持任意数据源
- Athena + QuickSight = 报表/仪表板组合

## English Short Summary

Amazon Athena is a serverless SQL query service analyzing data directly in S3 (CSV/JSON/ORC/Avro/Parquet), priced per TB scanned. Performance optimizations: use columnar formats (Parquet/ORC via Glue ETL), compress data, partition datasets in S3 paths (/year=XX/month=XX/), and use large files (≥128MB). Federated Query uses Lambda Data Source Connectors to query any source (RDS, DynamoDB, ElastiCache, on-premises, etc.) with results stored back in S3. Commonly paired with QuickSight for dashboards.

---
title: "Lake Formation"
lectureId: 250
section: "s22"
sectionTitle: "Data & Analytics"
date: "2026-03-05"
tags: [lake-formation, data-lake, s3, glue, security, access-control]
---

## 中文短总结

AWS Lake Formation 是完全托管的数据湖服务，将分散数据集中到 S3 数据湖中（通常数天即可建立，而非数月）。底层基于 Glue（Source Crawler + ETL + Data Catalog），但无需直接操作 Glue。核心考试价值：**集中权限管理**——在 Lake Formation 中统一设置行级和列级安全（Fine-grained Access Control），所有连接 Lake Formation 的服务（Athena/Redshift/EMR/Spark）自动继承权限，无需在每个服务中分别配置安全策略。数据源：S3/RDS/Aurora/本地 SQL 和 NoSQL 数据库，通过 Blueprints 快速迁移。

## 中文长总结

AWS Lake Formation 是一项完全托管的数据湖服务，帮助在数天内（而非数月）建立数据湖。

**什么是数据湖？**
- 将所有数据集中到一个地方以进行分析
- 可以合并结构化和非结构化数据源

**核心功能：**
- 数据发现、清洗、转换和摄入
- 自动化复杂的手动步骤：收集、清洗、移动、编目、去重
- 使用 ML 转换进行去重
- 底层基于 AWS Glue（Crawler + ETL + Data Catalog）

**数据源与 Blueprints：**
- 支持：S3、RDS、Aurora、本地关系型数据库、NoSQL 数据库
- Blueprints：开箱即用的迁移模板，快速将数据迁入数据湖

**集中权限管理（考试核心重点）：**
- **问题**：在 Athena、QuickSight、S3 Bucket Policies、RDS、Aurora 等不同位置分别管理安全 → 混乱且难维护
- **解决方案**：Lake Formation 提供**行级和列级的细粒度访问控制**
- 所有连接 Lake Formation 的服务（Athena、QuickSight、Redshift、EMR、Spark 等）自动继承安全设置
- **一处管理，处处生效**

**架构：**
- 数据源 → Lake Formation（Blueprints 摄入）→ S3 数据湖
- Lake Formation 内部：Source Crawlers + ETL + Data Catalog + 安全/访问控制
- 消费端：Athena、Redshift、EMR、Spark 等分析工具

## 考试要点

- Lake Formation = 数据湖 + 集中权限管理
- **核心卖点**：行级和列级的细粒度访问控制（Fine-grained Access Control）
- 一处设置安全策略 → Athena/Redshift/EMR/QuickSight 等所有服务自动继承
- 底层基于 Glue 但无需直接操作
- Blueprints 帮助快速从各种数据源迁移数据
- 数天即可建立数据湖（非数月）

## English Short Summary

AWS Lake Formation is a fully managed data lake service centralizing data into S3 (set up in days, not months), built on Glue (crawlers + ETL + catalog) without direct Glue interaction. Core exam value: **centralized permissions** with row-level and column-level fine-grained access control. All services connecting to Lake Formation (Athena/Redshift/EMR/QuickSight/Spark) automatically inherit security settings — manage security in one place instead of configuring each service separately. Data sources: S3/RDS/Aurora/on-premises SQL and NoSQL via Blueprints for quick migration.

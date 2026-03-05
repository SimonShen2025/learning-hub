---
title: "QuickSight"
lectureId: 248
section: "s22"
sectionTitle: "Data & Analytics"
date: "2026-03-05"
tags: [quicksight, bi, dashboard, spice, analytics, visualization]
---

## 中文短总结

Amazon QuickSight 是无服务器 ML 驱动的 BI 服务，创建交互式仪表板，按会话计费。SPICE 引擎：内存计算引擎，仅在数据直接导入 QuickSight 时可用。数据源：AWS（RDS/Aurora/Redshift/Athena/S3/OpenSearch/Timestream）、SaaS（Salesforce/Jira）、第三方 JDBC 数据库、文件导入（Excel/CSV/JSON/TSV）。Enterprise 版支持列级安全（CLS）。用户/组仅存在于 QuickSight 内部（非 IAM 用户）。仪表板是分析的只读快照，可共享给特定用户/组。

## 中文长总结

Amazon QuickSight 是一项无服务器的 ML 驱动商业智能（BI）服务，用于创建交互式仪表板和可视化报表。

**核心特性：**
- 快速、自动可扩展、可嵌入网站
- 按会话付费（per-session pricing）
- 用例：商业分析、可视化、临时分析、数据洞察

**SPICE 引擎（考试重点）：**
- 内存计算引擎（In-Memory Computation）
- **仅在数据直接导入 QuickSight 时可用**
- 如果 QuickSight 连接外部数据库则不使用 SPICE

**数据源集成：**
- **AWS 服务**：RDS、Aurora、Redshift、Athena、S3、OpenSearch、Timestream
- **SaaS**：Salesforce、Jira 等
- **第三方数据库**：Teradata、本地 JDBC 数据库
- **文件导入**：Excel、CSV、JSON、TSV、ELF/CLF（日志格式）→ 导入后可使用 SPICE

**常见考试组合：** QuickSight + Athena、QuickSight + Redshift

**用户管理：**
- QuickSight 用户和组**独立于 IAM**（IAM 仅用于管理）
- Standard 版：支持用户
- Enterprise 版：支持用户 + 组 + **列级安全（CLS）**

**仪表板与分析：**
- 分析（Analysis）：完整的可编辑报表
- 仪表板（Dashboard）：分析的**只读快照**，保留筛选器/参数/排序等配置
- 可共享给特定用户或组
- 有仪表板访问权限的用户也能看到底层数据

## 考试要点

- QuickSight = 无服务器 BI 仪表板服务
- SPICE 引擎仅在数据直接导入 QuickSight 时可用
- 常见搭配：QuickSight + Athena、QuickSight + Redshift
- Enterprise 版支持列级安全（CLS）
- 用户/组独立于 IAM
- Dashboard = Analysis 的只读快照

## English Short Summary

Amazon QuickSight is a serverless ML-powered BI service for interactive dashboards with per-session pricing. SPICE engine provides in-memory computation only when data is directly imported into QuickSight. Integrates with AWS services (RDS/Aurora/Redshift/Athena/S3/OpenSearch/Timestream), SaaS (Salesforce/Jira), third-party JDBC databases, and file imports (Excel/CSV/JSON). Enterprise edition supports Column-Level Security (CLS). Users/groups are QuickSight-internal (not IAM). Dashboards are read-only snapshots of analyses shared with specific users/groups.

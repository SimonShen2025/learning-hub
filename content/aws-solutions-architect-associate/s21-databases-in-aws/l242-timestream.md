---
title: "Timestream"
lectureId: 242
section: "21"
sectionTitle: "Databases in AWS"
date: "2026-03-05"
tags: ["timestream", "time-series", "iot", "analytics", "serverless"]
---

## 中文短总结

Amazon Timestream 是完全托管的无服务器**时间序列数据库**，自动扩缩容。比关系型数据库处理时间序列数据**更快更便宜**。存储和分析每天数万亿事件，完全 SQL 兼容。近期数据保存在内存中，历史数据在成本优化存储层。数据来源：AWS IoT、Kinesis、Prometheus、Telegraf、MSK。可视化和分析：QuickSight、SageMaker、Grafana、JDBC 应用。用例：IoT、运维、实时分析。

## 中文长总结

### Timestream 核心

| 特性 | 说明 |
|------|------|
| 类型 | **时间序列数据库** |
| 管理 | 完全托管、**无服务器** |
| 扩展 | 自动扩缩容 |
| 性能 | 比关系数据库**更快更便宜**处理时间序列 |
| 容量 | 每天**数万亿事件** |
| 查询 | **完全 SQL 兼容** |
| 加密 | 静态 + 传输加密 |

### 存储分层

| 层级 | 说明 |
|------|------|
| **内存** | 近期数据（高速访问） |
| **成本优化存储** | 历史数据（低成本） |

### 数据分析功能
- 调度查询 (Scheduled Queries)
- 多指标记录 (Multi-measure Records)
- **时间序列分析函数** — 近实时模式发现

### 集成架构

**数据输入**：
- AWS IoT → Timestream
- Kinesis Data Streams → Lambda → Timestream
- Prometheus / Telegraf → Timestream
- Kinesis Data Streams → Kinesis Data Analytics (Flink) → Timestream
- Amazon MSK → Flink → Timestream

**数据输出**：
- **Amazon QuickSight** — 仪表板
- **Amazon SageMaker** — 机器学习
- **Grafana** — 可视化
- **JDBC 兼容应用** — 任何支持 JDBC+SQL 的应用

## 考试要点

- **时间序列数据** → **Timestream**（考试必记）
- 无服务器、自动扩展、完全 SQL 兼容
- 比关系数据库处理时间序列**更快更便宜**
- 近期数据在**内存**，历史数据在**成本优化存储**
- 用例：**IoT、运维应用、实时分析**
- 可接入：IoT、Kinesis、Prometheus、Telegraf、MSK
- 可输出：QuickSight、SageMaker、Grafana、JDBC

## English Short Summary

Amazon Timestream is a fully managed serverless time-series database that auto-scales. Faster and cheaper than relational databases for time-series data. Stores and analyzes trillions of events per day with full SQL compatibility. Recent data in memory, historical data in cost-optimized storage tier. Data sources: AWS IoT, Kinesis, Prometheus, Telegraf, MSK. Visualization: QuickSight, SageMaker, Grafana, JDBC applications. Use cases: IoT, operational applications, real-time analytics. Exam: **time-series** → **Timestream**.

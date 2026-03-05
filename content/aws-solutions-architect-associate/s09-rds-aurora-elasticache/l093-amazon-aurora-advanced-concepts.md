---
title: "Amazon Aurora - Advanced Concepts"
lectureId: 93
section: 9
sectionTitle: "AWS Fundamentals: RDS + Aurora + ElastiCache"
date: "2026-03-05"
tags: ["Aurora", "Custom Endpoints", "Serverless", "Global Aurora", "Babelfish", "Machine Learning"]
---

## 中文短总结

本讲涵盖了 Aurora 的高级特性：Replica Auto Scaling（当 CPU 使用率过高时自动扩展 Read Replicas）、Custom Endpoints（将特定实例分组用于不同工作负载如分析查询）、Aurora Serverless（按秒计费的自动扩缩容，适合不可预测工作负载）、Global Aurora（1 个主 Region + 最多 10 个只读 Secondary Region，跨 Region 复制延迟 < 1 秒，RTO < 1 分钟）、Aurora Machine Learning（通过 SQL 接口集成 SageMaker 和 Comprehend），以及 Babelfish for Aurora PostgreSQL（使迁移自 SQL Server 的应用无需修改代码即可使用 T-SQL 与 Aurora PostgreSQL 通信）。

## 中文长总结

### Replica Auto Scaling
- 当 Read Replicas 的 CPU 使用率过高时，自动添加更多 Aurora Replicas
- 新 Replica 自动加入 Reader Endpoint 的负载均衡
- 有效分散读取负载，降低整体 CPU 使用率

### Custom Endpoints
- 将不同类型/大小的 Aurora 实例分组为自定义端点
- **使用场景**：将更大的实例组成 Custom Endpoint，专门运行分析查询
- 定义 Custom Endpoint 后，通常 **不再使用 Reader Endpoint**
- 实践中可设置多个 Custom Endpoints 用于不同工作负载

### Aurora Serverless
- 自动化数据库实例创建和按需扩缩容
- 适合**不频繁、间歇性或不可预测**的工作负载
- 无需提前规划容量
- **按秒计费**，可能更具成本效益
- 架构：客户端 → Proxy Fleet（Aurora 管理）→ 后端 Aurora 实例（按需创建）

### Global Aurora
- **跨 Region Read Replica**：简单的灾备方案
- **Aurora Global Database**（推荐方案）：
  - 1 个 Primary Region（读写）
  - 最多 **10 个 Secondary Region**（只读）
  - 每个 Secondary Region 最多 16 个 Read Replicas
  - **跨 Region 复制延迟 < 1 秒**（考试关键信号）
  - **RTO < 1 分钟**（灾备恢复时间）

### Aurora Machine Learning
- 通过 **SQL 接口**集成 AWS ML 服务
- 支持的服务：
  - **SageMaker**：使用各种 ML 模型
  - **Amazon Comprehend**：情感分析
- 用例：欺诈检测、广告定向、情感分析、产品推荐
- 架构：应用 → SQL 查询 → Aurora → ML 服务 → 预测结果 → Aurora → 应用

### Babelfish for Aurora PostgreSQL
- 让 Aurora PostgreSQL 理解 Microsoft SQL Server 的 **T-SQL** 命令
- 使迁移自 SQL Server 的应用**几乎无需代码更改**
- 应用继续使用 SQL Server Client Driver 和 T-SQL
- 迁移数据使用 AWS SCT + DMS
- Babelfish 负责 T-SQL → PostgreSQL 语言翻译

## 考试要点

- Global Aurora：**跨 Region 复制延迟 < 1 秒** → 看到此描述即选 Global Aurora
- Global Aurora：灾备 **RTO < 1 分钟**
- 最多 10 个 Secondary Region，每个最多 16 个 Read Replicas
- Custom Endpoint 用于将不同规格实例分组用于不同工作负载
- Aurora Serverless 适合不可预测工作负载，按秒计费
- Aurora ML 集成 SageMaker 和 Comprehend
- Babelfish 让 SQL Server 应用无需重写即可使用 Aurora PostgreSQL

## English Short Summary

This lecture covers Aurora advanced features: Replica Auto Scaling (automatically adds replicas when CPU is high), Custom Endpoints (group specific instances for different workloads like analytics), Aurora Serverless (pay-per-second auto-scaling for unpredictable workloads), Global Aurora (1 primary + up to 10 secondary read-only regions with <1 second cross-region replication lag and <1 minute RTO), Aurora Machine Learning (SQL interface integration with SageMaker and Comprehend), and Babelfish for Aurora PostgreSQL (enables SQL Server applications to communicate using T-SQL without code changes).

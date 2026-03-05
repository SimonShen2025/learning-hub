---
title: "CloudWatch Logs"
lectureId: 269
section: "s24"
sectionTitle: "AWS Monitoring & Audit: CloudWatch, CloudTrail & Config"
date: "2026-03-05"
tags: [cloudwatch, logs, log-groups, log-streams, insights, subscription-filter, cross-account]
---

## 中文短总结

CloudWatch Logs 是 AWS 日志存储中心。结构：Log Group（应用级）→ Log Stream（实例级）。保留期：1 天～10 年或永不过期。日志来源：SDK/Agent、Beanstalk、ECS、Lambda、VPC Flow Logs、API Gateway、CloudTrail、Route53。**Logs Insights**：内置查询引擎（非实时），支持跨账号跨日志组查询。导出到 S3：批量（CreateExportTask，最多 12 小时），非实时。**Subscription Filter**：实时流式传输到 Kinesis Data Streams/Firehose/Lambda/OpenSearch。跨账号日志聚合：通过 Subscription Destination + 目标访问策略 + IAM Role 实现。

## 中文长总结

CloudWatch Logs 是 AWS 的中央日志存储和分析服务。

**日志结构：**
- **Log Group**：通常代表一个应用
- **Log Stream**：应用内的具体实例/容器/日志文件
- **保留策略**：永不过期，或 1 天到 10 年

**日志来源：**
- SDK / CloudWatch Logs Agent / CloudWatch Unified Agent
- Elastic Beanstalk、ECS、Lambda
- VPC Flow Logs、API Gateway、CloudTrail、Route53
- 所有日志默认加密，可自定义 KMS 密钥

**CloudWatch Logs Insights（查询引擎）：**
- 内置查询语言，支持可视化
- 可保存查询、添加到 Dashboard
- 支持跨多个日志组、跨账号查询
- **注意：查询历史数据，非实时引擎**

**日志导出方式：**

| 方式 | 延迟 | API/机制 |
|------|------|---------|
| **S3 批量导出** | 最多 12 小时 | CreateExportTask |
| **Subscription Filter** | 实时/近实时 | 流式传输 |

**Subscription Filter 目标：**
- Kinesis Data Streams → Firehose / Analytics / EC2 / Lambda
- Kinesis Data Firehose → S3（近实时） / OpenSearch
- Lambda → OpenSearch（实时）/ 自定义处理

**跨账号日志聚合：**
- 多账号/多区域的 CloudWatch Logs → Subscription Filter → 共同目标（如 Kinesis Data Stream）
- 需要：Subscription Destination + 目标访问策略（Destination Access Policy）+ IAM Role（跨账号假设）

## 考试要点

- Log Group → Log Stream 层级结构
- Logs Insights = 查询引擎（非实时），支持跨账号
- S3 导出 = 批量，最多 12 小时（CreateExportTask）
- Subscription Filter = 实时流式传输（Kinesis/Lambda/OpenSearch）
- 跨账号聚合需要 Destination + Access Policy + IAM Role
- 默认加密，可用 KMS 自定义

## English Short Summary

CloudWatch Logs is AWS's central log storage. Structure: Log Group (application)→Log Stream (instance). Retention: 1 day to 10 years or indefinite. Sources: SDK/Agent, Beanstalk, ECS, Lambda, VPC Flow Logs, API Gateway, CloudTrail, Route53. **Logs Insights**: built-in query engine (historical, not real-time), supports cross-account queries. S3 export: batch via CreateExportTask (up to 12 hours). **Subscription Filter**: real-time streaming to Kinesis Data Streams/Firehose/Lambda/OpenSearch. Cross-account log aggregation via Subscription Destination + access policy + IAM Role.

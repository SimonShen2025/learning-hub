---
title: "CloudWatch Metrics"
lectureId: 268
section: "s24"
sectionTitle: "AWS Monitoring & Audit: CloudWatch, CloudTrail & Config"
date: "2026-03-05"
tags: [cloudwatch, metrics, monitoring, custom-metrics, kinesis-firehose]
---

## 中文短总结

CloudWatch Metrics 为每个 AWS 服务提供监控指标（如 EC2 CPUUtilization、S3 BucketSize）。指标属于命名空间（Namespace），有维度（Dimensions，最多 30 个/指标）和时间戳。可创建 Custom Metrics（如 EC2 内存使用）。Metric Stream：近实时将 CloudWatch 指标流式传输到 Kinesis Data Firehose → S3/Redshift/OpenSearch，或直接发送到第三方（Datadog/Dynatrace/New Relic/Splunk 等），可按命名空间过滤。EC2 默认 5 分钟间隔，启用详细监控后 1 分钟。

## 中文长总结

CloudWatch Metrics 是 AWS 的指标监控服务，为所有 AWS 服务提供性能数据。

**核心概念：**
- **指标（Metric）**：要监控的变量（如 CPUUtilization、NetworkIn）
- **命名空间（Namespace）**：按服务分组，每个服务一个命名空间
- **维度（Dimensions）**：指标属性（如 instance_id、environment），最多 30 个/指标
- **时间戳**：所有指标基于时间

**数据采集间隔：**
- EC2 默认：每 5 分钟
- 启用详细监控（Detailed Monitoring）：每 1 分钟

**自定义指标（Custom Metrics）：**
- 用例：EC2 内存使用率（默认不采集）
- 通过 SDK/CLI 推送自定义指标到 CloudWatch

**Metric Stream（指标流）：**
- 近实时、低延迟地将 CloudWatch 指标持续传输到外部
- 目标一：Kinesis Data Firehose → S3 / Redshift / OpenSearch
- 目标二：直接传输到第三方服务（Datadog/Dynatrace/New Relic/Splunk/Sumo Logic）
- 支持按命名空间过滤，只传输部分指标

**可视化：** 创建 CloudWatch Dashboard 统一查看所有指标

## 考试要点

- 每个 AWS 服务有自己的 CloudWatch 指标
- Custom Metrics 用于推送自定义数据（如内存）
- EC2 默认 5 分钟，详细监控 1 分钟
- Metric Stream = 近实时输出到 Firehose 或第三方
- 维度最多 30 个/指标

## English Short Summary

CloudWatch Metrics provides monitoring metrics for every AWS service (e.g., EC2 CPUUtilization, S3 BucketSize). Metrics belong to namespaces with dimensions (up to 30 per metric) and timestamps. Custom Metrics can push custom data like EC2 memory usage. Metric Stream enables near real-time continuous export to Kinesis Data Firehose (→S3/Redshift/OpenSearch) or directly to third-party providers (Datadog/Dynatrace/Splunk, etc.), filterable by namespace. EC2 default interval: 5 min, with detailed monitoring: 1 min.

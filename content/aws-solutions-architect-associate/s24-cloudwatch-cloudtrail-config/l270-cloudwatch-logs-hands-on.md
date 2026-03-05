---
title: "CloudWatch Logs - Hands On"
lectureId: 270
section: "s24"
sectionTitle: "AWS Monitoring & Audit: CloudWatch, CloudTrail & Config"
date: "2026-03-05"
tags: [cloudwatch, logs, hands-on, metric-filter, subscription-filter]
---

## 中文短总结

实操演示 CloudWatch Logs 功能：查看 Log Groups（Lambda/DataSync/Glue/SSM 等创建）和 Log Streams。日志搜索关键词过滤。Metric Filter：定义过滤模式（如"installing"）→ 创建自定义指标 → 可创建告警。Subscription Filter：将日志流式传输到 OpenSearch/Kinesis Data Streams/Firehose/Lambda。保留设置：永不过期到 120 个月。S3 导出：选择时间范围和桶。Logs Insights：使用查询语言分析日志，可保存查询，提供预建查询模板（Lambda 延迟统计、VPC 流量 Top 10 等）。

## English Short Summary

Hands-on demo of CloudWatch Logs features: viewing Log Groups/Streams, keyword filtering, creating Metric Filters (define filter pattern→custom metric→alarm). Subscription Filters for streaming to OpenSearch/Kinesis/Firehose/Lambda. Retention settings (indefinite to 120 months). S3 batch export with time range selection. Logs Insights query language for log analysis with saveable queries and pre-built templates (Lambda latency stats, VPC flow top 10, etc.).

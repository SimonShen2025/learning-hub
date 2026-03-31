---
title: "S3 Storage Lens"
lectureId: 149
section: 13
sectionTitle: "Advanced Amazon S3"
date: "2026-03-05"
tags: ["S3", "Storage Lens", "Analytics", "Dashboard"]
---

## 中文短总结

本讲介绍 S3 Storage Lens——跨整个 AWS Organization 分析和优化 S3 存储的服务。提供 **30 天**使用和活动指标，可按 Organization、Account、Region、Bucket 或 Prefix 聚合。包含默认 Dashboard（跨多 Region/Account，不可删除但可禁用）。指标分 **Free**（28 个用量指标，14 天查询）和 **Advanced/Paid**（活动、成本优化、数据保护、状态码指标，可发布到 CloudWatch，Prefix 级别，15 个月数据）。指标类别包括：Summary、Cost Optimization（非当前版本/不完整上传占用空间）、Data Protection（版本控制/加密启用情况）、Access Management、Event、Performance、Activity、HTTP Status Code。报告可导出为 CSV 或 Parquet 格式。

## 中文长总结

### S3 Storage Lens 概述
- 跨 **AWS Organization** 分析和优化 S3 存储
- 发现异常、识别成本效率、应用保护最佳实践
- **30 天**使用和活动指标
- 可按 Organization / Account / Region / Bucket / Prefix 聚合
- 报告导出：**CSV** 或 **Parquet** 格式

### Dashboard
- **默认 Dashboard**：预配置，跨多 Region 和 Account
- 不可删除但可禁用
- 可创建自定义 Dashboard

### Free vs Advanced 指标

| 特性 | Free | Advanced（付费） |
|------|------|-----------------|
| 指标数量 | ~28 个 | 更多（活动、成本优化等） |
| 数据保留 | **14 天** | **15 个月** |
| CloudWatch | ❌ | ✅ 可发布 |
| Prefix 级别 | ❌ | ✅ |

### 指标类别
| 类别 | 说明 |
|------|------|
| **Summary** | 存储大小、对象数量 |
| **Cost Optimization** | 非当前版本空间、不完整上传空间 |
| **Data Protection** | 版本控制/加密/MFA Delete 启用情况 |
| **Access Management** | Bucket 所有权设置 |
| **Event** | 事件通知配置情况 |
| **Performance** | Transfer Acceleration 启用情况 |
| **Activity** | 请求数、下载量 |
| **HTTP Status Code** | 200 OK、403 Forbidden 等 |

## 考试要点

- Storage Lens 跨 **Organization** 分析 S3
- 默认 Dashboard 跨多 Region/Account
- Free = 28 指标 + 14 天，Advanced = 更多指标 + 15 个月
- 可识别未加密 Bucket、未启用版本控制的 Bucket
- 可发布到 CloudWatch（Advanced）

## English Short Summary

S3 Storage Lens analyzes and optimizes storage across an entire AWS Organization. It provides 30-day usage metrics aggregatable by organization, account, region, bucket, or prefix. Default dashboard spans multiple regions/accounts (can't delete, can disable). Free tier: ~28 metrics, 14-day retention. Advanced (paid): activity, cost optimization, data protection metrics, CloudWatch publishing, prefix-level collection, 15-month retention. Metrics cover summary, cost optimization, data protection, access management, events, performance, activity, and HTTP status codes. Reports exportable as CSV or Parquet.

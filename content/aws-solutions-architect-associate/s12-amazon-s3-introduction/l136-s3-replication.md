---
title: "S3 Replication"
lectureId: 136
section: 12
sectionTitle: "Amazon S3 Introduction"
date: "2026-03-05"
tags: ["S3", "Replication", "CRR", "SRR"]
---

## 中文短总结

本讲介绍 S3 复制功能——分为 **CRR**（Cross-Region Replication，跨区域复制）和 **SRR**（Same-Region Replication，同区域复制）。前提条件：源和目标 Bucket 都必须**启用版本控制**。复制是**异步**进行的。需要给 S3 服务配置正确的 **IAM 权限**。Bucket 可以在不同 AWS 账号中。CRR 用例：合规、跨区域低延迟访问、跨账号复制。SRR 用例：跨 Bucket 日志聚合、生产与测试环境之间的实时复制。

## 中文长总结

### 两种复制模式
| 类型 | 说明 | Region 要求 |
|------|------|------------|
| **CRR** | Cross-Region Replication | 不同 Region |
| **SRR** | Same-Region Replication | 相同 Region |

### 前提条件
- 源和目标 Bucket 都必须**启用版本控制**
- 复制是**异步**的（后台进行）
- 需要正确的 **IAM 权限**
- 支持**跨账号**复制

### 使用场景
- **CRR**：合规要求、低延迟跨区域访问、跨账号数据复制
- **SRR**：日志聚合、生产→测试环境实时复制

## 考试要点

- **源和目标都必须启用版本控制**
- 复制是**异步**的
- CRR = 跨 Region，SRR = 同 Region
- 需要 IAM 权限

## English Short Summary

S3 Replication comes in two types: CRR (Cross-Region Replication) for different regions and SRR (Same-Region Replication) for the same region. Both require versioning enabled on source and destination buckets. Replication is asynchronous and requires proper IAM permissions. Buckets can be in different AWS accounts. CRR use cases: compliance, low-latency cross-region access. SRR use cases: log aggregation, live replication between production and test environments.

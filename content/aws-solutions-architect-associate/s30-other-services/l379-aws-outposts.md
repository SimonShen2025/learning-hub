---
title: "AWS Outposts"
lectureId: 379
section: "s30"
sectionTitle: "Other Services"
date: "2026-03-05"
tags: [outposts, hybrid-cloud, on-premises, data-residency]
---

## 中文短总结

AWS Outposts：AWS 在本地数据中心安装的"迷你 AWS"——服务器机架运行完整 AWS 基础设施和服务。使用**同一套 AWS API/工具/控制台**管理，不同的是运行在你的数据中心。使用场景：①低延迟访问本地系统②本地数据处理（数据驻留要求）③从本地迁移到云的过渡方案。支持：EC2 / EBS / S3 / EKS / ECS / RDS / EMR 等。**关键**：客户负责 Outpost 机架的物理安全。AWS 负责远程管理和维护。

## 中文长总结

AWS Outposts 解决混合云与数据驻留需求。

**核心概念：**
| 方面 | 说明 |
|------|------|
| **本质** | AWS 服务器机架装在客户的数据中心 |
| **API** | 与 AWS 云端完全相同 |
| **物理安全** | **客户负责** |
| **远程管理** | AWS 负责 |

**支持的服务：**
EC2、EBS、S3、EKS、ECS、RDS、EMR

**使用场景：**
- 低延迟 — 应用需要毫秒级访问本地系统
- 数据驻留 — 数据必须留在本地
- 逐步迁移 — 混合云过渡方案

## 考试要点

- Outposts = 在本地运行 AWS 基础设施
- 同一 AWS API/工具
- 客户负责物理安全
- 数据驻留 + 低延迟用例

## English Short Summary

AWS Outposts: AWS server racks deployed in your on-premises data center running full AWS infrastructure and services. Same AWS APIs/tools/console — just runs locally. Use cases: **low latency** to on-premises systems, **data residency** requirements, hybrid cloud migration. Supports EC2/EBS/S3/EKS/ECS/RDS/EMR. **Key**: customer responsible for physical security; AWS handles remote management/maintenance.

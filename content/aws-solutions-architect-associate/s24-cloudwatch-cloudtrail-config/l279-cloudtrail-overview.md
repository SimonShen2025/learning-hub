---
title: "CloudTrail Overview"
lectureId: 279
section: "s24"
sectionTitle: "AWS Monitoring & Audit: CloudWatch, CloudTrail & Config"
date: "2026-03-05"
tags: [cloudtrail, audit, governance, compliance, management-events, data-events, insights]
---

## 中文短总结

AWS CloudTrail 记录 AWS 账户中所有 API 调用和用户活动（Console/SDK/CLI/服务），默认启用，保留 90 天。三种事件：①Management Events（默认记录）：资源操作如 IAM/安全组/子网变更，分 Read/Write②Data Events（默认不记录，高流量）：S3 对象级操作（GetObject/PutObject/DeleteObject）、Lambda Invoke③CloudTrail Insights Events（需启用付费）：检测异常活动（如不准确资源预置、突发 IAM 操作），基于正常管理活动基线自动检测。超过 90 天的事件→发送到 S3→用 Athena 分析。Trail 可应用到所有区域或单一区域。

## 中文长总结

AWS CloudTrail 是治理、合规和审计服务，记录 AWS 账户中的所有活动。

**核心特性：**
- **默认启用**
- 记录来自 Console、SDK、CLI 和 AWS 服务的所有 API 调用
- 可将日志发送到 CloudWatch Logs 或 S3
- Trail 可应用到所有区域或单一区域

**三种事件类型：**

| 类型 | 默认记录 | 说明 | 示例 |
|------|---------|------|------|
| **Management Events** | ✅ 是 | 资源操作 | IAM AttachRolePolicy、创建子网、设置日志 |
| **Data Events** | ❌ 否（高流量） | 数据操作 | S3 Get/Put/DeleteObject、Lambda Invoke |
| **Insights Events** | ❌ 否（需启用付费） | 异常活动检测 | 资源预置异常、IAM 突发操作 |

**Management Events 细分：**
- **Read Events**：不修改资源（列出用户、列出 EC2 实例）
- **Write Events**：可能修改资源（删除 DynamoDB 表），破坏性更强

**CloudTrail Insights（考试重点）：**
- 自动分析正常管理活动建立**基线**
- 持续检测异常模式（不准确预置、服务限制、突发 IAM 操作、周期性维护缺失）
- 检测到异常 → 生成 Insights Event → CloudTrail Console + S3 + EventBridge

**事件保留：**
- CloudTrail 默认保留 **90 天**
- 超过 90 天 → 日志发送到 **S3**
- 用 **Athena** 分析 S3 中的长期日志

**经典用例：** 谁终止了 EC2 实例？→ 查看 CloudTrail

## 考试要点

- CloudTrail = API 调用审计，默认启用，保留 90 天
- Management Events（默认开启） vs Data Events（默认关闭，高流量）
- Write Events 比 Read Events 更重要（可能造成破坏）
- CloudTrail Insights = 异常活动检测（基于基线）
- 超过 90 天 → S3 + Athena 分析
- 谁做了什么 → CloudTrail

## English Short Summary

AWS CloudTrail records all API calls and user activity (Console/SDK/CLI/services) in AWS accounts, enabled by default, retained for 90 days. Three event types: Management Events (default on, resource operations with Read/Write split), Data Events (default off, high volume — S3 object-level, Lambda Invoke), and CloudTrail Insights Events (paid, detects anomalies against established baselines). Events beyond 90 days go to S3 for analysis with Athena. Classic use case: who terminated the EC2 instance? → check CloudTrail.

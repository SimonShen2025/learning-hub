---
title: "IAM - Resource-based Policies vs IAM Roles"
lectureId: 289
section: "s25"
sectionTitle: "Identity and Access Management (IAM) - Advanced"
date: "2026-03-05"
tags: [iam, resource-based-policy, iam-roles, cross-account, eventbridge]
---

## 中文短总结

跨账号访问两种方式对比：①**IAM Role**——假设角色后**放弃原始权限**，只有角色权限②**Resource-Based Policy**——不需假设角色，**保留原始权限**+资源策略授予的权限。关键用例：需要同时访问 Account A 的 DynamoDB 和 Account B 的 S3 → 用 Resource-Based Policy（保留两边权限）。EventBridge 规则目标：支持资源策略的服务（Lambda/SNS/SQS/S3/API GW）→ 自动添加资源策略；不支持的（Kinesis/ASG/SSM/ECS）→ 使用 IAM Role。

## 中文长总结

跨账号访问资源有两种根本不同的方式。

**核心区别：**

| 方式 | 原始权限 | 适用场景 |
|------|---------|---------|
| **IAM Role（假设角色）** | **放弃**原始权限 | 只需目标账号权限 |
| **Resource-Based Policy** | **保留**原始权限 | 需要同时使用两个账号的资源 |

**关键用例：**
- Account A 用户需扫描 Account A 的 DynamoDB → 写入 Account B 的 S3
- 应使用 **Resource-Based Policy**（S3 Bucket Policy 授权 Account A 用户）
- 不能用 IAM Role（假设角色会丢失 Account A 的 DynamoDB 权限）

**支持 Resource-Based Policy 的服务：**
- S3 Buckets、SNS Topics、SQS Queues、Lambda Functions 等

**EventBridge 与两种方式的关系（考试重点）：**

| 目标服务 | EventBridge 使用方式 |
|---------|-------------------|
| Lambda、SNS、SQS、S3、API Gateway | **Resource-Based Policy**（自动添加） |
| Kinesis Stream、EC2 ASG、SSM Run Command、ECS Task | **IAM Role** |

注意：Kinesis Data Streams 虽然支持 Resource-Based Policy，但 EventBridge 仍使用 IAM Role。

## 考试要点

- 假设角色（AssumeRole）= 放弃原始权限
- Resource-Based Policy = 保留原始权限
- 跨账号同时访问两个账号资源 → Resource-Based Policy
- EventBridge 目标：Lambda/SNS/SQS/S3 用资源策略，Kinesis/ASG/ECS 用 IAM Role

## English Short Summary

Cross-account access comparison: **IAM Role** (AssumeRole) — user gives up original permissions, gets only role permissions; **Resource-Based Policy** — user retains original permissions plus gains resource access. Key use case: accessing DynamoDB in Account A AND S3 in Account B simultaneously → use Resource-Based Policy. EventBridge targets: Lambda/SNS/SQS/S3/API GW use resource-based policies (auto-added); Kinesis/ASG/SSM/ECS use IAM Roles.

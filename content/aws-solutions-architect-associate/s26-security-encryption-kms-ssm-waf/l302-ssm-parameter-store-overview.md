---
title: "SSM Parameter Store Overview"
lectureId: 302
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [ssm, parameter-store, secrets, kms, hierarchy, eventbridge]
---

## 中文短总结

SSM Parameter Store：安全存储配置和密钥，可选 KMS 加密。Serverless、可扩展、版本跟踪、IAM 控制、EventBridge 通知、CloudFormation 集成。**层级化存储**（如 /my-dept/my-app/dev/db-url），IAM 策略可按路径控制访问。可通过 `/aws/reference/secretsmanager/` 前缀直接访问 Secrets Manager。AWS 公共参数（如最新 AMI ID）。两种 Tier：Standard（免费，4KB，无 TTL）vs Advanced（$0.05/月，8KB，支持 Parameter Policy）。Parameter Policy：设置过期时间（TTL），EventBridge 通知即将过期参数和长期未变更参数。

## 中文长总结

SSM Parameter Store 是 AWS Systems Manager 的子服务，用于集中管理应用配置和密钥。

**核心特性：**
- Serverless、可扩展、持久化
- 可选 KMS 加密（明文配置 or 加密密钥）
- 版本跟踪
- IAM 权限控制
- EventBridge 通知
- CloudFormation 集成

**层级化存储（Hierarchy）：**
```
/my-department/
  /my-app/
    /dev/
      db-url
      db-password
    /prod/
      db-url
      db-password
  /other-app/
```
- IAM 策略可按路径授权（如只允许访问 /my-app/dev/）
- 可通过 `/aws/reference/secretsmanager/` 访问 Secrets Manager
- 公共参数：如 `/aws/service/ami-amazon-linux-latest/` 获取最新 AMI

**两种 Tier 对比：**

| 特性 | Standard | Advanced |
|------|----------|----------|
| 参数数量 | 10,000 | 100,000 |
| 最大大小 | 4KB | 8KB |
| Parameter Policy | ❌ | ✅ |
| 费用 | 免费 | $0.05/月 |
| 跨账号共享 | ❌ | ✅ |

**Parameter Policy（仅 Advanced）：**
- 设置参数过期日期（TTL）→ 强制更新/删除敏感数据
- Expiration Policy：到期删除参数
- No-Change Notification：参数 N 天未更新则通知
- 通过 EventBridge 接收通知

## 考试要点

- Parameter Store：层级化、版本跟踪、KMS 可选加密
- 按路径 IAM 控制（/dept/app/env/param）
- Standard（免费/4KB）vs Advanced（$0.05/月/8KB/TTL）
- Parameter Policy = TTL + EventBridge 通知
- 可访问 Secrets Manager 和 AWS 公共参数

## English Short Summary

SSM Parameter Store: secure storage for configurations and secrets with optional KMS encryption. Serverless, scalable, version-tracked, IAM-controlled, EventBridge notifications, CloudFormation integration. **Hierarchical storage** (e.g., /dept/app/env/param) with path-based IAM policies. Can access Secrets Manager via reference prefix and AWS public parameters (latest AMI IDs). Two tiers: Standard (free, 4KB, no TTL) vs Advanced ($0.05/month, 8KB, Parameter Policies with TTL/expiration via EventBridge).

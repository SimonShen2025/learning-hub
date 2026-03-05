---
title: "KMS Overview"
lectureId: 297
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [kms, encryption, symmetric, asymmetric, key-policy, cross-region, cross-account]
---

## 中文短总结

AWS KMS（Key Management Service）管理加密密钥，与 IAM 深度集成。所有 API 调用可通过 CloudTrail 审计。两种密钥类型：Symmetric（单密钥，AWS 服务集成使用，永远不可导出）和 Asymmetric（公钥+私钥，公钥可下载）。三类密钥：AWS Owned（免费，SSE-S3/SSE-DynamoDB）、AWS Managed（免费，aws/rds 等）、Customer Managed（$1/月）。自动轮换：AWS Managed 每年自动，Customer Managed 可配置周期+按需轮换。**KMS Key 按区域**——跨区域复制快照需用不同 KMS Key 重新加密。Key Policy：Default（账号内所有人+IAM 控制）和 Custom（指定用户/角色，跨账号共享）。跨账号复制加密快照：需 Customer Managed Key + Custom Key Policy 授权。

## 中文长总结

AWS KMS 是 AWS 的核心加密服务。

**两种密钥类型：**

| 类型 | 密钥数 | 特点 | 导出 |
|------|-------|------|------|
| **Symmetric** | 1 个（加密=解密） | 所有 AWS 服务集成使用 | ❌ 不可导出，只能通过 API |
| **Asymmetric** | 2 个（公钥+私钥） | 加密/解密或签名/验证 | 公钥可下载，私钥仅 API |

**三类 KMS 密钥：**

| 类型 | 费用 | 示例 | 备注 |
|------|------|------|------|
| AWS Owned | 免费 | SSE-S3, SSE-DynamoDB | 用户不可见 |
| AWS Managed | 免费 | aws/rds, aws/ebs | 特定服务专用 |
| Customer Managed | $1/月 + API 调用费 | 自定义创建或导入 | 完全用户控制 |

**密钥轮换：**
- AWS Managed：每年自动轮换
- Customer Managed：可配置自动轮换周期 + 按需轮换
- Imported Key：只能手动轮换（通过 Alias）

**KMS Key 按区域限制（考试重点）：**
```
Region A (EBS + KMS Key A) → Snapshot (KMS Key A 加密)
→ 跨区域复制 → AWS 自动用 KMS Key B 重新加密
→ Region B (Snapshot + KMS Key B) → 恢复 EBS
```

**KMS Key Policy：**
- **Default Key Policy**：账号内所有人可访问（需 IAM 权限）
- **Custom Key Policy**：指定用户/角色，支持跨账号访问

**跨账号复制加密快照流程：**
1. 创建 Customer Managed Key 的加密快照
2. 附加 Custom Key Policy 允许目标账号
3. 共享快照给目标账号
4. 目标账号复制快照，用自己的 KMS Key 重新加密
5. 从快照创建 Volume

## 考试要点

- KMS = 所有 AWS 加密的核心
- Symmetric Key：单密钥，永远不可导出
- KMS Key 按区域，跨区域需重新加密
- Key Policy：Default vs Custom
- 跨账号共享加密快照需 Customer Managed Key + Custom Key Policy
- CloudTrail 审计所有 KMS API 调用

## English Short Summary

AWS KMS manages encryption keys with deep IAM integration. All API calls auditable via CloudTrail. Two key types: Symmetric (single key, AWS service integrations, never exportable) and Asymmetric (public+private, public downloadable). Three key classes: AWS Owned (free), AWS Managed (free, aws/service-name), Customer Managed ($1/month). Automatic rotation: AWS Managed yearly, Customer Managed configurable. **KMS Keys are regional** — cross-region snapshot copy requires re-encryption with different KMS Key. Key Policies: Default (all in account + IAM) vs Custom (specific users/roles, cross-account). Cross-account encrypted snapshot sharing requires Customer Managed Key + Custom Key Policy.

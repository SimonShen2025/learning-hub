---
title: "IAM - Advanced Policies"
lectureId: 288
section: "s25"
sectionTitle: "Identity and Access Management (IAM) - Advanced"
date: "2026-03-05"
tags: [iam, conditions, policies, source-ip, requested-region, resource-tag, mfa, principal-org-id]
---

## 中文短总结

IAM Policy 高级条件（Conditions）详解：①**aws:SourceIP**——限制 API 调用来源 IP（如仅公司网络）②**aws:RequestedRegion**——限制操作的目标区域③**ec2:ResourceTag**——基于 EC2 标签控制权限（如 Project=DataAnalytics）④**aws:PrincipalTag**——基于用户标签控制（如 Department=Data）⑤**aws:MultiFactorAuthPresent**——强制 MFA（如终止/停止实例需 MFA）⑥S3 Bucket Policy 中 ListBucket（桶级 ARN）vs GetObject/PutObject（对象级 ARN `/*`）⑦**aws:PrincipalOrgID**——资源策略限制仅组织内账号可访问（如 S3 桶仅组织成员可 Put/Get）。

## 中文长总结

IAM Policy Conditions 提供精细化权限控制，适用于用户策略、资源策略、端点策略等。

**六大常用条件：**

| 条件键 | 前缀 | 用途 | 示例 |
|--------|------|------|------|
| `aws:SourceIP` | aws（全局） | 限制 API 来源 IP | 仅公司网络可访问 |
| `aws:RequestedRegion` | aws（全局） | 限制操作目标区域 | 禁止 eu-central-1 和 eu-west-1 |
| `ec2:ResourceTag` | ec2（服务） | 基于资源标签 | 仅 Project=DataAnalytics 的实例可操作 |
| `aws:PrincipalTag` | aws（全局） | 基于用户标签 | 用户 Department 必须是 Data |
| `aws:MultiFactorAuthPresent` | aws（全局） | 强制 MFA | 停止/终止实例需 MFA |
| `aws:PrincipalOrgID` | aws（全局） | 限制组织内访问 | 仅组织成员可访问 S3 桶 |

**S3 ARN 区分（考试常考）：**
- **桶级操作**（ListBucket）：ARN = `arn:aws:s3:::bucket-name`
- **对象级操作**（GetObject/PutObject/DeleteObject）：ARN = `arn:aws:s3:::bucket-name/*`

**aws:PrincipalOrgID 资源策略：**
- 用于 S3/SNS/SQS 等资源策略
- 只允许组织内账号访问，拒绝外部账号
- 不需要逐个列出账号 ID

## 考试要点

- aws:SourceIP = 限制 API 调用来源 IP
- aws:RequestedRegion = 限制操作区域（常与 SCP 结合）
- ec2:ResourceTag / aws:PrincipalTag = 基于标签的权限控制
- aws:MultiFactorAuthPresent = 强制 MFA
- aws:PrincipalOrgID = 仅组织内账号可访问资源
- S3 桶级 ARN vs 对象级 ARN（`/*`）

## English Short Summary

Advanced IAM Policy Conditions: (1) `aws:SourceIP` — restrict API call source IP (e.g., company network only); (2) `aws:RequestedRegion` — restrict target regions; (3) `ec2:ResourceTag` — permissions based on resource tags; (4) `aws:PrincipalTag` — based on user tags; (5) `aws:MultiFactorAuthPresent` — force MFA for destructive actions; (6) S3 bucket-level ARN (ListBucket) vs object-level ARN with `/*` (Get/Put/DeleteObject); (7) `aws:PrincipalOrgID` — resource policies restricting access to organization members only.

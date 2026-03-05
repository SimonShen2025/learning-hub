---
title: "IAM - Policy Evaluation Logic"
lectureId: 290
section: "s25"
sectionTitle: "Identity and Access Management (IAM) - Advanced"
date: "2026-03-05"
tags: [iam, permission-boundary, policy-evaluation, scp]
---

## 中文短总结

IAM Permission Boundaries（权限边界）：为用户/角色定义最大权限范围（不适用于 Groups）。即使 IAM Policy 给予 Admin 权限，Permission Boundary 限制为 S3 → 只能用 S3。有效权限 = Identity-Based Policy ∩ Permission Boundary ∩ SCP 三者交集。Policy 评估流程：①检查显式 Deny → ②SCP 是否 Allow → ③Resource-Based Policy → ④Identity-Based Policy → ⑤Permission Boundary → ⑥Session Policy。**显式 Deny 永远优先**——即使有 Allow，Deny 也会覆盖。用途：限制非管理员在边界内自管理权限、限制特定用户而非整个账号。

## 中文长总结

**IAM Permission Boundaries（权限边界）：**

Permission Boundary 是高级功能，定义 IAM 实体（用户/角色）可获得的最大权限。

**核心概念：**
- 支持：用户和角色
- **不支持：Groups（组）**
- 类似 IAM Policy 语法
- 限制最大权限范围

**示例：**
- Permission Boundary：Allow S3 + CloudWatch + EC2
- IAM Policy：Allow iam:CreateUser
- 结果：**无权限**（iam:CreateUser 不在 Boundary 范围内）

**有效权限 = 三者交集：**
1. **Identity-Based Policy**（用户/组策略）
2. **Permission Boundary**（用户/角色边界）
3. **Organization SCP**（组织级策略）

**用例：**
- 允许开发人员自管理权限但不能提升权限
- 限制特定用户而非使用 SCP 限制整个账号
- 委托非管理员在边界内创建 IAM 用户

**IAM Policy 评估流程（6 步）：**

```
1. 显式 Deny？ → 拒绝（最高优先级）
2. Organization SCP Allow？ → 否则隐式拒绝
3. Resource-Based Policy Allow？
4. Identity-Based Policy Allow？
5. Permission Boundary Allow？
6. Session Policy Allow？
→ 全部通过 = Allow
```

**关键规则：显式 Deny 永远优先**

**策略分析示例：**
```json
{ "Effect": "Deny", "Action": "sqs:*", "Resource": "*" }
{ "Effect": "Allow", "Action": "sqs:DeleteQueue", "Resource": "*" }
```
- sqs:CreateQueue → ❌ 被 Deny sqs:* 拒绝
- sqs:DeleteQueue → ❌ 虽有 Allow，但 Deny sqs:* 优先
- ec2:DescribeInstances → ❌ 无显式 Allow = 隐式拒绝

## 考试要点

- Permission Boundary = 用户/角色的最大权限（不适用于 Groups）
- 有效权限 = Identity Policy ∩ Permission Boundary ∩ SCP
- 显式 Deny 永远优先于 Allow
- 无显式 Allow = 隐式 Deny
- 评估顺序：Deny → SCP → Resource Policy → Identity Policy → Boundary → Session

## English Short Summary

IAM Permission Boundaries define the maximum permissions for users/roles (not groups). Even with Admin IAM Policy, if boundary is S3-only → can only use S3. Effective permissions = intersection of Identity-Based Policy ∩ Permission Boundary ∩ Organization SCP. Policy evaluation: (1) Explicit Deny → always wins; (2) SCP Allow?; (3) Resource-Based Policy; (4) Identity-Based Policy; (5) Permission Boundary; (6) Session Policy. **Explicit Deny always overrides Allow.** Use cases: delegate permission self-management within boundaries, restrict specific users without account-wide SCP.

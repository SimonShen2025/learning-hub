---
title: "Organizations - Overview"
lectureId: 285
section: "s25"
sectionTitle: "Identity and Access Management (IAM) - Advanced"
date: "2026-03-05"
tags: [organizations, multi-account, scp, ou, consolidated-billing]
---

## 中文短总结

AWS Organizations 是全局服务，管理多账号。Management Account（管理账号）+ Member Accounts（成员账号），每个账号只能属于一个组织。核心优势：①统一计费（Consolidated Billing）→ 批量折扣②共享 Reserved Instances 和 Savings Plans③API 自动创建账号。用 OU（Organizational Unit）组织账号（按业务/环境/项目嵌套）。**SCP（服务控制策略）**是关键安全功能：IAM 策略应用于 OU 或账号，限制用户/角色能做什么。SCP 不影响 Management Account。SCP 评估：需要沿路径每层都有显式 Allow，任何层的 Deny 都会生效。

## 中文长总结

AWS Organizations 是管理多 AWS 账号的全局服务。

**账号结构：**
- **Management Account**（管理账号）：组织的主账号
- **Member Accounts**（成员账号）：加入或从组织创建的账号
- 每个账号只能属于一个组织

**核心优势：**
- **统一计费（Consolidated Billing）**：单一付款方式，所有账号聚合使用量获得批量折扣
- **共享 RI/Savings Plans**：未使用的预留实例可被其他账号使用
- **API 创建账号**：自动化账号管理
- **多账号比单账号多 VPC 更安全**

**OU 组织方式：**
- Root OU → 子 OU（可嵌套）
- 按业务单元（Sales/Retail/Finance）
- 按环境（Prod/Test/Dev）
- 按项目
- 可混合使用

**SCP（Service Control Policies）关键要点：**

| 特性 | 说明 |
|------|------|
| 类型 | IAM 策略 |
| 应用对象 | OU 或账号 |
| Management Account | **永远不受 SCP 限制** |
| 评估逻辑 | 需要沿路径每层都有显式 Allow |
| 显式 Deny | 任何层级的 Deny 都会覆盖 Allow |

**SCP 示例：**
- Deny List 模式：先 Allow All，再 Deny 特定服务
- Allow List 模式：只 Allow 特定服务（如只允许 EC2 + CloudWatch）

**其他自动化：**
- 统一启用 CloudTrail → 中央 S3
- CloudWatch 日志 → 中央日志账号
- 自动建立跨账号 IAM Role

## 考试要点

- Organizations = 全局服务，多账号管理
- Management Account 永远不受 SCP 限制
- SCP 需要沿路径每层显式 Allow
- Deny 优先于 Allow
- Consolidated Billing + 共享 RI/Savings Plans
- OU 按业务/环境/项目灵活组织

## English Short Summary

AWS Organizations is a global service for managing multiple AWS accounts. Management Account + Member Accounts with consolidated billing (volume discounts, shared RI/Savings Plans). Organize accounts using OUs (by business unit/environment/project, nestable). **SCP (Service Control Policies)** restrict what users/roles can do in accounts/OUs — Management Account is never affected. SCPs require explicit Allow at every level along the path; any Deny overrides Allow. Two patterns: Deny List (Allow All + Deny specific) or Allow List (only allow specific services).

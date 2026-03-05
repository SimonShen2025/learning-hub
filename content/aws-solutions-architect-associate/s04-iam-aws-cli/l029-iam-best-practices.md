---
title: "IAM Best Practices"
lectureId: 29
section: 4
sectionTitle: "IAM & AWS CLI"
date: "2026-03-05"
tags: ["iam", "best-practices", "security"]
---

## 中文短总结

IAM 最佳实践总结：不日常使用 root 账户；一个 AWS 用户对应一个真实人员，不共享凭证；将用户分组并在组级别管理权限；创建强密码策略；尽量使用并强制启用 MFA；为 AWS 服务创建 IAM Role（如 EC2 实例）；使用 CLI/SDK 时生成 Access Key 并妥善保管；使用 Credentials Report 和 Access Advisor 审计权限；绝不共享 IAM 用户和 Access Key。

## 考试要点

- Root 账户仅用于初始设置，不用于日常操作
- 一人一个 IAM 用户，不共享凭证
- 在组级别管理权限
- 强密码策略 + 强制 MFA
- AWS 服务使用 IAM Role，不使用用户凭证
- Access Key 等同密码，绝不共享
- 定期使用 Credentials Report 和 Access Advisor 审计

## English Short Summary

IAM best practices: never use root account for daily tasks; one IAM user per physical person; manage permissions at the group level; enforce strong password policy and MFA; use IAM Roles for AWS services (e.g., EC2); treat access keys as passwords—never share them; audit with Credentials Report and Access Advisor regularly.

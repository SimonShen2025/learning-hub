---
title: "IAM Summary"
lectureId: 30
section: 4
sectionTitle: "IAM & AWS CLI"
date: "2026-03-05"
tags: ["iam", "summary"]
---

## 中文短总结

IAM 章节总结：用户（Users）映射到真实人员，拥有控制台密码；用户组（Groups）仅包含用户；策略（Policies）是 JSON 文档定义权限；角色（Roles）用于 AWS 服务（如 EC2、Lambda）；安全方面可启用 MFA 和设置密码策略；CLI 用于命令行管理，SDK 用于编程访问，两者都需要 Access Key；使用 Credentials Report 和 Access Advisor 审计 IAM 使用情况。

## 考试要点

- Users = 真实人员 + 控制台密码
- Groups = 仅包含用户
- Policies = JSON 权限文档，附加到用户或组
- Roles = AWS 服务的身份（EC2、Lambda 等）
- MFA + 密码策略 = 安全防护
- CLI / SDK = Access Key 访问
- Credentials Report（账户级）+ Access Advisor（用户级）= 审计工具

## English Short Summary

IAM section summary: Users (mapped to real people with console passwords); Groups (contain users only); Policies (JSON documents defining permissions); Roles (identities for AWS services like EC2/Lambda); Security via MFA and password policies; CLI/SDK access via access keys; Audit using Credentials Report (account-level) and Access Advisor (user-level).

---
title: "IAM Security Tools"
lectureId: 27
section: 4
sectionTitle: "IAM & AWS CLI"
date: "2026-03-05"
tags: ["iam", "security", "credentials-report", "access-advisor"]
---

## 中文短总结

IAM 提供两种安全审计工具：1）IAM Credentials Report（凭证报告）— 账户级别，列出所有用户及其凭证状态（密码、Access Key、MFA 等）；2）IAM Access Advisor（访问顾问）— 用户级别，显示用户被授予的服务权限及最后访问时间，帮助实施最小权限原则，识别未使用的权限并进行缩减。

## 考试要点

- IAM Credentials Report：账户级别，列出所有用户的凭证状态
- IAM Access Advisor：用户级别，显示服务权限和最后访问时间
- Access Advisor 帮助实施最小权限原则（识别未使用的权限）
- 区分两者的级别：Credentials Report = 账户级 / Access Advisor = 用户级

## English Short Summary

Two IAM security tools: 1) IAM Credentials Report (account-level) — lists all users and their credential status (passwords, access keys, MFA). 2) IAM Access Advisor (user-level) — shows service permissions granted to a user and when they were last accessed, enabling enforcement of the least privilege principle by identifying unused permissions.

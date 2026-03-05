---
title: "IAM Security Tools Hands On"
lectureId: 28
section: 4
sectionTitle: "IAM & AWS CLI"
date: "2026-03-05"
tags: ["iam", "security", "credentials-report", "access-advisor", "hands-on"]
---

## 中文短总结

实操演示 IAM 安全工具：1）Credentials Report — 在 IAM 左侧菜单点击 Credential report 下载 CSV，包含用户创建时间、密码启用/使用/更改/轮换状态、MFA 是否激活、Access Key 状态等信息，可用于发现需要关注的安全问题用户。2）Access Advisor — 在用户详情页查看，显示已访问的服务及时间，标注权限来源策略，帮助判断用户是否拥有过多权限。

## English Short Summary

Hands-on with IAM security tools: 1) Credentials Report — download CSV from IAM console showing all users' credential status (password, MFA, access keys, rotation). Useful for identifying users needing security attention. 2) Access Advisor — accessible per user, shows which services were accessed and when, plus which policy granted access. Helps determine if users have excessive permissions for granular access control.

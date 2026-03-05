---
title: "IAM MFA Hands On"
lectureId: 17
section: 4
sectionTitle: "IAM & AWS CLI"
date: "2026-03-05"
tags: ["iam", "mfa", "hands-on", "password-policy", "security"]
---

## 中文短总结

实操演示两部分安全配置：1）在 Account Settings 中编辑密码策略（最小长度、字符要求、过期时间、禁止重用等）；2）为 root 账户设置 MFA——在 Security Credentials 中分配 MFA 设备，选择 Authenticator App，扫描 QR 码，输入两次连续验证码完成绑定。之后登录时需额外输入 MFA 验证码。AWS 支持最多 8 个 MFA 设备。

## English Short Summary

Hands-on demo: 1) Configure password policy in IAM Account Settings (minimum length, character types, expiration, reuse prevention). 2) Set up MFA for root account via Security Credentials—assign an authenticator app as MFA device, scan QR code, enter two consecutive codes to verify. After setup, login requires the additional MFA code. AWS supports up to 8 MFA devices per account.

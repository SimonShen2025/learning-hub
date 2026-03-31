---
title: "S3 MFA Delete Hands On"
lectureId: 157
section: 14
sectionTitle: "Amazon S3 Security"
date: "2026-03-05"
tags: ["S3", "MFA Delete", "CLI", "Hands-On"]
---

## 中文短总结

本讲演示 MFA Delete 的启用与禁用。控制台中 MFA Delete 选项不可编辑，必须通过 **AWS CLI** 操作。步骤：1）为 Root 账户设置 MFA 设备并获取 ARN。2）为 Root 账户创建 Access Key 并配置 CLI Profile。3）使用 `aws s3api put-bucket-versioning` 命令启用 MFA Delete，需指定 MFA 设备 ARN 和当前验证码。启用后尝试永久删除对象会被拒绝。禁用同样通过 CLI 命令（`MFADelete=Disabled`）。**重要**：操作完成后立即删除/停用 Root Access Key。

## English Short Summary

Hands-on MFA Delete demo. Console doesn't allow enabling MFA Delete — must use AWS CLI. Steps: set up MFA device for root account, create root access keys, configure CLI profile, run `aws s3api put-bucket-versioning` with MFA device ARN and current code to enable MFA Delete. After enabling, permanent object deletion is blocked (returns error). Disable via same command with `MFADelete=Disabled`. Critical: deactivate/delete root access keys immediately after use.

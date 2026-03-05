---
title: "SSM Parameter Store Hands On (CLI)"
lectureId: 303
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [ssm, parameter-store, hands-on, cli]
---

## 中文短总结

实操演示 SSM Parameter Store：①创建层级化参数：/my-app/dev/db-url（String 类型）和 /my-app/dev/db-password（SecureString 类型，使用自定义 KMS Key 加密）②SecureString 值在控制台默认隐藏，需点击显示并验证 KMS 权限③同样创建 Prod 参数。CLI 操作：`aws ssm get-parameters --names`（获取指定参数），加 `--with-decryption` 解密 SecureString；`aws ssm get-parameters-by-path --path /my-app/dev`（按路径获取），加 `--recursive` 获取路径下所有参数。层级化组织让 IAM 控制和参数检索非常高效。

## English Short Summary

Hands-on SSM Parameter Store: (1) Create hierarchical parameters — /my-app/dev/db-url (String) and /my-app/dev/db-password (SecureString with custom KMS Key encryption); (2) SecureString hidden by default in console, requires KMS permission to show; (3) Create matching Prod parameters. CLI: `aws ssm get-parameters --names` (specific params) with `--with-decryption` for SecureString; `aws ssm get-parameters-by-path --path /my-app/dev` with `--recursive` for all nested params. Hierarchy enables efficient IAM control and retrieval.

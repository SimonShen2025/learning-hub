---
title: "S3 MFA Delete"
lectureId: 156
section: 14
sectionTitle: "Amazon S3 Security"
date: "2026-03-05"
tags: ["S3", "MFA Delete", "Versioning", "Security"]
---

## 中文短总结

本讲介绍 S3 MFA Delete 安全功能。MFA（多因素认证）在执行危险操作前需要设备生成验证码。**需要 MFA 的操作**：永久删除对象版本、暂停 Bucket Versioning。**不需要 MFA 的操作**：启用 Versioning、列出已删除版本。前提：必须先启用 Versioning。**只有 Root 账户**才能启用/禁用 MFA Delete。MFA Delete 是防止意外永久删除的额外保护层。

## 中文长总结

### MFA Delete
- 执行危险操作前需要 MFA 验证码

### 需要 MFA 的操作（危险操作）
- **永久删除**对象版本
- **暂停** Bucket Versioning

### 不需要 MFA 的操作
- 启用 Versioning
- 列出已删除版本

### 前提条件
- 必须先**启用 Versioning**
- **只有 Root 账户**才能启用/禁用 MFA Delete

## 考试要点

- MFA Delete 保护永久删除和暂停 Versioning
- 只有 **Root 账户**可启用/禁用
- 必须先启用 Versioning

## English Short Summary

S3 MFA Delete requires multi-factor authentication before performing destructive operations: permanently deleting object versions or suspending bucket versioning. Non-destructive operations (enabling versioning, listing deleted versions) don't require MFA. Prerequisites: versioning must be enabled first, and only the root account can enable/disable MFA Delete. It provides an extra protection layer against accidental permanent deletions.

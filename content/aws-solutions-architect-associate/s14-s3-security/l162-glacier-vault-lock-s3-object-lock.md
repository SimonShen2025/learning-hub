---
title: "Glacier Vault Lock & S3 Object Lock"
lectureId: 162
section: 14
sectionTitle: "Amazon S3 Security"
date: "2026-03-05"
tags: ["S3", "Glacier", "Vault Lock", "Object Lock", "WORM", "Compliance"]
---

## 中文短总结

本讲介绍两种锁定机制。**Glacier Vault Lock**：WORM（Write Once Read Many）模型，创建并锁定 Vault Lock Policy 后任何人（包括管理员/AWS）都无法修改或删除对象，适用于合规和数据保留。**S3 Object Lock**：需启用 Versioning，可锁定单个对象版本。两种 Retention Mode：**Compliance**（任何人包括 Root 都不能修改/删除/缩短保留期）和 **Governance**（大多数用户不能操作，但有特殊 IAM 权限的管理员可以）。两种模式都需设置可延长的保留期。**Legal Hold**：独立于 Retention 的无限期保护，通过 `s3:PutObjectLegalHold` IAM 权限控制。

## 中文长总结

### S3 Glacier Vault Lock
- **WORM** 模型（Write Once Read Many）
- 创建 **Vault Lock Policy** → 锁定
- 锁定后**任何人**不能修改/删除（包括管理员和 AWS）
- 适用场景：合规、法律数据保留

### S3 Object Lock
- 需先启用 **Versioning**
- 可锁定**单个对象版本**

### 两种 Retention Mode

| 特性 | Compliance | Governance |
|------|-----------|------------|
| 对象保护 | 任何人都不能修改/删除 | 大多数用户不能，管理员可以 |
| Root 用户 | ❌ 也不行 | ✅ 有权限可操作 |
| 保留模式更改 | ❌ | ✅ 管理员可更改 |
| 保留期缩短 | ❌ | ✅ 管理员可缩短 |
| 保留期延长 | ✅ | ✅ |

### Legal Hold
- 独立于 Retention Mode/Period
- **无限期**保护对象
- 通过 `s3:PutObjectLegalHold` IAM 权限控制
- 适用场景：法律调查期间保护证据

## 考试要点

- Glacier Vault Lock = 整个 Vault 级别的 WORM
- S3 Object Lock = 单个对象版本级别
- Compliance Mode：**任何人都不能**修改/删除（包括 Root）
- Governance Mode：**管理员有权限**可操作
- Legal Hold：**无限期**保护，IAM 控制

## English Short Summary

Two locking mechanisms: **Glacier Vault Lock** implements WORM at the vault level — once the Vault Lock Policy is locked, nobody (including admins/AWS) can modify or delete objects, ideal for compliance. **S3 Object Lock** (requires versioning) locks individual object versions with two retention modes: **Compliance** (nobody including root can modify/delete/shorten retention) and **Governance** (most users blocked, but IAM-privileged admins can override). Both require a retention period (extendable). **Legal Hold** provides indefinite protection independent of retention, controlled via `s3:PutObjectLegalHold` IAM permission.

---
title: "KMS - Multi-Region Keys"
lectureId: 299
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [kms, multi-region, global-tables, aurora-global, client-side-encryption]
---

## 中文短总结

KMS Multi-Region Keys：Primary Key 复制到其他区域，Key ID 和 Key Material 完全相同。可以一个区域加密、另一个区域解密，无需重新加密或跨区域 API 调用。**不是全局密钥**——每个副本独立管理（有自己的 Key Policy）。仅用于特定场景：①DynamoDB Global Tables + 客户端加密（加密特定属性如 SSN，连数据库管理员也无法读取）②Aurora Global Database + 客户端加密（同上）。核心价值：跨区域客户端应用可本地调用 KMS 解密属性，低延迟。

## 中文长总结

KMS Multi-Region Keys 是跨区域使用同一密钥的特殊功能。

**核心特性：**
- Primary Key → 复制到其他区域（Replicas）
- **相同 Key ID + 相同 Key Material**
- 一个区域加密 → 另一个区域直接解密
- 不需要跨区域 API 调用或重新加密
- Primary Key 自动轮换会同步到 Replicas

**重要限制：**
- **不是全局密钥**——每个 Replica 独立管理
- 不推荐默认使用（KMS 设计理念：密钥绑定单区域）
- 仅用于特定场景

**核心用例 1：DynamoDB Global Tables + 客户端加密**
```
Region A: Client → KMS Multi-Region Key → 加密 SSN 属性 → DynamoDB
↓ Global Table 复制
Region B: Client → KMS Replica Key → 本地解密 SSN 属性
```
- 使用 Amazon DynamoDB Encryption Client
- 仅加密特定属性（如 Social Security Number）
- 数据库管理员无法读取加密属性（除非有 KMS 密钥访问权限）

**核心用例 2：Aurora Global Database + 客户端加密**
- 使用 AWS Encryption SDK
- 同理：加密特定列（如 SSN）
- 跨区域复制后，本地 KMS Replica 解密

**客户端加密的安全价值：** 即使数据库管理员有数据库全部访问权限，也无法读取加密列/属性。

## 考试要点

- Multi-Region Key：相同 Key ID + Key Material
- 一个区域加密，另一个区域解密
- 不是全局密钥（每个独立管理）
- 主要用例：Global Tables/Global Aurora + 客户端属性级加密
- 保护数据甚至对抗数据库管理员

## English Short Summary

KMS Multi-Region Keys: Primary Key replicated to other regions with identical Key ID and Key Material. Encrypt in one region, decrypt in another without re-encryption or cross-region API calls. **Not global** — each replica managed independently. Use cases: DynamoDB Global Tables + client-side attribute encryption (encrypt specific fields like SSN using DynamoDB Encryption Client) and Aurora Global Database + client-side column encryption (AWS Encryption SDK). Key value: protects data even from database administrators.

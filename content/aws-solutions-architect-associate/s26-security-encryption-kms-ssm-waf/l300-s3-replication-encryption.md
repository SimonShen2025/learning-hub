---
title: "S3 Replication with Encryption"
lectureId: 300
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [s3, replication, kms, encryption, sse-s3, sse-kms]
---

## 中文短总结

S3 Replication 与加密的关系：未加密对象和 SSE-S3 加密对象**默认可复制**。SSE-C（客户提供密钥）也可复制。**SSE-KMS 加密对象默认不复制**——需手动启用选项：指定目标桶的 KMS Key、创建 IAM Role（允许源桶解密+目标桶加密）。大量 KMS 加密/解密操作可能导致 KMS 节流（throttling），需增加 Service Quotas。Multi-Region Key 可用于 S3 Replication，但 S3 仍将其视为独立密钥（仍需解密再加密）。

## 中文长总结

S3 跨区域/同区域复制中各加密类型的处理方式：

| 加密类型 | 默认复制 | 备注 |
|---------|---------|------|
| 未加密 | ✅ | 直接复制 |
| SSE-S3 | ✅ | 直接复制 |
| SSE-C（客户密钥） | ✅ | 可复制 |
| **SSE-KMS** | ❌ | 需手动启用 |

**SSE-KMS 复制配置：**
1. 启用 KMS 复制选项
2. 指定目标桶的 KMS Key
3. 调整目标 KMS Key Policy
4. 创建 IAM Role：
   - 源桶：`kms:Decrypt` 权限
   - 目标桶：`kms:Encrypt` 权限

**KMS 节流问题：**
- 复制大量 KMS 加密对象时可能遇到 KMS 节流
- 解决：申请增加 KMS Service Quotas

**Multi-Region Key：**
- 可用于 S3 Replication
- 但 S3 仍视为独立密钥（仍执行解密→加密流程）

## 考试要点

- SSE-S3 默认可复制，SSE-KMS 默认不可复制
- SSE-KMS 复制需 IAM Role（Decrypt 源 + Encrypt 目标）
- KMS 节流 → 增加 Service Quotas
- Multi-Region Key 在 S3 中仍被视为独立密钥

## English Short Summary

S3 Replication and encryption: unencrypted and SSE-S3 objects replicate by default. SSE-C can also replicate. **SSE-KMS objects don't replicate by default** — must enable option, specify target KMS Key, and create IAM Role (Decrypt on source + Encrypt on target). High-volume KMS operations may cause throttling → increase Service Quotas. Multi-Region Keys can be used but S3 still treats them as independent keys (still decrypts and re-encrypts).

---
title: "AWS CloudHSM"
lectureId: 307
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [cloudhsm, encryption, hardware, fips, kms-custom-key-store, sse-c]
---

## 中文短总结

CloudHSM：AWS 提供专用加密硬件（HSM 设备），**用户完全管理密钥**（不同于 KMS 由 AWS 管理）。FIPS 140-2 Level 3 合规（防篡改）。支持对称+非对称密钥+SSL/TLS 密钥。无免费层。高可用：跨 AZ 部署多个 HSM。与 KMS 集成：通过 **KMS Custom Key Store** → CloudHSM 作为 KMS 后端 → EBS/S3/RDS 等可透明使用 CloudHSM 加密。SSE-C 的理想方案（自管密钥存储在 CloudHSM）。IAM 管理集群级别，CloudHSM 软件管理密钥和用户权限。

## 中文长总结

CloudHSM 是 AWS 提供的专用硬件加密模块服务。

**核心区别（vs KMS）：**

| 特性 | KMS | CloudHSM |
|------|-----|----------|
| 密钥管理 | AWS 管理 | **用户完全管理** |
| 租户模式 | 多租户 | **单租户** |
| 合规 | 标准 | **FIPS 140-2 Level 3** |
| 密钥类型 | 对称+非对称 | 对称+非对称+SSL/TLS+哈希 |
| 免费层 | 有 | **无** |
| 认证方式 | IAM | CloudHSM 自有用户管理 |

**高可用性：**
- 跨 AZ 部署多个 HSM 设备
- 自动复制数据
- HSM Client 可连接任一设备

**与 KMS 集成（KMS Custom Key Store）：**
```
KMS Custom Key Store → CloudHSM Cluster
→ EBS/S3/RDS 等服务使用 KMS 加密时
→ 底层实际使用 CloudHSM 密钥
→ 所有 API 调用记录在 CloudTrail
```

**特殊功能：**
- SSL/TLS 加速（Load Balancer 级别）
- Oracle TDE 加速
- SSE-C 的最佳密钥存储方案
- Redshift 集成

**IAM vs CloudHSM 安全：**
- IAM：管理集群的创建/删除等高级操作
- CloudHSM Client：管理密钥、用户权限（独立于 IAM）

## 考试要点

- CloudHSM = 用户完全管理密钥的专用硬件
- FIPS 140-2 Level 3 合规
- 单租户（vs KMS 多租户）
- KMS Custom Key Store 集成：透明为其他 AWS 服务提供加密
- SSE-C 方案 → CloudHSM
- 跨 AZ 高可用

## English Short Summary

CloudHSM: dedicated encryption hardware where **users fully manage keys** (unlike KMS). FIPS 140-2 Level 3 compliant (tamper-resistant). Supports symmetric + asymmetric + SSL/TLS keys. No free tier. Single-tenant. HA across AZs. Integrates with KMS via **Custom Key Store** → CloudHSM backs KMS → transparent encryption for EBS/S3/RDS. Ideal for SSE-C (self-managed keys stored in CloudHSM). Redshift integration. IAM manages cluster-level operations; CloudHSM software manages keys and user permissions independently.

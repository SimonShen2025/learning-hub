---
title: "AWS Secrets Manager - Hands On"
lectureId: 305
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [secrets-manager, hands-on, rds, rotation]
---

## 中文短总结

实操演示 Secrets Manager：①支持多种密钥类型：Amazon RDS、DocumentDB、Redshift、其他数据库、通用密钥②通用密钥：键值对形式（如 MySecretKey/MyVerySecretValue），支持自定义 KMS Key③可配置 Resource Policy（跨账号访问）④Multi-Region 复制（选择目标区域和加密 Key）⑤自动轮换：设置轮换周期+指定 Lambda Function⑥RDS 集成：存储数据库用户名/密码→选择数据库实例→轮换时自动更新数据库密码。定价：$0.40/secret/月 + $0.05/10,000 API 调用（30 天免费试用）。

## English Short Summary

Hands-on Secrets Manager demo: (1) Multiple secret types: RDS, DocumentDB, Redshift, other databases, generic; (2) Generic secrets as key-value pairs with custom KMS Key; (3) Resource Policy for cross-account access; (4) Multi-Region replication to target regions; (5) Auto-rotation with Lambda function; (6) RDS integration: store DB credentials → select database → auto-update password on rotation. Pricing: $0.40/secret/month + $0.05/10K API calls (30-day free trial).

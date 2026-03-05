---
title: "AWS Secrets Manager - Overview"
lectureId: 304
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [secrets-manager, rotation, rds, aurora, kms, multi-region]
---

## 中文短总结

AWS Secrets Manager：专用密钥管理服务（区别于 SSM Parameter Store）。核心优势：①**强制定期轮换**（每 X 天）②自动生成新密钥（通过 Lambda 函数）③与 RDS/Aurora/PostgreSQL/MySQL 等数据库深度集成（数据库密码自动轮换+同步更新）④KMS 加密。**Multi-Region Secrets**：跨区域复制密钥，保持同步，支持灾备（主区域故障可提升 Replica 为独立密钥）和多区域应用/数据库。考试关键词：Secrets + RDS/Aurora 集成 → Secrets Manager。

## 中文长总结

AWS Secrets Manager 是比 SSM Parameter Store 更专业的密钥管理服务。

**核心差异化特性：**
- **强制定期轮换**：设置每 X 天自动轮换
- **自动生成密钥**：通过 Lambda 函数自动生成新密钥
- **数据库深度集成**：RDS（MySQL、PostgreSQL、SQL Server）和 Aurora
  - 数据库凭证存储在 Secrets Manager
  - 轮换时自动更新数据库密码

**KMS 加密：**
- 所有密钥使用 KMS 加密存储

**Multi-Region Secrets：**
- 跨区域复制密钥
- Secrets Manager 服务自动保持 Reader Replicas 同步
- 用途：
  - **灾备**：主区域故障 → 提升 Replica 为独立 Secret
  - **多区域应用**
  - **多区域数据库**（如 RDS 跨区域副本可使用对应区域的 Secret）

## 考试要点

- Secrets Manager vs SSM Parameter Store：Secrets Manager 有自动轮换+数据库集成
- 看到 "Secrets" + RDS/Aurora → Secrets Manager
- 支持强制轮换（Lambda 生成新密钥）
- Multi-Region Secrets：跨区域同步，支持灾备
- KMS 加密

## English Short Summary

AWS Secrets Manager: dedicated secrets management service. Key advantages over SSM Parameter Store: (1) **Forced rotation** every X days; (2) Automatic new secret generation via Lambda; (3) Deep integration with RDS/Aurora/MySQL/PostgreSQL (auto-rotate and sync database passwords); (4) KMS encryption. **Multi-Region Secrets**: replicate across regions, kept in sync, supports DR (promote replica to standalone) and multi-region apps/databases. Exam keyword: Secrets + RDS/Aurora integration → Secrets Manager.

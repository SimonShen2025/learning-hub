---
title: "AWS Transfer Family"
lectureId: 179
section: 16
sectionTitle: "AWS Storage Extras"
date: "2026-03-05"
tags: ["Transfer Family", "FTP", "SFTP", "S3", "EFS"]
---

## 中文短总结

本讲介绍 AWS Transfer Family——通过 **FTP 协议**访问 S3/EFS。支持三种协议：**FTP**（未加密）、**FTPS**（SSL 加密）、**SFTP**（安全传输）。完全托管、可扩展、高可用。计费：按 Endpoint 小时 + 数据传输量。用户认证：服务内管理或集成 AD/LDAP/Okta/Cognito。用例：文件共享、公开数据集、CRM/ERP 系统。架构：用户 → FTP Endpoint（可选 Route 53 DNS）→ Transfer Family Service（IAM Role）→ S3/EFS。

## 中文长总结

### Transfer Family 概述
- 通过 **FTP 协议**访问 S3 / EFS

### 支持的协议
| 协议 | 加密 |
|------|------|
| **FTP** | ❌ 未加密 |
| **FTPS** | ✅ SSL 加密 |
| **SFTP** | ✅ 安全传输 |

### 特性
- 完全托管、可扩展、高可用
- 计费：Endpoint 小时 + 数据传输量

### 用户认证
- 服务内管理
- 集成：**AD / LDAP / Okta / Cognito**

### 架构
```
用户 → FTP Endpoint (+ Route 53) → Transfer Family (IAM Role) → S3 / EFS
```

## 考试要点

- FTP 接口访问 S3/EFS → **Transfer Family**
- FTP 未加密，FTPS/SFTP 加密
- 支持多种外部认证系统

## English Short Summary

AWS Transfer Family provides FTP protocol access to S3/EFS. Three protocols: FTP (unencrypted), FTPS (SSL encrypted), SFTP (secure). Fully managed, scalable, highly available. Pricing: per endpoint hour + data transfer. User authentication: managed in-service or integrated with AD/LDAP/Okta/Cognito. Architecture: users → FTP endpoint (optional Route 53 DNS) → Transfer Family service (IAM Role) → S3/EFS.

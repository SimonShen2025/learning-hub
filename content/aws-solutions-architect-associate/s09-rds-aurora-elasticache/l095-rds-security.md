---
title: "RDS Security"
lectureId: 95
section: 9
sectionTitle: "AWS Fundamentals: RDS + Aurora + ElastiCache"
date: "2026-03-05"
tags: ["RDS", "Aurora", "Security", "Encryption", "KMS", "IAM", "TLS"]
---

## 中文短总结

本讲总结了 RDS 和 Aurora 的安全特性。静态加密（at-rest）使用 KMS 加密存储卷，必须在首次启动时定义；主库未加密则 Read Replicas 也无法加密；已有未加密库需通过快照+恢复方式加密。传输中加密（in-flight）默认支持 TLS，客户端需使用 AWS 提供的 TLS root certificates。认证方式包括用户名/密码、IAM Roles（EC2 实例直接认证）。网络访问通过 Security Groups 控制。RDS/Aurora 无 SSH 访问（RDS Custom 除外）。Audit Logs 可启用并发送至 CloudWatch Logs 长期保存。

## 中文长总结

### 静态加密（At-Rest Encryption）
- 使用 **KMS** 加密 RDS/Aurora 存储卷
- Master 和所有 Replica 使用相同加密方式
- **必须在首次启动时定义**
- 主库未加密 → Read Replicas **无法加密**
- 已有未加密数据库 → 拍摄快照 → **以加密方式恢复快照**为新数据库

### 传输中加密（In-Flight Encryption）
- RDS/Aurora 默认支持 TLS 加密
- 客户端需使用 **AWS 提供的 TLS root certificates**

### 数据库认证方式
- **用户名/密码**：传统方式
- **IAM Roles**：EC2 实例等可使用 IAM Role 直接认证，无需用户名密码

### 网络安全
- **Security Groups**：控制允许或阻止的端口、IP、安全组

### 访问限制
- RDS/Aurora **无 SSH 访问**（托管服务）
- 例外：**RDS Custom** 支持 SSH

### 审计日志（Audit Logs）
- 可启用以记录所有查询和数据库活动
- 日志会在一段时间后丢失
- 需发送至 **CloudWatch Logs** 实现长期保存

## 考试要点

- 静态加密必须在**首次启动时**定义，之后只能通过快照+恢复方式加密
- 主库未加密，Read Replicas 也**无法加密**
- 传输加密使用 TLS，默认支持
- **IAM Roles** 可用于数据库认证（替代用户名/密码）
- 无 SSH（除 RDS Custom）
- Audit Logs → CloudWatch Logs 长期保存

## English Short Summary

This lecture summarizes RDS and Aurora security. At-rest encryption uses KMS and must be defined at launch; unencrypted masters cannot have encrypted replicas; encrypt existing databases via snapshot + restore. In-flight encryption via TLS is supported by default using AWS TLS root certificates. Authentication supports username/password and IAM Roles. Network access is controlled by Security Groups. No SSH access (except RDS Custom). Audit Logs can be enabled and sent to CloudWatch Logs for long-term retention.

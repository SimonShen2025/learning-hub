---
title: "RDS Proxy"
lectureId: 96
section: 9
sectionTitle: "AWS Fundamentals: RDS + Aurora + ElastiCache"
date: "2026-03-05"
tags: ["RDS Proxy", "Connection Pooling", "Lambda", "IAM Authentication", "Failover"]
---

## 中文短总结

本讲介绍了 Amazon RDS Proxy，它是 RDS 和 Aurora 的全托管数据库代理。RDS Proxy 的核心功能是**连接池化**（Connection Pooling）——将应用的多个数据库连接池化为更少的连接，减轻数据库 CPU/RAM 压力和超时问题。它是 Serverless、自动扩展、跨多 AZ 高可用的。RDS Proxy 将故障转移时间缩短高达 66%。支持 MySQL、PostgreSQL、MariaDB、SQL Server 以及 Aurora。三大优势：连接池化、加速故障转移、强制 IAM 认证（凭据安全存储在 Secrets Manager）。RDS Proxy **仅从 VPC 内部访问**，不公开可访问。特别适合 Lambda 函数场景——大量短生命周期 Lambda 的连接问题通过 Proxy 池化解决。

## 中文长总结

### RDS Proxy 是什么
- RDS/Aurora 的**全托管数据库代理**
- 部署在 VPC 内部，**不可公开访问**

### 核心功能一：连接池化（Connection Pooling）
- 应用连接 → RDS Proxy → 池化为更少连接 → RDS/Aurora
- **减少数据库压力**：降低 CPU/RAM 使用，减少 open connections 和 timeout
- 应用无需代码更改，只需将连接目标改为 RDS Proxy

### 核心功能二：加速故障转移
- 主实例故障时，RDS Proxy 处理到 Standby 的切换
- **减少故障转移时间高达 66%**
- 应用连接 Proxy，无需自行处理 failover 逻辑

### 核心功能三：强制 IAM 认证
- 强制所有数据库连接使用 **IAM Authentication**
- 凭据安全存储在 **AWS Secrets Manager** 中

### 支持的数据库
- MySQL、PostgreSQL、MariaDB、Microsoft SQL Server
- Aurora for MySQL 和 PostgreSQL

### 架构特性
- **Serverless**：无需管理容量
- **自动扩展**
- **多 AZ 高可用**
- **仅 VPC 内部访问**（增强安全性）

### Lambda 函数场景（重要）
- Lambda 函数快速创建和销毁，可能有成百上千个并发
- 直接连接 RDS → 大量 open connections → timeout 和性能问题
- 使用 RDS Proxy → Lambda 连接 Proxy → Proxy 池化为少量数据库连接 → 解决问题

## 考试要点

- RDS Proxy 三大功能：**连接池化 + 加速故障转移（66%）+ 强制 IAM 认证**
- **仅 VPC 内部访问**，不可从互联网公开访问
- 凭据存储在 **Secrets Manager**
- 特别适合 **Lambda** 场景（大量短连接池化）
- 无需应用代码更改
- Serverless、自动扩展、多 AZ 高可用

## English Short Summary

Amazon RDS Proxy is a fully managed database proxy for RDS and Aurora that provides three key benefits: connection pooling (reduces database stress from CPU/RAM and timeouts), reduced failover time by up to 66%, and enforced IAM authentication with credentials stored in Secrets Manager. It's serverless, auto-scaling, multi-AZ highly available, and only accessible from within the VPC (not publicly). Particularly useful for Lambda functions where hundreds/thousands of short-lived connections would overwhelm the database without pooling. Supports MySQL, PostgreSQL, MariaDB, SQL Server, and Aurora. No application code changes required.

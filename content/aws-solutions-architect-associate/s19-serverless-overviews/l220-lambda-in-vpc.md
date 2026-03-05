---
title: "Lambda in VPC"
lectureId: 220
section: "19"
sectionTitle: "Serverless Overviews from a Solution Architect Perspective"
date: "2026-03-05"
tags: ["lambda", "vpc", "networking", "rds-proxy", "eni", "private-subnet"]
---

## 中文短总结

Lambda 默认在 AWS 自有 VPC 中运行，无法访问用户 VPC 内的私有资源（如 RDS、ElastiCache）。可配置 Lambda 在用户 VPC 中运行（指定 VPC ID、子网、安全组），Lambda 会在子网中创建 ENI。**Lambda + RDS 必须使用 RDS Proxy** — 连接池化解决高并发连接问题、减少 66% 故障转移时间、支持 IAM 认证。RDS Proxy 永远不公开，Lambda 必须在 VPC 内才能连接。

## 中文长总结

### 默认 Lambda 网络

- Lambda 默认在 **AWS 拥有的 VPC** 中运行
- **可以访问**：公共互联网 API、DynamoDB（公共资源）
- **不能访问**：用户 VPC 内的私有资源（RDS、ElastiCache、内部 ELB）

### 在 VPC 中部署 Lambda

配置要求：
1. 指定 **VPC ID**
2. 指定部署的**子网 (Subnets)**
3. 关联**安全组 (Security Group)**

Lambda 会在指定子网中创建 **Elastic Network Interface (ENI)**，从而获得到 VPC 内资源的私有连接。

### Lambda + RDS Proxy（重要架构）

**问题**：Lambda 高并发 → 大量函数实例直接连接 RDS → 连接数过多 → 超时和性能问题

**解决方案**：使用 **RDS Proxy** 作为中间层

```
Lambda Functions → RDS Proxy → RDS Database
```

**RDS Proxy 三大优势**：
1. **提升可扩展性** — 连接池化 (Connection Pooling)，共享数据库连接
2. **提升可用性** — 故障转移时间减少 **66%**，保持连接（RDS + Aurora）
3. **安全性** — 强制 IAM 认证，凭证存储在 Secrets Manager

### 关键限制

⚠️ **RDS Proxy 永远不公开 (never publicly accessible)** → Lambda 必须部署在 VPC 内才能连接 RDS Proxy

## 考试要点

- Lambda 默认在 AWS VPC 运行，**无法访问用户私有资源**
- VPC 中运行 Lambda 需指定 VPC ID + 子网 + 安全组 → 创建 ENI
- **Lambda + RDS → 必须使用 RDS Proxy**（连接池化）
- RDS Proxy 优势：连接池化、故障转移减少 66%、IAM 认证 + Secrets Manager
- **RDS Proxy 永远不公开** → Lambda 必须在 VPC 内
- Lambda 访问 DynamoDB 不需要在 VPC 中（DynamoDB 是公共服务）
- Lambda 访问 RDS/ElastiCache/内部 ELB 必须在 VPC 中

## English Short Summary

Lambda runs in AWS-owned VPC by default — can access public APIs and DynamoDB but not private VPC resources (RDS, ElastiCache). Deploy Lambda in your VPC by specifying VPC ID, subnets, and security group (creates ENI). For Lambda + RDS, always use **RDS Proxy**: provides connection pooling (scalability), 66% reduced failover time (availability), and IAM authentication via Secrets Manager (security). Critical: RDS Proxy is never publicly accessible, so Lambda must be deployed in the VPC to connect to it.

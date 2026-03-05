---
title: "S3 Access Points"
lectureId: 163
section: 14
sectionTitle: "Amazon S3 Security"
date: "2026-03-05"
tags: ["S3", "Access Points", "Security", "VPC Endpoint"]
---

## 中文短总结

本讲介绍 S3 Access Points——简化大型 S3 Bucket 安全管理的方案。每个 Access Point 有自己的 **DNS 名称**、**Access Point Policy**（类似 Bucket Policy）和 Origin 类型（Internet 或 VPC）。示例：Finance AP（读写 finance/ 前缀）、Sales AP（读写 sales/）、Analytics AP（只读 finance/ + sales/）。将复杂的 Bucket Policy 分散到各 Access Point，实现大规模安全管理。**VPC Origin**：Access Point 可设为 VPC 私有访问，EC2 通过 **VPC Endpoint** 连接 Access Point，VPC Endpoint Policy 需允许访问目标 Bucket 和 Access Point。

## 中文长总结

### Access Points 概述
- 为大型 S3 Bucket 提供简化的安全管理
- 将复杂 Bucket Policy 分散到多个 Access Point

### 每个 Access Point 包含
- 自己的 **DNS 名称**
- **Access Point Policy**（类似 Bucket Policy）
- **Origin 类型**：Internet 或 VPC

### 使用示例
| Access Point | 数据 | 权限 |
|-------------|------|------|
| Finance AP | finance/ 前缀 | 读写 |
| Sales AP | sales/ 前缀 | 读写 |
| Analytics AP | finance/ + sales/ | 只读 |

### VPC Origin
- Access Point 可设为 VPC 私有访问
- 需要创建 **VPC Endpoint** 连接
- **VPC Endpoint Policy** 需允许访问：
  - 目标 S3 Bucket
  - Access Point

### 三层安全
1. VPC Endpoint Policy
2. Access Point Policy
3. S3 Bucket Policy

## 考试要点

- Access Points 简化大型 Bucket 的安全管理
- 每个 AP 有独立 DNS + Policy
- VPC Origin 需要 VPC Endpoint
- 三层安全策略

## English Short Summary

S3 Access Points simplify security management for large S3 buckets by distributing access control across multiple access points, each with its own DNS name and Access Point Policy (similar to bucket policy). Example: Finance AP (read/write to finance/ prefix), Sales AP (read/write to sales/), Analytics AP (read-only to both). Origin can be Internet or VPC. For VPC origin, create a VPC Endpoint to connect privately; the VPC Endpoint Policy must allow access to both the target bucket and access point, creating three-layer security (VPC Endpoint → Access Point → Bucket).

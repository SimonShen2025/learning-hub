---
title: "CloudFront - ALB/EC2 as an Origin"
lectureId: 167
section: 15
sectionTitle: "CloudFront & AWS Global Accelerator"
date: "2026-03-05"
tags: ["CloudFront", "ALB", "EC2", "VPC Origin"]
---

## 中文短总结

本讲介绍 CloudFront 连接 ALB/EC2 的两种方式。**新方式：VPC Origin**（推荐）——直接从私有子网中的 ALB/NLB/EC2 分发内容，后端保持私有最安全。**旧方式：Public Network**——EC2/ALB 必须为 Public，需要将所有 CloudFront Edge Location 的公共 IP 加入 Security Group 白名单，风险在于如果 Security Group 被修改则后端暴露。VPC Origin 更安全更简单是首选方案。

## 中文长总结

### 新方式：VPC Origin（推荐）
- 直接连接**私有子网**中的后端
- 支持 Private ALB、NLB、EC2
- 架构：CloudFront → VPC Origin → Private Backend
- **最安全**：后端完全私有

### 旧方式：Public Network
- EC2/ALB 必须**公开**
- 需要将 CloudFront Edge Location **公共 IP** 加入 Security Group
- EC2：Security Group 允许 Edge Location IP
- ALB：Security Group 允许 Edge Location IP，EC2 可以私有

### 风险
- Security Group 被修改 → 后端可能暴露
- 管理 Edge Location IP 列表繁琐

## 考试要点

- **VPC Origin** = 新推荐方式，后端保持私有
- 旧方式需要 Public ALB/EC2 + Security Group 白名单
- VPC Origin 更安全更简单

## English Short Summary

Two ways to connect CloudFront to ALB/EC2. **New way (VPC Origin)**: directly delivers content from private subnet applications (ALB/NLB/EC2) — most secure, everything stays private. **Old way (Public Network)**: EC2/ALB must be public, must whitelist all CloudFront edge location public IPs in security groups — tedious and risky if security groups are modified. VPC Origin is the recommended, more secure approach.

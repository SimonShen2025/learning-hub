---
title: "Route 53 CNAME vs Alias"
lectureId: 107
section: 10
sectionTitle: "Route 53"
date: "2026-03-05"
tags: ["Route 53", "CNAME", "Alias", "Zone Apex"]
---

## 中文短总结

本讲深入讲解 CNAME 和 Alias Record 的区别——这是考试重点。CNAME 将主机名指向另一个主机名，**不能用于 Zone Apex**（如 example.com）。Alias 是 Route 53 特有功能，将主机名指向 AWS 资源，可用于 **Root Domain 和 Non-Root Domain**，查询**免费**，自带健康检查，TTL 由 Route 53 自动设置（不可修改），类型只能是 A 或 AAAA。Alias 目标包括 ELB、CloudFront、API Gateway、Elastic Beanstalk、S3 Websites、VPC Interface Endpoints、Global Accelerator 和同 Hosted Zone 的 Route 53 记录。**重要：EC2 DNS 名称不能作为 Alias 目标**。

## 中文长总结

### CNAME Record
- 将主机名指向**另一个主机名**
- **只能用于非根域名**（Non-Root Domain）
  - ✅ www.example.com → 可以
  - ❌ example.com → **不可以**（Zone Apex 限制）

### Alias Record（Route 53 特有）
- 将主机名指向 **AWS 资源**
- **可用于 Root Domain 和 Non-Root Domain**（解决 Zone Apex 问题）
- **查询免费**
- 内置**健康检查**能力
- **TTL 由 Route 53 自动设置**，不可手动修改
- 类型只能是 **A** 或 **AAAA**（IPv4 或 IPv6）
- 是 DNS 功能的扩展（Route 53 独有）
- 底层 IP 变化时自动识别

### Alias 目标列表
- ✅ Elastic Load Balancer (ELB)
- ✅ CloudFront Distribution
- ✅ API Gateway
- ✅ Elastic Beanstalk Environment
- ✅ S3 Website（S3 作为网站时，不是普通 S3 Bucket）
- ✅ VPC Interface Endpoint
- ✅ Global Accelerator
- ✅ 同一 Hosted Zone 中的其他 Route 53 Record
- ❌ **EC2 DNS Name**（不能作为 Alias 目标）

### 演示关键点
- CNAME 可用于子域名（如 myapp.example.com → ALB DNS）
- CNAME **不能**用于 Zone Apex（example.com → ALB DNS → 报错）
- Alias 可用于 Zone Apex（example.com → ALB → 成功）

## 考试要点

- CNAME **不能**用于 Zone Apex，Alias **可以**
- Alias 查询**免费**
- Alias 只能是 **A 或 AAAA** 类型
- Alias TTL **不可手动设置**
- **EC2 DNS Name 不能作为 Alias 目标**（必考点）
- Alias 目标必须是 AWS 资源

## English Short Summary

CNAME maps a hostname to another hostname but cannot be used at the Zone Apex (e.g., example.com). Alias is Route 53-specific, mapping hostnames to AWS resources, working for both root and non-root domains, free of charge, with native health checks and auto-managed TTL. Alias type must be A or AAAA. Valid targets: ELB, CloudFront, API Gateway, Elastic Beanstalk, S3 Websites, VPC Interface Endpoints, Global Accelerator, same-zone Route 53 records. EC2 DNS names CANNOT be Alias targets — a key exam point.

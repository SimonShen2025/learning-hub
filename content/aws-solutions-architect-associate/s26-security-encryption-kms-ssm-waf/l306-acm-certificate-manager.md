---
title: "AWS Certificate Manager (ACM)"
lectureId: 306
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [acm, tls, ssl, certificate, alb, cloudfront, api-gateway, route53]
---

## 中文短总结

AWS Certificate Manager（ACM）管理 TLS/SSL 证书。公共证书免费，自动续期。集成：ALB/CLB/NLB、CloudFront、API Gateway。**不能用于 EC2 实例**。申请流程：列出域名（FQDN 或通配符）→ DNS 验证（推荐，Route 53 自动集成）或邮件验证 → 自动颁发+到期前 60 天自动续期。导入的外部证书无自动续期：ACM 到期前 45 天发 EventBridge 每日事件 或用 Config 规则 `acm-certificate-expiration-check` 检查。ALB 集成：可配置 HTTP→HTTPS 重定向规则。API Gateway：Edge-Optimized 需证书在 us-east-1（CloudFront），Regional 需证书与 API 同区域。

## 中文长总结

AWS Certificate Manager 是 TLS/SSL 证书管理服务。

**核心特性：**
- 公共 TLS 证书**免费**
- 自动续期（ACM 生成的证书）
- 支持公共和私有证书

**集成服务：**
- ELB（CLB、ALB、NLB）
- CloudFront Distributions
- API Gateway
- ❌ **不能用于 EC2 实例**

**申请公共证书流程：**
1. 列出域名（FQDN 如 corp.example.com 或通配符 *.example.com）
2. 选择验证方式：
   - **DNS 验证**（推荐）：创建 CNAME 记录，Route 53 自动集成
   - **Email 验证**：ACM 发邮件到域名注册联系地址
3. 等待验证 → 证书颁发
4. 自动续期（到期前 60 天）

**导入的外部证书（无自动续期）：**

| 监控方式 | 机制 | 触发时间 |
|---------|------|---------|
| **EventBridge** | ACM 每日发送到期事件 | 到期前 45 天起（可配置） |
| **AWS Config** | `acm-certificate-expiration-check` 规则 | 可配置 |

两种方式都可触发 Lambda/SNS/SQS。

**ALB 集成 — HTTP→HTTPS 重定向：**
```
用户 HTTP → ALB 返回 301 重定向 → 用户 HTTPS → ALB 使用 ACM 证书 → ASG
```

**API Gateway 集成（按端点类型）：**

| 端点类型 | 证书位置 | 原因 |
|---------|---------|------|
| Edge-Optimized | **us-east-1** | 通过 CloudFront，证书必须在 CloudFront 区域 |
| Regional | **与 API 同区域** | 直接在 API Gateway 上 |
| Private | N/A | VPC 内部访问 |

## 考试要点

- ACM 公共证书免费 + 自动续期
- 不能用于 EC2
- DNS 验证推荐（Route 53 集成自动化）
- 导入证书无自动续期：EventBridge（45 天）或 Config 规则
- ALB：HTTP→HTTPS 重定向
- API GW Edge-Optimized：证书必须在 us-east-1
- API GW Regional：证书与 API 同区域

## English Short Summary

AWS Certificate Manager (ACM) manages TLS/SSL certificates. Public certificates are free with automatic renewal. Integrates with ALB/CLB/NLB, CloudFront, API Gateway. **Cannot use with EC2 instances.** Request flow: list domain names (FQDN/wildcard) → DNS validation (recommended, Route 53 auto-integration) or email → auto-issued + auto-renewed 60 days before expiry. Imported certificates have no auto-renewal: ACM sends daily EventBridge events 45 days before expiry, or use Config rule `acm-certificate-expiration-check`. ALB supports HTTP→HTTPS redirect. API Gateway: Edge-Optimized requires cert in us-east-1 (CloudFront); Regional requires cert in same region as API.

---
title: "Web Application Firewall (WAF)"
lectureId: 308
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [waf, firewall, web-acl, layer7, sql-injection, ddos, global-accelerator]
---

## 中文短总结

AWS WAF（Web Application Firewall）保护 Layer 7（HTTP）web 应用。**部署目标：ALB、API Gateway、CloudFront、AppSync、Cognito User Pool**（❌不支持 NLB）。Web ACL 规则：IP 过滤（IP Set 最多 10,000 个）、HTTP Header/Body 过滤、URI 字符串过滤（SQL 注入/XSS 防护）、大小限制、地理位置限制、**Rate-Based Rules**（限制每 IP 请求频率用于 DDoS 防护）。Web ACL 按区域（CloudFront 除外，全局）。Rule Group = 可复用规则集。固定 IP + WAF 组合方案：Global Accelerator（提供固定 IP）+ ALB + WAF。

## 中文长总结

AWS WAF 是 Layer 7 Web 应用防火墙。

**部署位置（考试常考）：**
| 支持 ✅ | 不支持 ❌ |
|---------|----------|
| ALB | **NLB**（Layer 4） |
| API Gateway | EC2 |
| CloudFront | |
| AppSync GraphQL | |
| Cognito User Pool | |

**Web ACL（Web Access Control List）规则类型：**

| 规则 | 说明 |
|------|------|
| **IP 过滤** | IP Set 最多 10,000 个 IP，多规则可扩展 |
| **HTTP Header/Body** | 按请求头/正文过滤 |
| **URI 字符串** | SQL 注入、XSS 防护 |
| **大小限制** | 限制请求大小（如最大 2MB） |
| **Geo Match** | 按国家允许/阻止 |
| **Rate-Based** | 限制每 IP 请求频率（DDoS 防护） |

**Web ACL 作用域：**
- 区域性（ALB/API GW 等）
- 全局（仅 CloudFront）

**Rule Group：** 可复用的规则集合，添加到多个 Web ACL

**固定 IP + WAF 架构：**
```
用户 → Global Accelerator（固定 IP）→ ALB + WAF → EC2 ASG
```
WAF 不支持 NLB → 用 Global Accelerator 为 ALB 提供固定 IP

## 考试要点

- WAF = Layer 7（HTTP），不支持 NLB（Layer 4）
- 部署：ALB / API GW / CloudFront / AppSync / Cognito User Pool
- Rate-Based Rules 用于 DDoS 防护
- 固定 IP + WAF → Global Accelerator + ALB
- IP Set 最多 10,000 个 IP

## English Short Summary

AWS WAF (Web Application Firewall) protects Layer 7 (HTTP) applications. **Deploy on: ALB, API Gateway, CloudFront, AppSync, Cognito User Pool** (NOT NLB). Web ACL rules: IP filtering (IP Set up to 10K), HTTP header/body filtering, URI string protection (SQL injection/XSS), size constraints, geo-match, **rate-based rules** (per-IP request limiting for DDoS). Web ACLs are regional except CloudFront (global). Fixed IP + WAF: use Global Accelerator (fixed IP) + ALB + WAF since WAF doesn't support NLB.

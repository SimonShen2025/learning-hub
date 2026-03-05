---
title: "Firewall Manager"
lectureId: 310
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [firewall-manager, organizations, waf, shield, security-groups]
---

## 中文短总结

AWS Firewall Manager：集中管理 AWS 组织内所有账号的防火墙规则。可管理的策略类型：WAF 规则（ALB/API GW/CloudFront）、Shield Advanced、安全组（EC2/ALB/ENI）、Network Firewall（VPC 级）、Route 53 Resolver DNS Firewall。策略按区域创建，应用到所有账号。自动应用到新创建的资源。三者配合：WAF（单次配置）→ Firewall Manager（跨账号自动化）→ Shield Advanced（DDoS 防护+DRT+自动 WAF 规则）。

## 中文长总结

AWS Firewall Manager 是组织级防火墙集中管理服务。

**可管理的安全策略：**

| 策略类型 | 保护资源 |
|---------|---------|
| **WAF 规则** | ALB, API Gateway, CloudFront |
| **Shield Advanced** | ALB, CLB, NLB, Elastic IP, CloudFront |
| **安全组** | EC2, ALB, ENI |
| **Network Firewall** | VPC |
| **Route 53 Resolver DNS Firewall** | DNS |

**核心特性：**
- 策略按**区域**创建
- 自动应用到组织内**所有账号**
- 新建资源**自动应用**规则（如新建 ALB 自动附加 WAF 规则）

**WAF vs Shield vs Firewall Manager 协作：**

| 服务 | 定位 | 使用场景 |
|------|------|---------|
| **WAF** | 定义 Web ACL 规则 | 单次配置，保护单个资源 |
| **Firewall Manager** | 跨账号/跨资源自动化 | 多账号统一管理+新资源自动保护 |
| **Shield Advanced** | DDoS 高级防护 | 频繁 DDoS 攻击场景 |

三者互补使用：WAF 定义规则 → Firewall Manager 跨组织部署 → Shield Advanced 提供 DDoS 防护+DRT+自动 WAF 规则。

## 考试要点

- Firewall Manager = 跨组织集中管理防火墙规则
- 自动应用到新建资源
- 管理 WAF/Shield/安全组/Network Firewall/DNS Firewall
- WAF 单次配置 vs Firewall Manager 多账号自动化
- 三者互补使用

## English Short Summary

AWS Firewall Manager: centralized management of firewall rules across all accounts in an AWS Organization. Manages: WAF rules (ALB/API GW/CloudFront), Shield Advanced, Security Groups (EC2/ALB/ENI), Network Firewall (VPC), Route 53 DNS Firewall. Policies created per-region, applied to all accounts. **Auto-applies to newly created resources.** Collaboration: WAF (define rules) → Firewall Manager (cross-account automation) → Shield Advanced (DDoS protection + DRT + auto WAF rules). All three are complementary.

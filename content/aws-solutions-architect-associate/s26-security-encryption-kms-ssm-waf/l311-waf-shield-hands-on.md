---
title: "WAF & Shield - Hands On"
lectureId: 311
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [waf, shield, firewall-manager, hands-on]
---

## 中文短总结

实操演示 WAF、Shield、Firewall Manager：①WAF 创建 Web ACL（区域性或 CloudFront 全局），关联 ALB/API GW 等资源，添加规则（AWS 托管规则如 Bot Control、IP Reputation、Anonymous IPs、Known Bad Inputs），每条规则有容量（最大 1500），默认操作 Allow/Block②IP Sets 白/黑名单③Shield Advanced（$3,000/月）④Firewall Manager 创建策略（按区域，$100/月/策略）：WAF/Shield/安全组/Network Firewall，应用到组织所有账号。三者各司其职，协同保护。

## English Short Summary

Hands-on WAF, Shield, Firewall Manager: (1) WAF — create Web ACL (regional or CloudFront global), associate resources (ALB/API GW), add rules (AWS managed: Bot Control, IP Reputation, Anonymous IPs, Known Bad Inputs), max capacity 1500, default Allow/Block action; (2) IP Sets for allow/block lists; (3) Shield Advanced ($3,000/month); (4) Firewall Manager — create policies per region ($100/month/policy) for WAF/Shield/Security Groups/Network Firewall applied across all organization accounts. Three services work together for comprehensive protection.

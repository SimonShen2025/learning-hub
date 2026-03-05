---
title: "3rd Party Domains & Route 53"
lectureId: 118
section: 10
sectionTitle: "Route 53"
date: "2026-03-05"
tags: ["Route 53", "Domain Registrar", "DNS Service", "GoDaddy"]
---

## 中文短总结

本讲区分了 Domain Registrar 和 DNS Service 的概念。域名可以在任意注册商购买（如 GoDaddy、Google Domains），但 DNS 服务可以使用不同的提供商。可以在 GoDaddy 购买域名，然后使用 **Route 53 管理 DNS 记录**——只需在 Route 53 创建 Public Hosted Zone，获取 NS（Name Server）记录，然后在第三方注册商网站上将 Name Server 更新为 Route 53 的 Name Server 即可。Domain Registrar ≠ DNS Service，虽然通常注册商自带 DNS 功能。

## 中文长总结

### Domain Registrar vs DNS Service
- **Domain Registrar**：购买和注册域名的服务商（GoDaddy、Route 53 等）
- **DNS Service**：管理 DNS 记录的服务
- 通常注册商自带 DNS 功能，但**可以分开使用**

### 在第三方注册域名 + Route 53 管理 DNS
1. 在第三方注册商（如 GoDaddy）购买域名
2. 在 Route 53 创建 **Public Hosted Zone**
3. 获取 Route 53 Hosted Zone 的 **4 个 NS（Name Server）**记录
4. 在第三方注册商网站上，将域名的 NS 更新为 Route 53 的 NS
5. 此后所有 DNS 查询都由 Route 53 处理

## 考试要点

- Domain Registrar ≠ DNS Service（可以分开使用）
- 第三方域名 + Route 53 DNS = 更新第三方的 **NS 记录**指向 Route 53
- Route 53 Public Hosted Zone 提供 NS 记录

## English Short Summary

A Domain Registrar (where you buy domains) is different from a DNS Service (where you manage DNS records). You can buy a domain from GoDaddy but use Route 53 as your DNS service by creating a Public Hosted Zone in Route 53 and updating the Name Server (NS) records on the third-party registrar to point to Route 53's name servers.

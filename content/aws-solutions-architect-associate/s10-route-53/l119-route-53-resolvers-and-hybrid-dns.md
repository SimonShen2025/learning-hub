---
title: "Route 53 Resolvers & Hybrid DNS"
lectureId: 119
section: 10
sectionTitle: "Route 53"
date: "2026-03-05"
tags: ["Route 53", "Resolver", "Hybrid DNS", "Inbound Endpoint", "Outbound Endpoint"]
---

## 中文短总结

本讲介绍了 Route 53 Resolver 和 Hybrid DNS。默认 Route 53 Resolver 解析本地 EC2 实例、Private Hosted Zone 和公共域名的 DNS 查询。但如果需要 AWS Cloud DNS 与本地网络 DNS **双向互通**（Hybrid DNS），则需要 Resolver Endpoint。**Inbound Endpoint**：允许本地数据中心的 DNS Resolver 通过 VPN/Direct Connect 查询 AWS 的域名（本地 → AWS）。**Outbound Endpoint**：允许 AWS EC2 实例查询本地数据中心的域名（AWS → 本地）。前提条件是 AWS 和本地数据中心之间已建立 VPN 或 Direct Connect 连接。

## 中文长总结

### Route 53 Resolver 默认行为
- 解析本地 EC2 实例域名
- 解析 Private Hosted Zone 记录
- 解析公共域名（Public Name Server）

### Hybrid DNS 需求
- AWS Cloud DNS 与本地网络（On-premises）DNS 需要双向解析
- 需要通过 **VPN** 或 **Direct Connect** 建立网络连接

### Resolver Endpoint

#### Inbound Endpoint（入站端点）
- **方向**：On-premises → AWS
- **用途**：允许本地 DNS Resolver 解析 AWS 域名（如 Private Hosted Zone）
- **流程**：本地服务器 → 本地 DNS Resolver → Resolver Inbound Endpoint → Route 53 Resolver

#### Outbound Endpoint（出站端点）
- **方向**：AWS → On-premises
- **用途**：允许 AWS EC2 实例解析本地域名（如 web.onpremise.private）
- **流程**：EC2 实例 → Resolver Outbound Endpoint → 本地 DNS Resolver

## 考试要点

- Hybrid DNS 双向互通需要 **Resolver Endpoint**
- **Inbound**：本地 → AWS（本地查询 AWS 域名）
- **Outbound**：AWS → 本地（AWS 查询本地域名）
- 前提：需要 **VPN 或 Direct Connect** 连接

## English Short Summary

Route 53 Resolver by default resolves local EC2, Private Hosted Zone, and public DNS queries. For Hybrid DNS (bidirectional resolution between AWS and on-premises), Resolver Endpoints are needed. Inbound Endpoint allows on-premises DNS to resolve AWS domain names (on-premises → AWS). Outbound Endpoint allows AWS EC2 instances to resolve on-premises domain names (AWS → on-premises). Both require VPN or Direct Connect connectivity between AWS and the data center.

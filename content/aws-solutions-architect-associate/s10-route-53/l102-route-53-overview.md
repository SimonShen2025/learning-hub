---
title: "Route 53 Overview"
lectureId: 102
section: 10
sectionTitle: "Route 53"
date: "2026-03-05"
tags: ["Route 53", "DNS", "Hosted Zone", "SLA"]
---

## 中文短总结

本讲介绍了 Amazon Route 53 的核心概念。Route 53 是高可用、可扩展的全托管**权威 DNS**（Authoritative = 用户可以更新 DNS 记录），同时也是域名注册商。它是 AWS 中唯一提供 **100% SLA** 的服务。名字来源于 DNS 传统端口 53。DNS Records 包含域名/子域名、记录类型（A / AAAA / CNAME / NS）、值、路由策略和 TTL。Hosted Zone 分为 Public（响应公共客户端查询）和 Private（仅 VPC 内有效），每个 Hosted Zone 每月 $0.50。重点记录类型：A（IPv4）、AAAA（IPv6）、CNAME（主机名→主机名，不可用于 Zone Apex）、NS（Name Server）。

## 中文长总结

### Route 53 基础
- **高可用、可扩展、全托管**的权威 DNS 服务
- **Authoritative**：用户有完全控制权，可更新 DNS 记录
- 也是**域名注册商**（Domain Registrar）
- 支持**资源健康检查**
- AWS 唯一提供 **100% 可用性 SLA** 的服务
- 名称来源：DNS 传统端口号 **53**

### DNS Record 组成
- **Domain/Subdomain Name**：如 example.com
- **Record Type**：A、AAAA、CNAME、NS 等
- **Value**：如 12.34.56.78
- **Routing Policy**：Route 53 如何响应查询
- **TTL**：Time to Live，记录在 DNS resolver 中的缓存时间

### 重要记录类型（必考）
| 类型 | 说明 | 示例 |
|------|------|------|
| **A** | 主机名 → IPv4 | example.com → 1.2.3.4 |
| **AAAA** | 主机名 → IPv6 | example.com → ::1 |
| **CNAME** | 主机名 → 另一个主机名 | app.example.com → blabla.com |
| **NS** | Hosted Zone 的 Name Server | 控制如何路由域名流量 |

### CNAME 限制
- **不能**用于 DNS namespace 的顶级节点（Zone Apex）
- 例如：不能为 example.com 创建 CNAME，但可以为 www.example.com 创建

### Hosted Zone
- DNS 记录的容器，定义如何路由域名流量
- **Public Hosted Zone**：响应来自互联网的公共查询
- **Private Hosted Zone**：仅在 VPC 内有效，用于私有域名（如 app.company.internal）
- 费用：每个 Hosted Zone **$0.50/月**

## 考试要点

- Route 53 是 AWS 唯一 **100% SLA** 的服务
- CNAME **不能用于 Zone Apex**（如 example.com），只能用于子域名
- A = IPv4，AAAA = IPv6，CNAME = 主机名→主机名，NS = Name Server
- Public vs Private Hosted Zone 的区别
- 每个 Hosted Zone $0.50/月
- 域名注册最低 $12/年

## English Short Summary

Amazon Route 53 is a highly available, scalable, fully managed authoritative DNS service and domain registrar — the only AWS service with a 100% availability SLA (named after DNS port 53). DNS records contain domain name, record type, value, routing policy, and TTL. Key record types: A (hostname → IPv4), AAAA (hostname → IPv6), CNAME (hostname → hostname, cannot be used at Zone Apex), NS (name servers). Hosted Zones are containers for records: Public (answers public queries) and Private (only within VPC). Each hosted zone costs $0.50/month.

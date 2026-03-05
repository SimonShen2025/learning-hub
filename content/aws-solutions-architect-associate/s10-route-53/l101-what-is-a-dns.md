---
title: "What is a DNS?"
lectureId: 101
section: 10
sectionTitle: "Route 53"
date: "2026-03-05"
tags: ["DNS", "Domain Name System", "Networking"]
---

## 中文短总结

本讲介绍了 DNS（Domain Name System）的基础概念。DNS 将人类可读的主机名（如 www.google.com）翻译为目标服务器的 IP 地址，是互联网的核心基础设施。关键术语包括：Domain Registrar（域名注册商，如 Route 53 / GoDaddy）、DNS Records（A / AAAA / CNAME / NS 等）、Zone File（包含所有 DNS 记录）、Name Server（解析 DNS 查询的服务器）、TLD（Top Level Domain，如 .com）、SLD（Second Level Domain，如 amazon.com）。DNS 查询流程：浏览器 → Local DNS Server → Root DNS Server → TLD DNS Server → SLD DNS Server → 获取 IP 地址并缓存。

## 中文长总结

### DNS 基础
- DNS = Domain Name System，将主机名翻译为 IP 地址
- 互联网的**骨干基础设施**
- 域名层级结构：.com → example.com → www.example.com

### 关键术语
- **Domain Registrar**：域名注册商（Route 53、GoDaddy 等）
- **DNS Records**：A、AAAA、CNAME、NS 等类型
- **Zone File**：包含所有 DNS 记录的文件
- **Name Server**：解析 DNS 查询的服务器
- **TLD**：Top Level Domain（.com、.us、.gov 等）
- **SLD**：Second Level Domain（amazon.com、google.com）
- **FQDN**：Fully Qualified Domain Name（完整的域名）

### DNS 查询流程（递归查询）
1. 浏览器请求 example.com
2. → **Local DNS Server**（由公司或 ISP 管理）
3. → **Root DNS Server**（ICANN 管理）→ 返回 .com Name Server 地址
4. → **TLD DNS Server**（IANA 管理）→ 返回 example.com Name Server 地址
5. → **SLD DNS Server**（域名注册商管理，如 Route 53）→ 返回 A Record IP 地址
6. Local DNS Server **缓存结果**，返回给浏览器
7. 浏览器使用 IP 地址访问 Web Server

## 考试要点

- DNS 将主机名翻译为 IP 地址
- 理解 TLD、SLD、FQDN 的区别
- DNS 查询是递归过程：Root → TLD → SLD
- Local DNS Server 会缓存查询结果

## English Short Summary

This lecture explains DNS (Domain Name System) fundamentals. DNS translates human-friendly hostnames into IP addresses and is the backbone of the internet. Key terminology includes Domain Registrar, DNS Records (A/AAAA/CNAME/NS), Zone File, Name Server, TLD (Top Level Domain), and SLD (Second Level Domain). DNS resolution is a recursive process: browser → Local DNS Server → Root DNS Server (ICANN) → TLD DNS Server (IANA) → SLD DNS Server (domain registrar like Route 53) → returns IP address, which is cached by the Local DNS Server.

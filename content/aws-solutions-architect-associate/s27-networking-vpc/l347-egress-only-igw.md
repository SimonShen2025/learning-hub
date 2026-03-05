---
title: "Egress Only Internet Gateway"
lectureId: 347
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [egress-only-igw, ipv6, nat, outbound]
---

## 中文短总结

Egress-Only Internet Gateway：专为 IPv6 设计的仅出站网关（类似 NAT Gateway 但用于 IPv6）。允许 IPv6 实例发起出站连接到互联网，但阻止互联网发起入站连接。IPv6 都是公共地址，因此需要此服务保护私有实例。**路由表配置**：::/0 → Egress-Only IGW。对比：NAT Gateway 用于 IPv4 私有到公共的出站；Egress-Only IGW 用于 IPv6 的出站。

## 中文长总结

Egress-Only Internet Gateway 解决 IPv6 实例的出站问题。

**为什么需要：**
- IPv6 地址全部**公共可路由**
- 如果用普通 IGW，互联网可以主动连接到实例
- Egress-Only IGW 只允许**出站**连接

**对比：**

| 特性 | NAT Gateway | Egress-Only IGW |
|------|-------------|-----------------|
| 协议 | **IPv4** | **IPv6** |
| 方向 | 出站 only | 出站 only |
| 入站 | ❌ 阻止 | ❌ 阻止 |

**路由表配置：**
```
IPv4 私有子网：0.0.0.0/0 → NAT Gateway
IPv6 私有子网：::/0 → Egress-Only IGW
```

## 考试要点

- Egress-Only IGW = IPv6 版 NAT Gateway
- ::/0 → Egress-Only IGW（私有子网路由表）
- 仅出站，阻止入站

## English Short Summary

Egress-Only Internet Gateway: outbound-only gateway for IPv6 (analogous to NAT Gateway for IPv4). Allows IPv6 instances to initiate outbound connections while blocking inbound from internet. Route table: `::/0 → Egress-Only IGW`. All IPv6 addresses are public, so this protects private instances from unsolicited inbound traffic.

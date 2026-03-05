---
title: "Egress Only Internet Gateway Hands On"
lectureId: 348
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [egress-only-igw, hands-on, ipv6, route-table]
---

## 中文短总结

实操 Egress-Only IGW：①在 VPC 中创建 Egress-Only Internet Gateway②编辑私有子网路由表 → 添加 ::/0 → Eigress-Only IGW③效果：私有子网中的 IPv6 实例可出站访问互联网，但互联网无法主动连入④同时保留 0.0.0.0/0 → NAT GW 路由（IPv4 出站）。两种路由并存：IPv4 走 NAT GW，IPv6 走 Egress-Only IGW。

## English Short Summary

Hands-on Egress-Only IGW: (1) Create Egress-Only Internet Gateway in VPC; (2) Edit private subnet route table → add `::/0 → Egress-Only IGW`; (3) Effect: IPv6 instances in private subnet can access internet outbound, but inbound blocked; (4) IPv4 still routes through NAT GW. Both routes coexist: IPv4 → NAT GW, IPv6 → Egress-Only IGW.

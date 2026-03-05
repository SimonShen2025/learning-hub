---
title: "Internet Gateways & Route Tables Hands On"
lectureId: 324
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [internet-gateway, route-table, hands-on, public-subnet]
---

## 中文短总结

实操演示：①启用子网「Auto-assign public IPv4」设置②创建 IGW（DemoIGW）并附加到 VPC — 仅此步不够，EC2 Instance Connect 仍失败③创建两个路由表（PublicRouteTable、PrivateRouteTable），显式关联子网（而非使用默认隐式关联）④编辑 PublicRouteTable 添加路由：0.0.0.0/0 → IGW⑤验证成功：EC2 Instance Connect 可用，ping google.com 有响应。关键学习：IGW + 路由表两步缺一不可。

## English Short Summary

Hands-on: (1) Enable "Auto-assign public IPv4" on public subnets; (2) Create IGW (DemoIGW) and attach to VPC — not enough alone, EC2 Instance Connect still fails; (3) Create explicit PublicRouteTable and PrivateRouteTable with subnet associations; (4) Edit PublicRouteTable: add route 0.0.0.0/0 → IGW; (5) Verify: EC2 Instance Connect works, ping google.com succeeds. Key lesson: both IGW and route table entry are required.

---
title: "VPC Peering Hands On"
lectureId: 334
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [vpc-peering, hands-on, route-table]
---

## 中文短总结

实操演示 VPC Peering：①验证跨 VPC 无法连通（curl 超时）②创建 Peering Connection：DemoVPC（requester）↔ 默认 VPC（accepter）③**接受 Peering 请求**（同账号可自行接受，跨账号可拒绝）④仅接受还不够，curl 仍失败⑤**编辑双方路由表**：PublicRouteTable 添加默认 VPC CIDR → Peering Connection；默认 VPC 路由表添加 10.0.0.0/16 → Peering Connection⑥验证：curl 目标实例 IP 成功返回 hello world。关键：接受 + 双向路由表更新。

## English Short Summary

Hands-on VPC Peering: (1) Verify cross-VPC connectivity fails (curl timeout); (2) Create Peering Connection: DemoVPC ↔ Default VPC; (3) Accept peering request; (4) Still fails without route table updates; (5) Edit both route tables: add peer VPC CIDR → Peering Connection in each; (6) Verify: curl returns "hello world". Key: accept + update route tables on both sides.

---
title: "IPv6 for VPC - Hands On"
lectureId: 346
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [ipv6, vpc, hands-on, dual-stack]
---

## 中文短总结

实操为 VPC 启用 IPv6：①VPC 编辑 CIDRs → 添加 IPv6 CIDR（Amazon-provided）②子网编辑 IPv6 CIDRs → 分配子网级 IPv6 CIDR③编辑路由表添加 ::/0 → IGW 路由④子网设置 Auto-assign IPv6 地址⑤EC2 Actions → Networking → 管理 IP 地址 → 启用 IPv6⑥更新安全组允许 IPv6 入站（如 ::/0 HTTP）⑦验证 IPv6 地址可公共访问。注意区分 IGW（IPv6 公共访问）和 Egress Only IGW（IPv6 仅出站）。

## English Short Summary

Hands-on IPv6 for VPC: (1) Edit VPC CIDRs → add Amazon-provided IPv6 CIDR; (2) Edit subnet IPv6 CIDRs; (3) Add route ::/0 → IGW; (4) Enable auto-assign IPv6 on subnet; (5) Assign IPv6 to existing EC2; (6) Update SG to allow IPv6 inbound (::/0 HTTP); (7) Verify public IPv6 access. Note: IGW for full IPv6 access vs Egress-only IGW for outbound-only.

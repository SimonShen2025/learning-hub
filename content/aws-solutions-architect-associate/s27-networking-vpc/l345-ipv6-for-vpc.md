---
title: "IPv6 for VPC"
lectureId: 345
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [ipv6, vpc, dual-stack, troubleshooting]
---

## 中文短总结

VPC 中的 IPv6：所有 IPv6 地址都是公共可路由的，格式如 2001:db8:..。AWS VPC 支持**双栈模式**（IPv4 + IPv6 同时启用）。为 VPC 和子网分别添加 IPv6 CIDR。EC2 获得私有 IPv4 + 公共 IPv6（两个地址）。通过 IGW 同时与 IPv4 和 IPv6 通信。**考试故障排查**：无法在子网中启动 EC2 实例 → 原因**不是没有可用 IPv6 地址**（IPv6 地址空间几乎无限），而是**IPv4 地址耗尽** → 解决方案：给 VPC 添加新的 IPv4 CIDR 范围。

## 中文长总结

IPv6 在 AWS VPC 中的应用。

**IPv6 基础：**
- 每个 IPv6 地址都是**公共可路由**的
- 格式：128 位，如 `2001:db8:3333:4444:5555:6666:7777:8888`
- 地址空间：3.4 × 10^38（几乎无限）

**VPC 双栈模式：**
```
EC2 实例
├── 私有 IPv4 地址（来自 VPC CIDR）
└── 公共 IPv6 地址（来自 IPv6 CIDR）
        ↓
    IGW（同时支持 IPv4/IPv6）
        ↓
    互联网
```

**启用步骤：**
1. VPC 添加 IPv6 CIDR
2. 子网添加 IPv6 CIDR 范围
3. 配置路由表（::/0 → IGW）
4. EC2 在启动时可自动获得 IPv6 地址

**考试陷阱（重要）：**
> Q: "无法在子网中启动新的 EC2 实例"
> A: **不是 IPv6 地址不够**（IPv6 几乎无限）
> A: **是 IPv4 地址耗尽**
> 解决方案：**给 VPC 添加新的 IPv4 CIDR 范围**

## 考试要点

- IPv6 都是公共地址，没有私有 IPv6 范围
- VPC 双栈 = IPv4 + IPv6 同时启用
- 无法启动 EC2 → IPv4 耗尽（不是 IPv6）→ 添加 IPv4 CIDR
- EC2 至少有 1 个私有 IPv4（不能禁用 IPv4）

## English Short Summary

IPv6 for VPC: all IPv6 addresses are publicly routable. AWS VPC supports **dual-stack mode** (IPv4 + IPv6). EC2 gets private IPv4 + public IPv6. **Exam trap**: cannot launch EC2 in subnet → **not IPv6 exhaustion** (IPv6 is virtually unlimited) → it's **IPv4 exhaustion** → solution: add new IPv4 CIDR range to VPC. Cannot disable IPv4 in VPC.

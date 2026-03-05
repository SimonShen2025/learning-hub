---
title: "VPC Peering"
lectureId: 333
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [vpc-peering, cross-account, cross-region, route-table]
---

## 中文短总结

VPC Peering：通过 AWS 私有网络连接两个 VPC，使它们像在同一网络中。**前提：CIDR 不能重叠**。**核心特性：非传递性**（A↔B + B↔C ≠ A↔C，需单独建立 A↔C Peering）。支持跨账号、跨区域。建立 Peering 后**必须更新双方路由表**。可在 Peering VPC 的安全组中引用对方的安全组（同区域跨账号）。

## 中文长总结

VPC Peering 连接两个 VPC，使其网络互通。

**核心规则：**
1. **CIDR 不能重叠** — 否则无法 Peering
2. **非传递性（Not transitive）** — 每对 VPC 需独立建立 Peering
3. **必须更新路由表** — 两个 VPC 的子网路由表都要添加对方 CIDR → Peering Connection

**支持范围：**
- ✅ 同账号 VPC
- ✅ 跨账号 VPC
- ✅ 跨区域 VPC

**安全组引用：**
- 可在安全组中引用 Peering VPC 的安全组（同区域跨账号）
- 不需要用 IP/CIDR 作为来源

**非传递性示意：**
```
A ↔ B ✅  B ↔ C ✅  A ↔ C ❌（需单独建立）
```

## 考试要点

- VPC Peering 非传递性（最常考）
- CIDR 不能重叠
- 必须更新两边的路由表
- 支持跨账号跨区域
- 可引用对方安全组

## English Short Summary

VPC Peering: connects two VPCs via AWS private network. **CIDRs must not overlap**. **Key: non-transitive** (A↔B + B↔C ≠ A↔C, must establish A↔C separately). Supports cross-account, cross-region. **Must update route tables on both sides**. Can reference security groups from peered VPCs (same region, cross-account).

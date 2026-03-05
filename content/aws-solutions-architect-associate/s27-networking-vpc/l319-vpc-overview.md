---
title: "VPC Overview"
lectureId: 319
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [vpc, cidr, private-ip]
---

## 中文短总结

VPC = Virtual Private Cloud。每个区域最多 5 个 VPC（软限制可增加）。每个 VPC 最多 5 个 CIDR。CIDR 最小 /28（16 个 IP），最大 /16（65,536 个 IP）。VPC 是私有资源，只能使用私有 IP 范围（10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16）。**核心原则：VPC CIDR 不能与其他 VPC 或企业网络重叠**，否则无法互连。

## 中文长总结

VPC 的基本概念和创建规则：

**VPC 限制：**
- 每个区域最多 **5 个 VPC**（软限制，可提高）
- 每个 VPC 最多 **5 个 CIDR**
- CIDR 大小限制：
  - 最小 /28 = 16 个 IP
  - 最大 /16 = 65,536 个 IP

**IP 范围规则：**
- VPC 只能使用私有 IP 范围
- 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16

**关键设计原则：**
VPC CIDR **不能与其他网络重叠**（包括其他 VPC 和公司内网），因为如果需要互连（VPC Peering、VPN 等），重叠的 IP 范围会导致冲突。

## 考试要点

- VPC 每区域最多 5 个（软限制）
- 每个 VPC 最多 5 个 CIDR
- CIDR 范围 /28 到 /16
- 只能使用私有 IP 范围
- CIDR 不能重叠

## English Short Summary

VPC = Virtual Private Cloud. Max 5 per region (soft limit). Each VPC supports up to 5 CIDRs. CIDR range: min /28 (16 IPs) to max /16 (65,536 IPs). Only private IP ranges allowed. **Critical**: VPC CIDRs must not overlap with other VPCs or corporate networks to enable interconnection.

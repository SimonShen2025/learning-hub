---
title: "Subnet Hands On"
lectureId: 322
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [subnet, hands-on, public-subnet, private-subnet]
---

## 中文短总结

实操创建 4 个子网（跨 2 个 AZ 实现高可用）：PublicSubnetA（10.0.0.0/24，256 IP），PublicSubnetB（10.0.1.0/24），PrivateSubnetA（10.0.16.0/20，4096 IP），PrivateSubnetB（10.0.32.0/20）。公共子网用较小 CIDR（放负载均衡器等），私有子网用较大 CIDR（放应用实例）。IP 不重叠，CIDR 连续分配。目前所有子网看起来相同，后续讲解如何区分公共/私有。

## English Short Summary

Hands-on: create 4 subnets across 2 AZs for HA: PublicSubnetA (10.0.0.0/24, 256 IPs), PublicSubnetB (10.0.1.0/24), PrivateSubnetA (10.0.16.0/20, 4096 IPs), PrivateSubnetB (10.0.32.0/20). Public subnets use smaller CIDRs (for LBs), private use larger (for app instances). Non-overlapping CIDRs. All subnets look the same until we configure what makes them public vs private.

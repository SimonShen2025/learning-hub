---
title: "VPC Hands On"
lectureId: 320
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [vpc, hands-on, cidr]
---

## 中文短总结

实操创建 VPC：选择 VPC only（不用 Wizard），命名 DemoVPC，CIDR 10.0.0.0/16（65,536 IP），Tenancy 选 Default（Dedicated 很贵）。创建后自动生成主路由表和主 NACL。可通过 Action → Edit CIDRs 添加更多 IPv4 CIDR（最多 5 个）。也可添加 IPv6 CIDR。

## English Short Summary

Hands-on VPC creation: Choose "VPC only" (not Wizard), name DemoVPC, CIDR 10.0.0.0/16 (65,536 IPs), Default tenancy (Dedicated is expensive). Auto-creates main route table and main NACL. Can add additional IPv4 CIDRs (up to 5) via Action → Edit CIDRs. IPv6 CIDRs also supported.

---
title: "CIDR, Private vs Public IP"
lectureId: 317
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [cidr, ip-address, subnet-mask, private-ip, public-ip, ipv4]
---

## 中文短总结

CIDR（Classless Inter-Domain Routing）定义 IP 地址范围。组成：Base IP + Subnet Mask（/N）。/32 = 1 个 IP，/24 = 256 个（最后一个 octet 可变），/16 = 65,536 个（最后两个 octet 可变），/0 = 全部 IP。**私有 IP 范围**：10.0.0.0/8（大型网络）、172.16.0.0/12（AWS 默认 VPC）、192.168.0.0/16（家庭网络）。其他 IP 均为公共 IP。在线工具 ipaddressguide.com 可计算 CIDR 范围。

## 中文长总结

CIDR 是 IP 地址分配方法，在安全组规则和 AWS 网络中广泛使用。

**CIDR 两个组成部分：**
1. **Base IP**：范围起始 IP（如 10.0.0.0、192.168.0.0）
2. **Subnet Mask（/N）**：定义多少位可变

**Subnet Mask 速记：**

| /N | 可变 Octet | IP 数量 | 计算 |
|----|-----------|---------|------|
| /32 | 无 | 1 | 2^0 |
| /24 | 最后 1 个 | 256 | 2^8 |
| /16 | 最后 2 个 | 65,536 | 2^16 |
| /8 | 最后 3 个 | 16,777,216 | 2^24 |
| /0 | 全部 | ~43 亿 | 2^32 |

**常见示例：**
- 192.168.0.0/24 → 256 个 IP（.0 到 .255）
- 192.168.0.0/16 → 65,536 个 IP
- 134.56.78.123/32 → 仅 1 个 IP
- 0.0.0.0/0 → 所有 IP

**私有 IP 地址范围（IANA 定义）：**

| 范围 | 用途 |
|------|------|
| **10.0.0.0/8** | 大型网络 |
| **172.16.0.0/12** | AWS 默认 VPC 所在范围 |
| **192.168.0.0/16** | 家庭网络 |

其余所有 IP 地址 = 公共互联网 IP。

## 考试要点

- /32 = 1 个 IP，/24 = 256 个，/16 = 65,536 个，/0 = 全部
- 三个私有 IP 范围：10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16
- VPC 只允许使用私有 IP 范围

## English Short Summary

CIDR (Classless Inter-Domain Routing) defines IP ranges using Base IP + Subnet Mask (/N). /32=1 IP, /24=256 (last octet varies), /16=65,536, /0=all IPs. **Private IP ranges**: 10.0.0.0/8 (large networks), 172.16.0.0/12 (AWS default VPC), 192.168.0.0/16 (home networks). All other IPs are public.

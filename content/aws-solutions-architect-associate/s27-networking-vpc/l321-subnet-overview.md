---
title: "Subnet Overview"
lectureId: 321
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [subnet, cidr, reserved-ip, availability-zone]
---

## 中文短总结

子网是 VPC 内的 IPv4 子范围，绑定到特定 AZ。**AWS 在每个子网中保留 5 个 IP**：首个（网络地址）、第 2 个（VPC 路由器）、第 3 个（Amazon DNS）、第 4 个（未来使用）、最后一个（广播地址，但 AWS 不支持广播）。**考试技巧**：需要 29 个 IP → /27（32 IP）不够（减 5 = 27），需选 /26（64 IP，减 5 = 59 可用）。

## 中文长总结

子网是 VPC 中的 IP 子范围，每个子网绑定到一个可用区。

**AWS 保留 5 个 IP 地址（每个子网）：**

以 CIDR 10.0.0.0/24 为例：

| 保留 IP | 用途 |
|---------|------|
| 10.0.0.**0** | 网络地址 |
| 10.0.0.**1** | VPC 路由器 |
| 10.0.0.**2** | Amazon 提供的 DNS |
| 10.0.0.**3** | 保留（未来使用） |
| 10.0.0.**255** | 广播地址（AWS 不支持广播但仍保留） |

**考试计算技巧：**
- 需要 29 个 EC2 实例 IP
- /27 = 32 IP → 32 - 5 = **27**（不够）
- /26 = 64 IP → 64 - 5 = **59**（✅ 满足）

## 考试要点

- 每个子网保留 5 个 IP（首 4 个 + 最后 1 个）
- 选择子网大小时：可用 IP = 2^(32-N) - 5
- 子网绑定到特定 AZ

## English Short Summary

Subnets are IPv4 sub-ranges within a VPC, tied to a specific AZ. **AWS reserves 5 IPs per subnet**: first (network), second (VPC router), third (Amazon DNS), fourth (future use), last (broadcast). **Exam tip**: Need 29 IPs → /27 (32-5=27) insufficient → use /26 (64-5=59).

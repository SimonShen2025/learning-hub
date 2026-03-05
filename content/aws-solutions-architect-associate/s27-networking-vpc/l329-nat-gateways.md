---
title: "NAT Gateways"
lectureId: 329
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [nat-gateway, managed, high-availability, private-subnet]
---

## 中文短总结

NAT Gateway：AWS 托管的 NAT 服务，替代 NAT Instance。特点：更高带宽（5→100 Gbps 自动扩展）、高可用（单 AZ 内冗余）、无需管理、无需安全组。按小时+数据量计费。部署在公共子网，需要 Elastic IP，流量路径：私有子网 → NAT GW → IGW → 互联网。**高可用架构**：每个 AZ 部署一个 NAT GW（AZ 故障互不影响）。

## 中文长总结

NAT Gateway 是 NAT Instance 的托管替代方案。

**NAT Gateway vs NAT Instance 对比：**

| 特性 | NAT Gateway | NAT Instance |
|------|-------------|--------------|
| 管理 | **AWS 托管** | 自行管理 |
| 带宽 | **5-100 Gbps 自动扩展** | 取决于实例类型 |
| 高可用 | **单 AZ 内冗余** | 需自行配置 |
| 安全组 | **不需要** | 需要配置 |
| 维护 | 无 | 需打补丁 |
| 费用 | 按小时 + 数据量 | EC2 实例费 + 数据量 |
| Bastion Host | **不能** | 可以 |
| 公共 IP | Elastic IP | Elastic IP |
| Source/Dest Check | N/A | 必须禁用 |

**高可用架构：**
```
AZ-A: 私有子网 → NAT GW (AZ-A) → IGW → 互联网
AZ-B: 私有子网 → NAT GW (AZ-B) → IGW → 互联网
```
每个 AZ 一个 NAT GW → 一个 AZ 故障不影响另一个。

**流量路径：**
私有子网 EC2 → NAT Gateway（公共子网）→ Internet Gateway → 互联网

## 考试要点

- NAT Gateway = 托管、高带宽、无 SG、按使用量付费
- 每个 AZ 一个 NAT GW 实现高可用
- 不能用作 Bastion Host
- NAT GW 必须有 Elastic IP
- NAT GW + IGW 配合使用
- 考试中 NAT Gateway 通常是正确答案

## English Short Summary

NAT Gateway: AWS managed NAT replacing NAT Instance. Features: higher bandwidth (5→100 Gbps auto-scaling), HA within single AZ, no administration, no security groups needed. Pay per hour + data. Deploy in public subnet with Elastic IP. Traffic: private subnet → NAT GW → IGW → internet. **HA architecture**: one NAT GW per AZ (AZ failure doesn't affect others).

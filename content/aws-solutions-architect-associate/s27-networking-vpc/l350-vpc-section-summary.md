---
title: "VPC Section Summary"
lectureId: 350
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [vpc, summary, networking, exam-review]
---

## 中文短总结

VPC 全面总结：CIDR（IP 范围）→ VPC（可有 5 个 CIDR）→ 子网（绑定 AZ，5 个保留 IP）→ IGW（VPC 级别，用于公共访问）→ Route Table（控制子网进出路由）→ Bastion Host（SSH 跳板机）→ NAT Instance/NAT Gateway（私有子网上网）→ NACL（子网级无状态防火墙）→ SG（实例级有状态防火墙）→ VPC Peering（非传递性互联）→ VPC Endpoints（私有访问 AWS 服务：Gateway=S3/DynamoDB，Interface=其他，PrivateLink）→ VPC Flow Logs（流量日志）→ Site-to-Site VPN（VGW+CGW，公网加密）→ VPN CloudHub（多站点互联）→ Direct Connect（私有专线 >1 月）→ DX Gateway（跨区域多 VPC）→ Transit Gateway（传递性 hub-and-spoke）→ Traffic Mirroring（ENI 流量复制）→ IPv6 + Egress-Only IGW → Network Firewall（L3-L7 VPC 防火墙）。

## 中文长总结

**VPC 核心概念速查表：**

| 概念 | 说明 | 关键考点 |
|------|------|---------|
| **CIDR** | IP 范围定义 | /16 到 /28 |
| **VPC** | 虚拟私有云 | 最多 5 个 CIDR |
| **Subnet** | 子网（绑定 AZ） | 5 个保留 IP |
| **IGW** | 互联网网关 | 1 VPC = 1 IGW |
| **Route Table** | 路由控制 | IGW/NAT/Peering/Endpoint 目标 |
| **Bastion Host** | SSH 跳板 | 公共子网 → SSH → 私有实例 |
| **NAT Instance** | 已弃用 NAT | 禁用 Source/Dest Check |
| **NAT Gateway** | 托管 NAT | 每 AZ 部署保证 HA |
| **NACL** | 子网级防火墙 | 无状态，支持 DENY |
| **SG** | 实例级防火墙 | 有状态，仅 ALLOW |
| **VPC Peering** | VPC 互联 | 非传递性，不可 CIDR 重叠 |
| **VPC Endpoints** | 私有 AWS 访问 | Gateway(S3/DDB)免费；Interface 收费 |
| **VPC Flow Logs** | 网络日志 | S3+Athena 分析，NACL 排错 |
| **Site-to-Site VPN** | 公网加密连接 | VGW+CGW，开启路由传播 |
| **VPN CloudHub** | 多站点 VPN | Hub-and-spoke |
| **Direct Connect** | 专线连接 | >1 个月，无加密 |
| **DX Gateway** | 跨区域 DX | 连接多区域 VPC |
| **Transit Gateway** | 传递性枢纽 | ECMP 带宽倍增，IP Multicast |
| **Traffic Mirroring** | 流量复制 | ENI → NLB/ENI，非侵入式 |
| **IPv6** | 双栈模式 | 无法启 EC2 = IPv4 耗尽 |
| **Egress-Only IGW** | IPv6 仅出站 | ::/0 → EIGW |
| **Network Firewall** | L3-L7 VPC 防火墙 | 跨账号 Firewall Manager |

## 考试要点

- Gateway Endpoint（S3/DynamoDB）免费，Interface Endpoint 收费
- NACL 无状态（入站 ACCEPT + 出站 REJECT = NACL 问题）
- DX 建立 > 1 个月，无加密
- Transit Gateway 支持 ECMP 和 IP Multicast
- IPv4 耗尽（非 IPv6）导致无法启动 EC2

## English Short Summary

Comprehensive VPC summary covering: CIDR → VPC (5 CIDRs max) → Subnets (AZ-bound, 5 reserved IPs) → IGW → Route Tables → Bastion Host → NAT Instance/Gateway → NACL (stateless, DENY) → SG (stateful, ALLOW only) → VPC Peering (non-transitive) → VPC Endpoints (Gateway=S3/DDB free, Interface=others) → Flow Logs → Site-to-Site VPN (VGW+CGW) → VPN CloudHub → Direct Connect (>1 month, no encryption) → DX Gateway → Transit Gateway (transitive, ECMP, multicast) → Traffic Mirroring → IPv6 + Egress-Only IGW → Network Firewall (L3-L7).

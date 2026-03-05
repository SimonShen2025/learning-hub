---
title: "Site to Site VPN, Virtual Private Gateway & Customer Gateway"
lectureId: 339
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [vpn, site-to-site, virtual-private-gateway, customer-gateway, vpn-cloudhub]
---

## 中文短总结

Site-to-Site VPN：通过公共互联网建立加密的企业数据中心到 AWS VPC 连接。两个组件：①**Virtual Private Gateway（VGW）**：AWS 侧 VPN 端点，附加到 VPC②**Customer Gateway（CGW）**：企业侧软件/硬件设备。CGW IP：公共 CGW 用其公网 IP；私有 CGW 在 NAT 设备后面，用 NAT 设备公网 IP。**关键考点**：①必须在 VPC 中启用路由传播（Route Propagation）②ping EC2 需启用 ICMP 协议。**VPN CloudHub**：多个企业站点通过同一个 VGW 互联（hub-and-spoke 模型）。

## 中文长总结

Site-to-Site VPN 连接企业数据中心到 AWS VPC。

**组件：**

| 组件 | 位置 | 说明 |
|------|------|------|
| **Virtual Private Gateway (VGW)** | AWS 侧 | VPN 集中器，附加到 VPC |
| **Customer Gateway (CGW)** | 企业侧 | 物理/软件 VPN 设备 |

**CGW IP 选择：**
- CGW 有公网 IP → 使用 CGW 公网 IP
- CGW 在 NAT 设备后（私有 IP）→ 使用 **NAT 设备的公网 IP**（需 NAT-T）

**必须配置：**
1. 在 VPC 子网中启用 **Route Propagation**
2. ICMP 协议需在安全组中启用（ping 场景）

**VPN CloudHub：**
```
企业站点 A ←→ VGW ←→ 企业站点 B
企业站点 C ←→   ↑
```
- 多个 CGW 连接同一个 VGW
- 站点间通过 VPN 互联（低成本 hub-and-spoke）
- 流量经公共互联网（加密）
- 配置：多个 Site-to-Site VPN + 动态路由 + 路由表

## 考试要点

- VGW = AWS 侧，CGW = 企业侧
- CGW 在 NAT 后面 → 用 NAT 设备公网 IP
- 必须启用 Route Propagation
- 需要 ping → 启用 ICMP
- VPN CloudHub = 多站点通过同一 VGW 互联

## English Short Summary

Site-to-Site VPN: encrypted connection from corporate data center to AWS VPC over public internet. Components: **Virtual Private Gateway (VGW)** on AWS side, **Customer Gateway (CGW)** on-premises. CGW IP: use public IP if available; if behind NAT device, use NAT device's public IP. **Must enable Route Propagation** in VPC. **ICMP must be enabled** in SG to ping EC2. **VPN CloudHub**: multiple sites connect to same VGW for hub-and-spoke inter-site VPN communication.

---
title: "Transit Gateway"
lectureId: 343
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [transit-gateway, transitive-peering, ecmp, vpn, direct-connect]
---

## 中文短总结

Transit Gateway（TGW）：实现数千 VPC 和 on-premises 的**传递性对等连接**（VPC Peering 不支持传递性）。Hub-and-spoke（星型拓扑）。支持 VPC、VPN、Direct Connect Gateway 互联。跨区域/跨账号工作。**Route Tables** 控制 VPC 间通信。支持 **IP Multicast**（唯一支持的服务）。**ECMP**（Equal-Cost Multi-Path）：通过多条 VPN 连接增加带宽 → 每条 VPN = 2 隧道 = 2.5 Gbps × N 条 VPN 连接。还可通过 TGW 将 Direct Connect 连接共享给多个账号。

## 中文长总结

Transit Gateway 是 AWS 网络的核心枢纽，解决大规模 VPC 互连问题。

**核心价值：**
- VPC Peering 是 **非传递性** → N 个 VPC 需要 N×(N-1)/2 个 Peering
- Transit Gateway 是 **传递性** → 所有 VPC 连接到 TGW 即可互通

**支持连接类型：**
- VPC（数千个）
- VPN Connection
- Direct Connect Gateway
- 其他 Transit Gateway（跨区域 Peering）

**Route Tables 限制通信：** 可以控制哪些 VPC 之间允许/禁止通信。

**ECMP（带宽倍增）：**

| 拓扑 | VPN 连接 | 隧道数 | 带宽 |
|------|---------|--------|------|
| VGW（无 TGW） | 1 | 2 | 1.25 Gbps |
| **TGW + 1 VPN** | 1 | 2 | **2.5 Gbps** |
| **TGW + 2 VPN** | 2 | 4 | **5.0 Gbps** |
| **TGW + 3 VPN** | 3 | 6 | **7.5 Gbps** |

**共享 DX：**
```
On-premises → Direct Connect → DX Gateway → Transit Gateway → 多个 VPC（多账号）
```

**支持 IP Multicast**（AWS 中唯一支持的服务）。

## 考试要点

- Transit Gateway = 传递性互连（VPC Peering 不是）
- ECMP：TGW + 多条 VPN → 线性增加带宽（每 VPN 2.5 Gbps）
- IP Multicast → 只有 Transit Gateway 支持
- 通过 TGW 共享 Direct Connect 给多账号
- Route Tables 控制 VPC 间通信

## English Short Summary

Transit Gateway (TGW): **transitive peering** for thousands of VPCs and on-premises (VPC Peering is non-transitive). Hub-and-spoke topology. Supports VPC, VPN, Direct Connect Gateway. **Route Tables** control inter-VPC communication. **ECMP**: multiply VPN bandwidth (2.5 Gbps per VPN connection). **IP Multicast**: only AWS service supporting it. Share Direct Connect across multiple accounts via TGW.

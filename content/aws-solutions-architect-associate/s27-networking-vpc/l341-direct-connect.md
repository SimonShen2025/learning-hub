---
title: "Direct Connect & Direct Connect Gateway"
lectureId: 341
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [direct-connect, dx, private-connection, direct-connect-gateway, dedicated, hosted]
---

## 中文短总结

Direct Connect（DX）：通过专用私有连接连接企业数据中心到 AWS VPC（不经公共互联网）。需要 Direct Connect 位置的物理设置 + VPC 侧的 VGW。**Public VIF** 访问 S3/Glacier 等公共服务，**Private VIF** 访问 VPC 私有资源。**Direct Connect Gateway** 跨区域连接多个 VPC。连接类型：Dedicated（1/10/100 Gbps）或 Hosted（灵活带宽）。**建立需 > 1 个月**（考试陷阱：一周内传数据不能选 DX）。无加密，需 VPN on top 加密。**高可用性**：高弹性 = 2 个 DX 位置各 1 连接；**最大弹性** = 2 个 DX 位置各 2 连接（共 4 个）。

## 中文长总结

Direct Connect 提供企业到 AWS 的专用私有连接。

**架构组成：**
```
企业数据中心 → 客户路由器/防火墙 → [DX 位置: 客户/合作伙伴笼 + DX 端点] → AWS
```

**虚拟接口（VIF）类型：**

| VIF 类型 | 用途 | 连接到 |
|---------|------|--------|
| **Private VIF** | VPC 私有资源（EC2 等） | Virtual Private Gateway |
| **Public VIF** | AWS 公共服务（S3/Glacier） | 直接到 AWS |

**Direct Connect Gateway：**
- 跨区域连接**多个 VPC**
- DX → Private VIF → DX Gateway → 多个区域的 VGW → 多个 VPC

**连接类型：**

| 类型 | 带宽 | 特点 |
|------|------|------|
| **Dedicated** | 1/10/100 Gbps | 专用物理端口 |
| **Hosted** | 50 Mbps ~ 10 Gbps | 灵活按需增减 |

**关键限制：**
- 建立时间 **> 1 个月**
- **无加密**（但是私有连接）→ 需要加密时在 DX 上叠加 VPN

**高可用架构：**
- **高弹性（High Resiliency）**：2 个 DX 位置，每个 1 条连接
- **最大弹性（Maximum Resiliency）**：2 个 DX 位置，每个 **2 条独立连接**（共 4 条）

## 考试要点

- DX 建立 > 1 个月（考试陷阱）
- DX 无加密，加密需叠加 VPN
- Private VIF = 访问 VPC，Public VIF = 访问公共服务
- DX Gateway = 跨区域多 VPC
- Maximum Resiliency = 2 位置 × 2 连接 = 4 条
- DX 适合大数据集传输、实时数据、混合环境

## English Short Summary

Direct Connect (DX): dedicated private connection from on-premises to AWS (not over public internet). Requires physical setup at DX location + VGW. **Private VIF** for VPC resources, **Public VIF** for public AWS services. **DX Gateway** connects multiple VPCs across regions. Types: Dedicated (1/10/100 Gbps) or Hosted (flexible). **Takes >1 month to establish** (exam trap). No encryption — add VPN on top for encryption. **HA**: High Resiliency = 2 locations × 1 connection; **Maximum Resiliency** = 2 locations × 2 connections (4 total).

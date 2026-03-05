---
title: "Internet Gateways & Route Tables"
lectureId: 323
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [internet-gateway, igw, route-table, public-subnet]
---

## 中文短总结

Internet Gateway（IGW）允许 VPC 中的资源连接到互联网。水平扩展，高可用。**一个 VPC 只能附加一个 IGW**（反之亦然）。IGW 本身不足以提供互联网访问——**必须同时编辑路由表**。架构流程：EC2 → 路由表 → 路由器 → IGW → 互联网。公共子网 = 子网的路由表有指向 IGW 的路由。

## 中文长总结

Internet Gateway（IGW）是 VPC 连接互联网的关键组件。

**IGW 特性：**
- 允许 VPC 资源（EC2、Lambda 等）连接互联网
- 水平扩展，高可用，冗余
- **必须独立于 VPC 创建**
- **一对一关系**：一个 VPC 只能附加一个 IGW

**关键概念：**
IGW 单独不能提供互联网访问！还需要：
1. 创建 IGW 并附加到 VPC
2. **编辑子网的路由表**，添加指向 IGW 的路由

**数据流：**
```
EC2 实例 → 路由表查找 → 路由器 → Internet Gateway → 互联网
```

**公共子网的定义：**
子网的路由表中有 0.0.0.0/0 → IGW 的路由 = 公共子网

## 考试要点

- 一个 VPC = 一个 IGW
- IGW + 路由表 = 公共子网
- 仅有 IGW 不够，必须编辑路由表
- IGW 本身是高可用和冗余的

## English Short Summary

Internet Gateway (IGW) allows VPC resources to connect to the internet. Horizontally scalable, HA, redundant. **One VPC = one IGW** (and vice versa). IGW alone doesn't provide internet access — **must also edit route tables** to add a route to the IGW. Public subnet = subnet whose route table has a 0.0.0.0/0 → IGW route.

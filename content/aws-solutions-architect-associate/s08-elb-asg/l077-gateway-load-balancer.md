---
title: "Gateway Load Balancer (GWLB)"
lectureId: 77
section: 8
sectionTitle: "High Availability and Scalability: ELB & ASG"
date: "2026-03-05"
tags: ["gwlb", "layer-3", "firewall", "network-security", "geneve"]
---

## 中文短总结

Gateway Load Balancer (GWLB) 工作在 Layer 3（网络层，IP 协议），用于部署和管理第三方网络虚拟设备（如防火墙、入侵检测 IDPS、深度包检查）。所有 VPC 流量先经过 GWLB，分发到虚拟设备进行检查，检查通过后再转发到应用。GWLB 同时充当透明网络网关（单一入/出口）和负载均衡器（分发到虚拟设备集群）。使用 GENEVE 协议（端口 6081）。

## 中文长总结

**GWLB 核心功能：**
- Layer 3 负载均衡器（IP Packets）
- 用于部署、扩展和管理第三方网络虚拟设备
- 使用场景：防火墙、入侵检测/防御（IDPS）、深度包检查、网络流量修改

**工作原理：**
1. 更新 VPC 路由表 → 所有用户流量先发到 GWLB
2. GWLB 将流量分发到虚拟设备 Target Group
3. 虚拟设备检查/分析流量
4. 通过则返回 GWLB → 转发到应用
5. 不通过则丢弃流量

**双重角色：**
- **透明网络网关（Transparent Network Gateway）**：所有 VPC 流量的单一入/出口
- **负载均衡器**：将流量分发到 Target Group 中的虚拟设备

**Target Group 类型：**
- EC2 实例（按实例 ID）
- IP 地址（私有 IP，可用于本地数据中心的虚拟设备）

**协议：** GENEVE，端口 6081

## 考试要点

- GWLB = Layer 3，用于网络流量检查（防火墙、IDPS）
- 看到"第三方虚拟设备/网络流量分析" → GWLB
- 使用 GENEVE 协议端口 6081
- 同时作为透明网关和负载均衡器

## English Short Summary

GWLB operates at Layer 3 (IP packets) to deploy, scale, and manage third-party network virtual appliances (firewalls, IDPS, deep packet inspection). All VPC traffic routes through GWLB first, distributes to virtual appliances for inspection, then forwards to the application if approved. It serves as both a transparent network gateway (single entry/exit point) and a load balancer. Uses the GENEVE protocol on port 6081.

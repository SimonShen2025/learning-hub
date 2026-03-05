---
title: "Routing Policy - IP-based"
lectureId: 116
section: 10
sectionTitle: "Route 53"
date: "2026-03-05"
tags: ["Route 53", "Routing Policy", "IP-based", "CIDR"]
---

## 中文短总结

本讲介绍 IP-based（基于 IP）路由策略。该策略通过定义客户端 IP 的 CIDR 范围来决定路由目标。在 Route 53 中定义 CIDR 块（IP 范围列表）并将其映射为 Location，然后将 Location 关联到 DNS 记录。用例包括：已知客户端 IP 范围时优化性能，以及基于已知 ISP 的 IP 范围降低网络成本。例如，特定 ISP 使用特定 CIDR 范围 → 路由到最近的端点。

## 中文长总结

### IP-based 路由策略
- 基于客户端的 **IP 地址（CIDR 范围）** 定义路由
- 在 Route 53 中定义 **Location**，每个 Location 对应一组 CIDR 块
- 将 Location 关联到 DNS 记录的特定值

### 配置步骤
1. 定义 CIDR 块列表（如 203.x.x.x/24、200.x.x.x/24）
2. 为每组 CIDR 创建 Location
3. 创建 DNS 记录，指定不同 Location 对应不同的目标 IP

### 使用场景
- **性能优化**：已知客户端 IP 范围，路由到最优端点
- **降低网络成本**：已知 ISP 使用的 IP 范围，路由到最近的数据中心

## 考试要点

- IP-based 路由基于**客户端 IP 的 CIDR 范围**
- 需要预先知道客户端的 IP 范围
- 适合已知 ISP / 企业 IP 范围的场景

## English Short Summary

IP-based routing defines routing based on client IP CIDR ranges. CIDR blocks are organized into Locations in Route 53, which are then mapped to specific DNS record values. Use cases include performance optimization when client IPs are known in advance and reducing network costs by routing known ISP IP ranges to the nearest endpoint.

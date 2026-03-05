---
title: "Network Load Balancer (NLB)"
lectureId: 75
section: 8
sectionTitle: "High Availability and Scalability: ELB & ASG"
date: "2026-03-05"
tags: ["nlb", "layer-4", "tcp", "udp", "static-ip", "elastic-ip"]
---

## 中文短总结

Network Load Balancer (NLB) 工作在 Layer 4（TCP/UDP），具有超高性能（百万级 RPS、超低延迟）。NLB 每个 AZ 有一个静态 IP，可绑定 Elastic IP，适用于需要固定 IP 暴露的场景。Target Group 支持 EC2 实例、私有 IP 地址，也可以将 NLB 放在 ALB 前面以获得固定 IP + HTTP 路由能力。健康检查支持 TCP、HTTP、HTTPS 三种协议。

## 中文长总结

**NLB 核心特性：**
- Layer 4 负载均衡器（TCP/UDP 流量）
- 超高性能：百万级 RPS（Requests Per Second），超低延迟
- **每个 AZ 一个静态 IP**，可分配 Elastic IP
- 考试关键：看到 TCP/UDP/静态 IP/极致性能 → 想到 NLB

**Target Group 类型：**
- **EC2 实例**：通过实例 ID 注册
- **IP 地址**：必须为私有 IP（可包含本地数据中心的服务器）
- **ALB**：NLB 可前置于 ALB（NLB 提供固定 IP，ALB 提供 HTTP 路由规则）

**健康检查协议：**
- TCP
- HTTP
- HTTPS

## 考试要点

- NLB = Layer 4（TCP/UDP），超高性能，超低延迟
- 每个 AZ 一个静态 IP，可绑定 Elastic IP
- 看到"固定 IP + 负载均衡"或"TCP/UDP"→ 选 NLB
- NLB 可前置于 ALB 实现固定 IP + HTTP 路由组合
- 健康检查支持 TCP/HTTP/HTTPS

## English Short Summary

NLB operates at Layer 4 (TCP/UDP) with ultra-high performance (millions of RPS, ultra-low latency). Each AZ gets one static IP that can be an Elastic IP — ideal for exposing applications with fixed IPs. Target groups support EC2 instances, private IPs, and even ALBs (NLB for static IP + ALB for HTTP routing). Health checks support TCP, HTTP, and HTTPS protocols.

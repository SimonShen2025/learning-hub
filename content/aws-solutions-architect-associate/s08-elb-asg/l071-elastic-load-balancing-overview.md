---
title: "Elastic Load Balancing (ELB) Overview"
lectureId: 71
section: 8
sectionTitle: "High Availability and Scalability: ELB & ASG"
date: "2026-03-05"
tags: ["elb", "load-balancer", "alb", "nlb", "gwlb", "health-check"]
---

## 中文短总结

Elastic Load Balancer (ELB) 将流量分发到多个后端 EC2 实例，提供单一访问点、故障处理、健康检查、SSL 终止、跨 AZ 高可用等功能。AWS 提供四种托管负载均衡器：CLB（已弃用）、ALB（HTTP/HTTPS，Layer 7）、NLB（TCP/UDP，Layer 4）、GWLB（Layer 3，网络流量检查）。健康检查通过端口和路由验证实例状态，不健康的实例不会收到流量。

## 中文长总结

**负载均衡器概述：**
- 将接收到的流量转发到多个下游 EC2 实例/服务器
- 用户只需连接负载均衡器的单一入口，不直接感知后端实例

**使用 ELB 的优势：**
- 将负载分散到多个下游实例
- 对外暴露单一访问点（Single Point of Access）
- 无缝处理下游实例故障
- 通过健康检查判断实例是否可用
- 提供 SSL/HTTPS 终止
- 使用 Cookie 实现会话粘性（Stickiness）
- 跨可用区高可用
- 将公网流量与私网流量分离

**四种负载均衡器：**
- **CLB**（Classic，2009）：已弃用，支持 HTTP/HTTPS/TCP/SSL
- **ALB**（Application，2016）：Layer 7，支持 HTTP/HTTPS/WebSocket
- **NLB**（Network，2017）：Layer 4，支持 TCP/TLS/UDP，超高性能
- **GWLB**（Gateway，2020）：Layer 3，IP 协议，用于网络流量检查

**健康检查（Health Check）：**
- 通过指定端口和路由（如 `/health`）发送请求
- HTTP 200 = 健康，否则标记为不健康
- 不健康的实例不会收到流量

**安全组配置：**
- ELB 安全组：允许 HTTP(80)/HTTPS(443) 来自 0.0.0.0/0
- EC2 安全组：源设为 ELB 的安全组（而非 IP 范围），仅允许来自 ELB 的流量

## 考试要点

- ALB = Layer 7（HTTP），NLB = Layer 4（TCP/UDP），GWLB = Layer 3（IP）
- Health check 使用端口 + 路由，200 为健康
- EC2 安全组引用 ELB 安全组来限制只接收 ELB 流量
- ELB 是 AWS 托管服务，自动高可用和扩展

## English Short Summary

ELB distributes traffic across multiple backend EC2 instances, providing a single access point, health checks, SSL termination, and cross-AZ high availability. AWS offers four managed load balancers: CLB (deprecated), ALB (Layer 7, HTTP/HTTPS), NLB (Layer 4, TCP/UDP, ultra-high performance), and GWLB (Layer 3, network traffic inspection). EC2 security groups should reference the ELB security group to restrict traffic sources.

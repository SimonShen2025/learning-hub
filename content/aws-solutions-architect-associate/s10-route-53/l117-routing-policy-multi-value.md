---
title: "Routing Policy - Multi Value"
lectureId: 117
section: 10
sectionTitle: "Route 53"
date: "2026-03-05"
tags: ["Route 53", "Routing Policy", "Multi Value", "Health Check"]
---

## 中文短总结

本讲介绍 Multi-Value Answer（多值应答）路由策略。该策略在路由到多个资源时使用，**可关联 Health Check**，因此只返回**健康的记录**。每次查询最多返回 **8 条健康记录**，客户端从中选择一个。与 Simple 路由的多值区别在于：Simple **不支持 Health Check**，可能返回不健康的资源；Multi-Value 通过 Health Check 过滤确保返回的都是健康资源。Multi-Value **不是 ELB 的替代品**，而是客户端侧的负载均衡。演示中创建三条 Multi-Value 记录分别关联三个 Health Check，当一个 Health Check 变为 Unhealthy 时，dig 命令只返回两个健康的 IP。

## 中文长总结

### Multi-Value Answer 路由策略
- 用于路由到**多个资源**的场景
- **可关联 Health Check**（这是与 Simple 的核心区别）
- 每次查询最多返回 **8 条健康记录**
- 客户端从返回的健康记录中**选择一个**进行连接

### Multi-Value vs Simple（多值对比）
| 特性 | Multi-Value | Simple |
|------|------------|--------|
| Health Check | ✅ 支持 | ❌ 不支持 |
| 返回值过滤 | 只返回健康记录 | 可能返回不健康记录 |
| 记录形式 | 多条独立记录 | 一条记录多个值 |

### Multi-Value vs ELB
- Multi-Value **不是 ELB 的替代品**
- Multi-Value 是**客户端侧**负载均衡（DNS 层面）
- ELB 是**服务端**负载均衡（流量层面）

## 考试要点

- Multi-Value 最多返回 **8 条健康记录**
- 与 Simple 的关键区别：**支持 Health Check**
- 不是 ELB 的替代品，是客户端侧负载均衡
- 不健康的记录会被**自动排除**

## English Short Summary

Multi-Value Answer routing returns multiple records (up to 8 healthy ones) when routing to multiple resources. Unlike Simple routing, it supports Health Checks, ensuring only healthy resources are returned. Clients then choose one from the returned healthy records. It's NOT a substitute for ELB — it's client-side load balancing at the DNS level. The demo shows that when one health check becomes unhealthy, `dig` returns only the two remaining healthy IPs.

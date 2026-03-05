---
title: "Routing Policy - Simple"
lectureId: 108
section: 10
sectionTitle: "Route 53"
date: "2026-03-05"
tags: ["Route 53", "Routing Policy", "Simple"]
---

## 中文短总结

本讲介绍了 Route 53 的 Simple 路由策略。Simple 路由通常将流量路由到单个资源，但一条记录中可以指定多个 IP 值，客户端会**随机选择**一个。使用 Alias 时，Simple 路由只能指定**一个 AWS 资源**作为目标。Simple 路由**不支持 Health Check**。注意"路由"是 DNS 层面的概念——DNS 不路由实际流量，只是告诉客户端应该连接到哪个 IP。演示中将 TTL 设为 20 秒，修改记录添加多个 IP 后，dig 命令返回多个值，浏览器会随机选择其中一个。

## 中文长总结

### DNS 路由 vs 负载均衡路由
- DNS **不路由实际流量**，只响应 DNS 查询
- 客户端根据 DNS 响应自行决定连接哪个 IP
- 与 ELB 的流量路由完全不同

### Simple 路由策略特性
- 通常路由到**单个资源**
- 一条记录可包含**多个值**（IP），客户端**随机选择**
- 使用 Alias 时只能指定**一个 AWS 资源**
- **不支持 Health Check**

### Route 53 支持的所有路由策略
1. **Simple**：简单路由
2. **Weighted**：加权路由
3. **Failover**：故障转移
4. **Latency-based**：延迟路由
5. **Geolocation**：地理位置路由
6. **Multi-Value Answer**：多值应答
7. **Geoproximity**：地理临近路由

## 考试要点

- Simple 路由**不支持 Health Check**
- 多个值时客户端**随机选择**
- Alias + Simple = 只能指定一个 AWS 资源
- DNS 不路由流量，只响应查询

## English Short Summary

Simple routing typically routes to a single resource. Multiple values can be specified in one record, with the client randomly choosing one. With Alias enabled, only one AWS resource can be targeted. Simple routing does NOT support Health Checks. Note: DNS routing only responds to queries — it doesn't route actual traffic. The demo shows multiple IPs returned by `dig`, with the browser randomly selecting one.

---
title: "AWS Global Accelerator - Overview"
lectureId: 170
section: 15
sectionTitle: "CloudFront & AWS Global Accelerator"
date: "2026-03-05"
tags: ["Global Accelerator", "Anycast IP", "Edge Location", "Performance"]
---

## 中文短总结

本讲介绍 AWS Global Accelerator。解决的问题：全球用户通过公网访问远端应用延迟高（多跳路由）。**核心概念**：Anycast IP——所有服务器使用相同 IP，客户端路由到最近的服务器。Global Accelerator 创建 **2 个全球 Anycast IP**，用户连接最近 Edge Location 后通过 **AWS 私有网络**到达应用。支持 Elastic IP、EC2、ALB、NLB（公共/私有）。提供健康检查 + <1 分钟故障转移。**CloudFront vs Global Accelerator**：CloudFront 缓存内容在 Edge 返回；Global Accelerator 代理所有请求到后端（无缓存），适合 TCP/UDP 非 HTTP 场景（游戏/IoT/VoIP）、需要全球静态 IP、快速 Regional Failover。

## 中文长总结

### 问题
- 全球用户访问远端应用 → 多跳公网路由 → 高延迟

### Unicast vs Anycast IP
| 类型 | 说明 |
|------|------|
| **Unicast** | 一个服务器一个 IP |
| **Anycast** | 多个服务器**共享** IP，路由到最近的 |

### Global Accelerator 工作方式
- 创建 **2 个全球 Anycast IP**
- 用户 → 最近 Edge Location → **AWS 私有网络** → 应用
- 支持：Elastic IP、EC2、ALB、NLB（公共/私有）

### 优势
- **智能路由**到最低延迟 Edge
- **快速故障转移** < 1 分钟
- 无客户端缓存问题（IP 不变）
- **健康检查** → 自动灾难恢复
- **DDoS 保护**（AWS Shield）

### CloudFront vs Global Accelerator
| 特性 | CloudFront | Global Accelerator |
|------|-----------|-------------------|
| 内容 | 缓存在 Edge 返回 | 代理到后端（无缓存） |
| 协议 | HTTP/HTTPS | TCP/UDP |
| 适用 | 静态/动态 Web 内容 | 游戏/IoT/VoIP、静态 IP 需求 |
| 故障转移 | 一般 | 快速 Regional Failover |

## 考试要点

- Global Accelerator = **2 个 Anycast IP** + AWS 私网
- 无缓存，所有请求代理到后端
- **非 HTTP 场景**（游戏、IoT、VoIP）→ Global Accelerator
- 需要**全球静态 IP** → Global Accelerator
- **快速 Regional Failover** < 1 分钟
- CloudFront = CDN 缓存，Global Accelerator = 网络代理

## English Short Summary

AWS Global Accelerator solves high-latency public internet routing by providing 2 global Anycast IPs. Users connect to the nearest edge location, then traffic flows through AWS's private network to the application. Works with Elastic IP, EC2, ALB, NLB (public or private). Features: intelligent routing to lowest-latency edge, health checks with <1 minute failover, DDoS protection via Shield. **CloudFront vs Global Accelerator**: CloudFront caches content at edges (HTTP); Global Accelerator proxies all requests to backends without caching (TCP/UDP), ideal for gaming/IoT/VoIP, global static IPs, and fast regional failover.

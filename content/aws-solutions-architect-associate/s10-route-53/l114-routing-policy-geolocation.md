---
title: "Routing Policy - Geolocation"
lectureId: 114
section: 10
sectionTitle: "Route 53"
date: "2026-03-05"
tags: ["Route 53", "Routing Policy", "Geolocation"]
---

## 中文短总结

本讲介绍 Geolocation（地理位置）路由策略，**与 Latency 完全不同**。Geolocation 基于用户的**实际地理位置**（大洲、国家或美国州）路由，最精确的匹配优先。必须创建 **Default 记录**处理无匹配的情况。用例包括网站本地化、内容分发限制和负载均衡。可关联 Health Check。演示中设置了 Asia → ap-southeast-1、United States → us-east-1、Default → eu-central-1，通过 VPN 验证了印度用户 → Singapore、美国用户 → US East、墨西哥用户 → Default EU 的路由效果。

## 中文长总结

### Geolocation vs Latency
- **Geolocation**：基于用户的**物理地理位置**（是哪个国家/大洲）
- **Latency**：基于**网络延迟**（到哪个 Region 最快）
- 两者完全不同，不要混淆

### Geolocation 路由规则
- 可按**大洲、国家或美国州**指定路由
- **最精确的匹配优先**（州 > 国家 > 大洲）
- **必须创建 Default 记录**处理无匹配用户
- 可关联 Health Check

### 使用场景
- **网站本地化**：德国用户 → 德语版本，法国用户 → 法语版本
- **内容分发限制**：限制特定国家/地区的内容访问
- **负载均衡**：按地区分配流量

### 演示配置
| 地理位置 | 目标 | 说明 |
|----------|------|------|
| Asia（大洲） | ap-southeast-1 | 所有亚洲用户 |
| United States（国家） | us-east-1 | 美国用户 |
| Default | eu-central-1 | 其他所有用户 |

- 墨西哥不是美国，不是亚洲 → 匹配 Default

## 考试要点

- Geolocation 基于**地理位置**，不是延迟
- **必须有 Default 记录**
- 最精确匹配优先
- 适合网站本地化和内容分发限制
- 可关联 Health Check

## English Short Summary

Geolocation routing is based on the user's actual geographic location (continent, country, or US state) — fundamentally different from latency-based routing. The most precise match is selected first. A Default record MUST be created for unmatched locations. Use cases: website localization, content distribution restrictions, and load balancing. Demo configured Asia → ap-southeast-1, US → us-east-1, Default → eu-central-1, verified via VPN that India → Singapore, US → US East, Mexico → Default EU.

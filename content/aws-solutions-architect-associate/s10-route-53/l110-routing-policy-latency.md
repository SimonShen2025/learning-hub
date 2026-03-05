---
title: "Routing Policy - Latency"
lectureId: 110
section: 10
sectionTitle: "Route 53"
date: "2026-03-05"
tags: ["Route 53", "Routing Policy", "Latency"]
---

## 中文短总结

本讲介绍 Latency-based（基于延迟）路由策略。该策略将用户重定向到**延迟最低**的资源，当延迟是主要关注点时非常有用。延迟基于用户到 AWS Region 的网络连接速度计算（不是地理距离）。例如德国用户如果连接美国最快，就会被路由到美国。创建记录时需指定资源所在的 AWS Region。可关联 Health Check。演示中通过 VPN 切换位置验证了延迟路由的效果——欧洲用户 → eu-central-1，加拿大用户 → us-east-1，香港用户 → ap-southeast-1。

## 中文长总结

### Latency-based 路由策略
- 将用户重定向到**延迟最低**的资源
- 延迟基于用户到目标 AWS Region 的**网络连接速度**
- **不是基于地理距离**（虽然通常距离近延迟低，但不绝对）
- 适合延迟敏感的网站和应用
- 可关联 **Health Check**

### 配置要求
- 每条记录需指定资源对应的 **AWS Region**
- Route 53 无法自动从 IP 推断 Region，需要手动指定

### 演示验证
| 用户位置 | 路由到 | 原因 |
|----------|--------|------|
| 欧洲 | eu-central-1 | 延迟最低 |
| 加拿大 | us-east-1 | 延迟最低 |
| 香港 | ap-southeast-1 | 延迟最低 |

## 考试要点

- Latency 路由基于**网络延迟**，不是地理距离
- 需要为每条记录指定 AWS Region
- 可关联 Health Check
- 适合延迟敏感的应用场景

## English Short Summary

Latency-based routing redirects users to the resource with the lowest network latency. Latency is measured based on the user's connection speed to the target AWS Region (not geographic distance). Each record must specify its AWS Region. Can be combined with Health Checks. Demo verified: European users → eu-central-1, Canadian users → us-east-1, Hong Kong users → ap-southeast-1, each routed to the lowest-latency region.

---
title: "Routing Policy - Geoproximity"
lectureId: 115
section: 10
sectionTitle: "Route 53"
date: "2026-03-05"
tags: ["Route 53", "Routing Policy", "Geoproximity", "Bias", "Traffic Flow"]
---

## 中文短总结

本讲介绍 Geoproximity（地理临近）路由策略。该策略基于用户和资源的地理位置路由流量，并可通过 **Bias 值**来调整流量分配——正 Bias 值增大某资源吸引的流量范围，负 Bias 值缩小。资源可以是 AWS 资源（指定 Region）或非 AWS 资源（指定经纬度）。需要使用 **Route 53 Traffic Flow** 高级功能。关键考试信号：需要将**流量从一个 Region 转移到另一个 Region** → 使用 Geoproximity + 增加目标 Region 的 Bias。

## 中文长总结

### Geoproximity 路由策略
- 基于用户和资源的**地理位置**路由流量
- 通过 **Bias 值**（偏差值）调整流量分配比例

### Bias 工作原理
- **正 Bias（如 +50）**：扩大该资源吸引的地理范围 → 更多流量流向该资源
- **负 Bias**：缩小地理范围 → 更少流量
- **Bias = 0**：默认行为，按最近距离路由

### 图示示例
- us-west-1 (Bias=0) 和 us-east-1 (Bias=0)：美国被均匀分为两半
- us-west-1 (Bias=0) 和 us-east-1 (Bias=+50)：分界线左移，us-east-1 吸引更多流量

### 资源类型
- **AWS 资源**：指定 AWS Region，自动计算路由
- **非 AWS 资源**（如本地数据中心）：手动指定**经纬度**

### 前提条件
- 需要使用 **Route 53 Traffic Flow**（高级功能）

## 考试要点

- Geoproximity 用于**跨 Region 流量转移** → 增加目标 Region 的 Bias
- 正 Bias 扩大范围（更多流量），负 Bias 缩小范围
- 需要 **Route 53 Traffic Flow**
- 与 Geolocation 不同：Geolocation 按固定国家/大洲，Geoproximity 按距离+Bias

## English Short Summary

Geoproximity routing distributes traffic based on geographic location of users and resources, with an adjustable **Bias** value to shift traffic. Positive bias expands a resource's geographic catchment area (attracting more traffic); negative bias shrinks it. Resources can be AWS (specify region) or non-AWS (specify latitude/longitude). Requires Route 53 Traffic Flow. Key exam signal: when you need to **shift traffic from one region to another** → use Geoproximity with increased bias on the target region.

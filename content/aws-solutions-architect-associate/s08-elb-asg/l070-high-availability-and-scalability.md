---
title: "High Availability and Scalability"
lectureId: 70
section: 8
sectionTitle: "High Availability and Scalability: ELB & ASG"
date: "2026-03-05"
tags: ["scalability", "high-availability", "vertical-scaling", "horizontal-scaling", "elasticity"]
---

## 中文短总结

可扩展性（Scalability）分为垂直扩展（Vertical Scaling，升级实例大小）和水平扩展（Horizontal Scaling / Elasticity，增加实例数量）。高可用性（High Availability）指应用在至少两个数据中心/可用区运行以应对故障。垂直扩展适用于非分布式系统如 RDS/ElastiCache，有硬件上限；水平扩展通过 Auto Scaling Group 和 Load Balancer 实现。

## 中文长总结

**可扩展性（Scalability）：**
- 指应用/系统能够通过适配来处理更大的负载
- **垂直扩展（Vertical Scaling）**：增大实例规格（如 t2.micro → t2.large）
  - 适用于非分布式系统（如数据库 RDS、ElastiCache）
  - 有硬件上限
  - 类比：初级接线员升级为高级接线员
- **水平扩展（Horizontal Scaling / Elasticity）**：增加实例数量
  - 适用于分布式系统和现代 Web 应用
  - 通过 Auto Scaling Group 和 Load Balancer 实现
  - 类比：雇佣更多接线员

**高可用性（High Availability）：**
- 应用运行在至少两个可用区（AZ）中
- 目标：在一个数据中心故障时系统仍然存活
- 可以是被动的（如 RDS Multi-AZ）或主动的（如水平扩展）

**EC2 维度：**
- 垂直扩展：从 t2.nano (0.5GB RAM, 1 vCPU) 到 u-12tb1.metal (12.3TB RAM, 448 vCPU)
- 水平扩展：Scale Out（增加实例）/ Scale In（减少实例）→ ASG + ELB
- 高可用：Multi-AZ 的 ASG 和 ELB

## 考试要点

- 区分 Scalability（扩展性）与 High Availability（高可用）的概念
- 垂直扩展适用于 RDS、ElastiCache 等非分布式服务
- 水平扩展通过 ASG + ELB 实现，适用于分布式 Web 应用
- 高可用 = 至少跨两个 AZ 部署

## English Short Summary

Scalability includes vertical scaling (increasing instance size, suitable for non-distributed systems like RDS) and horizontal scaling (adding more instances via ASG and ELB, for distributed/web apps). High availability means running across at least two AZs to survive data center failures. These can be passive (RDS Multi-AZ) or active (horizontal scaling).

---
title: "MyClothes.com"
lectureId: 123
section: 11
sectionTitle: "Classic Solutions Architecture Discussions"
date: "2026-03-05"
tags: ["Solutions Architecture", "Stateful", "ELB Stickiness", "ElastiCache", "RDS", "Session"]
---

## 中文短总结

本讲通过 MyClothes.com（在线购物网站）讨论**有状态 Web 应用**的架构设计。核心挑战是在水平扩展时保持购物车状态。解决方案演进：ELB Sticky Session（实例终止丢失数据）→ User Cookies（安全风险+4KB限制）→ **Server Session + ElastiCache/DynamoDB**（最佳方案，Sub-ms 性能，安全可靠）。读取扩展通过 RDS Read Replicas 或 ElastiCache Lazy Loading 实现。通过 Multi-AZ（ELB + ASG + RDS + ElastiCache Redis）实现高可用。安全组链式引用确保每层只接受上层流量。

## 中文长总结

### 核心挑战
- 有状态应用（购物车）在水平扩展时如何保持状态
- Web Tier 尽可能保持**无状态**

### 方案演进

#### 方案 1：ELB Sticky Session
- 相同用户始终路由到相同实例
- **缺点**：实例终止 → 购物车丢失

#### 方案 2：User Cookies（客户端存储）
- 用户通过 Cookie 携带购物车内容
- **缺点**：
  - HTTP 请求变大
  - 安全风险（Cookie 可被篡改）
  - Cookie 限制 4KB
  - EC2 需验证 Cookie 内容

#### 方案 3：Server Session + ElastiCache（最优方案）
- 用户只发送 **Session ID**
- EC2 实例通过 Session ID 在 ElastiCache 中读写购物车数据
- **Sub-millisecond** 性能
- 安全：攻击者无法修改 ElastiCache 数据
- **DynamoDB** 是替代方案

### 数据存储层
- **RDS**：存储持久化用户数据（地址、姓名等）
- **读取扩展**：
  - 方案 A：**RDS Read Replicas**（最多 15 个）
  - 方案 B：**ElastiCache Lazy Loading**（先查缓存 → 未命中读 RDS → 写入缓存）

### 高可用设计
- Route 53：天然高可用
- ELB：Multi-AZ
- ASG：Multi-AZ
- RDS：Multi-AZ（Master + Standby）
- ElastiCache：Multi-AZ（Redis）

### 安全组链式引用
- ALB：开放 HTTP/HTTPS
- EC2：只允许来自 ALB 的流量
- ElastiCache：只允许来自 EC2 的流量
- RDS：只允许来自 EC2 的流量

## 考试要点

- **三层架构**：Client Tier → Web Tier → Database Tier
- ElastiCache 存 Session 比 Cookie 更安全
- RDS Read Replicas vs ElastiCache Lazy Loading 各有优劣
- Multi-AZ 需要在所有层（ELB/ASG/RDS/Cache）都启用
- 安全组**链式引用**是最佳实践

## English Short Summary

MyClothes.com demonstrates stateful web app architecture for a shopping cart. Solutions evolve from ELB Sticky Sessions (data loss on termination) → User Cookies (security risk, 4KB limit) → Server Session with ElastiCache/DynamoDB (best: secure, sub-ms performance). Read scaling via RDS Read Replicas or ElastiCache lazy loading. High availability through Multi-AZ across all layers (ELB, ASG, RDS, ElastiCache Redis). Security groups chain-reference each other: ALB open → EC2 from ALB only → Cache/RDS from EC2 only. This is a classic three-tier architecture.

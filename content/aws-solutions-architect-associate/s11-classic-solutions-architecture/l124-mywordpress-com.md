---
title: "MyWordPress.com"
lectureId: 124
section: 11
sectionTitle: "Classic Solutions Architecture Discussions"
date: "2026-03-05"
tags: ["Solutions Architecture", "WordPress", "Aurora", "EBS", "EFS"]
---

## 中文短总结

本讲通过 MyWordPress.com 讨论可扩展 WordPress 网站的架构。数据库层从 RDS Multi-AZ 升级到 **Aurora MySQL**（更少运维、自动扩展、Read Replicas、甚至 Global Database）。图片存储的关键讨论：单实例用 **EBS** 没问题，但多实例跨 AZ 时 EBS 无法共享（每个 EBS 只属于一个实例/AZ）。解决方案是使用 **EFS**（Elastic File System），通过 ENI 在每个 AZ 创建网络接口，所有实例共享同一存储。EBS 更便宜但不能共享，EFS 贵但支持跨 AZ 共享——架构决策的典型 trade-off。

## 中文长总结

### 数据库选择
- **RDS Multi-AZ**：基础方案
- **Aurora MySQL**：更优方案
  - 更少运维
  - Multi-AZ 内置
  - Read Replicas
  - Global Database（如需全球扩展）

### 图片存储：EBS vs EFS

#### EBS（Elastic Block Store）
- ✅ 单实例场景完美工作
- ❌ **不支持跨实例/跨 AZ 共享**
- 每个 EBS 只能挂载到**一个实例**
- 多实例场景：实例 A 存的图片，实例 B 无法访问

#### EFS（Elastic File System）
- ✅ 支持**跨 AZ、跨实例共享**
- 通过 **ENI**（Elastic Network Interface）在每个 AZ 创建接入点
- 所有 EC2 实例共享同一文件系统
- **NFS 协议**
- ❌ 比 EBS 更贵

### 架构总结
| 层 | 组件 | 说明 |
|----|------|------|
| 前端 | ELB + ASG + Multi-AZ | 负载均衡、自动扩展 |
| 数据库 | Aurora MySQL Multi-AZ | 持久化数据 |
| 文件存储 | EFS | 跨实例共享图片 |

## 考试要点

- **EBS 不能跨实例共享**，多实例必须用 **EFS**
- Aurora 比 RDS 更适合需要扩展和全球分发的场景
- EFS 通过 ENI 支持 Multi-AZ 访问
- EFS 比 EBS 贵，但支持共享 → **trade-off 权衡**
- WordPress 图片存储是 EBS vs EFS 的经典考题

## English Short Summary

MyWordPress.com architecture discussion covers database choice (RDS Multi-AZ → Aurora MySQL for less ops and better scaling) and the critical EBS vs EFS comparison for image storage. EBS works for single-instance but cannot be shared across instances/AZs — when scaling horizontally, images stored on one instance's EBS are invisible to others. EFS solves this via ENIs in each AZ, allowing all instances to share the same file system. Trade-off: EFS costs more than EBS but enables cross-AZ shared storage essential for scalable WordPress.

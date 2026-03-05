---
title: "RDS Read Replicas vs Multi AZ"
lectureId: 88
section: 9
sectionTitle: "AWS Fundamentals: RDS + Aurora + ElastiCache"
date: "2026-03-05"
tags: ["RDS", "Read Replicas", "Multi AZ", "Disaster Recovery", "High Availability"]
---

## 中文短总结

本讲深入讲解 RDS Read Replicas 与 Multi AZ 的区别——这是考试的核心考点。Read Replicas 用于**读扩展**，最多可创建 15 个，支持同 AZ / 跨 AZ / 跨 Region 部署，采用异步复制（最终一致性），可提升为独立数据库，仅支持 SELECT 操作。同 Region 跨 AZ 的 Read Replica 复制流量免费，跨 Region 则收费。Multi AZ 用于**灾备**，采用同步复制到 Standby 实例，通过单一 DNS name 实现自动故障转移，Standby 不可读写。Read Replicas 也可以设置为 Multi AZ。从 Single AZ 转换为 Multi AZ 是零停机操作。

## 中文长总结

### Read Replicas（读扩展）
- **用途**：扩展读取能力，分担主实例读负载
- **数量**：最多 15 个 Read Replicas
- **部署选项**：同 AZ、跨 AZ、跨 Region（三种都要记住）
- **复制方式**：**异步复制**（Asynchronous） → 最终一致性（Eventually Consistent）
- **读写限制**：仅支持 SELECT（读操作），不支持 INSERT/UPDATE/DELETE
- **提升能力**：Read Replica 可提升为独立数据库，脱离复制机制
- **使用方式**：应用需更新连接字符串以包含所有 Read Replica 地址

### Read Replicas 经典用例
- 生产数据库正常运行，新团队需要运行报表/分析
- 创建 Read Replica 专供报表应用使用，避免影响生产性能
- 报表应用只执行 SELECT 查询

### 网络费用
- **同 Region 跨 AZ**：Read Replica 复制流量 **免费**（托管服务特权）
- **跨 Region**：复制流量 **收费**

### Multi AZ（灾备）
- **用途**：灾难恢复（Disaster Recovery），不用于扩展
- **复制方式**：**同步复制**（Synchronous）到 Standby 实例
- **DNS**：单一 DNS name，故障时自动切换到 Standby
- **触发场景**：AZ 故障、网络故障、实例/存储故障
- **Standby 限制**：不可读不可写，纯待命
- **Read Replica + Multi AZ**：Read Replica 本身也可配置为 Multi AZ

### Single AZ → Multi AZ 转换
- **零停机操作**：只需在控制台点击 Modify 启用 Multi AZ
- **内部流程**：
  1. 自动对主数据库拍摄 Snapshot
  2. 在新 AZ 恢复 Snapshot 为 Standby 数据库
  3. 建立同步复制，Standby 追上主数据库

## 考试要点

- Read Replicas **最多 15 个**，支持同 AZ / 跨 AZ / 跨 Region
- Read Replicas 是**异步复制**（最终一致性），Multi AZ 是**同步复制**
- Read Replicas 仅用于 **SELECT**（读），Multi AZ 仅用于**灾备**（Standby 不可读写）
- 同 Region Read Replica 复制流量**免费**，跨 Region **收费**
- Read Replica 可以设置为 Multi AZ（常见考题）
- Single AZ → Multi AZ 是**零停机**操作
- Multi AZ 内部通过 Snapshot + Restore + Sync Replication 实现

## English Short Summary

This lecture explains the critical difference between RDS Read Replicas and Multi AZ. Read Replicas scale reads (up to 15, same AZ/cross AZ/cross region, async replication, eventually consistent, SELECT-only, can be promoted to standalone DB). Same-region cross-AZ replication is free; cross-region incurs fees. Multi AZ is for disaster recovery (sync replication to standby, single DNS name with automatic failover, standby cannot be read/written). Read Replicas can themselves be Multi AZ. Converting Single AZ to Multi AZ is a zero-downtime operation internally using snapshot → restore → sync replication.

---
title: "Amazon Aurora"
lectureId: 91
section: 9
sectionTitle: "AWS Fundamentals: RDS + Aurora + ElastiCache"
date: "2026-03-05"
tags: ["Aurora", "High Availability", "Read Replicas", "Writer Endpoint", "Reader Endpoint"]
---

## 中文短总结

本讲深入介绍了 Amazon Aurora。Aurora 是 AWS 专有的云优化数据库，兼容 PostgreSQL 和 MySQL，性能分别比标准 RDS 提升 3x 和 5x。Aurora 存储自动增长（10GB → 128TB），支持最多 15 个 Read Replicas（复制延迟 < 10ms），故障转移近乎瞬时。Aurora 在 3 个 AZ 中维护 6 份数据副本（写入需 4/6，读取需 3/6），具备自愈能力。关键架构概念包括：Writer Endpoint（始终指向主节点）、Reader Endpoint（自动负载均衡到所有 Read Replicas）、自动扩展和共享存储卷。

## 中文长总结

### Aurora 基础特性
- AWS **专有技术**（非开源），兼容 PostgreSQL 和 MySQL 驱动
- **云优化**：MySQL 性能提升 5x，PostgreSQL 性能提升 3x（相比标准 RDS）
- **存储自动增长**：10GB 起步，自动扩展至最大 128TB（后来升至 256TB），无需手动管理磁盘
- 成本比 RDS 高约 20%，但效率更高，大规模场景更省钱

### 高可用性与数据冗余
- **6 份数据副本**分布在 **3 个 AZ** 中
- 写入仅需 4/6 副本成功 → 单 AZ 故障不影响写入
- 读取仅需 3/6 副本 → 高可用读取
- **自愈机制**：损坏数据通过 Peer-to-Peer 复制自动修复
- 数据分布在数百个存储卷上，极大降低风险

### Read Replicas 与故障转移
- 最多 **15 个 Read Replicas**，复制延迟 < 10ms
- **故障转移**：平均 < 30 秒，近乎瞬时
- 任何 Read Replica 都可以成为新的 Master
- 支持 **跨 Region 复制**

### 关键架构概念（必考）
- **Writer Endpoint**：DNS name，始终指向 Master 实例。即使 Master 发生切换，客户端通过 Writer Endpoint 自动重定向
- **Reader Endpoint**：DNS name，自动**连接级别负载均衡**到所有 Read Replicas
  - 注意：负载均衡在**连接级别**发生，不是语句级别
- **Auto Scaling**：Read Replicas 支持自动扩展（1-15 个）
- **Shared Storage Volume**：共享存储卷自动扩展、自愈、跨 AZ 复制

### 其他特性
- 自动故障转移、备份恢复、隔离与安全、行业合规
- Push-button Scaling（自动扩展）
- 零停机自动补丁
- **Backtrack 功能**：可恢复到任意时间点的数据，不依赖备份

## 考试要点

- Aurora 兼容 **PostgreSQL** 和 **MySQL**，性能分别提升 3x 和 5x
- **6 份副本 / 3 个 AZ**，写入需 4/6，读取需 3/6
- 最多 **15 个 Read Replicas**，< 10ms 复制延迟
- 故障转移 < 30 秒
- **Writer Endpoint** 始终指向 Master，**Reader Endpoint** 负载均衡到 Read Replicas
- Reader Endpoint 负载均衡在**连接级别**，不是语句级别
- 存储自动增长，无需管理磁盘
- Backtrack 可恢复到任意时间点

## English Short Summary

Amazon Aurora is AWS's proprietary cloud-optimized database compatible with PostgreSQL (3x performance) and MySQL (5x performance). Storage auto-grows from 10GB to 128TB. Aurora stores 6 copies across 3 AZs (4/6 for writes, 3/6 for reads) with self-healing. It supports up to 15 Read Replicas (<10ms lag) with near-instant failover (<30 seconds). Key architecture concepts: Writer Endpoint (always points to master), Reader Endpoint (connection-level load balancing across replicas), auto-scaling for replicas, and shared auto-expanding storage volume. Backtrack feature enables point-in-time data restoration without relying on backups.

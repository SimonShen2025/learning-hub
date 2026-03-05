---
title: "Aurora"
lectureId: 235
section: "21"
sectionTitle: "Databases in AWS"
date: "2026-03-05"
tags: ["aurora", "database", "postgresql", "mysql", "serverless", "global-database", "clone"]
---

## 中文短总结

Aurora 总结：兼容 PostgreSQL/MySQL 的云原生数据库，存储与计算分离。存储：6 副本跨 3 AZ + 自愈 + 自动扩展。计算：集群实例跨 AZ + Read Replicas Auto Scaling + Writer/Reader 端点。特色功能：Aurora Serverless（不可预测负载）、Aurora Global（16 Read Instances/Region，跨区域 <1s 复制）、Database Cloning（比快照还原快）、Machine Learning（SageMaker/Comprehend）。比 RDS 更少维护、更灵活、更高性能。

## 中文长总结

### Aurora vs RDS 的关键区别

| 特性 | Aurora |
|------|--------|
| 兼容引擎 | **PostgreSQL** 和 **MySQL** |
| 存储架构 | **存储与计算分离** |
| 存储副本 | **6 副本跨 3 AZ**（固定，不可更改） |
| 存储自愈 | ✅ 自动修复 |
| 存储扩展 | ✅ 自动扩展 |
| 计算集群 | 多实例跨 AZ |
| Read Replicas | 支持 Auto Scaling |
| 端点 | **Writer Endpoint** + **Reader Endpoint** |
| 维护 | 比 RDS 更少 |

### Aurora 特色功能

| 功能 | 说明 |
|------|------|
| **Aurora Serverless** | 不可预测/间歇性负载，无需容量规划 |
| **Aurora Global** | 每区域最多 **16 个 Read Instances**，跨区域存储复制 **< 1 秒** |
| **Database Cloning** | 从现有集群创建新集群，**比快照还原快** |
| **Aurora ML** | 集成 SageMaker、Comprehend |

### Aurora Global 灾备
- 主区域出现问题 → 可将**次要区域提升为新主区域**
- 跨区域复制延迟 < 1 秒

## 考试要点

- Aurora = **云原生 PostgreSQL/MySQL**，存储计算分离
- 存储：**6 副本 × 3 AZ**，自愈 + 自动扩展
- **Writer Endpoint** + **Reader Endpoint**（定制端点）
- **Aurora Serverless** — 不可预测/间歇性负载（关键场景区分）
- **Aurora Global** — 跨区域复制 **< 1 秒**，可提升次要区域
- **Database Cloning** — 比快照还原快（测试/暂存环境）
- 用例与 RDS 相同，但**更少维护、更灵活、更高性能、更多功能**

## English Short Summary

Aurora summary: cloud-native database compatible with PostgreSQL/MySQL, with separated storage and compute. Storage: 6 replicas across 3 AZs, self-healing, auto-scaling. Compute: clustered instances across AZs, Read Replica auto-scaling, Writer/Reader endpoints. Key features: Aurora Serverless (unpredictable workloads), Aurora Global (up to 16 Read Instances per region, cross-region replication <1 second, secondary promotion), Database Cloning (faster than snapshot/restore), Aurora ML (SageMaker/Comprehend). Same use cases as RDS but with less maintenance, more flexibility, and better performance.

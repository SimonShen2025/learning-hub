---
title: "Neptune"
lectureId: 240
section: "21"
sectionTitle: "Databases in AWS"
date: "2026-03-05"
tags: ["neptune", "graph-database", "social-network", "knowledge-graph", "neptune-streams"]
---

## 中文短总结

Amazon Neptune 是完全托管的**图数据库**，3 AZ 复制 + 最多 15 Read Replicas。存储数十亿关系，毫秒级图查询延迟。典型用例：社交网络、知识图谱（如 Wikipedia）、欺诈检测、推荐引擎。**Neptune Streams** 提供实时有序变更流（通过 HTTP REST API 读取），用于通知、数据同步到其他数据存储（S3/OpenSearch/ElastiCache）、跨区域数据复制。考试：**图数据库** → **Neptune**。

## 中文长总结

### Neptune 核心

| 特性 | 说明 |
|------|------|
| 类型 | **图数据库** (Graph Database) |
| 高可用 | **3 AZ** 复制 + 最多 **15 Read Replicas** |
| 容量 | 存储**数十亿关系** |
| 延迟 | **毫秒级**图查询 |
| 管理 | 完全托管 |

### 图数据库的适用场景

图数据库用于存储**高度互联的数据集**：
- **社交网络**：用户间的朋友 / 点赞 / 评论 / 分享关系
- **知识图谱**：如 Wikipedia 文章间的互相链接
- **欺诈检测**
- **推荐引擎**

### Neptune Streams

| 特性 | 说明 |
|------|------|
| 功能 | 图数据每次变更的**实时有序序列** |
| 写入后可用 | **立即可用** |
| 特点 | 无重复 + 严格有序 |
| 访问方式 | **HTTP REST API** |

**Streams 用例**：
- 图数据变更时**发送通知**
- 保持数据与其他存储**同步**（S3 / OpenSearch / ElastiCache）
- **跨区域复制** Neptune 数据

## 考试要点

- **图数据库** → **Neptune**（考试必记）
- 用例：社交网络、知识图谱、欺诈检测、推荐引擎
- 3 AZ + 15 Read Replicas
- 数十亿关系 + 毫秒级查询
- **Neptune Streams** — 实时变更流，通过 REST API 访问

## English Short Summary

Amazon Neptune is a fully managed graph database with 3 AZ replication and up to 15 Read Replicas. Stores billions of relations with millisecond query latency. Use cases: social networks, knowledge graphs (e.g., Wikipedia), fraud detection, recommendation engines. **Neptune Streams** provides real-time ordered change sequences accessible via HTTP REST API — useful for notifications, data sync to other stores (S3/OpenSearch/ElastiCache), and cross-region replication. Exam: **graph database** → **Neptune**.

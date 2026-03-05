---
title: "ElastiCache"
lectureId: 236
section: "21"
sectionTitle: "Databases in AWS"
date: "2026-03-05"
tags: ["elasticache", "redis", "memcached", "cache", "in-memory", "session-data"]
---

## 中文短总结

ElastiCache 总结：托管 Redis 或 Memcached 内存缓存，亚毫秒延迟。需预配实例类型。Redis 支持 Clustering/Multi-AZ/Read Replicas/Redis Auth。安全：IAM + 安全组 + KMS。备份/快照/PITR 类似 RDS。**关键考试点**：使用 ElastiCache 需要**修改应用代码** — 如果题目要求不改代码的缓存方案，ElastiCache 不适合。用例：Key/Value 存储、数据库查询缓存、Web Session 数据。不能用 SQL。

## 中文长总结

### ElastiCache 核心

| 特性 | 说明 |
|------|------|
| 引擎 | **Redis** 或 **Memcached** |
| 类型 | 内存数据存储 |
| 延迟 | **亚毫秒级** (sub-millisecond) |
| 预配 | 需选择实例类型 |

### Redis vs Memcached

| 功能 | Redis | Memcached |
|------|-------|-----------|
| Clustering | ✅ | ✅ |
| Multi-AZ | ✅ | ❌ |
| Read Replicas | ✅ (Sharding) | ❌ |
| Redis Auth | ✅ | ❌ |
| 备份/快照/PITR | ✅ | ❌ |

### 安全

- IAM、安全组、KMS（静态加密）
- Redis 特有 Redis Authentication

### 关键考试区分

⚠️ **使用 ElastiCache 需修改应用代码**
- 题目要求"不修改代码的缓存方案" → **ElastiCache 不适合**
- 此时应考虑其他方案（如 DAX for DynamoDB）

## 考试要点

- ElastiCache = **托管 Redis/Memcached**，亚毫秒延迟
- 需要**修改应用代码**才能使用（重要区分！）
- 用例：**Key/Value 缓存、数据库查询缓存、Session 数据**
- **不支持 SQL**
- DynamoDB 缓存用 **DAX**（不需改代码），通用数据库缓存用 **ElastiCache**（需改代码）

## English Short Summary

ElastiCache summary: managed Redis or Memcached in-memory cache with sub-millisecond latency. Requires provisioned instance type. Redis supports Clustering, Multi-AZ, Read Replicas, Redis Auth, backups/snapshots/PITR. Security: IAM + security groups + KMS. **Critical exam point**: using ElastiCache requires application code changes — if the question asks for a cache without code changes, ElastiCache is not suitable. Use cases: key/value store, database query caching, web session data. No SQL support.

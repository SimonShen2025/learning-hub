---
title: "ElastiCache Overview"
lectureId: 97
section: 9
sectionTitle: "AWS Fundamentals: RDS + Aurora + ElastiCache"
date: "2026-03-05"
tags: ["ElastiCache", "Redis", "Memcached", "Caching", "Session Store"]
---

## 中文短总结

本讲介绍了 Amazon ElastiCache，它是 AWS 托管的 Redis 或 Memcached 缓存服务。缓存是高性能低延迟的内存数据库，用于减轻数据库读密集负载（缓存常见查询结果）和实现应用无状态化（将 Session 存储在缓存中）。使用 ElastiCache **需要修改应用代码**。两种典型架构：①缓存数据库查询结果（Cache Hit/Miss 模式）②存储用户 Session 实现无状态应用。Redis vs Memcached：Redis 支持 Multi AZ、Read Replicas、数据持久化、备份恢复和 Sorted Sets（游戏排行榜）；Memcached 使用分片（Sharding）多节点架构、多线程，无高可用/复制，数据可能丢失。

## 中文长总结

### ElastiCache 基础
- AWS 托管的 **Redis** 或 **Memcached** 缓存服务
- 内存数据库：**高性能、低延迟**
- AWS 负责 OS 维护、补丁、配置、监控、故障恢复、备份
- **重要**：使用 ElastiCache 需要**大量应用代码修改**（不是即插即用）

### 缓存解决的问题
1. **减轻数据库读负载**：常见查询结果缓存，避免每次都查询数据库
2. **应用无状态化**：将应用状态存入 ElastiCache

### 架构模式一：数据库查询缓存
- 应用先查 ElastiCache
- **Cache Hit**：数据在缓存中 → 直接返回（节省数据库查询）
- **Cache Miss**：数据不在缓存中 → 查询数据库 → 写入缓存供后续使用
- 需要考虑**缓存失效策略**（Cache Invalidation）确保数据新鲜度

### 架构模式二：Session Store（无状态应用）
- 用户登录 → 应用将 Session 写入 ElastiCache
- 用户被重定向到另一个应用实例 → 从 ElastiCache 读取 Session
- 用户无需重新登录 → 实现无状态应用

### Redis vs Memcached

| 特性 | Redis | Memcached |
|------|-------|-----------|
| 高可用 | Multi AZ + Auto Failover | 无 |
| Read Replicas | 支持 | 不支持 |
| 数据持久化 | AOF Persistence | 无 |
| 备份恢复 | 支持 | 仅 Serverless 版本 |
| 特殊功能 | **Sorted Sets**（排行榜） | 多线程架构 |
| 数据分布 | 复制 | **Sharding**（分片/分区） |
| 数据丢失风险 | 低 | 高（节点故障可能丢失所有缓存） |

## 考试要点

- ElastiCache 需要**应用代码修改**
- 两种使用模式：**查询缓存** 和 **Session Store**
- Redis 支持 Multi AZ、Replicas、持久化、Sorted Sets（排行榜）
- Memcached 使用 Sharding、多线程、无高可用
- Cache Hit / Cache Miss / Cache Invalidation 概念

## English Short Summary

Amazon ElastiCache is a managed Redis or Memcached in-memory caching service providing high performance and low latency. It reduces database read loads by caching common queries (cache hit/miss pattern) and enables stateless applications via session storage. Using ElastiCache requires significant application code changes. Redis supports Multi AZ with auto-failover, Read Replicas, AOF persistence, backup/restore, and Sorted Sets (for gaming leaderboards). Memcached uses sharding across multiple nodes with multi-threaded architecture but lacks high availability, replication, and persistent data.

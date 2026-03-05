---
title: "ElastiCache for Solution Architects"
lectureId: 99
section: 9
sectionTitle: "AWS Fundamentals: RDS + Aurora + ElastiCache"
date: "2026-03-05"
tags: ["ElastiCache", "Redis", "Memcached", "Security", "Caching Patterns", "Leaderboard"]
---

## 中文短总结

本讲从解决方案架构师角度总结了 ElastiCache 的安全和使用模式。安全方面：Redis 支持 IAM 认证，Redis AUTH 提供密码保护，支持 SSL 传输加密；Memcached 支持 SASL 认证。三种缓存加载模式：**Lazy Loading**（按需缓存，数据可能过期）、**Write Through**（写数据库时同步写缓存，无过期数据）、**Session Store**（利用 TTL 管理 Session 过期）。Redis 的 **Sorted Sets** 功能可实现实时游戏排行榜，元素自动排序和去重，无需应用端额外编程。

## 中文长总结

### ElastiCache 安全

**Redis 安全**：
- **IAM 认证**：仅 Redis 支持（Memcached 不支持）
- IAM policies 仅用于 **AWS API 级别安全**
- **Redis AUTH**：创建集群时设置密码/token，提供额外安全层
- 支持 **SSL 传输加密**

**Memcached 安全**：
- 支持 **SASL 认证**（高级机制，记住名称即可）

### 三种缓存加载模式

1. **Lazy Loading（懒加载）**
   - 读取时缓存：Cache Hit → 返回缓存数据；Cache Miss → 查询数据库 → 写入缓存
   - 数据**可能过期**（stale）
   - 最常见的模式

2. **Write Through（写透）**
   - 数据写入数据库时**同时写入缓存**
   - **无过期数据**
   - 写操作延迟可能增加

3. **Session Store（会话存储）**
   - 将 Session 存入 ElastiCache
   - 使用 **TTL（Time to Live）** 控制 Session 过期

### Redis Sorted Sets — 游戏排行榜（考试重点）
- Redis 的 **Sorted Sets** 数据结构保证元素**唯一性 + 自动排序**
- 每次添加元素时实时排名
- 所有 Redis 缓存节点拥有相同的排行榜数据
- 无需应用端编程，直接利用 Redis 特性
- **使用场景**：实时游戏排行榜（第一名、第二名、第三名...）

## 考试要点

- IAM 认证仅 **Redis** 支持
- Redis AUTH 提供密码认证，Memcached 使用 SASL
- 三种缓存模式：Lazy Loading / Write Through / Session Store
- **Redis Sorted Sets** → 实时游戏排行榜（考试常见考点）
- 缓存失效（Cache Invalidation）是计算机科学中最难的问题之一

## English Short Summary

This lecture covers ElastiCache security and usage patterns from a Solutions Architect perspective. Security: Redis supports IAM authentication and Redis AUTH (password/token), with SSL in-flight encryption; Memcached supports SASL authentication. Three caching patterns: Lazy Loading (cache on read, data may be stale), Write Through (cache on write, no stale data), and Session Store (using TTL for session expiration). Redis Sorted Sets enable real-time gaming leaderboards with automatic uniqueness and ordering — a key exam topic requiring no application-side programming.

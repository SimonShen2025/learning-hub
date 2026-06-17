---
title: "Configure compute, memory, and storage resources to support vector workloads"
lectureId: 16
section: 5
sectionTitle: "Develop AI solutions by using Azure Database for PostgreSQL"
date: "2026-06-17"
tags: ["postgresql", "compute", "memory", "vector-workloads", "ai-200"]
---

## 中文短总结

Vector workload 资源调优：**Burstable** 仅 dev（短时 burst）；生产用 **General Purpose**（4:1 内存:core）或 **Memory Optimized**（8:1，HNSW index 吃内存）。1536 维 HNSW 约 6 KB/行，100 万行 ≈ 6 GB index RAM。Server parameters：**shared_buffers**（默认 ~800 MB，建议 ~25% RAM）、**work_mem**（大 sort 用，建议 64–256 MB）。Storage 只能扩容不能缩；开启 **storage autogrow** 防磁盘满。

## 中文长总结

Vector index（尤其 HNSW）驻留内存，compute/memory/storage 配置直接影响相似度搜索性能。

**Compute tiers**：

| Tier | 用途 | 特点 |
|---|---|---|
| **Burstable (B-series)** | Dev/test | 长时间低性能 + 短时 burst；不适合生产 vector |
| **General Purpose (D-series)** | 均衡生产 | ~4 GB RAM per vCore（D2s = 2 core / 8 GB） |
| **Memory Optimized (E-series)** | Vector-heavy | ~8 GB RAM per vCore（D2s 8GB → E2s 16GB） |

**内存估算**：1536-dim HNSW index ≈ **6 KB/row**。1M rows ≈ **6 GB** 仅 index——D2s (8 GB) 已占 75%。Memory Optimized 在同 core 数下双倍 RAM，性价比高于盲目加 core。

**Server parameters（Portal → Server parameters）**：
- **shared_buffers**：PostgreSQL 共享内存缓存（单位 8 KB blocks）。增大可减少 disk I/O；建议约为 RAM 的 **25%**
- **work_mem**：每操作排序/哈希内存（默认 4 MB 偏小）；复杂 ORDER BY / sort 建议 **64–256 MB**

**Storage**：
- 容量 **只能 scale up，不能 scale down**
- **Storage autogrow**：初始容量不足时自动扩展，避免 ingestion 导致 downtime

**升级操作**：Burstable → General Purpose 可 inline 切换（需 restart，有 downtime）。

## 考试要点

- Burstable = dev only；production vector → **General Purpose** or **Memory Optimized**
- HNSW index 是 **memory-intensive**；按 row count × ~6 KB 估算
- Memory Optimized 提供更高 **RAM:vCore 比**（8:1 vs 4:1）
- **shared_buffers** ≈ 25% RAM；**work_mem** 影响 sort 性能
- Storage **cannot scale down**；consider **autogrow**
- Compute tier 变更通常需要 **server restart**

## English Short Summary

Size PostgreSQL for vectors: avoid Burstable in production. Use **General Purpose** (4:1 RAM:core) or **Memory Optimized** (8:1) because HNSW indexes are RAM-heavy (~6 KB/row). Tune **shared_buffers** (~25% RAM) and **work_mem** (64–256 MB). Storage scales up only—enable **autogrow**. Tier changes require restart.

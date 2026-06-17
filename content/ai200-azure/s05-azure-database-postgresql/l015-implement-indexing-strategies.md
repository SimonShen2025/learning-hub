---
title: "Implement indexing strategies"
lectureId: 15
section: 5
sectionTitle: "Develop AI solutions by using Azure Database for PostgreSQL"
date: "2026-06-17"
tags: ["postgresql", "indexing", "hnsw", "pgvector", "ai-200"]
---

## 中文短总结

无 index 时 WHERE 触发 **sequential scan**；`CREATE INDEX ON documents(category)` 改为 **index/bitmap scan**，大表收益显著。Vector 搜索用 **`<=>` cosine distance operator**。向量 index：**HNSW**（高 recall、多内存、近似 O(log n)）vs **IVFFlat**（更快、略低精度）。HNSW 示例：`CREATE INDEX ... USING hnsw (embedding vector_cosine_ops)`。可用 `SET enable_seqscan=off` 强制 planner 用 vector index；`EXPLAIN ANALYZE` 验证。

## 中文长总结

**Relational 索引（B-tree）**：
- 无 index：`EXPLAIN ANALYZE` 显示 **Seq Scan**，全表扫描
- `CREATE INDEX idx_category ON documents(category)` 后，category 过滤变为 **Bitmap Index Scan**，execution time 下降（数据量越大差异越明显）
- 原则：频繁出现在 **WHERE/JOIN** 的列建 B-tree index

**Vector 相似度搜索（无 index）**：
- 运算符 **`<=>`**：cosine **distance**（注意：值越小越相似；similarity ≈ 1 - distance）
- 全表扫描复杂度 **O(n)**——行数翻倍，耗时翻倍

**Vector 索引类型（pgvector）**：

| 类型 | 特点 |
|---|---|
| **HNSW** | Hierarchical Navigable Small World；高 recall；内存占用大；近似 logarithmic 查询时间 |
| **IVFFlat** | 更快、内存更小；recall 略低；大数据集可选 |

创建 HNSW index 示例：
```sql
CREATE INDEX ON documents USING hnsw (embedding vector_cosine_ops);
```

**Query planner 技巧**：
- 小数据集 planner 可能仍选 Seq Scan
- `SET enable_seqscan = off;` 强制使用 vector index（测试/验证用）
- 始终用 **EXPLAIN ANALYZE** 对比 latency

**Trade-offs（考试常考）**：index 大小 vs 查询速度 vs recall 精度 vs 内存（HNSW index 约 6 KB/row for 1536-dim vector → 100 万行 ≈ 6 GB RAM）。

## 考试要点

- B-tree index 加速 **equality/range WHERE**；Seq Scan vs Index Scan 区别
- Vector 距离运算符：**`<=>`**（cosine distance in pgvector）
- **HNSW**：better recall, more memory, ~logarithmic search
- **IVFFlat**：faster, less memory, slightly lower accuracy
- Vector index 将 O(n) 线性扫描降为近似 O(log n)
- 用 **EXPLAIN ANALYZE** 验证执行计划
- Index 选择需根据数据规模、变更频率、精度要求测试

## English Short Summary

Add B-tree indexes on filter columns to avoid sequential scans. For embeddings, use **`<=>`** cosine distance. Create **HNSW** (high recall, memory-heavy) or **IVFFlat** (faster, less accurate) vector indexes. HNSW gives ~logarithmic search vs O(n) brute force. Validate with **EXPLAIN ANALYZE**; force index use with `enable_seqscan=off` if needed. Balance index size, memory, speed, and recall.

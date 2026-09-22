---
title: "Design Considerations for Vector Storage on PostgreSQL"
lectureId: 80
section: 8
sectionTitle: "Develop AI Solutions with Azure Database for PostgreSQL"
date: "2026-09-22"
tags: ["postgresql", "pgvector", "vector-search", "hnsw"]
---

## 中文短总结

PostgreSQL（借助 pgvector 扩展）支持三种向量数据类型：vector（32 位浮点，默认推荐，精度最高）、halfvec（16 位浮点，节省存储）、sparsevec（仅存储非零值，用于稀疏向量）。支持两种向量索引：IVFFlat（基于聚类的近似搜索，需要预先存在数据训练聚类且数据变化后需重建）和 HNSW（层级可导航小世界图索引，业界标准，支持增量插入，是课程推荐的默认选择）。相似度函数推荐余弦相似度。

## 中文长总结

### 表结构设计

- 在现有表（如 documents 表）中新增一个 `embedding` 列，数据类型为 `vector(1536)`，维度需与嵌入引擎输出一致

### 向量数据类型对比

| 数据类型 | 精度 | 存储占用 | 适用场景 |
|---|---|---|---|
| vector | 32 位浮点，最高精度 | 最大 | 绝大多数生产 RAG 场景 |
| halfvec | 16 位浮点，精度略降 | 较小 | 关注存储成本、可接受召回率略降 |
| sparsevec | 仅存储非零值 | 最小（针对稀疏场景） | 向量中大量取值为零的稀疏嵌入场景 |

### 向量索引类型

**IVFFlat（Inverted File Flat）索引**

- 将向量嵌入聚类，每个簇有一个质心（centroid）；查询时先找到最近质心，再在该簇内检索
- 关键参数：
  - `lists`：控制簇数量。行数 ≤100 万时取 `行数/1000`；超过 100 万行时取 `sqrt(行数)`
  - `probes`：控制查询时搜索的簇数量，经验起点为 `sqrt(lists)`，可根据召回率/延迟需求调整
- 需要在创建索引前表中已存在向量数据（用作聚类训练集）；数据集发生较大变化后需要重建索引

**HNSW（Hierarchical Navigable Small Worlds）索引**

- 业界最常用的向量索引，性能与召回率权衡最佳，是本课程默认使用的索引
- 图状分层结构：第一层为入口点（父节点），逐层向下更加密集聚集
- 关键参数：
  - `m`：每个节点最大连接数，默认 16，可提升至 32/64 以追求更高召回率（但增加计算开销）
  - `ef_construction`：构建索引时的搜索宽度，默认 64，可提升至 100-200
  - `ef_search`：查询时的搜索宽度，默认 40，提升至 100-200 可达 99%+ 召回率但增加延迟
- 优势：支持**增量插入**新向量而无需重建整个索引（IVFFlat 则需要因聚类失效而重建）

### 相似度函数

- 与 Cosmos DB 一致，RAG 场景推荐使用**余弦相似度**函数

## English Short Summary

PostgreSQL (via pgvector) supports three vector types — `vector` (32-bit, default, highest precision), `halfvec` (16-bit, storage-saving), `sparsevec` (non-zero only) — and two index types: IVFFlat (cluster-based approximate search needing pre-existing data and rebuilds) and HNSW (graph index, the industry-standard default with incremental inserts and the best latency/recall balance). Cosine similarity remains recommended for RAG.

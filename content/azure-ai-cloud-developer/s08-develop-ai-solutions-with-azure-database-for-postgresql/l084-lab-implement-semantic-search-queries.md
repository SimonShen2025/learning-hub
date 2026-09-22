---
title: "Lab: Implement Semantic Search Queries (Hands-On Lab)"
lectureId: 84
section: 8
sectionTitle: "Develop AI Solutions with Azure Database for PostgreSQL"
date: "2026-09-22"
tags: ["postgresql", "pgvector", "hybrid-search", "hands-on-lab"]
---

## 中文短总结

在 PostgreSQL 中实现向量搜索（用 `<=>` 余弦距离操作符结合 `ORDER BY` 和 `LIMIT`）、结合元数据过滤（WHERE 公司名）的向量搜索、基于 GIN 倒排索引的关键词全文搜索，以及手工实现的加权混合搜索（因 PostgreSQL 无内置 RRF 函数，需自行以 70% 向量搜索权重 + 30% 关键词搜索权重构造混合分数并排序）。

## 中文短总结（续）— 无

## 中文长总结

### 向量搜索

- 使用 Azure OpenAI 为用户查询（如 "how is GreenSteel reducing emissions"）生成向量嵌入
- SQL 查询使用 `<=>` 操作符（对应创建索引时选定的余弦距离函数）计算 `chunk_embedding` 与查询向量的距离，按距离升序排序（距离越小越相似），限制返回 top 5
- 结果验证：与 GreenSteel 相关的分块因距离值最小而排在最前面

### 结合元数据过滤

- 在向量搜索查询基础上添加 `WHERE company_name = 'GreenSteel Limited'` 条件，将结果范围限定在特定公司

### 关键词全文搜索

- 需要先创建 GIN（Generalized Inverted Index，通用倒排索引）索引：`CREATE INDEX ... USING gin(to_tsvector('english', chunk_text))`
- 基于该索引使用全文搜索函数对 chunk_text 列执行关键词匹配查询

### 加权混合搜索

- PostgreSQL 没有内置的 RRF（Reciprocal Rank Fusion）评分函数，需要手工构造混合分数公式
- 混合分数 = 向量搜索部分（权重 0.7）+ 关键词搜索部分（权重 0.3），按混合分数降序排序，返回 top 10
- 执行结果显示与 GreenSteel Ltd 相关的多个分块因综合评分较高而排在前列（如 0.6443、0.63 等混合分数）

## English Short Summary

Implemented vector search in PostgreSQL using the `<=>` cosine-distance operator with `ORDER BY`/`LIMIT`, combined it with metadata filtering (WHERE company name), added GIN-indexed full-text keyword search, and hand-built a weighted hybrid search score (since PostgreSQL lacks a built-in RRF function) combining vector search (70% weight) and keyword search (30% weight) into a single ranked hybrid score.

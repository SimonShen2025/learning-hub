---
title: "Understanding Hybrid Search with RRF"
lectureId: 64
section: 7
sectionTitle: "Develop AI Solutions with Azure CosmosDB for NoSQL"
date: "2026-09-22"
tags: ["cosmosdb", "hybrid-search", "rrf", "full-text-search"]
---

## 中文短总结

混合搜索（Hybrid Search）结合向量搜索（语义相似）与全文搜索（关键词匹配）的优势，通过倒数排名融合（Reciprocal Rank Fusion, RRF）算法将两个排名列表合并为最终排名。RRF 公式为 `1/(k+rank1) + 1/(k+rank2)`（k 通常取 60），加权 RRF 则允许为向量搜索和全文搜索分别赋予不同权重（w1、w2），以调整两者对最终排名的影响程度。

## 中文长总结

### 问题背景

- 单独使用向量搜索（如余弦相似度）检索 top-K 相关文档时，可能遗漏语义不完全相同但包含重要关键词的文档
- 单独使用全文搜索则只关注关键词匹配，忽略语义相似关系
- 混合搜索试图在语义关系（向量搜索）和关键词关系（全文搜索）之间找到平衡点

### RRF（Reciprocal Rank Fusion）算法

- 分别为向量搜索结果和全文搜索结果生成排名列表
- 简单 RRF 公式：`RRF_score = 1/(k + rank1) + 1/(k + rank2)`
  - `k` 是常数（经过大量测试后常取值为 60）
  - `rank1` 是文档在向量搜索排名列表中的名次
  - `rank2` 是文档在全文搜索排名列表中的名次
- 加权 RRF 公式：`RRF_score = w1/(k + rank1) + w2/(k + rank2)`
  - `w1`、`w2` 为权重，可为任意整数或浮点数，用于控制向量搜索排名与全文搜索排名各自对最终得分的影响力
  - 若 w1=2、w2=1，表示更看重向量搜索的排名

### 示例演算

- 文档 d3 在向量搜索中排名第 1，在全文搜索中排名第 4；文档 d2 在向量搜索中排名第 3，在全文搜索中排名第 1
- 计算 d2 的 RRF 分数：`1/(60+3) + 1/(60+1) = 1/63 + 1/61 ≈ 0.032`
- 对所有候选文档执行相同计算后，得到最终的混合搜索排名列表（示例中 d2 排第一，其后依次是 d3、d1……d9）

## English Short Summary

Hybrid search combines vector search (semantic similarity) and full-text search (keyword matching) using the Reciprocal Rank Fusion (RRF) algorithm to merge two ranked result lists into one. The formula `1/(k+rank1) + 1/(k+rank2)` (k typically 60) computes a fused score per document; a weighted variant (`w1/(k+rank1) + w2/(k+rank2)`) lets you tune how much each ranking source (vector vs. full-text) influences the final result.

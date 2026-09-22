---
title: "Lab: Query Azure CosmosDB for NoSQL (Hands-On Lab)"
lectureId: 57
section: 7
sectionTitle: "Develop AI Solutions with Azure CosmosDB for NoSQL"
date: "2026-09-22"
tags: ["cosmosdb", "sql-query", "python-sdk", "hands-on-lab"]
---

## 中文短总结

在 Jupyter Notebook 中使用容器客户端的 `query_items` 函数演示了多种 Cosmos DB SQL 查询：基础 SELECT、WHERE 过滤、`CONTAINS` 全文搜索、聚合函数（AVG、COUNT）、数组查询（`ARRAY_CONTAINS`）、带参数的参数化查询（parameterized query），以及通过别名重命名输出字段的投影（projection）。跨分区查询需设置 `enable_cross_partition_query=True`，而已知分区键的查询应直接传入 `partition_key` 以提升性能。

## 中文长总结

### 基础查询

- 基础 SELECT 查询选取 id、name、category、price 字段，需设置 `enable_cross_partition_query=True` 才能跨所有分类返回结果

### WHERE 过滤与全文搜索

- 使用 `WHERE c.category = 'smoothies'` 过滤特定分类的数据
- 使用 `CONTAINS(c.description, 'avocado')` 实现全文关键字搜索

### 聚合函数

- `SELECT VALUE AVG(c.priceValue)` 计算所有条目的平均价格（示例结果：11.16 美元）
- `SELECT VALUE COUNT(1) WHERE c.category = 'smoothies'` 统计特定分类下的条目数（示例结果：18 条），此时可直接指定 `partition_key='smoothies'` 以获得更好性能

### 数组查询

- 使用 `ARRAY_CONTAINS(c.dietaryTags, 'high protein')` 查询 JSON 文档中数组字段是否包含特定值

### 参数化查询（Parameterized Query）

- 构建带占位参数的模板化 SQL 查询（如按 category 和 price 过滤，并按 price 降序排序）
- 运行时通过 parameters 数组动态传入参数值（如 category='smoothies'、price=5.5），同时可指定分区键以提升性能

### 投影（Projection）

- 通过 SQL 查询中的别名（如 `c.name AS productName`）将返回结果的字段重命名，例如 name → productName、category → productCategory、price → productPrice

## English Short Summary

Demonstrated Cosmos DB SQL query patterns via the Python SDK's `query_items`: basic SELECT, WHERE filtering, full-text search with `CONTAINS`, aggregates (`AVG`, `COUNT`), array queries with `ARRAY_CONTAINS`, parameterized queries with ORDER BY, and field-renaming projections. Cross-category queries need `enable_cross_partition_query=True`; queries scoped to a known partition key should pass `partition_key` directly for better performance.

---
title: "Understand Range and Composite Indexes"
lectureId: 58
section: 7
sectionTitle: "Develop AI Solutions with Azure CosmosDB for NoSQL"
date: "2026-09-22"
tags: ["cosmosdb", "indexing", "query-performance"]
---

## 中文短总结

没有索引时，按字段过滤或排序会触发全容器扫描（full container scan），导致高延迟和高 RU 消耗。Cosmos DB 默认对所有 JSON 数据自动建立类 B 树索引，此外还可以针对已知的查询模式创建**范围索引（Range Index）**（优化比较操作符查询）和**复合索引（Composite Index）**（优化涉及多字段的过滤/排序查询，尤其是多个 ORDER BY 字段的场景）。

## 中文长总结

### 问题：全容器扫描

- 随着企业数据集增长，按 company ID 或日期范围过滤这类查询会因全容器扫描而变慢，扫描全部数据后再应用过滤条件
- 涉及连接（joins）、聚合、排序的分析型查询在缺乏索引时也会遭遇高延迟和性能瓶颈
- 建立索引本质上是把数据组织成便于引擎快速定位目标行的形式，类似书籍开头的索引页

### 自动索引

- Cosmos DB 的无 schema 服务会自动对所有上传的 JSON 数据建立索引（类似 B 树结构的特殊变体），无需额外配置

### 范围索引（Range Index）

- 优化使用比较运算符的查询，例如按日期范围（如 6 月到 7 月）过滤的查询

### 复合索引（Composite Index）

- 优化涉及**多个属性**的查询，例如同时按日期范围过滤并按 ORDER BY 排序的复杂查询
- 若查询包含两个 ORDER BY 字段（如按相关性分数降序、再按上传日期降序），需要建立一个包含这两个路径（均为降序）的复合索引
- 复合索引定义中只能包含"相等过滤（=）"字段和"一个范围过滤"字段；如果查询涉及多个范围过滤字段，需要为每个范围过滤分别创建独立的复合索引

### 索引策略结构

- 自定义索引策略包含自动元数据索引部分（`automatic: true`，包含/排除路径）以及针对 Range/Composite 的自定义定义
- 需要清楚了解将要执行的查询模式（过滤字段、排序方向），才能正确设计索引策略

## English Short Summary

Without indexes, filtering or sorting by a field triggers a full container scan, causing high latency and RU consumption. Cosmos DB auto-indexes all JSON data via a B-tree variant by default; beyond that, you can build a **Range Index** (optimizes comparison-operator queries like date ranges) and a **Composite Index** (optimizes queries filtering/sorting on multiple properties, especially multi-field ORDER BY), designed based on the exact query patterns you expect to run.

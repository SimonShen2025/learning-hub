---
title: "Lab: Working with Range and Composite Indexes (Hands-On Lab)"
lectureId: 59
section: 7
sectionTitle: "Develop AI Solutions with Azure CosmosDB for NoSQL"
date: "2026-09-22"
tags: ["cosmosdb", "indexing", "query-performance", "hands-on-lab"]
---

## 中文短总结

通过 `replace_container` 更新容器索引策略，先在 `rating` 字段上创建范围索引以加速单字段过滤查询；随后尝试对 `rating` 和 `reviewCount` 两个数值字段做 ORDER BY 排序查询时报错（缺少对应复合索引），于是新增复合索引解决问题；又创建了混合类型字段（category 升序 + rating 降序）的复合索引。每次查询都用自定义辅助函数统计返回文档数、RU 消耗和耗时，验证索引带来的性能提升，最后恢复为默认索引策略。

## 中文长总结

### 准备工作

- 编写 `queryStatistics` 辅助函数：执行跨分区查询并返回结果，同时统计返回文档数、RU 消耗和查询耗时（毫秒），用于对比索引创建前后的性能差异

### 创建范围索引

- 在 `rating` 字段（浮点数）上创建范围索引：索引定义中 `indexingMode: consistent`，`automatic: true`，included paths 包含 `/rating/?`，excluded paths 包含其余所有字段（`/*`）
- 通过 `replace_container` 应用新索引策略，可在门户 Settings → Indexing Policy 中确认已生效
- 执行 `WHERE c.rating > 4.5` 过滤查询，验证查询统计（RU 约 4.74，耗时约 21.5ms）

### 复合索引的必要性

- 尝试执行按 `rating` 和 `reviewCount`（均为数字类型）两个字段 ORDER BY 排序的查询时报错："order by query does not have a corresponding composite index"
- 说明：对多个数值字段进行排序（ORDER BY）必须建立复合索引，范围索引不足以支持

### 创建复合索引

- 保留原有范围索引，新增复合索引：`rating`（降序）+ `reviewCount`（降序）
- 重新执行排序查询，成功返回 151 条文档，RU 约 8.67，耗时约 23.45ms
- 进一步创建混合类型复合索引：`category`（升序，非数字字段）+ `rating`（降序，数字字段），验证按分类过滤并按评分排序的查询可被该索引加速

### 恢复默认索引策略

- 演示完成后，将容器索引策略恢复为默认设置（不含自定义范围索引或复合索引），为后续实验保持一致的初始状态

## English Short Summary

Used `replace_container` to update the indexing policy: added a range index on `rating` to speed up filters, then hit an error running ORDER BY on two numeric fields requiring a composite index, added one to fix it, and created a mixed-type composite index (`category` ascending + `rating` descending). A helper function logged document count, RU charge, and duration to show the gains, before reverting to the default policy.

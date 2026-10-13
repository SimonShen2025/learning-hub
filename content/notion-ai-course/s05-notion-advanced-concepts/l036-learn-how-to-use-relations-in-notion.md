---
title: "Learn How To Use Relations in Notion"
lectureId: 36
section: 5
sectionTitle: "Notion Advanced: Dive Into More Advanced Concepts Inside Notion"
date: "2026-10-14"
tags: [notion-relations, notion-rollups, database-modeling]
---

## 中文短总结

Relation 在数据库记录之间建立双向链接；Rollup 则沿关系读取并展示相关属性。示例将课程与学生评价关联，再汇总具体评论或评分，避免重复复制数据。

## 中文长总结

- 在一个数据库添加 Relation property 并选择目标数据库；记录可通过该属性关联另一库中的页面，关系也可在两侧显示。
- Relation 解决“哪些记录彼此相关”，例如某门课程对应哪些评价；它本身主要提供链接，而不是复制相关字段内容。
- Rollup 依赖 Relation，可选择关联数据中的 property 来展示或计算，例如读取评论文本或评分。
- 设计前确认关联方向、基数和需要读取的字段；检查双向属性配置，避免字段含义混淆或建立重复关系。

## English Short Summary

Relations link records across databases and can expose the connection on both sides. Rollups use a relation to retrieve or aggregate a selected property, such as linked review text or ratings, without duplicating the source data.
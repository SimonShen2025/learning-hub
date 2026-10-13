---
title: "Linking Databases Together Using \"Relations\""
lectureId: 22
section: 7
sectionTitle: "Advanced Database Features"
date: "2026-10-13"
tags: [notion-relations, database-modeling, linked-data]
---

## 中文短总结

Relation property 在两个数据库记录之间建立关联，避免复制分类或相关信息。启用双向关联后，任一数据库都能看到对应关系，适合把费用记录连接到费用类别等场景。

## 中文长总结

在一个数据库中新增 Relation 属性，选择要关联的目标数据库，并按需要启用双向关系。之后可从关联字段选择目标记录，形成可导航的记录间链接。

例如，费用数据库可关联到费用类别数据库：费用记录保留金额和日期，类别数据库集中维护类别；同一关联也能从类别侧查看对应费用。这样可减少重复录入并保持关系一致。

设计关系前先决定哪些实体应独立维护，以及是否需要双向查看。Relation 建立连接，本身不负责汇总数值；需要聚合相关记录时再使用 Rollup。

## English Short Summary

A Relation property links records across databases without duplicating category or reference data. Enable a two-way relation when both databases should expose the link. Use a Rollup separately when you need to aggregate related values.
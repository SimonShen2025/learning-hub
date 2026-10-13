---
title: "Linked views of databases"
lectureId: 15
section: 2
sectionTitle: "Notion databases"
date: "2026-10-13"
tags: [linked-database-views, notion-databases, dashboards]
---

## 中文短总结

Linked view of database 可将已有数据库放到其他页面，以不同视图复用同一数据。链接视图中的修改会同步到原数据库；可用它构建 dashboard，避免复制和维护重复数据。

## 中文长总结

- 在目标页面插入 Linked view of database，选择已有数据库作为数据源；该视图可独立调整布局和筛选条件。
- 链接视图不是数据副本。在其中修改记录会更新原数据库，原位置也会显示相同变化。
- 同一页面可放置多个数据库视图，便于在 dashboard 汇总不同来源，或在相关项目页显示局部数据。
- 使用前确认选择的是正确数据源；为每个视图设置适合其页面用途的布局、筛选和属性显示。

## English Short Summary

Insert a linked database view on another page to reuse the same source data with a different layout or filter. Edits in the linked view update the original database. Use linked views for dashboards instead of maintaining duplicate records.
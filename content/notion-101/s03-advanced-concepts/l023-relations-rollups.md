---
title: "Relations & rollups"
lectureId: 23
section: 3
sectionTitle: "Advanced concepts"
date: "2026-10-13"
tags: [notion-relations, notion-rollups, database-modeling]
---

## 中文短总结

Relation 将不同数据库记录关联起来；Rollup 基于该关系读取并汇总另一数据库的属性。示例以 Projects 关联 Tasks，再用 Rollup 汇总工时或已完成任务比例。

## 中文长总结

- 在 Tasks 数据库添加 Relation，选择 Projects 数据库，并将每条任务关联到所属项目。关系两端均可查看关联记录。
- Rollup 依赖已有 Relation：选择关系、源属性和汇总方式，例如将任务 estimated time 求和，得到项目总工时。
- 也可汇总 checkbox 的完成比例，形成项目进度。关联记录或源属性变化时，Rollup 会重新计算。
- Relation 用于建模记录间关系，Rollup 用于读取和汇总关系数据；两者职责不同。配置后用多条记录验证关联和汇总是否正确。

## English Short Summary

Relations connect records across databases; rollups read and aggregate properties through those links. Link tasks to projects, then sum estimated time or calculate completion percentages. Validate both the relationships and aggregation logic.
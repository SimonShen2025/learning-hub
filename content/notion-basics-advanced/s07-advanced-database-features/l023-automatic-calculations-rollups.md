---
title: "Automatic Calculations Using \"Rollups\""
lectureId: 23
section: 7
sectionTitle: "Advanced Database Features"
date: "2026-10-13"
tags: [notion-rollups, database-relations, aggregation]
---

## 中文短总结

Rollup 依赖已有 Relation，从关联数据库读取属性并进行计数、求和、平均值等汇总。先配置关系，再选择关联字段和计算方式；源记录变化后汇总会动态更新。

## 中文长总结

1. 先在两个数据库间建立 Relation；Rollup 必须通过关系知道要读取哪些相关记录。
2. 在汇总侧添加 Rollup 属性，选择 Relation、目标 property 和计算方式。对于费用类别，可对关联费用的金额选择 Sum，以得到类别总额。
3. Rollup 可根据数据类型进行计数、百分比或数值聚合，例如平均值、中位数、最小值、最大值和总和。
4. 汇总由关联数据动态计算。若结果为零或不符合预期，检查 Relation 是否已正确连接、选中的 property 是否合适，以及聚合类型是否正确。

## English Short Summary

Rollups read a property from records linked through an existing Relation and aggregate it, for example by count, sum, average, median, minimum, or maximum. Configure the relation, source property, and calculation; results update as related data changes.
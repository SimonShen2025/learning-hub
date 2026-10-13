---
title: "Explore Databases Options pt.2"
lectureId: 13
section: 2
sectionTitle: "Organize Your Life & Work With Databases"
date: "2026-10-14"
tags: [database-filters, sorting, grouping]
---

## 中文短总结

Filter 选择要显示的记录，Sort 决定顺序且支持多级优先级，Group 按属性分组。规则只作用于当前 view；Lock database 可阻止结构修改，但使用前确认日常操作需求。

## 中文长总结

- Filter 可按日期范围、状态、优先级等属性筛选；每个 view 可有独立规则，删除 filter 后隐藏记录会重新显示。
- Sort 支持多条规则，列表顶部规则优先；拖动规则可调整主次排序。先按主要属性排序，再用次级属性打破并列。
- Group 可按状态、优先级等属性分组，帮助查看不同类别的任务；将 filter、sort 与 group 组合时，保留足够透明度，避免误以为记录被删除。
- Lock database 可限制对数据库结构或视图的修改；锁定前确认协作者仍能完成预期的数据编辑。

## English Short Summary

Filters select visible records, sorts order them with configurable priority, and groups partition them by a property. These rules belong to each view. Lock a database only after confirming which edits collaborators still need.
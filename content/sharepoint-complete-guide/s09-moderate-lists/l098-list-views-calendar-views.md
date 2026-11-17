---
title: "List views - calendar views"
lectureId: 98
section: 9
sectionTitle: "Moderate - Lists"
date: "2026-11-17"
tags: ["sharepoint-lists", "calendar-views", "date-columns", "calculated-columns"]
---

## 中文短总结

Calendar view 可将 List 中的日期记录显示在日历上，配置起始日期、可选结束日期及事件标题。若标题需要组合多个字段，可创建 Calculated 列，例如将名字和姓氏连接为 Full Name。

## 中文长总结

### 创建日历视图

- List 需有可用于日历的日期列。
- 创建 **Calendar** 视图并选择开始日期；若要显示跨日期范围的项目，可配置结束日期。
- 设置日历事件标题字段，让日期上的记录易于识别。选择 Item 后可打开其详情。

### 组合标题字段

若现有字段不足以生成清晰标题，可通过 Calculated 列将名字和姓氏等文本组合成 Full Name，再将其选作日历标题。应在 List 中验证公式结果与显示效果。

## English Short Summary

A Calendar view displays List items using a date column, with an optional end date for ranged events and a chosen title field. A Calculated column can combine fields such as first and last name to create a more readable calendar label.

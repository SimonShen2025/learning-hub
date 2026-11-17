---
title: "Calculated columns"
lectureId: 86
section: 9
sectionTitle: "Moderate - Lists"
date: "2026-11-17"
tags: ["sharepoint-lists", "calculated-columns", "formulas", "date-columns"]
---

## 中文短总结

Calculated 列可根据同一 List 的其他列自动计算结果，例如用报名日期加 90 天得出奖励期限。公式结果不可直接编辑；课程示例通过 Classic List settings 创建计算列，并选择结果类型。

## 中文长总结

### 创建计算字段

- 先准备公式依赖的源列，例如客户的报名日期。
- 从 List settings 添加 **Calculated** 列，在公式中引用源列并设置运算，例如日期加 90 天。
- 指定公式结果类型（如 Date/Time，并选择仅日期），保存后 SharePoint 会为记录计算结果。

### 使用和维护

- 计算列是由公式生成的，不能像普通输入列一样直接修改；应更新源值或公式。
- 课程示例先将从 Excel 粘贴的日期作为文本导入，再转换为日期列，避免粘贴过程中的格式问题。导入策略应先在当前环境中验证。
- 课程演示的计算列入口位于 Classic 设置页面；可用方式和公式支持以当前版本为准。

## English Short Summary

A Calculated column derives values from other List columns, such as adding 90 days to a signup date. Configure the formula and result type in List settings; calculated results are not directly editable. The course demo uses the Classic settings page.

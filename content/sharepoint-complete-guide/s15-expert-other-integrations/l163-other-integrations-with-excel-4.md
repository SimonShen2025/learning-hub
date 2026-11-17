---
title: "Other integrations with Excel 4"
lectureId: 163
section: 15
sectionTitle: "Expert - Other Integrations"
date: "2026-11-17"
tags: ["sharepoint-lists", "excel", "power-query", "data-transformation"]
---

## 中文短总结

Power Query 可在 SharePoint List 数据进入 Excel 前调整查询，例如移除无用列、筛选记录、合并数据源或分组汇总。查询转换改变 Excel 加载结果，不应误认为已更新 SharePoint 原始数据。

## 中文长总结

### 编辑查询

- 从 Excel 的 Queries & Connections 打开 SharePoint 查询并进入 Power Query Editor。
- 可移除不需要的列、按字段筛选行，并调整进入工作簿的数据。
- 也可组合不同来源或按字段分组，再加载转换结果。

### 变更边界

Power Query 的步骤用于转换读取到 Excel 的数据，不会自动修改 SharePoint List 中的原始记录。筛选、合并和分组后应检查结果范围及刷新行为。

## English Short Summary

Power Query can transform SharePoint List data before loading it into Excel, including removing columns, filtering rows, merging sources, and grouping. These query steps shape the Excel output; they do not edit the source List.

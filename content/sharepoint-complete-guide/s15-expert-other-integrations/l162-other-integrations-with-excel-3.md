---
title: "Other integrations with Excel 3"
lectureId: 162
section: 15
sectionTitle: "Expert - Other Integrations"
date: "2026-11-17"
tags: ["sharepoint-lists", "excel", "pivot-tables", "reporting"]
---

## 中文短总结

将 SharePoint List 数据加载到 Excel 后，可用 PivotTable 按 Office、Brand 等字段汇总，并创建图表或格式化视图。刷新源数据和 PivotTable 后，汇总才会反映最新记录。

## 中文长总结

### 创建分析视图

- 从 Excel 表格插入 PivotTable，将类别字段放入行或列，将记录字段用于计数。
- 可搭配条件格式或图表，展示按地区、品牌等维度汇总的数据。
- 业务人员可基于汇总数据浏览趋势，而无需直接修改 SharePoint List。

### 刷新步骤

当 SharePoint 数据变化后，先刷新 Excel 数据连接，再刷新 PivotTable 等下游分析对象，确保汇总结果同步。

导出的工作簿可能包含组织数据；共享前应检查范围、文件访问权限和刷新后是否会继续读取最新数据。

## English Short Summary

Use an Excel PivotTable to summarize SharePoint List data by fields such as office or brand, and add charts or formatting as needed. Refresh the source connection and PivotTable to reflect updates.

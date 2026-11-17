---
title: "Column settings and date columns"
lectureId: 85
section: 9
sectionTitle: "Moderate - Lists"
date: "2026-11-17"
tags: ["sharepoint-lists", "date-columns", "column-settings", "data-types"]
---

## 中文短总结

可通过列设置调整列的数据类型和显示格式，例如将文本形式的生日字段改为 Date，并选择是否显示相对日期。修改已有列类型前，应确认现有值可正确转换；部分列类型可能难以事后更改。

## 中文长总结

### 修改列类型

- 从列菜单进入 **Column settings > Edit**，调整类型及相关选项。
- 示例将出生日期从文本改为 Date，并选择是否包含时间及采用友好日期格式。
- 日期列还可配置默认值、必填和唯一值等选项。

### 变更注意

已有数据必须与目标类型兼容。不同类型之间的转换能力不同；Person 或 Calculated 等列可能无法像普通文本列一样修改。变更前应检查现有值并按当前 SharePoint 界面验证结果。

## English Short Summary

Edit a column's settings to change its data type and display format, such as converting a text birthday field to Date and choosing a friendly date display. Check existing values before conversion; some column types are harder to change later.

---
title: "Create a list from excel 1"
lectureId: 76
section: 9
sectionTitle: "Moderate - Lists"
date: "2026-11-17"
tags: ["sharepoint-lists", "excel", "data-import"]
---

## 中文短总结

从 Excel 导入 SharePoint List 前，先将要导入的数据范围格式化为带标题行的 Excel Table。这样可明确导入边界，并避免把工作簿中的其他内容一并当作列表数据。

## 中文长总结

### 准备 Excel 数据

- 确认数据有清晰的列标题行，并选择完整的数据区域。
- 使用 **Format as Table** 将区域转换为 Excel Table，并确认表格包含标题。
- 保存工作簿后，再从 SharePoint 创建 List 并选择该 Table。

Excel 工作簿可能包含多个不相关区域；明确的 Table 能让导入流程识别要使用的数据范围。

## English Short Summary

Before importing Excel data into a SharePoint List, format the intended range as an Excel Table and confirm it has headers. This defines the import boundary so unrelated worksheet content is not included.

---
title: "Other integrations with Excel 2"
lectureId: 161
section: 15
sectionTitle: "Expert - Other Integrations"
date: "2026-11-17"
tags: ["sharepoint-lists", "excel", "data-connections", "power-query"]
---

## 中文短总结

Excel 可从 Data > Get Data > SharePoint Online List 连接站点并加载所选 List。连接时应提供站点根 URL 而非单个 List 的 URL；之后可在 Excel 中刷新数据。

## 中文长总结

### 创建连接

- 在 Excel 的 **Data > Get Data > From Online Services > From SharePoint Online List** 中选择数据源。
- 输入 SharePoint 站点根地址，而不是特定 List 的地址。
- 在 Navigator 中选择目标 List 并预览数据，再加载到 Excel。

### 更新数据

加载后，Excel 可将结果作为表格使用，并在需要时刷新连接获取更新。刷新行为和可访问字段取决于 Excel 版本、登录身份及 SharePoint 权限；应核对数据列和记录范围。

## English Short Summary

Connect Excel to a SharePoint Online List through Data > Get Data, using the site root URL rather than a List URL. Choose the List in Navigator, load it, and refresh the connection as needed.

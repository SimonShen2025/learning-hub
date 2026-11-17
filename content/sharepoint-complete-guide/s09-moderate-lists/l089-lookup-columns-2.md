---
title: "Lookup columns 2"
lectureId: 89
section: 9
sectionTitle: "Moderate - Lists"
date: "2026-11-17"
tags: ["sharepoint-lists", "lookup-columns", "relational-data", "data-modeling"]
---

## 中文短总结

Lookup 列让客户 List 选择 Repair Shops List 中的记录，并可带出专长、城市等关联字段。用户只需选择维修店，减少重复录入；选择项同时提供通往来源记录的链接。

## 中文长总结

### 创建 Lookup 关系

- 在 Customers List 中添加 Lookup 列，选择同一站点中的 Repair Shops List 作为来源。
- 设置以来源 List 的 Title 作为选项显示字段，并选择需要带出的其他列，例如 specialty 和 city。
- 用户为客户记录选择维修店后，相关字段会根据来源 List 的记录填充。

### 优势与维护

- 将维修店信息维护在一个来源 List，减少在客户记录中重复输入。
- Lookup 记录可链接回来源项，便于查看其完整信息。
- 若来源 List 新增属性，可按需要将额外字段加入 Lookup 配置；相关设置入口可能依 SharePoint 界面而异。

## English Short Summary

A Lookup column in the Customers List references an item in the Repair Shops List and can expose related fields such as specialty and city. Users select the shop rather than re-entering its details, and can navigate back to the source item.

---
title: "Lookup columns 3"
lectureId: 90
section: 9
sectionTitle: "Moderate - Lists"
date: "2026-11-17"
tags: ["sharepoint-lists", "lookup-columns", "relational-data", "data-modeling"]
---

## 中文短总结

Lookup 关联值可链接回来源 List 的对应 Item；当来源记录的属性更新时，查找列所带出的相关值也会反映更新。把彼此相关的信息集中存放并通过 Lookup 引用，可减少重复维护。

## 中文长总结

### 浏览关联数据

- 在现代 List 视图中打开 Lookup 值，可跳转到来源 List 的对应 Item，查看地址、网站等完整信息。
- 客户 List 可以显示由 Repair Shops List 带出的专长、城市或负责人等字段。

### 维护数据

来源 List 是相关属性的权威记录。更新维修店的负责人等信息后，关联的 Lookup 字段会反映来源数据，避免逐条修改客户记录。

Lookup 应用于确实相关、需要集中维护的字段；具体可带出的字段和体验取决于列配置及当前 SharePoint 功能。

## English Short Summary

Lookup values can link to their source List item, where users can view its details. Keeping related attributes in the source List lets linked fields reflect updates without editing each referencing item individually.

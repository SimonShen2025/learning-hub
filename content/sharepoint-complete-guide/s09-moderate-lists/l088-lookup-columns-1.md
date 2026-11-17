---
title: "Lookup columns 1"
lectureId: 88
section: 9
sectionTitle: "Moderate - Lists"
date: "2026-11-17"
tags: ["sharepoint-lists", "lookup-columns", "relational-data", "data-modeling"]
---

## 中文短总结

Lookup 列用于关联两个 SharePoint Lists。课程先建立 Repair Shops 参考列表，并添加专长、地址和城市等属性，作为客户列表后续引用的数据源。

## 中文长总结

### 建立参考 List

- 创建独立的 Repair Shops List，每条记录表示一家维修店。
- 为列表添加描述该实体的字段，例如专长、网站和地址。
- 根据业务需求补充属性；Lookup 列之后会从该列表选择记录并引用相关信息。

### 数据建模思路

将维修店信息集中维护在一个 List 中，客户记录可引用这些数据，而不必为每个客户重复输入维修店的详细信息。后续将创建 Lookup 列建立关联。

## English Short Summary

Prepare a Repair Shops List as a reference data source, with one item per shop and fields such as specialty, website, and address. A customer List can later use a Lookup column to reference these records instead of repeating their details.

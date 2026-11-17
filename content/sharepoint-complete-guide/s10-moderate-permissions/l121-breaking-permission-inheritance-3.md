---
title: "Breaking permission inheritance 3"
lectureId: 121
section: 10
sectionTitle: "Moderate - Permissions"
date: "2026-11-17"
tags: ["sharepoint-permissions", "inheritance", "lists", "unique-permissions"]
---

## 中文短总结

List 或其他应用也可停止继承站点权限，形成独立授权范围。课程演示从 List settings 打开该 List 的权限设置并停止继承；操作后需单独管理其访问群组。

## 中文长总结

### 为 List 建立独立权限

- 打开目标 List 的 **List settings**，进入该 List 的权限设置。
- 确认当前 List 继承自父站点后，选择 **Stop inheriting permissions**。
- List 现在使用独立权限，可按需要配置访问群组和级别。

### 管理独立范围

用户对父站点的权限不一定等于其对该 List 的权限。应明确哪些群组需要访问，并单独验证 List 的有效权限；独立权限也会增加管理负担。

## English Short Summary

A List can stop inheriting permissions from its parent site. Open its List settings and permissions page, then configure the List's unique access scope and verify which groups can use it.

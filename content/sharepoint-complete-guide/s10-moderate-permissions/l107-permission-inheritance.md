---
title: "Permission inheritance"
lectureId: 107
section: 10
sectionTitle: "Moderate - Permissions"
date: "2026-11-17"
tags: ["sharepoint-permissions", "inheritance", "sites", "access-control"]
---

## 中文短总结

SharePoint 权限通常从上层站点或容器继承到下层内容。只有在确有访问隔离需求时才应打断继承；独立权限结构会增加后续审查和维护的复杂度。

## 中文长总结

### 继承机制

新建的下层站点或内容通常沿用父级权限。上层权限调整后，仍继承权限的下层对象会随之受影响。

### 何时打断继承

若某个区域需要与父级不同的访问范围，例如敏感的人事资料，可考虑为该区域单独设置权限。打断继承会形成独立权限边界，后续需单独管理和审查。

不要为了临时方便而频繁创建例外；应先评估是否可通过合适的群组和上层权限结构满足需求。

## English Short Summary

SharePoint content commonly inherits permissions from a parent site or container. Break inheritance only when a distinct access boundary is necessary, because unique permissions create a separate structure to maintain and review.

---
title: "Breaking permission inheritance 1"
lectureId: 119
section: 10
sectionTitle: "Moderate - Permissions"
date: "2026-11-17"
tags: ["sharepoint-permissions", "inheritance", "unique-permissions", "sites"]
---

## 中文短总结

继承父级权限的子站点会沿用上层的访问规则。选择 Stop inheriting permissions 后，该站点转为独立权限范围；父级后续变更不会自动同步，因此需要单独配置、维护和审查。

## 中文长总结

### 打断继承

- 在子站点的高级权限设置中选择 **Stop inheriting permissions**。
- 确认提示后，站点形成独立权限边界，可按需配置 Owners、Members、Visitors 等群组。
- 课程以需要限制访问的部门区域为例，说明为何可能需要独立权限。

### 变更影响

打断继承后，父站点的权限变更不会自动应用到该子站点。应在操作前确认谁需要访问，并规划后续权限维护；避免无明确需求地创建独立权限结构。

## English Short Summary

Stopping inheritance gives a subsite its own permission scope, so parent permission changes no longer flow to it. Configure and maintain the new groups deliberately, and break inheritance only for a clear access boundary.

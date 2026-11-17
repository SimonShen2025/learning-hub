---
title: "Breaking permission inheritance 4"
lectureId: 122
section: 10
sectionTitle: "Moderate - Permissions"
date: "2026-11-17"
tags: ["sharepoint-permissions", "inheritance", "unique-permissions", "access-control"]
---

## 中文短总结

可通过 Delete unique permissions 让站点或 List 恢复继承父级权限。此操作会移除独立授权并重新采用父级规则，可能改变访问范围；执行前应确认影响并在之后验证用户权限。

## 中文长总结

### 恢复权限继承

- 在具有独立权限的范围中选择 **Delete unique permissions**。
- 确认后，该站点或 List 会重新继承父级权限，独立权限设置不再作为其访问规则。
- 仅在确认要恢复父级授权模型后执行。

### 清理与验证

独立范围专用的群组可能不再被该范围使用，但删除前应确认没有其他依赖。恢复继承后，检查哪些用户因此获得或失去访问，并确认结果符合组织策略。

## English Short Summary

Delete unique permissions to restore inheritance from the parent. This changes the access scope, so confirm the impact before proceeding and verify effective permissions afterward.

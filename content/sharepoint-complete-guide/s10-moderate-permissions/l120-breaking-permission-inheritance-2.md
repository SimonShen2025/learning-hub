---
title: "Breaking permission inheritance 2"
lectureId: 120
section: 10
sectionTitle: "Moderate - Permissions"
date: "2026-11-17"
tags: ["sharepoint-permissions", "inheritance", "subsites", "access-control"]
---

## 中文短总结

打断子站点继承后，可只为该站点配置独立群组和访问范围。课程示例让测试用户仅能访问 Sales 子站点，而不能访问父站点或其他子站点；应验证每个相关范围的权限结果。

## 中文长总结

### 配置独立访问

- 在子站点打断父站点权限继承后，按需要配置该站点的群组和权限。
- 课程将测试用户从父站点 Visitors 移除，再加入 Sales 子站点的 Visitors。
- 验证该用户可以访问 Sales，但不能访问父站点或其他子站点。

### 访问边界检查

独立权限只适用于被配置的范围，不应假设它会自动限制其他共享路径。完成配置后，应从测试用户视角验证父站点、同级站点和目标站点的访问。

## English Short Summary

After breaking inheritance, configure the subsite's groups independently. The course gives a test user access only to Sales, then verifies that the user cannot open the parent or other subsites.

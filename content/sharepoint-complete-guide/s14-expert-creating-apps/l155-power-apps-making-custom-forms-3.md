---
title: "Power Apps - making custom forms 3"
lectureId: 155
section: 14
sectionTitle: "Expert - Creating Apps"
date: "2026-11-17"
tags: ["power-apps", "validation", "conditional-visibility", "sharepoint"]
---

## 中文短总结

Power Apps 可根据表单字段值控制提示控件的 Visible 属性，例如当 Specialty 为 Mechanic 时显示规则违反提示。前端提示有助于用户理解，但仍需后端验证确保无效数据不能保存。

## 中文长总结

### 条件提示

- 添加提示标签，说明例如 Mechanic 专长应使用其他 List 的规则。
- 将标签的 **Visible** 属性绑定到 Specialty 输入控件的值。
- 课程示例在 Specialty 为 Mechanic 时显示警告，在其他值时隐藏警告。

### 前端与后端

条件可见性让表单即时反馈错误，但不会自动阻止数据提交。应配合 SharePoint 或其他服务端校验，并让后端错误可被用户理解，避免只依赖客户端规则。

## English Short Summary

Use a field value to control a warning label's Visible property, such as showing a message when Specialty is Mechanic. Client-side guidance improves usability but must be backed by server-side validation.

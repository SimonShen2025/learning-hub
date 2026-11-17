---
title: "Power Apps functionality"
lectureId: 150
section: 14
sectionTitle: "Expert - Creating Apps"
date: "2026-11-17"
tags: ["power-apps", "sharepoint-lists", "forms", "data-validation"]
---

## 中文短总结

自动生成的 Power Apps 模板通常包括浏览、详情、编辑和新增屏幕，并可连接 SharePoint List。模板能快速展示和编辑数据，但复杂字段与必填或验证规则可能需要额外配置和错误处理。

## 中文长总结

### 模板屏幕

- **Browse** 屏幕可浏览、搜索和排序 List 记录。
- **Detail** 屏幕显示选中 Item 的详细字段。
- **Edit/New** 屏幕可修改现有记录或创建新记录。
- 成功提交后，应确认底层 SharePoint List 的值也已更新。

### 验证与字段支持

模板不会自动妥善处理所有 SharePoint 列类型和业务规则。课程演示了必填字段、复杂字段或无效格式可能导致提交失败；应配置应用端验证、清晰错误提示，并在实际数据源中验证结果。

### 权限边界

Power Apps 表单不会自动绕过或替代 SharePoint 权限。需根据连接器的授权方式与共享配置，确认应用用户只能访问获准数据。

## English Short Summary

A generated Power Apps template commonly includes browse, detail, edit, and new-item screens connected to a SharePoint List. Complex fields and validation may need extra configuration; verify submissions and data-source permissions.

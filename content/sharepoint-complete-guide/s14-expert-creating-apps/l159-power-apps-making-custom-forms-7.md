---
title: "Power Apps - making custom forms 7"
lectureId: 159
section: 14
sectionTitle: "Expert - Creating Apps"
date: "2026-11-17"
tags: ["power-apps", "rating-controls", "custom-forms", "permissions"]
---

## 中文短总结

Power Apps 可将数字字段显示为星级评分控件，并分别配置新增/编辑和详情屏幕。不同屏幕可有不同字段布局；隐藏某编辑字段只限制表单操作，不替代数据源层权限控制。

## 中文长总结

### 配置评分控件

- 将数字字段控件改为 Rating，并配置最大评分值和默认值。
- 分别调整新增/编辑表单和详情表单的控件，让用户输入和查看评分。
- 提交后检查 SharePoint 中的数值与界面显示一致。

### 区分查看与编辑

详情屏幕可显示用户不应在编辑屏幕修改的字段；编辑屏幕则只暴露允许编辑的输入项。

但应用界面隐藏字段不等于安全权限控制。若用户不应读取或修改某列，应使用合适的数据源权限或可信后端规则，并验证应用连接方式不会授予过多访问。

## English Short Summary

Use a Rating control for a numeric field and configure its maximum and default values. Detail and edit screens can expose different fields, but hiding a field in the app does not replace data-source security or authorization.

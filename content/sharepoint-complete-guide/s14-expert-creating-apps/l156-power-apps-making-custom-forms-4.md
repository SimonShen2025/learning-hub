---
title: "Power Apps - making custom forms 4"
lectureId: 156
section: 14
sectionTitle: "Expert - Creating Apps"
date: "2026-11-17"
tags: ["power-apps", "validation", "conditional-logic", "sharepoint"]
---

## 中文短总结

课程继续将提交控件的 Visible 属性设为条件式：Specialty 为 Mechanic 时隐藏提交勾选并显示警告。隐藏按钮改善表单引导，但不是安全或数据验证边界，仍须保留后端校验。

## 中文长总结

### 控制提交控件

- 将提交勾选控件的 **Visible** 属性绑定到 Specialty 输入值。
- 当值为 Mechanic 时隐藏提交控件，同时展示规则提示；其他值则允许通过表单继续提交。
- 在 Play 模式中测试有效和无效值，确认控件状态随输入更新。

### 不可替代的验证

客户端控件可被绕过或因其他入口而不执行，因此不能作为唯一的限制措施。应在 SharePoint/List 或其他可信服务端实施规则，并测试无效数据经不同路径提交时都会被拒绝。

## English Short Summary

Conditionally hide the form's submit control and show a warning for invalid values such as Mechanic. This is a user-experience measure, not an enforcement boundary; retain server-side validation and test alternate submission paths.

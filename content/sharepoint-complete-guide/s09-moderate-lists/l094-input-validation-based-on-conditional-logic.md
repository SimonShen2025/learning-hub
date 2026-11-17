---
title: "Input validation based on conditional logic"
lectureId: 94
section: 9
sectionTitle: "Moderate - Lists"
date: "2026-11-17"
tags: ["sharepoint-lists", "conditional-formulas", "forms", "data-quality"]
---

## 中文短总结

可在 New/Edit 表单中为字段设置条件公式，控制字段何时显示。例如，仅当 Repair Shop Type 为 Affiliated 时显示 Affiliate Shop Name。条件能减少不合适的输入，但字段隐藏本身并不保证数据规则。

## 中文长总结

### 设置条件显示

- 在 List 表单打开 **Edit form > Edit columns**，为目标字段配置 **Edit Conditional Formula**。
- 使用条件表达式判断上游字段的值。例如，当 `[Repair Shop Type]` 等于 `Affiliated` 时返回 true，否则返回 false。
- 公式为 true 时显示字段，为 false 时隐藏字段；课程示例在新增和编辑表单中均可观察到条件效果。

### 使用边界

条件显示可提示用户何时需要填写字段，并减少无关输入；但隐藏输入框不等于验证或清除已有值，也不是权限控制。若规则必须被强制执行，应结合 List validation 等数据校验方式，并测试新建和编辑记录的行为。

## English Short Summary

Set a conditional formula on a form field to show it only when another field has a particular value, such as showing Affiliate Shop Name for affiliated shops. This improves the form experience but does not by itself validate data, clear existing values, or enforce permissions.

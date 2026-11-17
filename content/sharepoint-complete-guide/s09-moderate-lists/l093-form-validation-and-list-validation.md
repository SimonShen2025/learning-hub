---
title: "Form validation and list validation"
lectureId: 93
section: 9
sectionTitle: "Moderate - Lists"
date: "2026-11-17"
tags: ["sharepoint-lists", "validation", "forms", "data-quality"]
---

## 中文短总结

List 列可设为必填，以阻止新记录缺少必要值。课程也展示了条件字段可能造成的数据问题，并引出两种控制方式：根据其他字段调整表单，以及用 List validation 检查数据规则。

## 中文长总结

### 必填列

将列设为 **Required** 后，创建或编辑 Item 时必须提供该字段的值。必填适合表达记录有效所需的基本信息。

### 条件规则问题

例如，只有当维修店类型为 affiliated 时，才应填写 affiliate shop name。若只依赖用户自觉，独立店也可能被误填关联店名，形成逻辑不一致的数据。

后续课程将介绍两类处理方式：依据字段值控制输入表单的显示，以及通过 List validation 对数据规则进行校验。隐藏字段只改善表单体验，不等同于数据验证。

## English Short Summary

Mark columns as required to prevent records from omitting essential values. For conditional rules, such as requiring an affiliate name only for affiliated shops, the course introduces form conditions and List validation; hiding a field alone is not data validation.

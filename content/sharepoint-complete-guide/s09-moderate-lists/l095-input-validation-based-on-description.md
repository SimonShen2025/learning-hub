---
title: "Input validation based on description"
lectureId: 95
section: 9
sectionTitle: "Moderate - Lists"
date: "2026-11-17"
tags: ["sharepoint-lists", "column-descriptions", "forms", "data-quality"]
---

## 中文短总结

列描述可解释字段用途及填写条件，例如说明 Affiliate Shop Name 仅适用于 affiliated 类型。这能帮助用户正确录入，但只是提示，不能阻止不符合条件的值；需要强制规则时，应配合验证。

## 中文长总结

### 添加描述

- 在列设置中填写描述，解释该字段代表什么以及应在何种情况下填写。
- 描述会在表单中帮助用户理解字段，例如 Affiliate Shop Name 只应在 Repair Shop Type 为 Affiliated 时填写。

### 提示的边界

描述不会限制用户输入，也无法独立保证数据符合规则。可将说明与条件表单及 List validation 等机制结合，分别提升可用性并校验数据。

## English Short Summary

Add a column description to explain its purpose and when users should fill it in, such as using Affiliate Shop Name only for affiliated shops. Descriptions guide users but do not enforce the rule; combine them with form conditions and validation as needed.

---
title: "Row level validation"
lectureId: 96
section: 9
sectionTitle: "Moderate - Lists"
date: "2026-11-17"
tags: ["sharepoint-lists", "validation", "data-quality", "list-settings"]
---

## 中文短总结

List validation 可为每个 Item 检查跨列的数据规则，并在公式不通过时拒绝保存并显示自定义错误。例如，只有维修店类型为 Affiliated 时才能填写 Affiliate Shop Name。它可补充表单提示，覆盖其他录入方式。

## 中文长总结

### 设置 List validation

- 在 List settings 中打开 **Validation settings**，设置公式和用户错误提示。
- 公式针对正在保存的 Item 求值；只有规则通过时才能保存。
- 示例规则要求：若 Repair Shop Type 不是 Affiliated，则 Affiliate Shop Name 必须为空。
- 设置说明文字，让用户在保存被拒绝时知道如何修正记录。

### 使用范围

描述和条件表单可引导用户，但数据也可能通过 Grid view、Power Apps 或自动化流程写入。List validation 可在保存时执行规则，作为这些用户体验提示的补充；需在各种实际录入路径中测试行为。

## English Short Summary

List validation evaluates a formula for the item being saved and can reject it with a custom message. For example, require Affiliate Shop Name to be blank unless Repair Shop Type is Affiliated. This complements form guidance and should be tested across data-entry paths.

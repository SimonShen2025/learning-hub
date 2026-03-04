---
title: "Building the Static App: Forms"
lectureId: 97
section: 8
sectionTitle: "[Optional] Practice Project: Eat-'N-Split"
date: "2026-03-04"
tags: [react, forms, components, eat-n-split]
---

## 中文短总结

创建两个表单组件：`FormAddFriend`（添加朋友：名称 + 图片 URL）和 `FormSplitBill`（分账：账单金额、你的支出、朋友支出（自动计算）、谁付账的选择器）。先构建静态 HTML 结构，后续添加受控组件和 state。

## 中文长总结

### FormAddFriend
- 输入：朋友名字、头像 URL
- 按钮：Add
- 简单的两字段表单

### FormSplitBill
- 输入：总账单（Bill value）
- 输入：你的支出（Your expense）
- 显示：朋友支出（自动 = 总账单 - 你的支出）→ disabled input
- 选择器：谁付账（You / Friend name）
- 按钮：Split bill

### 设计思路
- 朋友支出是 **derived value**（不需要 state）
- "谁付账" 决定更新 balance 的方向

## English Short Summary

Two forms: FormAddFriend (name + image URL) and FormSplitBill (bill amount, your expense, friend's expense auto-calculated, who pays selector). Build static HTML first. Friend's expense is derived (bill - your expense), not a separate state.

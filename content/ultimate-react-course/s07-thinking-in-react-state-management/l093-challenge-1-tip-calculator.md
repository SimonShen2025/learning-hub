---
title: "CHALLENGE #1: Tip Calculator"
lectureId: 93
section: 7
sectionTitle: "Thinking In React: State Management"
date: "2026-03-04"
tags: [react, challenge, tip-calculator, state-management]
---

## 中文短总结

综合挑战：构建小费计算器。用户输入账单金额，两人分别选择服务满意度（对应小费百分比），计算总金额和小费。综合运用本 section 所有技术：state 管理、受控组件、lifting state up、子→父通信、派生 state、组件复用。

## 中文长总结

### 功能需求
- 输入账单金额（bill）
- 两个服务评分选择器（自己的 + 朋友的）
- 根据评分计算小费百分比
- 显示：账单 + 小费 = 总额
- Reset 按钮

### 技术实践
- **State 管理**：bill、自己的评分、朋友的评分
- **Derived State**：小费金额 = bill × 平均百分比，总额 = bill + 小费
- **受控组件**：input + 两个 select
- **组件复用**：两个评分选择器用同一个组件，通过 props 区分
- **Lifting State Up**：所有 state 在 App 中，通过 props 传递
- **Reset**：`setBill(0); setMyRating(0); setFriendRating(0);`

## English Short Summary

Comprehensive challenge: Tip Calculator. Input bill amount, two satisfaction selectors (self + friend), compute tip and total. Practices all section skills: state management, controlled elements, lifting state up, child-to-parent communication, derived state, and component reuse.

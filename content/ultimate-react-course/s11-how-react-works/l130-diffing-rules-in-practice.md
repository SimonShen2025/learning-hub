---
title: "Diffing Rules in Practice"
lectureId: 130
section: 11
sectionTitle: "How React Works Behind the Scenes"
date: "2026-03-04"
tags: [react, diffing, practice, state-preservation]
---

## 中文短总结

实验验证 Diffing 规则。切换 Tab 时：同类型组件 → state 保留（Tab 1 和 Tab 2 都用 `<TabContent />`，切换后 likes 计数保留）。不同类型元素替换 → state 丢失。通过实际操作理解何时 React 保留/重建组件实例。

## 中文长总结

### 实验 1：同类型组件
- Tab 1 → `<TabContent />`, Tab 2 → `<TabContent />`
- 切换时 React 看到同类型 → 保留实例 → **state 保留**
- likes 计数不会重置！

### 实验 2：不同类型元素
- Tab 3 → `<DifferentContent />`
- 从 Tab 1 切到 Tab 3 → 类型变化 → **销毁重建 → state 丢失**
- 切回 Tab 1 → 又重建 → state 重置

### 问题
- 有时候我们**希望** state 重置（如切换 Tab 应重置计数器）
- 但 React 因为类型相同而保留了 state
- 解决方案 → **Key Prop**（下一讲）

## English Short Summary

Verify diffing in practice. Same component type across tabs → React preserves instance and state (likes counter persists). Different component type → instance destroyed and rebuilt (state lost). This behavior can be undesirable when switching tabs should reset state — solved by key prop.

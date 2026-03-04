---
title: "Reviewing 'Lifting Up State'"
lectureId: 81
section: 7
sectionTitle: "Thinking In React: State Management"
date: "2026-03-04"
tags: [react, lifting-state-up, inverse-data-flow]
---

## 中文短总结

回顾 Lifting State Up 的完整流程和心智模型。核心概念："反向数据流"（inverse data flow）— 虽然数据只能从上往下流（单向数据流），但通过回调函数 props，子组件可以**触发**父组件的 state 更新，间接实现"向上"通信。这不违反单向数据流原则，因为数据最终还是从上往下更新的。

## 中文长总结

### 完整流程
1. 识别哪些组件需要共享数据
2. 找到这些组件的最近共同祖先
3. 在共同祖先中创建 state
4. 通过 props 向下传递数据
5. 通过回调函数 props 向下传递更新方法
6. 子组件调用回调函数 → 触发父组件 state 更新 → 所有子组件 re-render

### "反向数据流" 图示
```
App [state: items]
 ├──→ Form [prop: onAddItem] ──调用──→ App.handleAddItem()
 ├──→ PackingList [prop: items] ←── 自动更新
 └──→ Stats [prop: items] ←── 自动更新
```

### 关键理解
- 不是真正的"反向"数据流 — 只是回调函数传下去后由子组件调用
- React 的数据模型始终是单向的
- 这是 React 中最常用的组件通信模式

## English Short Summary

Review of Lifting State Up and "inverse data flow" — child components call callback props to trigger parent state updates. Not truly bidirectional: callbacks are passed down as props (top-down), child invokes them to update parent state, which then flows down naturally. The most common component communication pattern in React.

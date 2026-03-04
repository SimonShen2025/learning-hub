---
title: "The Mechanics of State"
lectureId: 62
section: 6
sectionTitle: "State, Events, and Forms: Interactive Components"
date: "2026-03-04"
tags: [react, state, rendering, mechanics]
---

## 中文短总结

深入理解 state 工作机制：React **不直接操作 DOM**，而是根据 state 的变化重新调用组件函数（re-render），生成新的 JSX/虚拟 DOM，由 React 找出差异并更新真实 DOM。state 是"保留的"（preserved）— 组件消失前 state 一直存在。渲染不等于更新页面 — React 会优化只更新变化的部分。

## 中文长总结

### 核心原则
- React 不手动操作 DOM → 这是声明式编程
- 我们告诉 React "UI 应该是什么样"（通过 state + JSX）
- React 负责将声明转化为实际 DOM 操作

### 渲染机制
```
State 更新 → 组件函数重新调用 → 新 JSX 生成 → 
React 比较新旧虚拟 DOM → 最小化 DOM 更新
```

### State 的特性
1. **State 是隔离的**：每个组件实例有自己独立的 state
2. **State 是保留的**：re-render 后 state 值保持（不会重置）
3. **State 是异步更新的**：`setState` 后当前函数中 state 值不会立即改变

### 重要区分
- **Render** = React 调用组件函数（不是更新屏幕）
- **Commit** = React 将变化应用到真实 DOM（更新屏幕）
- React 只更新变化的 DOM 节点，不是重绘整个页面

## English Short Summary

State update triggers a re-render (React calls the component function again), producing new JSX. React diffs the virtual DOM to find changes and commits minimal updates to the real DOM. State is isolated per instance, preserved across renders, and updates asynchronously (value doesn't change immediately after setState).

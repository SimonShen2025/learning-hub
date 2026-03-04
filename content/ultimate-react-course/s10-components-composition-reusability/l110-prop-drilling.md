---
title: "Prop Drilling"
lectureId: 110
section: 10
sectionTitle: "Thinking in React: Components, Composition, and Reusability"
date: "2026-03-04"
tags: [react, prop-drilling, state-management]
---

## 中文短总结

Prop Drilling 问题：当需要传递 state 或 handler 给深层嵌套的组件时，必须经过中间层层传递（即使中间组件不使用这些 props）。示例：`movies` 从 App → Main → ListBox → MovieList。Prop Drilling 让组件紧耦合且难维护。

## 中文长总结

### 什么是 Prop Drilling
- State 在顶层组件定义
- 深层子组件需要使用这个 state
- Props 必须逐层传递：`App → Main → ListBox → MovieList`
- 中间组件（Main、ListBox）不使用 `movies`，只是"传球"

### 为什么有问题
- **紧耦合**：中间组件被迫接收无关 props
- **难维护**：props 链条一处改动，影响全链
- **代码噪音**：大量不必要的 prop 传递

### 解决方案预告
- **Component Composition**（下一讲）
- Context API（后续 section）
- 状态管理库（Redux 等）

## English Short Summary

Prop drilling: passing state through multiple intermediate component layers that don't use it (e.g., App → Main → ListBox → MovieList). Causes tight coupling, maintenance burden, and code noise. Solutions: component composition (next lecture), Context API, or state management libraries.

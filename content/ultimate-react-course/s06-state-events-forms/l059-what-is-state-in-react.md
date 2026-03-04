---
title: "What is State in React?"
lectureId: 59
section: 6
sectionTitle: "State, Events, and Forms: Interactive Components"
date: "2026-03-04"
tags: [react, state, concept]
---

## 中文短总结

State 是 React 最重要的概念。State = 组件随时间变化的**内部数据**。改变 state 会触发 React **重新渲染**组件（re-render），更新 UI。可以把 state 理解为组件的"记忆"。没有 state 的组件是静态的。整个 React 的核心机制就是：**state 改变 → 触发 re-render → UI 自动同步**。

## 中文长总结

### State 的定义
- 组件可以持有和管理的**数据**
- 在组件生命周期中可以**更新**
- 更新 state → React 自动 re-render → UI 反映最新数据

### State 是组件的"记忆"
- 组件"记住"用户交互后的数据变化
- 例：当前步骤号、是否展开、输入框内容

### 核心机制
```
用户交互(onClick) → 更新 State(setState) → 触发 Re-render → 新 UI
```

### 与普通变量的区别
| 普通变量 | State |
|---------|-------|
| 重新渲染后丢失 | re-render 后保留 |
| 改变不会触发 re-render | 触发 re-render |
| 用 `let`/`const` 声明 | 用 `useState` 声明 |

### 为什么 State 如此重要
- React 的 **核心循环** 就是围绕 state 运转
- 没有 state → 没有交互
- 后续几乎所有 React 特性都与 state 相关

## English Short Summary

State is React's most important concept — internal data that a component holds over time. Changing state triggers a **re-render**, automatically updating the UI. State is a component's "memory" that persists across renders. Core loop: user interaction → update state → re-render → UI syncs.

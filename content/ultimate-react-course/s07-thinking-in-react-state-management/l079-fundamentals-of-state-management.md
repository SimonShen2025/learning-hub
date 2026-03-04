---
title: "Fundamentals of State Management"
lectureId: 79
section: 7
sectionTitle: "Thinking In React: State Management"
date: "2026-03-04"
tags: [react, state-management, state-placement]
---

## 中文短总结

状态管理两个核心问题：**何时创建 state**（需要 re-render 的动态数据才用 state）和 **state 放在哪里**（只有一个组件需要 → 放该组件；多个组件需要 → 提升到共同父组件）。局部 state（local state）vs 全局 state（global state）。

## 中文长总结

### 何时创建 State
| 情况 | 用什么 |
|------|--------|
| 数据变化且需要 re-render | ✅ `useState` |
| 数据变化但不需要 re-render | `useRef` |
| 数据可从其他 state/props 计算 | 普通变量（derived state） |

### State 放在哪里
1. **只有该组件使用** → 放在该组件内部（local state）
2. **该组件和子组件使用** → 放在该组件，通过 props 传下去
3. **兄弟组件或更远的组件需要** → **Lifting State Up** 到共同祖先

### Local vs Global State
| 类型 | 范围 | 工具 |
|------|------|------|
| Local State | 1个或少数几个组件 | `useState` |
| Global State | 大量/所有组件 | Context API / Redux |

### 判断规则简化
```
数据需要跨组件共享？
  ├─ 否 → local state（该组件内）
  └─ 是 → 哪些组件需要？
         ├─ 父子关系 → 放父组件 + props
         └─ 跨层级/全局 → Context / Redux
```

## English Short Summary

State management fundamentals: **When** to create state (dynamic data needing re-renders) and **Where** to place it (one component → local; shared → lift to common parent). Local state via `useState`; global state via Context API or Redux. Derive computed values instead of creating extra state.

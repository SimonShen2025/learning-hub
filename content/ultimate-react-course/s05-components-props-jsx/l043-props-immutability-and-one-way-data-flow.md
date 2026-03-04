---
title: "Props, Immutability, and One-Way Data Flow"
lectureId: 43
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, props, immutability, one-way-data-flow]
---

## 中文短总结

Props 是**只读的**（immutable）— 子组件**不能修改**接收到的 props。React 使用**单向数据流**（one-way data flow）：数据只能从父→子传递。这使得应用更可预测、更易调试。要改变数据，需使用 **state**（下一 section 主题）。

## 中文长总结

### Props 不可变
- Props 是外部传入的数据 → 子组件只能读取，不能修改
- 修改 props 会导致副作用，破坏 React 的数据流模型
- 如果组件需要可变数据 → 使用 **state**

### 单向数据流（One-Way Data Flow）
```
App (data) → Header (props)
           → Menu (props)
             → Pizza (props)
```
- 数据**只能**从父组件流向子组件（从上到下）
- 子组件**不能**向父组件传数据（直接传）
- 好处：可预测、易调试、易追踪数据来源

### Props vs State 对比
| 特性 | Props | State |
|------|-------|-------|
| 来源 | 父组件传入 | 组件内部定义 |
| 可变性 | 不可变 | 可变（通过 setState） |
| 作用 | 配置组件 | 驱动 UI 更新 |

### 为什么单向数据流重要
- 双向绑定（如 Angular）在大型应用中难以追踪数据变化
- 单向流让数据变化路径清晰明确

## English Short Summary

Props are **read-only** (immutable) — child components cannot modify them. React enforces **one-way data flow**: data flows only parent→child. This makes apps predictable and debuggable. For mutable data, use state (next section). Unlike two-way binding, one-way flow makes data changes easy to trace.

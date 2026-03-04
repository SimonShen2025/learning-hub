---
title: "State vs. Props"
lectureId: 74
section: 6
sectionTitle: "State, Events, and Forms: Interactive Components"
date: "2026-03-04"
tags: [react, state, props, comparison]
---

## 中文短总结

State 和 Props 的核心区别：**State** 是组件内部拥有的数据，可以更新，更新触发 re-render；**Props** 是父组件传入的外部数据，只读不可变。当父组件的 state 通过 props 传给子组件时，子组件会跟着 re-render — 这就是"数据流"。

## 中文长总结

### 对比表
| 维度 | State | Props |
|------|-------|-------|
| **所有权** | 组件自己拥有 | 外部（父组件）传入 |
| **可变性** | 可更新（setState） | 只读（immutable） |
| **触发 re-render** | ✅ 自身组件 | ✅ 接收 props 的子组件 |
| **类比** | 组件的"记忆" | 组件的"配置参数" |
| **声明方式** | `useState()` | 组件标签上的属性 |

### 数据流
```
ParentComponent (state: items)
  └── ChildComponent (props: items)
```
- 父组件的 state 变化 → 传给子组件的 props 变化 → 子组件 re-render
- 这就是 React 的单向数据流

### 关键理解
- **State 影响 Props**：父的 state 经常成为子的 props
- 都参与 re-render：state 变化和 props 变化都会触发组件更新
- **State 不是 Props**：只是经常一起使用

## English Short Summary

State: internal, mutable data owned by the component (triggers re-render). Props: external, read-only data from parent (triggers child re-render when changed). Parent's state often becomes child's props — this is React's data flow. Both trigger re-renders but serve different purposes.

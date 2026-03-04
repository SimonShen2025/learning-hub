---
title: "Components, Instances, and Elements"
lectureId: 124
section: 11
sectionTitle: "How React Works Behind the Scenes"
date: "2026-03-04"
tags: [react, components, instances, elements, virtual-dom]
---

## 中文短总结

三个核心概念的区别。Component = 返回 JSX 的函数（蓝图）。Instance = Component 被使用时创建的实际"实体"，有自己的 state 和 lifecycle。Element = `React.createElement()` 的返回值（普通 JS 对象，描述 DOM）。Element 不是 DOM 元素！

## 中文长总结

### 三层关系
```
Component (函数/蓝图)
  ↓ 使用时创建
Instance (实体，有 state/props/lifecycle)
  ↓ 返回
React Element (JS 对象，描述 UI)
  ↓ React 渲染
DOM Element (实际 HTML)
```

### 详细对比
| 概念 | 本质 | 示例 |
|------|------|------|
| Component | 函数 | `function Tab() { ... }` |
| Instance | 函数的调用结果 | `<Tab />` 出现时创建 |
| React Element | 普通 JS 对象 | `{ type: Tab, props: {...} }` |
| DOM Element | 真实 DOM 节点 | `<div>...</div>` |

### 关键理解
- 组件是"蓝图"，实例是"建筑"
- 每次 `<Tab />` 出现在 JSX 中，创建一个新实例
- JSX → `React.createElement()` → React Element（对象）
- React Element 是轻量的，创建和比较都很快

## English Short Summary

Three distinct concepts: **Component** (function/blueprint), **Instance** (created when component is used, has own state/lifecycle), **React Element** (plain JS object from `createElement()`, describes UI). Elements are NOT DOM elements — React converts them to DOM in the commit phase.

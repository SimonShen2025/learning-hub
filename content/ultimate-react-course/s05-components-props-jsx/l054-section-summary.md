---
title: "Section Summary"
lectureId: 54
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, summary, components, props, jsx]
---

## 中文短总结

回顾本 section 所有核心概念：组件是自包含的 UI 单元（数据+逻辑+外观）；JSX 是声明式 UI 语法（编译为 createElement）；Props 是父→子数据传递（只读）；列表渲染用 `map()` + `key`；条件渲染用 `&&`、三元运算符或 early return。

## 中文长总结

### 核心概念总结

| 概念 | 说明 |
|------|------|
| **组件** | 自包含的 UI 单元，包含数据、逻辑、外观 |
| **JSX** | JS 语法扩展，编译为 `React.createElement()` |
| **Props** | 父→子数据传递，只读不可变 |
| **列表渲染** | `array.map(item => <Component key={id} />)` |
| **条件渲染** | `&&`（仅 true）、`? :`（双分支）、early return |
| **样式** | 外部 CSS（className）/ 内联 style（对象） |
| **Fragment** | `<>...</>` 无额外 DOM 包裹 |
| **Props 解构** | `function C({ name, price })` |

### 关键原则
- **单向数据流**：数据只能从上往下流
- **组件是函数**：接收 props，返回 JSX
- **声明式**：描述 UI 应该是什么样子，React 负责 DOM 操作

## English Short Summary

Section recap: Components (self-contained UI units), JSX (declarative syntax compiled to createElement), Props (read-only parent→child data), list rendering (`map()` + `key`), conditional rendering (`&&`, ternaries, early returns), styling (`className` / inline styles), and Fragments (`<></>`).

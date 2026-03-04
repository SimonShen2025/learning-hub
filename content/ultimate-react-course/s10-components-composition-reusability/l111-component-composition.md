---
title: "Component Composition"
lectureId: 111
section: 10
sectionTitle: "Thinking in React: Components, Composition, and Reusability"
date: "2026-03-04"
tags: [react, composition, children, design-pattern]
---

## 中文短总结

Component Composition = 在组件中使用 `children` prop 或显式 prop 传入其他组件，而不是硬编码子组件。解决 Prop Drilling：父组件直接将数据作为 prop 传给需要的子组件，然后通过 composition 放入容器。容器组件不知道它将接收什么内容。

## 中文长总结

### 概念
```jsx
// ❌ 硬编码 — 紧耦合，需要 prop drilling
function Modal() {
  return <Success />; // Modal 知道具体内容
}

// ✅ Composition — 容器不知道内容
function Modal({ children }) {
  return <div className="modal">{children}</div>;
}
<Modal><Success /></Modal>
```

### 两种用法
1. **children prop**：`<Box>{children}</Box>` — 最常用
2. **显式 prop**：`<Box element={<MovieList />} />` — 更灵活

### 为什么解决 Prop Drilling
- 不再需要中间组件传递 props
- 在使用数据的层级直接传递 props
- 容器组件变成"通用"组件，接受任何 children

### 核心思想
- Component Composition 是 React 的核心设计模式
- 使组件更灵活、可复用、解耦
- React 推荐的解决方案（优先于 Context）

## English Short Summary

Component Composition: use `children` prop (or explicit element props) to pass content into container components instead of hardcoding children. Solves prop drilling by allowing data to be passed directly to consuming components at the usage site. Makes containers generic and reusable.

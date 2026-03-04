---
title: "The 'children' Prop: Making a Reusable Button"
lectureId: 90
section: 7
sectionTitle: "Thinking In React: State Management"
date: "2026-03-04"
tags: [react, children-prop, composition, reusability]
---

## 中文短总结

**children prop** 是 React 的内置特殊 prop — 组件标签之间的内容自动成为 `props.children`。`<Button><span>🔙</span> Back</Button>` → Button 组件通过 `{children}` 渲染传入的任意内容。关键优势：组件不需要预先知道子内容是什么 → 极大地提高了复用性。这是**组合模式（composition）**的基础。

## 中文长总结

### 基本用法
```jsx
// 定义通用按钮
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

// 使用 — 传入不同内容
<Button onClick={handlePrev}><span>👈</span> Previous</Button>
<Button onClick={handleNext}>Next <span>👉</span></Button>
```

### children prop 是什么
- 放在组件开闭标签之间的所有内容
- 可以是文本、JSX 元素、甚至组件
- 通过 `props.children` 或解构 `{ children }` 访问

### 对比普通 prop
```jsx
// 普通 prop 方式 — 不灵活
<Button text="Previous" icon="👈" />

// children prop — 灵活，可传任意 JSX
<Button><em>Previous</em> <span>👈</span></Button>
```

### 为什么重要
- **组合模式的基石**：构建容器/包装组件（Card、Modal、Layout）
- 组件不需要知道子内容 → 高度解耦
- React 社区广泛使用的核心模式

## English Short Summary

The `children` prop: content between component tags becomes `props.children`. `<Button>Click me</Button>` → Button receives "Click me" as children. Enables composition — components don't need to know their content in advance. Foundation for reusable container components (Card, Modal, Layout).

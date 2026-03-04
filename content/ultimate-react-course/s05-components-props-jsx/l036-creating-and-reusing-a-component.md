---
title: "Creating And Reusing a Component"
lectureId: 36
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, components, reusability]
---

## 中文短总结

创建组件：写一个返回 JSX 的**函数**（函数名大写开头，如 `Pizza`）。使用组件：像 HTML 标签一样 `<Pizza />`。组件可复用 — 同一组件可渲染多次。**规则**：组件函数必须大写开头（区分 HTML 元素），不能嵌套定义，所有组件定义在文件顶层。

## 中文长总结

### 创建组件
```jsx
function Pizza() {
  return (
    <div>
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}
```

### 使用组件
```jsx
function App() {
  return (
    <div>
      <Pizza />
      <Pizza />  {/* 复用！ */}
      <Pizza />
    </div>
  );
}
```

### 重要规则
1. **组件名大写**：`Pizza` ✅，`pizza` ❌（小写被视为 HTML 标签）
2. **不要嵌套定义组件**：组件函数必须在顶层声明
3. 每个组件返回一段 JSX（一个根元素）
4. 目前所有组件渲染相同内容 → 后续通过 Props 使数据不同

## English Short Summary

Create a component as a function returning JSX (uppercase name required: `Pizza`, not `pizza`). Use it like an HTML tag: `<Pizza />`. Components are reusable — render the same component multiple times. Never nest component definitions; declare them at the top level.

---
title: "Destructuring Props"
lectureId: 51
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, props, destructuring]
---

## 中文短总结

通过在函数参数中直接解构 props 对象，避免反复写 `props.xxx`。标准写法：`function Pizza({ name, ingredients, price })`。所有组件自动接收 props 对象作为第一个参数（即使没有传入任何 prop，也会收到空对象 `{}`）。解构是 React 社区的**标准实践**。

## 中文长总结

### 对比
```jsx
// 不解构
function Pizza(props) {
  return <h2>{props.name} — {props.price}</h2>;
}

// 解构（推荐）
function Pizza({ name, price, ingredients }) {
  return <h2>{name} — {price}</h2>;
}
```

### 好处
- 代码更简洁，减少重复
- 一眼看出组件需要哪些 props
- 可以设置默认值：`{ name, price = 0 }`

### 注意事项
- 即使不传 props，组件也会收到空对象 `{}`
- 解构名必须与传入的 prop 名一致
- 这是通用的 JS 对象解构语法，不是 React 专属特性

## English Short Summary

Destructure props in function parameters: `function Pizza({ name, price })` instead of `function Pizza(props)`. Reduces repetition, makes required props visible at a glance, and supports default values. Standard practice in the React community.

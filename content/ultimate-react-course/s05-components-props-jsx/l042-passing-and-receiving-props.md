---
title: "Passing and Receiving Props"
lectureId: 42
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, props]
---

## 中文短总结

Props 是组件间的数据传递机制（父→子）。**传递**：像 HTML 属性一样写在组件标签上 `<Pizza name="Spinaci" price={10} />`。**接收**：组件函数的第一个参数是 props 对象 `function Pizza(props)`，通过 `props.name` 访问。可传递任意类型：字符串、数字、数组、对象、甚至其他组件。

## 中文长总结

### 传递 Props（父组件）
```jsx
<Pizza
  name="Focaccia"
  ingredients="Bread with Italian olive oil and rosemary"
  photoName="pizzas/focaccia.jpg"
  price={12}           // 数字用 {}
/>
```

### 接收 Props（子组件）
```jsx
function Pizza(props) {
  return (
    <div>
      <img src={props.photoName} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.price}</span>
    </div>
  );
}
```

### 关键概念
- Props 使组件**可配置**和**可复用**
- 字符串直接写，其他类型用 `{}` 包裹
- 每个组件实例可以接收不同的 props → 渲染不同的数据
- Props 是**只读**的（后续讲解）

## English Short Summary

Props pass data from parent to child components. Pass: `<Pizza name="Focaccia" price={12} />`. Receive: `function Pizza(props)` then access `props.name`. Strings use quotes, other types use `{}`. Props make components configurable and reusable — each instance can receive different data.

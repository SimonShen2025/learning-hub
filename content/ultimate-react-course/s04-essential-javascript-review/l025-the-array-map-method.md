---
title: "The Array map Method"
lectureId: 25
section: 4
sectionTitle: "[Optional] Review of Essential JavaScript for React"
date: "2026-03-04"
tags: [javascript, array-map]
---

## 中文短总结

`map()` 对数组每个元素执行回调函数，返回**新数组**（不修改原数组）。这是 React 中**最重要的数组方法** — 用于将数据数组转换为 JSX 元素列表（列表渲染的基础）。属于"函数式数组方法"（map/filter/reduce），核心特点是不可变。

## 中文长总结

### 基本用法
```javascript
const titles = books.map(book => book.title);
// 从对象数组中提取所有 title
```

### 返回新数组
- `map()` **不修改**原数组，返回全新数组
- 新数组长度与原数组相同（每个元素一一对应）

### React 中的核心应用
```jsx
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
```
- 这是 React 列表渲染的**唯一标准模式**
- 每个元素需要唯一的 `key` prop

### 与其他数组方法的关系
- `map` → 转换每个元素
- `filter` → 筛选元素
- `reduce` → 聚合成单个值
- 三者都是**函数式**（不可变）方法

## English Short Summary

`map()` transforms each array element via a callback, returning a new array without mutating the original. The most important array method in React — used to render lists by mapping data arrays to JSX elements (`items.map(item => <Item key={item.id} />)`).

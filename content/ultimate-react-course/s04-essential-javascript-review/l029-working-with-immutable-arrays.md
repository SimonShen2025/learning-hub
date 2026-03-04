---
title: "Working With Immutable Arrays"
lectureId: 29
section: 4
sectionTitle: "[Optional] Review of Essential JavaScript for React"
date: "2026-03-04"
tags: [javascript, immutability, react-state]
---

## 中文短总结

React 中操作数组必须保持**不可变**（不修改原数组）。三大不可变操作模式：**添加**用 spread `[...arr, newItem]`；**删除**用 `filter(item => item.id !== targetId)`；**更新**用 `map(item => item.id === targetId ? {...item, prop: newVal} : item)`。这是 React state 管理的绝对核心技能。

## 中文长总结

### 为什么要不可变
React 通过比较旧 state 和新 state 来决定是否 re-render。如果直接修改原数组（mutate），React 无法检测到变化 → UI 不更新。

### 三大不可变操作

**1. 添加元素**
```javascript
const newBooks = [...books, newBook];
// 或添加到开头
const newBooks = [newBook, ...books];
```

**2. 删除元素**
```javascript
const remainingBooks = books.filter(book => book.id !== deleteId);
```

**3. 更新元素**
```javascript
const updatedBooks = books.map(book =>
  book.id === targetId ? { ...book, pages: 999 } : book
);
```
- `map` + spread：找到目标 → 创建更新副本，其余不变

### React State 应用
```javascript
// 添加
setItems(prev => [...prev, newItem]);
// 删除
setItems(prev => prev.filter(item => item.id !== id));
// 更新
setItems(prev => prev.map(item =>
  item.id === id ? {...item, done: true} : item
));
```

## English Short Summary

React requires immutable array operations. **Add**: `[...arr, newItem]`. **Delete**: `arr.filter(x => x.id !== id)`. **Update**: `arr.map(x => x.id === id ? {...x, prop: val} : x)`. These three patterns are the foundation of React state management with arrays.

---
title: "Rest/Spread Operator"
lectureId: 19
section: 4
sectionTitle: "[Optional] Review of Essential JavaScript for React"
date: "2026-03-04"
tags: [javascript, spread-operator, rest-operator]
---

## 中文短总结

**Rest 运算符**（`...rest`）：在解构中收集剩余元素为新数组/对象，必须放在最后。**Spread 运算符**（`...arr`）：展开数组/对象的所有元素，常用于创建包含原有元素的新数组/对象。React 中用于不可变更新 state（`setState({...oldState, newProp: value})`）。

## 中文长总结

### Rest 运算符（收集）
```javascript
const [primary, secondary, ...otherGenres] = genres;
// otherGenres = 剩余所有元素组成的数组
```
- 必须放在解构模式的**最后**
- 对象同理：`const { title, ...otherProps } = book`

### Spread 运算符（展开）
```javascript
const newGenres = [...genres, "epic fantasy"]; // 添加新元素
const updatedBook = { ...book, pages: 1000 };  // 覆盖属性
```
- 展开所有元素/属性到新数组/对象中
- 后面的属性会覆盖前面的同名属性

### React 中的关键用途
- **不可变 state 更新**：`setState(prev => ({...prev, key: newValue}))`
- **Props 透传**：`<Component {...props} />`
- **合并列表**：`[...oldItems, newItem]`

## English Short Summary

Rest operator (`...rest`) collects remaining elements during destructuring (must be last). Spread operator (`...arr`) expands all elements into a new array/object. Critical in React for immutable state updates (`{...oldState, newProp}`) and props forwarding (`<Component {...props} />`).

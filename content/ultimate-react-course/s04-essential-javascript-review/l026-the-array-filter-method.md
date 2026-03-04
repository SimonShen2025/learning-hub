---
title: "The Array filter Method"
lectureId: 26
section: 4
sectionTitle: "[Optional] Review of Essential JavaScript for React"
date: "2026-03-04"
tags: [javascript, array-filter]
---

## 中文短总结

`filter()` 根据条件函数筛选数组元素，返回包含所有满足条件元素的**新数组**。回调返回 `true` 的元素被保留，`false` 的被过滤掉。可链式调用（如 `books.filter(...).filter(...)`），也常与 `map()` 链式组合。React 中用于搜索、过滤列表等功能。

## 中文长总结

### 基本用法
```javascript
const longBooks = books.filter(book => book.pages > 500);
```
- 回调返回布尔值：`true` → 保留，`false` → 过滤
- 返回新数组，原数组不变

### 链式调用
```javascript
const longAdventureBooks = books
  .filter(book => book.pages > 500)
  .filter(book => book.genres.includes("adventure"));
```

### React 中的应用
- 搜索过滤：`items.filter(item => item.name.includes(query))`
- 条件显示：`todos.filter(todo => !todo.completed)`
- 常与 `map` 链式使用：`items.filter(...).map(item => <Item />)`

## English Short Summary

`filter()` returns a new array with elements that pass the callback's boolean test. Chainable with other array methods. In React, used for search filtering, conditional list display, and commonly chained with `map()` for filtered list rendering.

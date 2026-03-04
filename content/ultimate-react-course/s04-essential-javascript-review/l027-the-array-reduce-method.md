---
title: "The Array reduce Method"
lectureId: 27
section: 4
sectionTitle: "[Optional] Review of Essential JavaScript for React"
date: "2026-03-04"
tags: [javascript, array-reduce]
---

## 中文短总结

`reduce()` 是最强大的数组方法，将数组"缩减"为单个值。回调接收 `(accumulator, currentElement)`，accumulator 在每次迭代中累积结果。第二个参数是初始值。可用于求和、计数、构建对象等任何聚合操作。理论上可以用 reduce 实现 map 和 filter。

## 中文长总结

### 基本语法
```javascript
const totalPages = books.reduce((acc, book) => acc + book.pages, 0);
```
- **accumulator（acc）**：累积值，每次迭代的"结果容器"
- **currentElement**：当前处理的元素
- **初始值**（第二个参数）：accumulator 的起始值

### 运作原理
1. 第一次迭代：acc = 初始值(0)，处理第一个元素
2. 每次迭代：回调返回值成为下一次迭代的 acc
3. 最终返回最后一次迭代的 acc

### 常见用途
- 求和：`arr.reduce((sum, n) => sum + n, 0)`
- 计数：`arr.reduce((count, item) => item.active ? count + 1 : count, 0)`
- 数组转对象：`arr.reduce((obj, item) => ({...obj, [item.id]: item}), {})`
- 扁平化、分组等复杂操作

### React 中的应用
- 计算派生状态（总价、统计数据）
- 将数组数据聚合为展示用的对象

## English Short Summary

`reduce()` aggregates an array into a single value using `(accumulator, currentElement)` callback and an initial value. The most versatile array method — can implement sum, count, grouping, flattening, and theoretically replace map/filter. In React, used for computing derived state like totals and statistics.

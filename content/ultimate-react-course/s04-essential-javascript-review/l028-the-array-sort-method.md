---
title: "The Array sort Method"
lectureId: 28
section: 4
sectionTitle: "[Optional] Review of Essential JavaScript for React"
date: "2026-03-04"
tags: [javascript, array-sort]
---

## 中文短总结

`sort()` **会修改原数组**（mutate）— 这在 React 中是危险的。比较函数：`(a, b) => a - b` 升序，`(a, b) => b - a` 降序。**React 中必须先用 `slice()` 复制再排序**：`[...arr].sort(...)` 或 `arr.slice().sort(...)`，确保不可变性。

## 中文长总结

### 基本语法
```javascript
// 数字排序需要比较函数（默认按字符串排序）
arr.sort((a, b) => a - b); // 升序
arr.sort((a, b) => b - a); // 降序
```
- 返回值 < 0 → a 排在 b 前面
- 返回值 > 0 → b 排在 a 前面

### ⚠️ sort() 会修改（mutate）原数组！
```javascript
const sorted = arr.sort(...); // arr 也被修改了！
```
这在 React 中非常危险，因为直接修改 state 会导致 bug。

### React 中的安全用法
```javascript
// 方法 1：spread 复制
const sorted = [...items].sort((a, b) => a.price - b.price);

// 方法 2：slice 复制
const sorted = items.slice().sort((a, b) => a.price - b.price);
```
- 先复制再排序 → 原数组不变 → state 安全

### 对象数组排序
```javascript
books.slice().sort((a, b) => a.pages - b.pages); // 按页数
```

## English Short Summary

`sort()` **mutates** the original array — dangerous in React. Use compare function `(a, b) => a - b` for ascending, `b - a` for descending. In React, always copy first: `[...arr].sort(...)` or `arr.slice().sort(...)` to maintain immutability.

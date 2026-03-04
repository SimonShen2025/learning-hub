---
title: "Destructuring Objects and Arrays"
lectureId: 18
section: 4
sectionTitle: "[Optional] Review of Essential JavaScript for React"
date: "2026-03-04"
tags: [javascript, destructuring]
---

## 中文短总结

解构赋值是 React 中最常用的 JS 特性之一。**对象解构**：`const { title, author } = book`，变量名必须匹配属性名；**数组解构**：`const [first, second] = genres`，按位置取值，变量名任意。React 中大量使用（如 `const [state, setState] = useState()`）。

## 中文长总结

### 对象解构
```javascript
const { title, author, pages, publicationDate, genres } = book;
```
- 变量名必须与对象属性名一致
- 一行提取多个属性，避免重复写 `book.title`、`book.author`

### 数组解构
```javascript
const [primaryGenre, secondaryGenre] = genres;
```
- 按**位置**匹配，变量名可以任意取
- React 的 `useState` 返回数组正是利用了这一特性：`const [count, setCount] = useState(0)`

### React 中的应用
- Props 解构：`function Component({ title, onClick })` 
- Hook 返回值解构：`const [state, setState] = useState()`
- API 响应数据提取

## English Short Summary

Object destructuring extracts properties by name (`const { title, author } = book`). Array destructuring extracts by position (`const [a, b] = arr`). React heavily uses both — props destructuring and `useState` hook return values are the most common examples.

---
title: "The Rules of JSX"
lectureId: 45
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, jsx, rules]
---

## 中文短总结

JSX 核心规则：1）必须返回**单个根元素**（可用 Fragment `<></>`），2）所有标签必须**闭合**（包括 `<img />`、`<br />`），3）HTML 属性用 **camelCase**（`className`、`htmlFor`、`onClick`），4）`{}` 中只能放**表达式**不能放语句。JSX 本质上是 `React.createElement` 的语法糖。

## 中文长总结

### 通用规则
1. **单个根元素**：每个组件返回的 JSX 必须有一个根元素
   - 可用 `<div>` 包裹
   - 或使用 Fragment：`<>...</>` 或 `<React.Fragment>...</React.Fragment>`

2. **标签必须闭合**
   ```jsx
   <img src="..." />  ✅
   <img src="...">    ❌
   <br />             ✅
   ```

3. **属性命名规则**
   - `class` → `className`
   - `for` → `htmlFor`
   - 事件处理：`onclick` → `onClick`
   - 多词属性：camelCase（`tabIndex`、`autoFocus`）

### JSX 中的 JS
- `{}` = 进入 JavaScript 模式
- ✅ 表达式：变量、`2+3`、`x ? a : b`、`arr.map()`
- ❌ 语句：`if/else`、`for`、`switch`、`const x = ...`

### JSX vs HTML 区别总结
| HTML | JSX |
|------|-----|
| `class` | `className` |
| `for` | `htmlFor` |
| 单标签可不闭合 | 必须闭合 |
| 属性用短横线 | 属性用 camelCase |

## English Short Summary

JSX rules: 1) Return a single root element (use Fragment `<></>` if needed), 2) All tags must be closed (`<img />`), 3) Use camelCase for attributes (`className`, `htmlFor`, `onClick`), 4) Only expressions inside `{}` — no statements. JSX is syntactic sugar for `React.createElement()`.

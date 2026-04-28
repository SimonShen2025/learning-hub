---
title: "Variables, Constants and Data Types"
lectureId: 7
section: 2
sectionTitle: "JavaScript Fundamentals"
date: "2026-04-29"
tags: [javascript, variables, data-types]
---

## 中文短总结

JS 变量用 `var`/`let` 声明，可重新赋值；常量用 `const` 声明，不可重新赋值且必须初始化。五种原始数据类型：string（引号包裹）、number（无引号）、boolean（true/false）、null（预期无值）、undefined（未定义）。

## 中文长总结

### 变量 vs 常量

- **`var` / `let`** — 声明变量，值可重新赋值，可先声明后赋值
- **`const`** — 声明常量，值一旦赋值不可更改，声明时必须初始化

### 五种原始数据类型

| 类型 | 说明 | 示例 |
|------|------|------|
| string | 引号包裹的文本 | `"John"`, `'John'` |
| number | 无引号的数字 | `25` |
| boolean | 逻辑值 | `true`, `false` |
| null | 预期的空值 | `null` |
| undefined | 未定义/不存在 | `undefined` |

注意：`"25"`（string）和 `25`（number）是不同类型，string 无法进行算术运算。

## English Short Summary

Variables (`var`/`let`) are reassignable; constants (`const`) are not and must be initialized. Five primitive types: string, number, boolean, null, undefined.

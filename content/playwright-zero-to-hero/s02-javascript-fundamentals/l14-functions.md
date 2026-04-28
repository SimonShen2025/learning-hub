---
title: "Functions"
lectureId: 14
section: 2
sectionTitle: "JavaScript Fundamentals"
date: "2026-04-29"
tags: [javascript, functions]
---

## 中文短总结

三种函数形式：**声明式函数** — `function name()` 可提前调用；**匿名函数** — 赋值给变量，不可提前调用；**箭头函数** — ES6 语法 `() => {}`。函数可接受参数、返回值，用 `export`/`import` 跨文件复用。

## 中文长总结

### 函数类型

| 类型 | 语法 | 特点 |
|------|------|------|
| 声明式 | `function hello() {}` | 存在提升（hoisting），可在声明前调用 |
| 匿名 | `const hello = function() {}` | 必须先声明再调用 |
| 箭头函数 | `const hello = () => {}` | ES6 语法，匿名函数的简写 |

### 参数与返回值

- 参数用逗号分隔：`function printName(name, lastName) {}`
- 用 `return` 返回结果，调用方赋值到变量使用

### 模块导入导出

- 导出：`export function printH(h) {}`
- 导入单个：`import { printH } from './helpers/printHelper.js'`
- 导入全部：`import * as helper from './helpers/printHelper.js'`，通过 `helper.printH()` 调用
- 需在 `package.json` 中添加 `"type": "module"` 启用 ES Module

## English Short Summary

Three function forms: declarative (hoisted), anonymous (assigned to variable), arrow (ES6 shorthand). Functions accept parameters, return values, and can be shared across files via `export`/`import`.

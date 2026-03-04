---
title: "JavaScript Logic in Components"
lectureId: 39
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, javascript-in-jsx, expressions]
---

## 中文短总结

组件是 JS 函数，可以在 return 前写任意 JS 逻辑（变量、计算、条件等）。JSX 的 `{}` 中可嵌入任意 **JS 表达式**（有返回值的代码），但**不能**写语句（if/else、for、switch）。常用技巧：在 return 前计算数据，在 JSX 的 `{}` 中使用计算结果。

## 中文长总结

### return 前的 JS 逻辑
```jsx
function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour >= 12 && hour <= 22;
  // 可以写任意 JS：变量、条件、函数调用...

  return <footer>{isOpen ? "We're open!" : "Sorry, closed."}</footer>;
}
```

### JSX 中的 `{}`
- 可用：变量引用、函数调用、三元运算、数学运算、模板字符串 → **表达式**
- 不可用：if/else、for 循环、switch → **语句**
- `{}` 是 JSX 进入 "JavaScript 模式" 的方式

### 关键区别
| 位置 | 可写的内容 |
|------|-----------|
| return 前 | 任意 JS（语句+表达式都可以） |
| JSX `{}` 内 | 只能写**表达式** |

## English Short Summary

Components are JS functions — write any logic before `return` (variables, conditions, calculations). Inside JSX, `{}` accepts only JavaScript **expressions** (values, function calls, ternaries), not statements (if/else, for). Compute data before return, then reference results in JSX.

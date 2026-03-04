---
title: "Ternaries Instead of if/else Statements"
lectureId: 21
section: 4
sectionTitle: "[Optional] Review of Essential JavaScript for React"
date: "2026-03-04"
tags: [javascript, ternary-operator]
---

## 中文短总结

三元运算符（`condition ? valueIfTrue : valueIfFalse`）是 **表达式**（有返回值），而 `if/else` 是**语句**。React JSX 中不能使用语句，因此三元运算符是条件渲染的核心工具。可用于赋值、JSX 内联条件渲染、模板字符串内的条件逻辑。

## 中文长总结

### 语法
```javascript
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
```

### 与 if/else 的关键区别
- 三元运算符是**表达式**（expression） → 产生值 → 可用在赋值、JSX、模板字符串中
- `if/else` 是**语句**（statement） → 不产生值 → **不能**在 JSX 的 `{}` 中使用

### React 中的核心应用
```jsx
{isLoggedIn ? <Dashboard /> : <LoginPage />}
{items.length > 0 ? <List items={items} /> : <EmptyMessage />}
```

## English Short Summary

Ternary operator (`cond ? a : b`) is an expression (produces a value), unlike if/else statements. Essential in React JSX where only expressions are allowed — used for conditional rendering, conditional class names, and inline value decisions.

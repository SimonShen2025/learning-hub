---
title: "What is JSX?"
lectureId: 37
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, jsx, babel]
---

## 中文短总结

JSX 是 JavaScript 的**声明式语法扩展**，允许在 JS 中写类似 HTML 的代码来描述组件的 UI。JSX 不是 HTML，而是被 Babel 编译为 `React.createElement()` 调用。每个 JSX 元素最终变成一个 JS 对象（React Element）。JSX 让我们把 HTML/CSS/JS 写在一起，是 React 声明式编程范式的核心。

## 中文长总结

### JSX 本质
- JSX = JavaScript XML，语法扩展
- 看起来像 HTML，但实际是 JavaScript
- 浏览器不认识 JSX → **Babel** 将其编译为 `React.createElement()` 调用

### 编译过程
```jsx
// JSX 写法
<header><h1>Hello</h1></header>

// Babel 编译后
React.createElement("header", null,
  React.createElement("h1", null, "Hello")
);
```

### 声明式 vs 命令式
- **JSX（声明式）**：描述"UI 应该长什么样"
- **DOM 操作（命令式）**：逐步指示"怎么操作 DOM"
- React 根据 JSX 声明自动处理 DOM 更新

### 关键要点
- JSX 是可选的（可以直接写 `createElement`），但实际开发中都用 JSX
- JSX 中可用 `{}` 嵌入任意 JS 表达式

## English Short Summary

JSX is a declarative syntax extension for JavaScript that looks like HTML but compiles (via Babel) to `React.createElement()` calls. Each JSX element becomes a JS object (React Element). JSX embeds HTML structure, CSS, and JS logic together, enabling React's declarative UI paradigm.

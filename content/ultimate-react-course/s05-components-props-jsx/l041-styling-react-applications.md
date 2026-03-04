---
title: "Styling React Applications"
lectureId: 41
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, css, styling, inline-styles]
---

## 中文短总结

React 中常见的样式方式：1）**外部 CSS 文件**（import 后用 `className` 而非 `class`），2）**内联样式**（`style` 属性接收 JS 对象，属性名用 camelCase），3）CSS Modules、Styled Components、Tailwind 等（后续课程讲解）。React 不内置样式方案，开发者自由选择。

## 中文长总结

### 1. 外部 CSS 文件
```jsx
import './index.css';
// JSX 中用 className（不是 class！）
<div className="container">...</div>
```
- `class` 是 JS 保留字 → JSX 中使用 `className`

### 2. 内联样式
```jsx
<h1 style={{ color: "red", fontSize: "48px" }}>Hello</h1>
```
- `style` 接收**对象**（不是字符串）
- 外层 `{}` = JSX 进入 JS 模式
- 内层 `{}` = JS 对象字面量
- CSS 属性名使用 **camelCase**：`fontSize`、`backgroundColor`

### 3. 其他方案（后续课程）
- CSS Modules
- Styled Components
- Tailwind CSS
- Sass/SCSS

### 注意事项
- React 不强制使用任何特定样式方案
- 小项目用外部 CSS 即可，大项目建议 CSS Modules 或 CSS-in-JS

## English Short Summary

React styling options: 1) External CSS files with `className` (not `class`), 2) Inline styles as JS objects with camelCase properties (`style={{ fontSize: "48px" }}`), 3) CSS Modules, Styled Components, Tailwind (covered later). React is unopinionated about styling.

---
title: "Using CSS Modules"
lectureId: 209
section: 17
sectionTitle: "React Router: Building Single-Page Applications (SPA)"
date: "2026-03-04"
tags: [react, css-modules, styling, scoped-css]
---

## 中文短总结

CSS Modules 基础：文件命名 `Component.module.css`，导入为对象 `import styles from './X.module.css'`，使用 `className={styles.nav}`。类名自动加 hash 后缀防止冲突。Vite 和 CRA 都原生支持。全局样式用 `:global(.class)`。

## 中文长总结

### 使用步骤
```css
/* PageNav.module.css */
.nav {
  display: flex;
  justify-content: space-between;
}
.nav ul {
  list-style: none;
}
```

```jsx
// PageNav.jsx
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>...</ul>
    </nav>
  );
}
```

### 编译结果
```html
<!-- 自动生成唯一类名 -->
<nav class="_nav_1a2b3c">
```

### 优势
- **作用域隔离** — 类名不会与其他组件冲突
- **零配置** — Vite/CRA 内置支持
- **普通 CSS 语法** — 无额外学习成本

### 全局样式
```css
:global(.active) {
  color: green; /* 全局类名，不加 hash */
}
```

### 组合样式
```jsx
className={`${styles.btn} ${styles.primary}`}
```

## English Short Summary

CSS Modules: name files `X.module.css`, import as object `styles`, use `className={styles.nav}`. Class names auto-hashed (scoped). Zero config in Vite/CRA. Use `:global(.class)` for global styles. Regular CSS syntax with automatic scoping.

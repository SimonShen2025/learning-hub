---
title: "Linking Between Routes With <Link /> and <NavLink />"
lectureId: 207
section: 17
sectionTitle: "React Router: Building Single-Page Applications (SPA)"
date: "2026-03-04"
tags: [react, react-router, Link, NavLink, navigation]
---

## 中文短总结

用 `<Link>` 和 `<NavLink>` 替代 `<a>` 标签实现 SPA 导航。`<Link to="/pricing">` 不触发页面刷新。`<NavLink>` 额外功能：当前路由自动添加 `active` class，适合导航栏高亮。

## 中文长总结

### 为什么不用 `<a>`
```jsx
// ❌ 触发全页面刷新 — 不是 SPA！
<a href="/pricing">Pricing</a>

// ✅ SPA 导航 — 只更新组件
<Link to="/pricing">Pricing</Link>
```

### Link vs NavLink
```jsx
import { Link, NavLink } from "react-router-dom";

// Link — 基本导航
<Link to="/pricing">Pricing</Link>

// NavLink — 导航栏用，自动高亮
<NavLink to="/pricing">Pricing</NavLink>
// 当前路由会自动加 class="active"
```

### NavLink 的 active class
```css
/* CSS 中可以直接用 */
.nav a.active {
  color: green;
  font-weight: bold;
}
```

### 使用场景
- `Link`：页面内任意位置的链接
- `NavLink`：导航栏（需要高亮当前页）

## English Short Summary

Use `<Link>` instead of `<a>` for SPA navigation (no page reload). `<NavLink>` auto-adds `active` class on current route — perfect for nav highlighting. Both from `react-router-dom`. Never use `<a href>` in React SPA.

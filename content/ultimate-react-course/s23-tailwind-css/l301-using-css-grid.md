---
title: "Using CSS Grid"
lectureId: 301
section: 23
sectionTitle: "[Optional] Tailwind CSS Crash Course: Styling the App"
date: "2026-03-04"
tags: [tailwind-css, css-grid, layout]
---

## 中文短总结

Tailwind CSS Grid 布局。`grid grid-cols-3 gap-4` 创建三列网格。`col-span-2` 跨列。`grid-rows-[auto_1fr_auto]` 自定义行。适合页面整体布局和卡片列表。

## 中文长总结

### 基本网格
```jsx
// 3 列等宽网格
<div className="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

// 响应式网格
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id} />)}
</div>
```

### 跨列/跨行
```jsx
<div className="grid grid-cols-3 gap-4">
  <div className="col-span-2">跨两列</div>
  <div>一列</div>
</div>
```

### 自定义模板
```jsx
// 自定义列宽
<div className="grid grid-cols-[1fr_auto_1fr] gap-4">

// 自定义行
<div className="grid grid-rows-[auto_1fr_auto] h-screen">
  <header>Header</header>
  <main>Content (fills)</main>
  <footer>Footer</footer>
</div>
```

### Flexbox vs Grid
- **Flexbox** — 一维布局（一行或一列）
- **Grid** — 二维布局（行和列同时控制）

## English Short Summary

Tailwind CSS Grid: `grid grid-cols-3 gap-4` for columns. `col-span-2` to span. Custom templates with bracket notation `grid-cols-[1fr_auto]`. Responsive grids with breakpoints. Grid for 2D, Flexbox for 1D layouts.

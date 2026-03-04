---
title: "Using Flexbox"
lectureId: 300
section: 23
sectionTitle: "[Optional] Tailwind CSS Crash Course: Styling the App"
date: "2026-03-04"
tags: [tailwind-css, flexbox, layout]
---

## 中文短总结

Tailwind Flexbox 布局。`flex` 启用 → `justify-between`、`items-center`、`gap-4`、`flex-col`。控制子项：`flex-1`（填充）、`flex-none`（不缩放）、`flex-grow`、`flex-shrink-0`。简洁直观。

## 中文长总结

### 基本用法
```jsx
// 水平排列 + 居中 + 间距
<div className="flex items-center justify-between gap-4">
  <span>Left</span>
  <span>Right</span>
</div>

// 垂直排列
<div className="flex flex-col gap-2">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// 居中（水平 + 垂直）
<div className="flex items-center justify-center h-screen">
  <p>Centered!</p>
</div>
```

### 常用 Flexbox Classes
| Class | CSS |
|-------|-----|
| `flex` | display: flex |
| `flex-col` | flex-direction: column |
| `flex-wrap` | flex-wrap: wrap |
| `items-center` | align-items: center |
| `items-start` | align-items: flex-start |
| `justify-center` | justify-content: center |
| `justify-between` | justify-content: space-between |
| `gap-4` | gap: 1rem |
| `flex-1` | flex: 1 1 0% |
| `flex-none` | flex: none |
| `flex-grow` | flex-grow: 1 |
| `flex-shrink-0` | flex-shrink: 0 |

### 实际布局
```jsx
// 导航栏
<header className="flex items-center justify-between px-4 py-3 bg-yellow-400">
  <Link to="/">Logo</Link>
  <SearchOrder />
  <Username />
</header>
```

## English Short Summary

Tailwind Flexbox: `flex` to enable, `justify-between/items-center/gap-4/flex-col` for layout. Child control: `flex-1` (fill), `flex-none` (don't resize). Concise and intuitive compared to raw CSS.

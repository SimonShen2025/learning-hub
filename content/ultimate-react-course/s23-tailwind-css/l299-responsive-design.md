---
title: "Responsive Design"
lectureId: 299
section: 23
sectionTitle: "[Optional] Tailwind CSS Crash Course: Styling the App"
date: "2026-03-04"
tags: [tailwind-css, responsive, breakpoints, mobile-first]
---

## 中文短总结

Tailwind 响应式设计。**移动优先** — 默认样式给手机，用前缀加更大屏的样式。断点：`sm:` (640px)、`md:` (768px)、`lg:` (1024px)、`xl:` (1280px)、`2xl:` (1536px)。意味着"从此宽度起生效"。

## 中文长总结

### 移动优先原则
```jsx
// 默认（手机）→ sm（平板竖屏）→ md（平板横屏）→ lg（桌面）
<div className="text-sm sm:text-base md:text-lg lg:text-xl">
  Responsive text
</div>

// 默认 1 列 → md 时 2 列 → lg 时 3 列
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### 断点
| 前缀 | 最小宽度 | 典型设备 |
|------|---------|---------|
| (无) | 0px | 手机 |
| `sm:` | 640px | 大手机/小平板 |
| `md:` | 768px | 平板 |
| `lg:` | 1024px | 小桌面 |
| `xl:` | 1280px | 桌面 |
| `2xl:` | 1536px | 大桌面 |

### 实际例子
```jsx
// 手机满宽，桌面 50% 宽
<div className="w-full lg:w-1/2">

// 手机隐藏，md 显示
<nav className="hidden md:block">

// 手机纵向，md 横向
<div className="flex flex-col md:flex-row">
```

### 关键理解
- 前缀表示 **min-width**（"从此宽度起"）
- 不需要写 max-width 查询
- 先写手机样式，再添加更大屏幕的

## English Short Summary

Tailwind responsive: mobile-first. Default styles for mobile, add breakpoint prefixes for larger screens. `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px). Prefixes mean "from this width up" (min-width).

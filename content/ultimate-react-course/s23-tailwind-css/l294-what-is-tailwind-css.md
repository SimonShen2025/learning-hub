---
title: "What is Tailwind CSS?"
lectureId: 294
section: 23
sectionTitle: "[Optional] Tailwind CSS Crash Course: Styling the App"
date: "2026-03-04"
tags: [tailwind-css, utility-first, theory]
---

## 中文短总结

Tailwind CSS 是 utility-first CSS 框架。每个 class 做一件事（如 `text-red-500`、`p-4`、`flex`）。不需要写任何自定义 CSS。与传统 CSS（语义化类名）和 CSS-in-JS 完全不同。优势：开发快、一致性好、可定制。

## 中文长总结

### 什么是 Utility-First
```jsx
// 传统 CSS
<div className="card">...</div>
// .card { padding: 1rem; border-radius: 8px; background: white; }

// Tailwind
<div className="p-4 rounded-lg bg-white">...</div>
// 不需要写任何 CSS！
```

### 核心优势
1. **快速开发** — 不用在 CSS 和 HTML 间切换
2. **设计一致** — 预定义的间距、颜色、字号
3. **极度灵活** — 任意组合 utility classes
4. **小 bundle** — 只打包使用的 class（PurgeCSS）
5. **响应式容易** — `sm:`, `md:`, `lg:` 前缀

### 劣势
- className 很长（但有解决方案）
- 学习曲线（需要记住大量 class）
- JSX "看起来丑"

### 与其他方案对比
| 方案 | 特点 |
|------|------|
| 传统 CSS/SCSS | 语义化类名，样式与标记分离 |
| CSS Modules | 范围隔离，避免冲突 |
| CSS-in-JS | 样式在 JS 中，组件级 |
| Tailwind | Utility classes，无自定义 CSS |

## English Short Summary

Tailwind CSS: utility-first framework. Each class does one thing (`p-4`, `text-red-500`, `flex`). No custom CSS needed. Fast development, consistent design, small bundles. Trade-off: long classNames, learning curve.

---
title: "Styling Options For React Applications"
lectureId: 208
section: 17
sectionTitle: "React Router: Building Single-Page Applications (SPA)"
date: "2026-03-04"
tags: [react, css, styling, comparison]
---

## 中文短总结

React 样式方案总览：① inline styles ② 全局 CSS ③ CSS Modules ④ CSS-in-JS（styled-components）⑤ Tailwind CSS ⑥ UI 组件库（MUI/Chakra）。各有适用场景。本项目用 CSS Modules。

## 中文长总结

### 样式方案对比
| 方案 | 作用域 | 学习成本 | 适合场景 |
|------|--------|---------|---------|
| Inline styles | 组件局部 | 低 | 快速原型 |
| 全局 CSS | 全局 | 低 | 小项目 |
| CSS Modules | 组件局部 | 低 | 中大型项目 ✅ |
| CSS-in-JS | 组件局部 | 中 | 需要动态样式 |
| Tailwind CSS | utility | 中 | 快速开发 |
| UI 组件库 | 组件 | 中-高 | 企业级应用 |

### CSS-in-JS 代表
- styled-components
- Emotion
- Stitches

### 选择建议
- 小项目/学习：全局 CSS 足够
- 团队项目：CSS Modules 或 Tailwind
- 需要主题/动态样式：CSS-in-JS
- 快速 MVP：UI 组件库

## English Short Summary

React styling options: inline styles, global CSS, CSS Modules (scoped, used in this project), CSS-in-JS (styled-components), Tailwind CSS, UI libraries (MUI/Chakra). Each suits different scenarios. CSS Modules recommended for medium-large projects.

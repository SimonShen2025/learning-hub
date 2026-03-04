---
title: "Separation of Concerns"
lectureId: 40
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, separation-of-concerns, jsx]
---

## 中文短总结

传统 web 开发按**技术**分离（HTML/CSS/JS 各一个文件）。React 的关注点分离是按**组件**分离 — 每个组件将 HTML（JSX）、CSS 和 JS 逻辑封装在一起，因为它们本质上紧密耦合。这不是"混乱地混合"，而是将相关代码放在一起（co-location），提高可维护性。

## 中文长总结

### 传统方式
```
index.html  ←  结构
style.css   ←  样式
script.js   ←  逻辑
```
按技术分离，但实际上 HTML/JS/CSS 经常需要互相引用 → 逻辑分散

### React 方式
```
Pizza.jsx  ←  结构 + 样式 + 逻辑（全在一起）
Header.jsx ←  结构 + 样式 + 逻辑
```
按**功能/组件**分离 — 每个 UI 片段的所有相关代码放在一起

### 为什么这样更好
- JS 控制 HTML 的趋势越来越强（Vue、Angular、Svelte 都是如此）
- 相关代码放在一起（co-location）→ 更易理解和维护
- 传统的"技术分离"并不等于"关注点分离"
- React 只是在 JS 函数中返回标记（markup），并不是真正的"混合"

## English Short Summary

Traditional separation by technology (HTML/CSS/JS files) ≠ separation of concerns. React separates by component — each component co-locates its markup (JSX), logic (JS), and styles. This co-location improves maintainability because related code stays together.

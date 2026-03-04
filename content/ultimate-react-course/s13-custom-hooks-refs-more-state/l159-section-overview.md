---
title: "Section Overview"
lectureId: 159
section: 13
sectionTitle: "Custom Hooks, Refs, and More State"
date: "2026-03-04"
tags: [react, custom-hooks, useRef, useState]
---

## 中文短总结

本节涵盖三大主题：① useState 深入（回调初始化、总结）。② useRef（选择 DOM 元素、跨渲染持久数据）。③ 自定义 Hooks（提取可复用逻辑）。在 usePopcorn 项目中实践。

## 中文长总结

### 学习目标
1. **useState 深入**
   - 回调初始化（Lazy Initial State）
   - useState 完整总结
2. **useRef**
   - 选择 DOM 元素（替代 `document.querySelector`）
   - 持久化跨渲染数据（不触发 re-render）
3. **自定义 Hooks**
   - 何时创建自定义 Hook
   - useMovies — 封装电影搜索
   - useLocalStorageState — 封装 localStorage 同步
   - useKey — 封装键盘事件

### 项目
继续完善 usePopcorn

## English Short Summary

Three topics: useState in depth (lazy initialization, summary), useRef (DOM selection, persisting data across renders), and custom hooks (extracting reusable logic: useMovies, useLocalStorageState, useKey). Continues the usePopcorn project.

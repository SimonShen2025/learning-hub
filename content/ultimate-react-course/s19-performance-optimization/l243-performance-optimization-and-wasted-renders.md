---
title: "Performance Optimization and Wasted Renders"
lectureId: 243
section: 19
sectionTitle: "Performance Optimization and Advanced useEffect"
date: "2026-03-04"
tags: [react, performance, wasted-renders, optimization, theory]
---

## 中文短总结

React 性能优化三大领域：1）减少 wasted renders，2）提高 app 响应速度（useMemo 缓存昂贵计算），3）减小 bundle 大小（代码分割）。Wasted render = 组件 re-render 但输出不变。不是所有 re-render 都是问题 — 只有引起延迟的才需优化。

## 中文长总结

### 三个优化领域
| 领域 | 工具 |
|------|------|
| 防止 wasted renders | memo, useMemo, useCallback, children prop 技巧 |
| 提高响应速度 | useMemo 缓存计算, useCallback 缓存函数 |
| 减小 bundle | Code splitting, lazy loading |

### 什么是 Wasted Render
- 组件 re-render 了，但输出 DOM 与之前**完全相同**
- React 做了 diffing 后发现无需更新 DOM
- 渲染本身不昂贵 — 但大型应用中累积可有感知

### 何时 re-render 发生
1. State 变化
2. Context value 变化
3. 父组件 re-render → 子组件跟着

### 重要原则
- **不要过早优化** — 先让功能正确
- 只在有实际性能问题时才优化
- Profiler 帮你找到真正的瓶颈

## English Short Summary

Three optimization areas: reduce wasted renders (memo/useMemo/useCallback), improve responsiveness (cache expensive computations), reduce bundle size (code splitting). Wasted render = re-render with same output. Don't optimize prematurely — only when actual performance issues exist.

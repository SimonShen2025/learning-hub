---
title: "The Component Lifecycle"
lectureId: 141
section: 12
sectionTitle: "Effects and Data Fetching"
date: "2026-03-04"
tags: [react, lifecycle, mount, unmount, re-render]
---

## 中文短总结

组件生命周期三阶段：**Mount**（首次渲染，初始 state 和 props）→ **Re-render**（state 变化、props 变化、父组件渲染、Context 变化）→ **Unmount**（从 DOM 移除）。useEffect 可以在这三个阶段执行代码。

## 中文长总结

### 三个阶段
```
Mount (出生)
  → 组件实例首次创建
  → 初始 state 设置
  → 出现在 UI 中
  ↓
Re-render (成长) × N
  → state 更新
  → props 变化
  → 父组件重新渲染
  → Context 变化
  ↓
Unmount (死亡)
  → 组件从 UI 中移除
  → state 和 side effects 被清理
```

### 与 useEffect 的关系
| 依赖数组 | 执行时机 |
|----------|----------|
| `[]` | 仅 mount |
| `[dep]` | mount + dep 变化时 |
| 无数组 | 每次渲染 |
| cleanup | unmount（+ 下次 effect 前）|

## English Short Summary

Component lifecycle: **Mount** (first render, initial state) → **Re-render** (state/props/context change, parent re-render) → **Unmount** (removed from DOM). useEffect hooks into these phases: `[]` = mount only, `[dep]` = mount + dep change, no array = every render, cleanup = unmount.

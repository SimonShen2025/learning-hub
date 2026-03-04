---
title: "How Rendering Works: Overview"
lectureId: 126
section: 11
sectionTitle: "How React Works Behind the Scenes"
date: "2026-03-04"
tags: [react, rendering, virtual-dom, overview]
---

## 中文短总结

React 渲染流程三阶段：① Render Phase — 调用组件函数，创建 React Elements，构建 Virtual DOM 树。② Reconciliation — 比较新旧 Virtual DOM（Diffing），找出最小变更。③ Commit Phase — 将变更应用到真实 DOM。"Render" 在 React 中 ≠ 更新 DOM！

## 中文长总结

### 三阶段
```
Trigger (state update)
  ↓
1. RENDER PHASE
   - 调用所有受影响的组件函数
   - 生成新的 React Element 树（Virtual DOM）
   - ⚠️ 不触及真实 DOM！
  ↓
2. RECONCILIATION (Diffing)
   - Fiber 树比较新旧 Virtual DOM
   - 找出最小变更集（哪些 DOM 节点需要增/删/改）
  ↓
3. COMMIT PHASE
   - React DOM（或 React Native）将变更写入真实 DOM
   - 这才是 DOM 更新发生的地方
```

### 核心误区
- ❌ "Rendering" = 更新屏幕
- ✅ "Rendering" = 调用组件函数 + 生成 React Elements
- Commit Phase 才操作 DOM

### Virtual DOM
- React Elements 组成的树
- 创建和比较性能极高（JS 对象操作）
- 为什么 React 快：不直接操作 DOM，先在内存中计算最小变更

## English Short Summary

React rendering has 3 phases: **Render Phase** (call component functions, create Virtual DOM — does NOT touch real DOM), **Reconciliation** (Fiber-based diffing to find minimal changes), **Commit Phase** (apply changes to real DOM). "Rendering" ≠ DOM update — it's just creating React elements.

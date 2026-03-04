---
title: "Section Summary: Practical Takeaways"
lectureId: 139
section: 11
sectionTitle: "How React Works Behind the Scenes"
date: "2026-03-04"
tags: [react, summary, best-practices, internals]
---

## 中文短总结

本节实用总结。核心要点：组件是蓝图、实例有 state、渲染≠DOM 更新。关键规则：render logic 必须纯净、别忘记 key、state 更新是批量异步的、用回调形式更新 state。理解 Diffing 规则帮助写出性能更好的代码。

## 中文长总结

### 核心概念速查
1. **Component** → **Instance** → **Element** → **DOM**
2. **Rendering** = 调用组件函数 ≠ 更新 DOM
3. Render Phase（可中断）→ Commit Phase（同步）

### 实用规则
- ✅ Render logic 必须纯净（无副作用）
- ✅ 列表中始终使用稳定的 `key`（用 id 不用 index）
- ✅ 需要重置 state → 改变 `key`
- ✅ 多个 setState 会被 batch → state 不会立即更新
- ✅ 基于当前值更新用回调：`setState(prev => ...)`
- ✅ 不要直接调用组件函数

### Diffing 规则总结
- 不同类型 → 销毁重建（state 丢失）
- 相同类型 → 保留 DOM 和 state，更新 props
- key 变化 → 强制销毁重建

### 事件
- SyntheticEvent 包装
- 事件委托到 root
- 默认冒泡

## English Short Summary

Section summary of practical takeaways: components are blueprints, instances have state, rendering ≠ DOM update. Key rules: pure render logic, stable keys in lists, key changes reset state, state updates are batched/async, use callback form for state updates. Diffing: different type → destroy, same type → preserve, key change → force destroy.

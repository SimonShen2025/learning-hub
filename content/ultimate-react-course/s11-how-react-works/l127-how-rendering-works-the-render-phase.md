---
title: "How Rendering Works: The Render Phase"
lectureId: 127
section: 11
sectionTitle: "How React Works Behind the Scenes"
date: "2026-03-04"
tags: [react, render-phase, virtual-dom, fiber, reconciliation]
---

## 中文短总结

Render Phase 详解。触发渲染的两种情况：初始渲染 & state 更新。React 从根组件开始，递归调用所有需要重新渲染的组件。生成新的 Virtual DOM 树后，进入 Reconciliation（使用 Fiber 架构）。Fiber 保持在内存中，是可变的工作单元树。

## 中文长总结

### 触发渲染
1. **初始渲染**：`createRoot().render(<App />)`
2. **State 更新**：`setState()` 调用 → 触发重新渲染

### Render Phase 流程
1. 从触发 state 更新的组件开始
2. 递归调用该组件及其所有子组件
3. 每个组件返回 React Elements
4. 构建新的 Virtual DOM 树

### Fiber 架构
- React 16+ 引入
- **Fiber Tree**：内部工作单元树
- 每个组件实例/DOM 元素对应一个 **Fiber**
- Fiber 在初始渲染时创建，后续 **不会重新创建**（可变、就地更新）
- Fiber 包含：state、props、side effects 队列、指向子/兄弟/父的指针

### Reconciliation
- 比较当前 Fiber 树（current）和新的 Virtual DOM
- 决定哪些 Fiber 需要更新
- 结果：一个 "effect list"（待执行的 DOM 操作列表）

## English Short Summary

Render Phase deep dive. Triggered by initial render or state update. React recursively calls component functions, builds new Virtual DOM. **Fiber architecture**: persistent mutable tree of work units (one per component/element). Reconciliation compares current Fiber tree with new Virtual DOM to produce an effect list of DOM operations.

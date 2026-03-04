---
title: "Section Overview"
lectureId: 122
section: 11
sectionTitle: "How React Works Behind the Scenes"
date: "2026-03-04"
tags: [react, internals, behind-the-scenes]
---

## 中文短总结

深入 React 内部机制：组件 vs 实例 vs 元素、渲染流程（Render Phase + Commit Phase）、Virtual DOM、Reconciliation（Diffing 算法）、Key Prop 的作用、纯组件规则、State 批量更新、事件机制。理论性最强的一节。

## 中文长总结

### 本节核心主题
1. **Components → Instances → Elements → DOM** 的关系链
2. **渲染流程**：Render Phase（创建 VDOM）→ Reconciliation（Diffing）→ Commit Phase（更新 DOM）
3. **Diffing 算法**规则
4. **Key Prop** 的深层作用
5. **纯组件**和 Render Logic 规则
6. **State Update Batching**
7. **事件系统**（合成事件、事件委托）
8. React 生态系统概览

### 为什么重要
- 理解 React 如何决定"何时更新什么"
- 优化性能的基础
- 避免常见错误

## English Short Summary

Deep dive into React internals: components vs instances vs elements, rendering pipeline (Render Phase → Reconciliation/Diffing → Commit Phase), Virtual DOM, key prop mechanics, pure component rules, state batching, synthetic events. Most theory-heavy section.

---
title: "How Rendering Works: The Commit Phase"
lectureId: 128
section: 11
sectionTitle: "How React Works Behind the Scenes"
date: "2026-03-04"
tags: [react, commit-phase, react-dom, rendering]
---

## 中文短总结

Commit Phase：React 将 effect list 中的 DOM 操作**同步、一次性**写入真实 DOM（insertions、deletions、updates）。由 ReactDOM 执行（不是 React 核心）。Commit 是同步的（不可中断），确保 UI 一致性。之后浏览器 repaint 显示更新。

## 中文长总结

### Commit Phase 流程
```
Effect List (来自 Reconciliation)
  ↓
ReactDOM 执行 DOM 操作
  ↓ (同步，不可中断)
DOM 更新完成
  ↓
浏览器 Repaint（不是 React 控制的）
```

### 关键点
- **React** 负责 Render + Reconciliation（平台无关）
- **ReactDOM** 负责 Commit（Web 平台特定）
- **React Native** 是另一个 renderer（移动平台）
- 这就是 React 和 ReactDOM 分开安装的原因

### 同步 vs 异步
- Render Phase 可以被中断（Fiber 的并发特性）
- **Commit Phase 不可中断** — 确保用户不会看到"半更新"的 UI
- 所有 DOM 变更一次性完成

### 生命周期联系
- Commit 完成后 → `useEffect` 执行
- Layout Effects → 在 DOM 更新后、浏览器 paint 前执行

## English Short Summary

Commit Phase: ReactDOM synchronously applies all DOM mutations (insertions, deletions, updates) from the effect list in one go. Cannot be interrupted — ensures UI consistency. This is why React and ReactDOM are separate packages (React is platform-agnostic, renderers are platform-specific). Browser repaints after commit.

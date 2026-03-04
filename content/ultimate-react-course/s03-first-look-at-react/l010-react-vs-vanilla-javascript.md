---
title: "React vs. Vanilla JavaScript"
lectureId: 10
section: 3
sectionTitle: "A First Look at React"
date: "2026-03-04"
tags: [react, vanilla-javascript, dom-manipulation]
---

## 中文短总结

通过 Advice App 对比 React 与 Vanilla JS 的核心差异：React 中 **JavaScript 主导一切**（JSX 混合 HTML/JS），Vanilla JS 中 **HTML 主导**（HTML 文件引入 JS）。React 更新 state 后 UI 自动 re-render，无需手动 DOM 操作；Vanilla JS 必须手动选择 DOM 元素、手动更新 `textContent` 等属性来保持 UI 同步。小应用差异不大，但应用规模增大后 Vanilla JS 的手动管理会失控。

## 中文长总结

### 根本哲学差异
| 方面 | React | Vanilla JS |
|------|-------|------------|
| 控制权 | **JS 主导**，JSX 在 JS 中写"HTML" | **HTML 主导**，HTML 中引入 JS |
| DOM 操作 | 无需手动操作 DOM | 必须手动 `querySelector`、修改 `.textContent` 等 |
| 元素绑定 | JSX 中直接使用 `onClick` 等属性 | 需要 `addEventListener` + 手动选择元素 |
| State 管理 | `useState` 声明式，更新自动 re-render | 变量更新后需手动更新 DOM |

### 关键对比
- **React**：调用 `setAdvice(data)` + `setCount(c => c + 1)` → React 自动更新 UI，开发者完全不接触 DOM。
- **Vanilla JS**：更新变量后还需 `adviceEl.textContent = advice` + `countEl.textContent = count` → 手动同步。

### 核心结论
React 的核心优势在于**自动保持 data 与 UI 同步**。小应用中手动同步还可行，但规模增大后选择大量元素并手动更新会变得不可维护。

## English Short Summary

Comparing the Advice App in React vs Vanilla JS: React puts JS in charge (JSX), automatically re-renders UI on state changes — no manual DOM selection or manipulation needed. Vanilla JS requires manual element selection, event listener attachment, and explicit DOM updates after every state change. The automatic data-UI sync is React's core advantage, especially as apps scale.

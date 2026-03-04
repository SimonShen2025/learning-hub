---
title: "Component Categories"
lectureId: 109
section: 10
sectionTitle: "Thinking in React: Components, Composition, and Reusability"
date: "2026-03-04"
tags: [react, components, categories, patterns]
---

## 中文短总结

三类组件：**Stateless/Presentational**（无 state，接收 props 显示 UI，如 Logo、Movie）；**Stateful**（有 state，可能无复用性，如 Search）；**Structural**（页面/布局/应用级别，提供结构，如 App、Page）。大多数真实应用都混合使用。

## 中文长总结

### 三类组件
| 类别 | 特征 | 示例 |
|------|------|------|
| **Stateless / Presentational** | 无 state，接收 props 渲染 UI | Logo, NumResults, Movie |
| **Stateful** | 有 state，可能也接收 props | Search, MovieList |
| **Structural** | 提供页面/布局结构，通常较大 | App, Page 组件 |

### 要点
- 分类不是严格规则，而是心智模型
- 同一组件可能跨类别（如有 state 的布局组件）
- 帮助思考组件职责
- Presentational 组件通常最容易复用

## English Short Summary

Three component categories: **Stateless/Presentational** (no state, renders props — Logo, Movie), **Stateful** (has state — Search), **Structural** (provides layout/structure — App, Pages). Mental model, not rigid rules. Presentational components are most reusable.

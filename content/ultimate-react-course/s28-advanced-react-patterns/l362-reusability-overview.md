---
title: "An Overview of Reusability in React"
lectureId: 362
section: 28
sectionTitle: "Advanced React Patterns"
date: "2026-03-05"
tags: [reusability, react-patterns, components, hooks]
---

## 中文短总结

React 组件复用方式总结：(1) Props 定制组件行为/外观；(2) children prop 传入内容/组件；(3) 自定义 hooks 共享逻辑；(4) Render Props 把渲染控制权交给使用者；(5) Compound Components 把相关状态和 UI 封装在同一组件群中。

## 中文长总结

### 复用层级
| 层级 | 方式 | 适用场景 |
|------|------|----------|
| **UI 定制** | Props (variations) | 改类型、样式、大小 |
| **内容注入** | children prop | 传入 JSX 作为子内容 |
| **逻辑共享** | Custom Hooks | 共享状态逻辑（无 UI） |
| **渲染控制** | Render Props | 组件不知道要渲染什么 → 使用者决定 |
| **状态+UI 封装** | Compound Components | 相关组件共享隐式状态 |

### 何时用哪个
- **简单变化** → Props
- **插入自定义内容** → children
- **不同组件共享逻辑** → Custom Hook
- **列表/数据组件不知道 item 长什么样** → Render Props
- **一组组件协同工作，共享状态** → Compound Components

## English Short Summary

React reusability spectrum: Props (customize), children (inject content), Custom Hooks (share logic), Render Props (delegate rendering), Compound Components (encapsulate state + UI group). Each level adds flexibility.

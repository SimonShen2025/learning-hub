---
title: "Components as Building Blocks"
lectureId: 35
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, components, component-tree]
---

## 中文短总结

React 应用完全由组件构成。组件是 UI 的独立片段，包含自己的**数据**、**逻辑**和**外观**（JSX）。组件可嵌套组成**组件树**（Component Tree），描述父子关系。复杂 UI 由多个组件层层嵌套构建，每个组件职责单一。

## 中文长总结

### 组件是什么
- React 应用的最基本构建块
- 每个组件是一段**独立**、**可复用**的 UI
- 包含三要素：数据（props/state）、逻辑（JS）、外观（JSX）

### 组件树
```
        App
       /   \
   Header   Menu
             |
          Pizza (×6)
```
- 父组件包含子组件 → 形成树形结构
- 描述组件间的嵌套和所属关系
- App 通常是根组件（root component）

### 核心思想
- 一个复杂 UI = 多个简单组件的组合
- 组件可以被复用（同一个组件渲染多次）
- 关注点分离：每个组件只负责一件事

## English Short Summary

React apps are built entirely from components — self-contained UI pieces with their own data, logic, and appearance. Components nest to form a component tree (parent-child hierarchy). Complex UIs are composed of many simple, reusable components.

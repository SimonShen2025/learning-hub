---
title: "How Diffing Works"
lectureId: 129
section: 11
sectionTitle: "How React Works Behind the Scenes"
date: "2026-03-04"
tags: [react, diffing, reconciliation, algorithm]
---

## 中文短总结

Diffing 算法两条核心规则：① **不同类型的元素** → 销毁旧树、创建新树（`<div>` 变 `<header>` → 整个子树重建）。② **相同类型的元素** → 保留 DOM 节点，只更新变化的属性/props。Key prop 帮助 React 识别列表中的元素身份。

## 中文长总结

### 规则 1：不同类型
```
// 旧：<div><Counter /></div>
// 新：<section><Counter /></section>
// → div 销毁，section 创建，Counter 也完全重建（state 丢失！）
```
- 元素类型变化 → 整个子树销毁重建
- 所有子组件的 state 都会丢失

### 规则 2：相同类型
```
// 旧：<div className="blue" />
// 新：<div className="green" />
// → 保留 DOM 节点，只更新 className
```
- 保留 DOM 并 diff props
- 子组件也保留实例（保留 state）

### 列表 Diffing 问题
```jsx
// 末尾添加 → 高效（只插入新元素）
["A", "B"] → ["A", "B", "C"]

// 开头插入 → 低效（全部"变化"）
["A", "B"] → ["C", "A", "B"]
// React 认为第 1 个从 A→C，第 2 个 A→A→B，...
```
- 没有 key → React 按位置比较 → 开头插入性能差
- → **需要 Key Prop**

## English Short Summary

Diffing rules: **Rule 1** — different element types → destroy old tree, build new (state lost). **Rule 2** — same type → keep DOM node, update only changed attributes. Lists without keys are diffed by position (inefficient for prepend/reorder). Key prop solves list identity.

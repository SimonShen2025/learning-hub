---
title: "The Key Prop"
lectureId: 131
section: 11
sectionTitle: "How React Works Behind the Scenes"
date: "2026-03-04"
tags: [react, key-prop, diffing, lists]
---

## 中文短总结

Key Prop 的两种用途：① **列表中** — 给每个元素唯一标识，让 React 高效 Diffing（不再按位置比较）。② **重置 state** — 改变 key 值可强制 React 销毁并重建组件实例。稳定的 key（如 id）用于列表，动态变化的 key 用于 state 重置。

## 中文长总结

### 用途 1：列表中的稳定标识
```jsx
// ❌ 无 key → 按位置 diff → 开头插入低效
items.map(item => <Item {...item} />)

// ✅ 有 key → 按 key diff → 高效
items.map(item => <Item key={item.id} {...item} />)
```
- key 应稳定、唯一（用 id，**不要用 index**）
- index 作为 key 的问题：顺序变化时 key 不变 → diff 错误

### 用途 2：强制重置 state
```jsx
// key 变化 → React 认为是"不同的组件" → 销毁重建
<TabContent key={activeTab} />
```
- activeTab 改变 → key 改变 → 旧实例销毁 → 新实例创建（state 归零）

### key 的本质
- 让 React 区分**同类型**的多个元素/组件
- 在 Diffing 时提供**身份标识**

## English Short Summary

Key prop has two uses: **1) Lists** — unique stable identifier for efficient diffing (use IDs, not index). **2) State reset** — changing key forces React to destroy and recreate the component instance. Key gives identity to same-type elements during reconciliation.

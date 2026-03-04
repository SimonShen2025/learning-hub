---
title: "Adding a New Effect: Changing Page Title"
lectureId: 153
section: 12
sectionTitle: "Effects and Data Fetching"
date: "2026-03-04"
tags: [react, useEffect, document-title, side-effects]
---

## 中文短总结

第二个 useEffect 实例：将电影标题同步到浏览器标签页标题。`useEffect(() => { document.title = \`Movie | ${title}\` }, [title])`。完美展示"同步"的概念：React state（title）→ 同步到 → 外部系统（document.title）。

## 中文长总结

### 实现
```jsx
// 在 MovieDetails 中
useEffect(() => {
  if (!title) return;
  document.title = `Movie | ${title}`;
}, [title]);

// 在 App 中（关闭详情后恢复）
useEffect(() => {
  if (!selectedId) document.title = "usePopcorn";
}, [selectedId]);
```

### 同步视角
- `title`（React state）变化 → 浏览器标题自动更新
- 这就是 useEffect 的本质：**state → 外部系统同步**

### 一个组件可以有多个 useEffect
- 每个 effect 负责一个"同步任务"
- 避免把所有副作用塞进一个 effect

## English Short Summary

Second useEffect: sync movie title to browser tab title. `useEffect(() => { document.title = \`Movie | ${title}\` }, [title])`. Perfect demonstration of the synchronization concept: React state (title) syncs to external system (document.title). Components can have multiple independent effects.

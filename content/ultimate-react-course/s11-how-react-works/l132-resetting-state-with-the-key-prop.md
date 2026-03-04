---
title: "Resetting State With the Key Prop"
lectureId: 132
section: 11
sectionTitle: "How React Works Behind the Scenes"
date: "2026-03-04"
tags: [react, key-prop, state-reset, practice]
---

## 中文短总结

实践用 key 重置 state。给 TabContent 加 `key={activeTab}`，切换 Tab 时 key 变化 → 组件销毁重建 → likes 计数器归零。这是 React 中重置组件 state 的标准方法（不需要 useEffect）。

## 中文长总结

### 问题回顾
- 切换 Tab 但 TabContent 类型不变 → React 保留实例 → state 保留
- 用户期待切换 Tab 后计数器重置

### 解决
```jsx
// 之前
<TabContent content={content[activeTab]} />

// 之后：加 key
<TabContent content={content[activeTab]} key={activeTab} />
```

### 效果
- `activeTab` 从 0 → 1：key="0" → key="1"
- React 看到 key 变化 → 销毁旧实例 → 创建新实例
- 新实例的 state 从初始值开始

### 最佳实践
- 需要"重置"组件 state 时 → 用 key
- 比用 useEffect + setState 更简洁
- key 的 **第二种** 经典用法

## English Short Summary

Practice: add `key={activeTab}` to TabContent. Tab switch changes key → React destroys old instance, creates new one → state resets (likes counter back to 0). This is the idiomatic React way to reset component state — cleaner than useEffect workarounds.

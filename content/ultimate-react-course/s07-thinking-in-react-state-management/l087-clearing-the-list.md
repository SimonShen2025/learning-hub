---
title: "Clearing the List"
lectureId: 87
section: 7
sectionTitle: "Thinking In React: State Management"
date: "2026-03-04"
tags: [react, state, confirm, far-away]
---

## 中文短总结

添加"清空列表"按钮：`setItems([])` 将 items 重置为空数组。使用 `window.confirm()` 弹出确认对话框防止误操作。简单但常用的 UX 模式 — 破坏性操作前先确认。

## 中文长总结

### 实现
```jsx
function handleClearList() {
  const confirmed = window.confirm("Are you sure you want to delete all items?");
  if (confirmed) setItems([]);
}

<button onClick={handleClearList}>Clear list</button>
```

### 要点
- `setItems([])` — 直接设置为空数组
- `window.confirm()` — 浏览器原生确认对话框，返回布尔值
- 破坏性操作（删除全部）应加确认步骤
- Far Away 项目功能至此完整

## English Short Summary

Clear list button: `setItems([])` resets to empty array. Use `window.confirm()` for user confirmation before destructive actions. Simple but important UX pattern — always confirm irreversible operations.

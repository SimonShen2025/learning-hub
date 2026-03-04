---
title: "One More Effect: Listening to a Keypress"
lectureId: 157
section: 12
sectionTitle: "Effects and Data Fetching"
date: "2026-03-04"
tags: [react, useEffect, events, keyboard, cleanup]
---

## 中文短总结

用 useEffect 监听全局键盘事件：按 Escape 关闭电影详情。`document.addEventListener("keydown", callback)` → cleanup 中 `removeEventListener`。展示了 useEffect 用于 DOM 事件订阅的模式，以及清理事件监听防止内存泄漏。

## 中文长总结

### 实现
```jsx
useEffect(() => {
  function callback(e) {
    if (e.code === "Escape") {
      onCloseMovie();
    }
  }

  document.addEventListener("keydown", callback);

  // cleanup：移除事件监听
  return () => document.removeEventListener("keydown", callback);
}, [onCloseMovie]);
```

### 为什么要清理
- 不清理 → 每次 MovieDetails mount 都添加新的监听器
- 多次打开关闭 → 累积大量监听器 → 内存泄漏
- cleanup 确保每次只有一个监听器

### 注意事项
- `onCloseMovie` 在依赖数组中（因为在 effect 中使用了）
- 命名函数 `callback` 以便在 cleanup 中引用
- 全局事件（document/window）几乎总需要清理

## English Short Summary

Listen for Escape key with useEffect: `document.addEventListener("keydown", cb)`, cleanup with `removeEventListener`. Closes movie details on Escape press. Cleanup prevents memory leak from accumulating listeners on repeated mount/unmount. Global event listeners almost always need cleanup.

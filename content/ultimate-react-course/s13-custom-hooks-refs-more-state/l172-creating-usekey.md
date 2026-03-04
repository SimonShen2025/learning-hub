---
title: "Creating useKey"
lectureId: 172
section: 13
sectionTitle: "Custom Hooks, Refs, and More State"
date: "2026-03-04"
tags: [react, custom-hooks, keyboard-events]
---

## 中文短总结

创建 `useKey(key, action)` 自定义 Hook。封装键盘事件监听：`document.addEventListener("keydown")` + cleanup。之前 Escape 关闭电影的逻辑提取为通用 Hook。可用于任何键盘快捷键需求。

## 中文长总结

### 实现
```jsx
function useKey(key, action) {
  useEffect(() => {
    function callback(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    }

    document.addEventListener("keydown", callback);
    return () => document.removeEventListener("keydown", callback);
  }, [key, action]);
}
```

### 使用
```jsx
// 之前（在 MovieDetails 中）
useEffect(() => {
  function callback(e) {
    if (e.code === "Escape") onCloseMovie();
  }
  document.addEventListener("keydown", callback);
  return () => document.removeEventListener("keydown", callback);
}, [onCloseMovie]);

// 之后
useKey("Escape", onCloseMovie);
```

### 优势
- 一行代码替代整个 useEffect
- 可复用于任何键盘快捷键
- 自动处理 cleanup

## English Short Summary

`useKey(key, action)`: custom hook for keyboard event listening. Encapsulates addEventListener + cleanup. Replaces verbose useEffect for Escape key handling with one line: `useKey("Escape", onCloseMovie)`. Reusable for any keyboard shortcut.

---
title: "The useEffect Cleanup Function"
lectureId: 154
section: 12
sectionTitle: "Effects and Data Fetching"
date: "2026-03-04"
tags: [react, useEffect, cleanup, side-effects]
---

## 中文短总结

useEffect 清理函数：effect 函数返回的函数，在**组件 unmount** 时和**下次 effect 执行前**调用。用于取消订阅、清除定时器、取消 fetch 请求等。关键概念："每个 effect 应该有自己的清理"。

## 中文长总结

### 语法
```jsx
useEffect(() => {
  // effect 代码
  const timer = setInterval(() => {}, 1000);

  return () => {
    // 清理代码
    clearInterval(timer);
  };
}, [dep]);
```

### 执行时机
```
Mount → effect 执行
dep 变化 → cleanup 执行 → 新 effect 执行
Unmount → cleanup 执行
```

### 常见清理场景
| 副作用 | 清理 |
|--------|------|
| fetch 请求 | AbortController abort |
| addEventListener | removeEventListener |
| setInterval/setTimeout | clearInterval/clearTimeout |
| WebSocket 连接 | close() |
| document.title 修改 | 恢复原标题 |

### 为什么需要清理
- 防止内存泄漏
- 防止过时的 state 更新（组件已 unmount）
- 保持数据一致性

## English Short Summary

Cleanup function: returned from useEffect, runs on **unmount** and **before next effect execution**. Used for: unsubscribing, clearing timers, aborting fetches. Pattern: `useEffect(() => { /*effect*/ return () => { /*cleanup*/ }; }, [dep])`. Prevents memory leaks and stale state updates.

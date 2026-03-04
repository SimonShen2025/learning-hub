---
title: "Refs to Persist Data Between Renders"
lectureId: 168
section: 13
sectionTitle: "Custom Hooks, Refs, and More State"
date: "2026-03-04"
tags: [react, useRef, persistent-data, render-count]
---

## 中文短总结

useRef 的第二个用途：存储跨渲染持久数据而不触发 re-render。示例：记录用户评分前点击了多少次星星。用 `countRef.current++` 计数，不会触发渲染。如果用 state 计数 → setState → re-render → 不必要的性能开销。

## 中文长总结

### 示例：计算评分点击次数
```jsx
const countRef = useRef(0);

useEffect(() => {
  if (userRating) countRef.current++;
}, [userRating]);

// 添加到 watched 电影对象
const newWatchedMovie = {
  // ...
  countRatingDecisions: countRef.current,
};
```

### 为什么不用 state
- 我们只需要"存储"数据，不需要触发 re-render
- 用 state → 每次 +1 都 re-render → 浪费
- Ref 完美适合"需要记住但不影响 UI 的数据"

### Ref 的其他持久数据用途
- 存储前一个 state/prop 值
- 存储 setTimeout/setInterval 的 ID
- 存储任何"渲染间需要记住但不影响 UI"的值

### 注意
- 不要在 render logic 中读写 ref（副作用）
- 在 useEffect 或 event handler 中更新

## English Short Summary

useRef for persistent data: store values across renders without triggering re-render. Example: count rating clicks with `countRef.current++` in useEffect. Using state would cause unnecessary re-renders. Also used for storing previous values, timer IDs, and other "remember but don't re-render" data.

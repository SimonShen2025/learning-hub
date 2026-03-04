---
title: "State Update Batching"
lectureId: 135
section: 11
sectionTitle: "How React Works Behind the Scenes"
date: "2026-03-04"
tags: [react, batching, state-updates, performance]
---

## 中文短总结

React 18 自动批处理（Automatic Batching）：同一个事件处理函数中多个 `setState` 只触发**一次**渲染。这是性能优化，避免不必要的 re-render。重要后果：setState 后**state 不会立即更新**（是异步的）。需要基于当前值更新时必须用回调形式。

## 中文长总结

### 批处理行为
```jsx
function handleClick() {
  setA(1);    // 不立即渲染
  setB(2);    // 不立即渲染
  setC(3);    // 不立即渲染
  // → 三个 setState 合并为一次渲染
}
```

### 关键后果
```jsx
function handleClick() {
  setCount(count + 1);
  console.log(count); // ⚠️ 还是旧值！state 更新是"异步"的
}
```

### React 18 改进
- React 17：只在事件处理函数中批处理
- React 18：所有地方都批处理（setTimeout、Promise、原生事件等）
- **Automatic Batching**

### 需要立即获取新值？
```jsx
// ❌ 不行
setCount(count + 1);
setCount(count + 1); // count 还是旧值，结果只 +1

// ✅ 用回调
setCount(c => c + 1);
setCount(c => c + 1); // 基于最新 state，结果 +2
```

## English Short Summary

React 18 Automatic Batching: multiple `setState` calls in one handler trigger only one re-render. State updates are "asynchronous" — state isn't updated immediately after `setState`. Use callback form (`setState(prev => ...)`) when updating based on current state. React 18 extends batching to timeouts, promises, and native events.

---
title: "Rules for Render Logic: Pure Components"
lectureId: 134
section: 11
sectionTitle: "How React Works Behind the Scenes"
date: "2026-03-04"
tags: [react, pure-components, render-logic, side-effects]
---

## 中文短总结

组件必须是**纯函数**（在 render logic 中）：相同 props → 相同 JSX 输出，无副作用。Render logic 中禁止：API 调用、定时器、DOM 操作、修改外部变量、setState。副作用应放在 event handler 或 useEffect 中。

## 中文长总结

### Render Logic vs Event Handler Logic
| | Render Logic | Event Handler |
|--|-------------|---------------|
| 何时执行 | 每次渲染 | 用户交互触发 |
| 可以副作用？ | ❌ | ✅ |
| 示例 | JSX、计算、条件渲染 | fetch、setState、导航 |

### Render Logic 中禁止的操作
```jsx
// ❌ API 请求
function App() {
  fetch("..."); // 每次渲染都调！
  return <div />;
}

// ❌ 修改外部变量
let count = 0;
function App() {
  count++; // 副作用：修改函数外变量
  return <div>{count}</div>;
}

// ❌ DOM 操作
function App() {
  document.title = "Hello"; // 直接操作 DOM
  return <div />;
}
```

### 为什么必须纯
- React 可能多次调用组件函数
- 不纯的组件 → 行为不可预测
- StrictMode 在开发环境会调用 2 次来检测不纯

## English Short Summary

Components must be **pure functions** in render logic: same inputs (props) → same output (JSX), no side effects. Forbidden in render: API calls, timers, DOM manipulation, mutating external variables, setState. Side effects belong in event handlers or useEffect. StrictMode double-invokes to detect impurity.

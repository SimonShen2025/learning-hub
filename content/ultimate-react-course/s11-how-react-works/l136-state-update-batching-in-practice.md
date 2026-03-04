---
title: "State Update Batching in Practice"
lectureId: 136
section: 11
sectionTitle: "How React Works Behind the Scenes"
date: "2026-03-04"
tags: [react, batching, practice, debugging]
---

## 中文短总结

实验验证 batching：console.log 观察渲染次数。单个 handler 中 3 个 setState → 1 次 render。验证 setState 后 state 仍是旧值。React 18 在 setTimeout 中也会 batch。回调形式 `setState(c => c+1)` 连续调用可以正确累加。

## 中文长总结

### 实验 1：渲染次数
```jsx
function handleClick() {
  setLikes(l => l + 1);
  setIsFull(f => !f);
  console.log("handler"); // 只调一次 handler
}
// 组件函数中 console.log("RENDER");
// → "handler" 出现 1 次
// → "RENDER" 出现 1 次（而非 2 次）
```

### 实验 2：state 是"过期"的
```jsx
function handleClick() {
  setLikes(likes + 1);
  console.log(likes); // 0（旧值！）
}
```

### 实验 3：setTimeout 也 batch（React 18）
```jsx
function handleClick() {
  setTimeout(() => {
    setLikes(l => l + 1);
    setIsFull(f => !f);
    // React 18: 仍然只 1 次 render
  }, 1000);
}
```

## English Short Summary

Verify batching: add console.log to count renders. 3 setState in one handler → 1 render. State is stale after setState. React 18 batches inside setTimeout too. Callback form allows correct sequential updates. Practical demonstration of theory from previous lecture.

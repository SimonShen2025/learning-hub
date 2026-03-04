---
title: "Setting State Based on Other State Updates"
lectureId: 257
section: 19
sectionTitle: "Performance Optimization and Advanced useEffect"
date: "2026-03-04"
tags: [react, useEffect, derived-state, state-update]
---

## 中文短总结

避免用 useEffect 同步 state。duration 基于 sets、speed、break 计算 → 应该是派生值而非独立 state。用 useEffect 设置派生 state 导致额外 render。直接计算或用事件处理设置更好。

## 中文长总结

### 反模式：useEffect 同步 state
```jsx
// ❌ 两次 render：一次 sets 变化，一次 duration 变化
const [sets, setSets] = useState(3);
const [duration, setDuration] = useState(0);

useEffect(() => {
  setDuration(sets * speed * 60 + (sets - 1) * breakLength * 60);
}, [sets, speed, breakLength]);
```

### 正确方式 1：派生值
```jsx
// ✅ 一次 render，duration 从 state 计算得出
const duration = sets * speed * 60 + (sets - 1) * breakLength * 60;
```

### 正确方式 2：事件处理中更新
```jsx
// ✅ 如果 duration 需要作为 state（用户可手动调整）
function handleSetsChange(newSets) {
  setSets(newSets);
  setDuration(newSets * speed * 60 + (newSets - 1) * breakLength * 60);
}
```

### 原则
- **能从现有 state 计算 → 不需要新 state**
- useEffect 用于副作用（API 调用、订阅）
- 不要用 useEffect 做 state 同步

## English Short Summary

Don't use useEffect to sync state. Duration calculated from sets/speed/break should be derived value, not separate state. useEffect sync causes extra renders. Use derived computation or update in event handlers instead.

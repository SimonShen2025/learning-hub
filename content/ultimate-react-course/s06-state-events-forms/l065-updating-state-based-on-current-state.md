---
title: "Updating State Based on Current State"
lectureId: 65
section: 6
sectionTitle: "State, Events, and Forms: Interactive Components"
date: "2026-03-04"
tags: [react, useState, callback-pattern]
---

## 中文短总结

基于当前 state 更新时，必须使用**回调形式**：`setStep(s => s + 1)` ✅，而不是 `setStep(step + 1)` ❌。因为 state 更新是异步的，连续多次调用 `setStep(step + 1)` 可能使用过期的 `step` 值。回调形式保证总是基于**最新的 state** 计算。

## 中文长总结

### 问题
```jsx
// ❌ 可能出问题（尤其是连续调用）
setStep(step + 1);
setStep(step + 1);  // step 还是旧值！结果只 +1 不是 +2
```

### 解决方案：回调形式
```jsx
// ✅ 始终基于最新 state
setStep(s => s + 1);
setStep(s => s + 1);  // s 是上一次更新后的值 → 正确 +2
```
- 回调参数 `s` = 保证是最新的 state 值
- React 会排队处理这些更新

### 规则
- 只要是**基于当前 state 计算**新 state → 使用回调形式
- 如果新 state 与当前 state 无关 → 直接传值即可：`setStep(1)`

### 常见场景
```jsx
setCount(c => c + 1);           // 计数器
setIsOpen(open => !open);       // 切换布尔值
setItems(items => [...items, newItem]);  // 添加元素
```

## English Short Summary

When updating state based on current state, use callback form: `setStep(s => s + 1)` ✅ instead of `setStep(step + 1)` ❌. Callback receives the latest state value, preventing stale closures. Essential when state updates may be batched or called multiple times.

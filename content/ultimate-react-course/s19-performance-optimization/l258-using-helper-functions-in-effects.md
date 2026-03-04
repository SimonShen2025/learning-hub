---
title: "Using Helper Functions In Effects"
lectureId: 258
section: 19
sectionTitle: "Performance Optimization and Advanced useEffect"
date: "2026-03-04"
tags: [react, useEffect, helper-functions, useCallback]
---

## 中文短总结

Effect 中使用辅助函数。在 effect 内定义函数避免依赖问题。若函数需复用 → 用 useCallback 包裹再加入依赖。播放声音的函数 — 定义在 effect 内或用 useCallback 稳定引用。

## 中文长总结

### 问题：函数做 effect 依赖
```jsx
// ❌ playSound 每次 render 重新创建 → effect 反复执行
function playSound(src) { new Audio(src).play(); }

useEffect(() => {
  playSound(soundUrl);
}, [playSound, soundUrl]); // playSound 每次都变！
```

### 方案 1：函数移入 effect
```jsx
// ✅ 函数在 effect 内 → 不需要做依赖
useEffect(() => {
  function playSound(src) { new Audio(src).play(); }
  playSound(soundUrl);
}, [soundUrl]);
```

### 方案 2：useCallback（需复用时）
```jsx
// ✅ useCallback 稳定引用
const playSound = useCallback(function playSound(src) {
  if (!allowSound) return;
  new Audio(src).play();
}, [allowSound]);

useEffect(() => {
  playSound(soundUrl);
}, [playSound, soundUrl]); // playSound 稳定
```

### Workout Timer 修复
```jsx
useEffect(() => {
  const playSound = (src) => { if (allowSound) new Audio(src).play(); };
  // 只在 duration 变化时播放
  playSound("/click.mp3");
  return () => {}; // cleanup
}, [duration, allowSound]);
```

## English Short Summary

Helper functions in effects: define inside effect to avoid dependency issues, or wrap with useCallback for reuse. Moves function into effect scope → no extra dependency. Fixes Workout Timer sound playing issue.

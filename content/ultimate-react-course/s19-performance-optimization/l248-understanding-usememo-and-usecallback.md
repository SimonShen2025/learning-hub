---
title: "Understanding useMemo and useCallback"
lectureId: 248
section: 19
sectionTitle: "Performance Optimization and Advanced useEffect"
date: "2026-03-04"
tags: [react, useMemo, useCallback, memoization, theory]
---

## 中文短总结

useMemo 缓存**值**（对象、数组、计算结果），useCallback 缓存**函数**。都在 re-render 间保持引用稳定。依赖数组不变 → 返回缓存值。用途：① 配合 memo 保持 props 引用稳定 ② 避免昂贵计算重复执行。

## 中文长总结

### useMemo vs useCallback
```jsx
// useMemo：缓存值
const sortedList = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}, [items]);

// useCallback：缓存函数
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);

// useCallback 本质是 useMemo 的语法糖
const handleClick = useMemo(() => {
  return () => console.log("Clicked");
}, []);
```

### 三大用途
1. **稳定 memo 的 props**
```jsx
const MemoChild = memo(Child);
const data = useMemo(() => ({ x: 1 }), []);
const fn = useCallback(() => {}, []);
<MemoChild data={data} onClick={fn} />
```

2. **避免昂贵计算**
```jsx
const result = useMemo(() => {
  return heavyComputation(data); // 只在 data 变化时重算
}, [data]);
```

3. **稳定 useEffect 依赖**
```jsx
const options = useMemo(() => ({ page, limit }), [page, limit]);
useEffect(() => {
  fetchData(options);
}, [options]); // options 引用稳定
```

### 依赖数组
- `[]` → 只计算一次（mount 时）
- `[dep]` → dep 变化时重新计算
- 缺少依赖 → 返回 stale 值

## English Short Summary

useMemo caches values (objects, arrays, computations), useCallback caches functions. Both keep references stable across re-renders. Three uses: stabilize memo props, avoid expensive recomputation, stabilize useEffect dependencies. Dependency array controls when to recompute.

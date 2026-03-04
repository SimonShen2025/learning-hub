---
title: "Closures in Effects"
lectureId: 259
section: 19
sectionTitle: "Performance Optimization and Advanced useEffect"
date: "2026-03-04"
tags: [react, useEffect, closures, stale-closure]
---

## 中文短总结

深入理解 useEffect 中的闭包。每次 render 创建新闭包 → effect 捕获当时的 state/props 值。Stale closure：effect 中引用旧值因为依赖数组缺少该值。依赖数组确保 effect 在值变化后重新执行，获取新闭包。

## 中文长总结

### 闭包基础
```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 这个 effect 关闭（close over）当前 render 的 count 值
    const id = setInterval(() => {
      console.log(count); // 永远打印 0！（stale closure）
    }, 1000);
    return () => clearInterval(id);
  }, []); // [] → 只在 mount 时创建 → 永远用初始 count
}
```

### Stale Closure 解释
```
Render 1: count = 0, effect 创建闭包 → 捕获 count = 0
Render 2: count = 1, 但 effect 没重新执行（[] 依赖）
         → 间隔回调仍使用 Render 1 的闭包 → count = 0
```

### 修复
```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log(count); // 现在每次 count 变化都获取新值
  }, 1000);
  return () => clearInterval(id);
}, [count]); // ← count 加入依赖 → 值变化时重新执行 effect
```

### 另一种修复（不依赖 state）
```jsx
useEffect(() => {
  const id = setInterval(() => {
    setCount(c => c + 1); // 函数形式 → 不需要当前 count
  }, 1000);
  return () => clearInterval(id);
}, []); // [] 安全 → 不读 count
```

### 关键理解
- React 每次 render 都创建新的闭包环境
- Effect 捕获创建时的变量值
- 依赖数组 = "何时创建新闭包"
- 缺少依赖 = stale closure = bug

## English Short Summary

Closures in effects: each render creates new closure capturing current state/props. Stale closure: effect reads old value because dependency array misses it. Fix: add to deps (new closure on change) or use setter callback form. Missing dependency = stale closure = bug.

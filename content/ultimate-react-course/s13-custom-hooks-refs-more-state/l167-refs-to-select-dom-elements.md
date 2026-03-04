---
title: "Refs to Select DOM Elements"
lectureId: 167
section: 13
sectionTitle: "Custom Hooks, Refs, and More State"
date: "2026-03-04"
tags: [react, useRef, dom, focus]
---

## 中文短总结

用 useRef 选择 DOM 元素的三步模式：① `const inputRef = useRef(null)` 创建 ref。② `<input ref={inputRef} />` 绑定到元素。③ 在 useEffect 中通过 `inputRef.current` 访问（`inputRef.current.focus()`）。Mount 后才能访问 DOM 元素。

## 中文长总结

### 三步模式
```jsx
// 1. 创建 ref
const inputEl = useRef(null);

// 2. 绑定到 JSX 元素
<input ref={inputEl} className="search" />

// 3. 在 effect 中使用（mount 后 DOM 才存在）
useEffect(() => {
  inputEl.current.focus();
}, []);
```

### 为什么用 useEffect
- JSX 返回后 React 才创建 DOM 元素
- useEffect 在 commit phase 后执行 → DOM 已存在
- `inputEl.current` 在 render 时是 `null`，effect 中才有值

### 实际应用
```jsx
// 搜索框自动聚焦
function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return <input ref={inputEl} value={query} onChange={...} />;
}
```

## English Short Summary

Three-step pattern for DOM refs: 1) `useRef(null)`, 2) `<element ref={myRef} />`, 3) access `myRef.current` in useEffect (DOM exists only after commit). Example: auto-focus search input on mount with `inputEl.current.focus()`.

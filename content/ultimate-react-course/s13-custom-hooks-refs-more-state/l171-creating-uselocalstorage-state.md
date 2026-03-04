---
title: "Creating useLocalStorageState"
lectureId: 171
section: 13
sectionTitle: "Custom Hooks, Refs, and More State"
date: "2026-03-04"
tags: [react, custom-hooks, localStorage, state-sync]
---

## 中文短总结

创建 `useLocalStorageState(initialState, key)` 自定义 Hook。将 state 与 localStorage 双向同步：初始值从 localStorage 读取（lazy init），state 变化时自动写入 localStorage。适配 usePopcorn 的 watched 列表持久化。

## 中文长总结

### 实现
```jsx
function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
```

### 使用
```jsx
// App.js — 一行替换 useState + useEffect
const [watched, setWatched] = useLocalStorageState([], "watched");
```

### 设计要点
- API 与 useState 一致（`[value, setValue]`）
- Lazy initialization 避免每次渲染都读 localStorage
- useEffect 保持 state → localStorage 同步
- 通用性：可用于任何需要持久化的 state

## English Short Summary

`useLocalStorageState(initialState, key)`: custom hook syncing state with localStorage. Lazy init reads from localStorage on mount. useEffect writes on state change. API mirrors useState: `[value, setValue]`. One-line replacement for useState + localStorage sync useEffect. Generic and reusable.

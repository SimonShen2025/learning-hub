---
title: "Introducing Another Hook: useRef"
lectureId: 166
section: 13
sectionTitle: "Custom Hooks, Refs, and More State"
date: "2026-03-04"
tags: [react, useRef, refs, hooks]
---

## 中文短总结

`useRef` 返回一个可变的 ref 对象（`{ current: value }`）。两大用途：① 引用 DOM 元素。② 存储跨渲染持久数据（不触发 re-render）。与 state 的区别：ref 变化不触发渲染，ref 是可变的，ref 的更新是同步的。

## 中文长总结

### useRef 基础
```jsx
const myRef = useRef(initialValue);
// myRef = { current: initialValue }

// 修改
myRef.current = newValue; // 直接修改，不触发 re-render
```

### State vs Ref
| | State | Ref |
|--|-------|-----|
| 声明 | `useState(init)` | `useRef(init)` |
| 更新 | `setState(new)` | `ref.current = new` |
| 触发渲染 | ✅ | ❌ |
| 可变性 | 不可变 | 可变 |
| 更新时机 | 异步（批处理） | 同步（立即） |
| 渲染间持久 | ✅ | ✅ |

### 两大用途
1. **DOM 引用**：`<input ref={myRef} />` → `myRef.current` = DOM 元素
2. **持久数据**：计数渲染次数、存储上一次值（不触发 re-render）

### 规则
- 不要在 render logic 中读写 ref.current（副作用）
- 在 useEffect 或 event handler 中操作

## English Short Summary

`useRef` returns mutable object `{current: value}`. Two uses: **DOM element references** and **persistent data across renders** (without triggering re-render). Unlike state: ref is mutable, synchronous, doesn't trigger render. Don't read/write ref.current in render logic.

---
title: "Lifecycle Methods"
lectureId: 183
section: 14
sectionTitle: "[Optional] React Before Hooks: Class-Based React"
date: "2026-03-04"
tags: [react, class-components, lifecycle-methods, useEffect]
---

## 中文短总结

Class 组件的生命周期方法：`componentDidMount`（= `useEffect(fn, [])`）、`componentDidUpdate`（= `useEffect(fn, [deps])`）、`componentWillUnmount`（= useEffect cleanup）。这些方法是 Hooks 之前的副作用机制。useEffect 将三者统一为一个 API。

## 中文长总结

### 三大生命周期方法
```jsx
class App extends React.Component {
  // 1. Mount 后执行（相当于 useEffect(..., [])）
  componentDidMount() {
    this.fetchWeather();
  }

  // 2. 更新后执行（相当于 useEffect(..., [deps])）
  componentDidUpdate(prevProps, prevState) {
    if (this.state.location !== prevState.location) {
      this.fetchWeather(); // 只在 location 变化时执行
    }
  }

  // 3. Unmount 前执行（相当于 useEffect cleanup）
  componentWillUnmount() {
    // 清理：取消订阅、清除定时器等
  }
}
```

### 与 useEffect 对比
| 生命周期方法 | useEffect 等价 |
|-------------|---------------|
| `componentDidMount` | `useEffect(fn, [])` |
| `componentDidUpdate` | `useEffect(fn, [deps])` |
| `componentWillUnmount` | `return cleanup` |

### 关键区别
- 生命周期方法：按时间点思考（"mount 后做什么"）
- useEffect：按同步思考（"让 X 和 Y 保持同步"）
- useEffect 更灵活 — 一个 effect 可以替代多个生命周期方法

### 其他生命周期方法（少用）
- `shouldComponentUpdate` → React.memo
- `getDerivedStateFromProps` → 通常不需要
- `getSnapshotBeforeUpdate` → 极少使用

## English Short Summary

Class lifecycle methods: `componentDidMount` (≈ `useEffect(fn, [])`), `componentDidUpdate` (≈ `useEffect(fn, [deps])` — must manually compare prev state), `componentWillUnmount` (≈ useEffect cleanup). useEffect unifies all three into one API with a synchronization mental model instead of lifecycle-based thinking.

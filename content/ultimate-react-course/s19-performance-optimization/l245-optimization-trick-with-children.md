---
title: "A Surprising Optimization Trick With children"
lectureId: 245
section: 19
sectionTitle: "Performance Optimization and Advanced useEffect"
date: "2026-03-04"
tags: [react, performance, children-prop, optimization-trick]
---

## 中文短总结

用 children prop 避免 re-render 的技巧。将含状态的逻辑移到包装组件 → 慢组件作为 children 传入。因为 children 在父组件创建时已创建（作为 JSX），状态更新不会导致 children re-render。

## 中文长总结

### 问题场景
```jsx
// SlowComponent 随 Counter 的 state 变化而 re-render
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <SlowComponent />  {/* 每次 count 变化都 re-render! */}
    </div>
  );
}
```

### 解决方案：children prop
```jsx
// 将 state 逻辑提取到 CounterWrapper
function CounterWrapper({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      {children}  {/* 不会 re-render! */}
    </div>
  );
}

// 使用
<CounterWrapper>
  <SlowComponent />  {/* 在 App 中创建，不受 Counter state 影响 */}
</CounterWrapper>
```

### 原理
- children 的 JSX 在**父组件**中创建
- CounterWrapper 的 state 变化只影响 CounterWrapper 本身
- children 的引用没变 → 不会 re-render
- 本质是**组合模式**的性能优势

## English Short Summary

Children prop optimization trick: extract state into wrapper component, pass slow component as children. Children JSX is created in parent scope, so wrapper's state changes don't trigger children re-renders. Composition pattern's performance benefit.

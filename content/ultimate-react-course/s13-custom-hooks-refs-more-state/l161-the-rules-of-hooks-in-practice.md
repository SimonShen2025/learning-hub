---
title: "The Rules of Hooks in Practice"
lectureId: 161
section: 13
sectionTitle: "Custom Hooks, Refs, and More State"
date: "2026-03-04"
tags: [react, hooks, rules-of-hooks, practice]
---

## 中文短总结

实验违反 Hooks 规则的后果。在条件语句中调用 useState → 第一次可能正常，但条件变化后 → Hooks 顺序不一致 → React 报错或行为异常。ESLint `react-hooks/rules-of-hooks` 规则会提前警告。早期 return 也可能导致问题。

## 中文长总结

### 实验 1：条件中的 Hook
```jsx
function App() {
  if (someCondition) {
    const [x, setX] = useState(0); // ❌
  }
  const [y, setY] = useState(0);
  // someCondition 变化 → Hooks 数量/顺序变化 → 崩溃
}
```

### 实验 2：早期 return 后的 Hook
```jsx
function App() {
  if (error) return <ErrorMsg />; // 这里 return 了
  const [data, setData] = useState(null); // ❌ 可能不执行
}
```

### ESLint 检查
- `eslint-plugin-react-hooks`
- `react-hooks/rules-of-hooks` → 错误级别
- `react-hooks/exhaustive-deps` → 警告级别

### 解决方案
- 所有 Hooks 放在组件函数最顶部
- 早期 return 放在所有 Hook 调用之后

## English Short Summary

Practice violating hooks rules: conditional useState causes crash when condition changes (hook count/order mismatch). Early return before hooks also breaks rules. ESLint `react-hooks/rules-of-hooks` catches these. Solution: all hooks at top, early returns after all hook calls.

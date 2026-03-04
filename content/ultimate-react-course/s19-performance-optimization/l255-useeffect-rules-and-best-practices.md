---
title: "useEffect Rules and Best Practices"
lectureId: 255
section: 19
sectionTitle: "Performance Optimization and Advanced useEffect"
date: "2026-03-04"
tags: [react, useEffect, rules, best-practices]
---

## 中文短总结

useEffect 完整规则。依赖数组必须包含所有响应式值（state、props、context、派生值）。函数依赖 → 用 useCallback 或移入 effect 内。不要用对象/数组做依赖（引用不稳定）。减少依赖 = 减少 effect 执行。

## 中文长总结

### 依赖数组规则
```jsx
// ✅ 所有用到的响应式值都在依赖中
useEffect(() => {
  fetchData(query, page);
}, [query, page]);

// ❌ 缺少依赖 → stale closure
useEffect(() => {
  fetchData(query, page);
}, [query]); // 缺少 page → bug
```

### 如何减少依赖

**策略 1：移除不必要的依赖**
```jsx
// ❌ 对象做依赖
useEffect(() => { ... }, [{ page, limit }]); // 每次新引用！

// ✅ 用原始值
useEffect(() => { ... }, [page, limit]);
```

**策略 2：将函数移入 effect**
```jsx
// ❌ 函数做依赖
useEffect(() => { fetchData(); }, [fetchData]);

// ✅ 将函数移入 effect 内
useEffect(() => {
  function fetchData() { /* ... */ }
  fetchData();
}, [query]); // 直接依赖原始值
```

**策略 3：useCallback**
```jsx
const fetchData = useCallback(() => { /* ... */ }, [query]);
useEffect(() => { fetchData(); }, [fetchData]);
```

### linter 规则
- `react-hooks/exhaustive-deps` 检查依赖
- **不要禁用这个规则** — 如果它警告，修好代码

### 最佳实践
- 每个 effect 做**一件事**
- 考虑是否真的需要 effect（可能用事件处理更合适）

## English Short Summary

useEffect dependency rules: include ALL reactive values. Strategies to reduce deps: use primitive values (not objects), move functions inside effect, or wrap with useCallback. Don't disable exhaustive-deps linter. Each effect should do one thing.

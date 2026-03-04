---
title: "useCallback in Practice"
lectureId: 250
section: 19
sectionTitle: "Performance Optimization and Advanced useEffect"
date: "2026-03-04"
tags: [react, useCallback, practice, performance]
---

## 中文短总结

用 useCallback 缓存传给 memo 组件的回调函数。函数每次 render 重新创建 → 新引用 → memo 失效。useCallback 保持函数引用稳定。只需将函数包裹在 useCallback 中并提供依赖数组。

## 中文长总结

### 问题
```jsx
function App() {
  function handleAddPost(post) {
    setPosts(posts => [post, ...posts]);
  }
  // handleAddPost 每次 render 都是新函数
  // → 传给 memo(Archive) 的 onAddPost prop 每次都变
  // → memo 失效
  return <Archive onAddPost={handleAddPost} />;
}
```

### 解决方案
```jsx
function App() {
  const handleAddPost = useCallback(function handleAddPost(post) {
    setPosts(posts => [post, ...posts]);
  }, []);
  // 依赖 [] → 函数只创建一次，后续返回缓存引用
  // setPosts 使用函数形式 → 不需要 posts 做依赖

  return <Archive onAddPost={handleAddPost} />;
}
```

### 常见模式
```jsx
// setter 函数 → [] 依赖
const handleClear = useCallback(() => setPosts([]), []);

// 依赖外部变量
const handleSearch = useCallback(
  (query) => fetchResults(query, locale),
  [locale] // locale 变化时重新创建
);
```

### 要点
- useCallback 和 useMemo 配合 memo 使用
- setter 函数形式 `setPosts(prev => ...)` 避免依赖 state
- 不要到处用 — 只在传给 memo 组件或 useEffect 依赖时

## English Short Summary

useCallback caches function references for memo'd components. Without it, functions recreated each render break memo. Use setter callback form `setPosts(prev => ...)` to avoid state dependencies. Only use when passing to memo'd components or as useEffect deps.

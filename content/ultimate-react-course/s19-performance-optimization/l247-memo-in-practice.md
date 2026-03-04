---
title: "memo in Practice"
lectureId: 247
section: 19
sectionTitle: "Performance Optimization and Advanced useEffect"
date: "2026-03-04"
tags: [react, memo, practice, performance]
---

## 中文短总结

实践 memo。在 Atomic Blog 中 memo 化 Archive 组件（2500+ 项列表）。效果显著：搜索输入不再触发 Archive re-render。但传递对象 prop 时 memo 失效 — 新对象引用每次不同。需要 useMemo 解决。

## 中文长总结

### 应用 memo
```jsx
const Archive = memo(function Archive({ show, onAddPost }) {
  // 2500 条文章的列表
  const [posts] = useState(() =>
    Array.from({ length: 2500 }, () => createRandomPost())
  );

  if (!show) return null;
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>{post.title}</li>
      ))}
    </ul>
  );
});
```

### 效果验证（Profiler）
- 之前：搜索输入 → Archive re-render（200ms+）
- 之后：搜索输入 → Archive 跳过（灰色，0ms）

### memo 失效场景
```jsx
// 问题：每次 render 创建新对象
<Archive options={{ isOpen: true }} />
// { isOpen: true } !== { isOpen: true }（新引用）
// → memo 永远不会跳过！

// 解决：useMemo 缓存对象
const options = useMemo(() => ({ isOpen: true }), []);
<Archive options={options} />
```

## English Short Summary

Memo Archive component (2500+ items list). Search input no longer triggers Archive re-render — verified via Profiler. But passing object props breaks memo (new reference each render). Fix: useMemo to stabilize object references.

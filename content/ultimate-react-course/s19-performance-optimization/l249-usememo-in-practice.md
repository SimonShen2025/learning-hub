---
title: "useMemo in Practice"
lectureId: 249
section: 19
sectionTitle: "Performance Optimization and Advanced useEffect"
date: "2026-03-04"
tags: [react, useMemo, practice, performance]
---

## 中文短总结

用 useMemo 修复 memo 失效问题。Archive 接收 options 对象 prop → 用 useMemo 缓存 → memo 恢复生效。同时 useMemo 缓存 archivePosts 数组避免每次 render 重新生成 2500 条数据。

## 中文长总结

### 修复 memo 失效
```jsx
function App() {
  // ❌ 每次 render 创建新对象 → Archive 的 memo 失效
  // const archiveOptions = { show: false, title: "Post archive" };

  // ✅ useMemo 缓存 → 引用稳定 → Archive 的 memo 生效
  const archiveOptions = useMemo(() => {
    return { show: false, title: `Post archive besides the ${posts.length} main posts` };
  }, [posts.length]);

  return <Archive options={archiveOptions} />;
}
```

### 缓存昂贵数据生成
```jsx
const Archive = memo(function Archive({ options }) {
  // ❌ 每次 render 生成 10000 条
  // const posts = Array.from({ length: 10000 }, createRandomPost);

  // ✅ 只在 mount 时生成一次
  const posts = useMemo(
    () => Array.from({ length: 10000 }, () => createRandomPost()),
    []
  );

  return <ul>{posts.map(...)}</ul>;
});
```

### Profiler 验证
- Archive 现在只在 archiveOptions 真正变化时 re-render
- 搜索输入不再触发 Archive 渲染

## English Short Summary

Fix memo with useMemo: cache options object → stable reference → memo works again. Also useMemo for expensive data generation (10000 posts) — computed only once. Profiler confirms Archive skips re-renders during search.

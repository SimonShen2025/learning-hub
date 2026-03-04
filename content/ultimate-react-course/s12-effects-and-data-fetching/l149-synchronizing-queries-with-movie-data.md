---
title: "Synchronizing Queries With Movie Data"
lectureId: 149
section: 12
sectionTitle: "Effects and Data Fetching"
date: "2026-03-04"
tags: [react, useEffect, synchronization, usepopcorn]
---

## 中文短总结

将搜索查询 `query` state 与电影数据同步：`useEffect` 依赖 `[query]`，query 变化时重新 fetch。添加搜索最小长度检查（query < 3 字符 → 清空 movies，不 fetch）。实现了实时搜索功能。

## 中文长总结

### 实现
```jsx
const [query, setQuery] = useState("");

useEffect(() => {
  async function fetchMovies() {
    // 最小长度检查
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=xxx`);
      // ...
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }
  fetchMovies();
}, [query]); // query 变化 → 重新 fetch
```

### 同步思维
- `query` state → 同步到 → OMDB API 搜索结果 → 同步到 → `movies` state
- useEffect 是"同步机制"的实际应用

## English Short Summary

Synchronize `query` state with movie data: `useEffect` with `[query]` dependency re-fetches on query change. Guard: skip fetch if query < 3 chars (clear movies instead). Implements real-time search — query state syncs to API results to movies state.

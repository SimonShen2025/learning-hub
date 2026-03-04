---
title: "How NOT to Fetch Data in React"
lectureId: 142
section: 12
sectionTitle: "Effects and Data Fetching"
date: "2026-03-04"
tags: [react, data-fetching, anti-pattern, render-logic]
---

## 中文短总结

错误示范：在 render logic 中直接 `fetch()` 数据。问题：① 每次渲染都发请求（无限循环：fetch → setState → re-render → fetch...）。② 违反纯函数规则（side effect 在 render logic 中）。③ 可能因频繁请求被 API 封禁。

## 中文长总结

### 错误代码
```jsx
function App() {
  const [movies, setMovies] = useState([]);

  // ❌ 在 render logic 中 fetch
  fetch("https://www.omdbapi.com/?s=interstellar")
    .then(res => res.json())
    .then(data => setMovies(data.Search));

  return <MovieList movies={movies} />;
}
```

### 问题分析
1. `fetch` 是副作用 → 不应在 render logic 中
2. `setMovies` 触发 re-render → 又执行 `fetch` → 又 `setMovies` → **无限循环**
3. OMDB API 限制：过多请求 → 被封

### 正确方式预告
- useEffect Hook（下一讲）

## English Short Summary

Anti-pattern: fetching data directly in render logic. Causes **infinite loop**: fetch → setState → re-render → fetch → ... Violates pure function rules (side effect in render). API rate limits risk. Solution: useEffect (next lecture).

---
title: "Creating our First Custom Hook: useMovies"
lectureId: 170
section: 13
sectionTitle: "Custom Hooks, Refs, and More State"
date: "2026-03-04"
tags: [react, custom-hooks, data-fetching, usepopcorn]
---

## 中文短总结

提取电影搜索逻辑为 `useMovies(query)` 自定义 Hook。包含 movies、isLoading、error state 和 useEffect（fetch + AbortController）。返回 `{ movies, isLoading, error }`。App 组件变得简洁 — 搜索逻辑完全封装。

## 中文长总结

### 提取前（App 中）
- movies, isLoading, error 三个 state
- useEffect（fetch + abort + error handling）
- 大量代码在 App 中

### 提取后
```jsx
// useMovies.js
function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`...?s=${query}`, { signal: controller.signal });
        // ...
      } catch (err) { ... }
      finally { setIsLoading(false); }
    }
    if (query.length < 3) { setMovies([]); setError(""); return; }
    fetchMovies();
    return () => controller.abort();
  }, [query]);

  return { movies, isLoading, error };
}

// App.js
function App() {
  const { movies, isLoading, error } = useMovies(query);
  // 简洁！
}
```

### 要点
- 自定义 Hook 可以接受参数
- 返回需要的值（对象或数组）
- 每个使用组件有独立 state
- `callback` 参数预告（onCloseMovie）

## English Short Summary

Extract movie search logic into `useMovies(query)` custom hook: encapsulates movies/isLoading/error state and fetch useEffect with AbortController. Returns `{movies, isLoading, error}`. App component becomes clean — search logic fully encapsulated. Each consumer gets independent state.

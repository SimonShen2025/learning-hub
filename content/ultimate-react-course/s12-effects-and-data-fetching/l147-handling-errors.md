---
title: "Handling Errors"
lectureId: 147
section: 12
sectionTitle: "Effects and Data Fetching"
date: "2026-03-04"
tags: [react, error-handling, data-fetching, try-catch]
---

## 中文短总结

数据获取的错误处理。用 try/catch 包裹 fetch。添加 `error` state 存储错误消息。`res.ok` 检查 HTTP 错误（fetch 不会自动 throw HTTP 错误）。finally 确保 `isLoading` 被重置。三个互斥状态：loading / error / data。

## 中文长总结

### 完整实现
```jsx
const [error, setError] = useState("");

useEffect(() => {
  async function fetchMovies() {
    try {
      setIsLoading(true);
      setError("");

      const res = await fetch("...");
      if (!res.ok) throw new Error("Something went wrong");

      const data = await res.json();
      if (data.Response === "False") throw new Error("Movie not found");

      setMovies(data.Search);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }
  fetchMovies();
}, []);
```

### 条件渲染
```jsx
{isLoading && <Loader />}
{!isLoading && !error && <MovieList movies={movies} />}
{error && <ErrorMessage message={error} />}
```

### 要点
- `fetch` 不会为 HTTP 错误（404/500）throw → 手动检查 `res.ok`
- `finally` 确保 loading 状态一定被重置
- 三个 state 互斥：loading / error / data

## English Short Summary

Error handling for data fetching: try/catch around fetch, `error` state for messages. Check `res.ok` (fetch doesn't throw on HTTP errors). `finally` resets loading. Three mutually exclusive UI states: loading, error, data. Clear error state before each fetch attempt.

---
title: "Adding a Loading State"
lectureId: 146
section: 12
sectionTitle: "Effects and Data Fetching"
date: "2026-03-04"
tags: [react, loading-state, UX, data-fetching]
---

## 中文短总结

添加 `isLoading` state 改善 UX。fetch 前设 `true`，完成（或失败）后设 `false`。条件渲染：加载中显示 Loader 组件，完成后显示数据。模式：`{isLoading ? <Loader /> : <MovieList />}`。

## 中文长总结

### 实现
```jsx
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  async function fetchMovies() {
    setIsLoading(true);
    const res = await fetch("...");
    const data = await res.json();
    setMovies(data.Search);
    setIsLoading(false);
  }
  fetchMovies();
}, []);
```

### 条件渲染
```jsx
{isLoading && <Loader />}
{!isLoading && <MovieList movies={movies} />}
```

### Loader 组件
```jsx
function Loader() {
  return <p className="loader">Loading...</p>;
}
```

### 用户体验
- 没有 loading → 用户看到空白 → 以为应用坏了
- 有 loading → 用户知道数据正在加载

## English Short Summary

Add `isLoading` state for better UX. Set `true` before fetch, `false` after completion. Conditional rendering: `{isLoading ? <Loader /> : <MovieList />}`. Shows loading indicator while data is being fetched.

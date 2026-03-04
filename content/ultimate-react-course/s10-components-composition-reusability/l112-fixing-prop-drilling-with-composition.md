---
title: "Fixing Prop Drilling With Composition (And Building a Layout)"
lectureId: 112
section: 10
sectionTitle: "Thinking in React: Components, Composition, and Reusability"
date: "2026-03-04"
tags: [react, composition, children, prop-drilling, usepopcorn]
---

## 中文短总结

将 Composition 应用到 usePopcorn。NavBar 和 Main 使用 `children` prop 替代硬编码子组件。消除 prop drilling：`movies` 不再经过 Main → ListBox 传递，而是在 App 中直接作为 prop 传给 MovieList，再将 MovieList 作为 children 放入 Box。

## 中文长总结

### 重构前
```jsx
// App 传 movies → Main → ListBox → MovieList (prop drilling!)
<Main movies={movies} watched={watched} />
```

### 重构后
```jsx
// App 中直接传 movies 给 MovieList，composition 解决层级
<Main>
  <Box>
    <MovieList movies={movies} />
  </Box>
  <Box>
    <WatchedSummary watched={watched} />
    <WatchedMoviesList watched={watched} />
  </Box>
</Main>
```

### NavBar 同理
```jsx
<NavBar>
  <Logo />
  <Search />
  <NumResults movies={movies} />
</NavBar>
```

### 关键成果
- Main、NavBar、Box 变成通用布局组件
- 不再有 prop drilling
- 数据只在需要的地方传递

## English Short Summary

Apply composition to usePopcorn: NavBar and Main accept `children` instead of hardcoded components. Movies prop goes directly from App to MovieList (placed as children inside Box), eliminating prop drilling through intermediate components. Main, NavBar, Box become generic layout components.

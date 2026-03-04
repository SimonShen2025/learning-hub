---
title: "Passing Elements as Props (Alternative to children)"
lectureId: 114
section: 10
sectionTitle: "Thinking in React: Components, Composition, and Reusability"
date: "2026-03-04"
tags: [react, composition, element-props, children]
---

## 中文短总结

除了 `children`，还可以用显式 prop 传递 JSX 元素：`<Box element={<MovieList movies={movies} />} />`。两种方式等效，但 element prop 在某些情况下更清晰（传多个"插槽"时）。React 社区更偏好 children，因为更自然，接近原生 HTML。

## 中文长总结

### 两种 Composition 方式
```jsx
// 方式 1: children (推荐)
<Box>
  <MovieList movies={movies} />
</Box>

// 方式 2: element prop
<Box element={<MovieList movies={movies} />} />
```

### element prop 的优势场景
- 需要传多个命名"插槽"时：
  ```jsx
  <Layout
    header={<Header />}
    sidebar={<Sidebar />}
    content={<Content />}
  />
  ```

### React 社区偏好
- **children** 更常用、更自然
- 像写 HTML 一样（开标签 + 内容 + 闭标签）
- element prop 在需要多个插槽时有价值

## English Short Summary

Alternative to children: pass JSX as explicit props (`element={<Component />}`). Equivalent to children but more explicit. Useful for multiple named slots (`header`, `sidebar`, etc.). Community generally prefers children for its natural HTML-like syntax.

---
title: "Using Composition to Make a Reusable Box"
lectureId: 113
section: 10
sectionTitle: "Thinking in React: Components, Composition, and Reusability"
date: "2026-03-04"
tags: [react, composition, reusable-components, children]
---

## 中文短总结

将 ListBox 和 WatchedBox 合并为单个通用 `Box` 组件。两者结构完全相同（可折叠容器），唯一区别是内容 — 正好用 children 解决。消除重复代码，提高复用性。Box 内部管理自己的 `isOpen` state。

## 中文长总结

### 重构
```jsx
// 之前：两个几乎相同的组件
function ListBox({ children }) { /* toggle + children */ }
function WatchedBox({ children }) { /* toggle + children */ }

// 之后：一个通用 Box
function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button onClick={() => setIsOpen(o => !o)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
```

### 使用
```jsx
<Box>
  <MovieList movies={movies} />
</Box>
<Box>
  <WatchedSummary watched={watched} />
  <WatchedMoviesList watched={watched} />
</Box>
```

### 要点
- Composition + children → 最大复用性
- 每个 Box 有独立的 state（React 组件实例独立）

## English Short Summary

Merge ListBox and WatchedBox into a single reusable `Box` component using children prop. Both are collapsible containers that differ only in content — perfect for composition. Each Box instance manages its own `isOpen` state independently.

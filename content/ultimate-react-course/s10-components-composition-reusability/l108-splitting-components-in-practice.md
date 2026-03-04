---
title: "Splitting Components in Practice"
lectureId: 108
section: 10
sectionTitle: "Thinking in React: Components, Composition, and Reusability"
date: "2026-03-04"
tags: [react, components, refactoring, usepopcorn]
---

## 中文短总结

实践拆分 usePopcorn 的大 App 组件。按 UI 区域拆分：NavBar（Logo + Search + NumResults）、Main（ListBox + WatchedBox）、MovieList、WatchedMoviesList、WatchedSummary。逐步提取，确保 props 正确传递。

## 中文长总结

### 组件树
```
App
├── NavBar
│   ├── Logo
│   ├── Search
│   └── NumResults
└── Main
    ├── ListBox (可折叠)
    │   └── MovieList
    │       └── Movie
    └── WatchedBox (可折叠)
        ├── WatchedSummary
        └── WatchedMoviesList
            └── WatchedMovie
```

### 实践要点
- 从大 App 组件中逐步提取
- 每次提取后验证功能
- 注意 props 传递链
- 可折叠 box 有自己的 `isOpen` state

## English Short Summary

Practice splitting the monolithic App into: NavBar (Logo, Search, NumResults), Main (ListBox with MovieList, WatchedBox with WatchedSummary + WatchedMoviesList). Extract incrementally, verify after each split, manage props chain properly.

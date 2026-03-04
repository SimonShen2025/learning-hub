---
title: "Selecting a Movie"
lectureId: 150
section: 12
sectionTitle: "Effects and Data Fetching"
date: "2026-03-04"
tags: [react, state, selection, usepopcorn]
---

## 中文短总结

实现电影选择功能：`selectedId` state 存储当前选中的 imdbID。点击搜索结果中的电影 → 设置 selectedId。再次点击同一部 → 取消选择（toggle）。选中后右面板显示 MovieDetails 组件，未选中显示 WatchedList。

## 中文长总结

### 实现
```jsx
const [selectedId, setSelectedId] = useState(null);

function handleSelectMovie(id) {
  setSelectedId(selectedId => (id === selectedId ? null : id)); // toggle
}

function handleCloseMovie() {
  setSelectedId(null);
}

// 条件渲染
{selectedId ? (
  <MovieDetails
    selectedId={selectedId}
    onCloseMovie={handleCloseMovie}
  />
) : (
  <>
    <WatchedSummary watched={watched} />
    <WatchedMoviesList watched={watched} />
  </>
)}
```

### 设计模式
- 与 Eat-'N-Split 选择朋友的模式相同
- Toggle 选择 + 条件渲染

## English Short Summary

Movie selection: `selectedId` state stores selected imdbID. Click toggles selection (same movie → deselect). Right panel shows MovieDetails when selected, WatchedList when not. Same toggle + conditional rendering pattern as Eat-'N-Split friend selection.

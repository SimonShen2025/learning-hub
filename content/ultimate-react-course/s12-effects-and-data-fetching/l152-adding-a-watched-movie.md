---
title: "Adding a Watched Movie"
lectureId: 152
section: 12
sectionTitle: "Effects and Data Fetching"
date: "2026-03-04"
tags: [react, state, star-rating, usepopcorn]
---

## 中文短总结

添加"已看"功能：在 MovieDetails 中集成 StarRating 组件，用户评分后显示 "Add to list" 按钮。点击添加 → 创建 watched movie 对象（含 imdbID、title、poster、userRating、imdbRating、runtime）→ 通过回调更新 App 的 watched 数组。防重复添加检查。

## 中文长总结

### 流程
1. 用户选择电影 → 详情页
2. 用 StarRating 评分 → `userRating` state
3. 有评分 → 显示 "Add to list" 按钮
4. 点击 → 创建 watched 对象 → `onAddWatched(newMovie)`

### watched 对象
```jsx
const newWatchedMovie = {
  imdbID: selectedId,
  title: Title,
  year: Year,
  poster: Poster,
  imdbRating: Number(imdbRating),
  runtime: Number(Runtime.split(" ")[0]),
  userRating,
};
```

### 防重复
```jsx
const isWatched = watched.map(m => m.imdbID).includes(selectedId);
// 如果已观看 → 不显示 StarRating，显示已有评分
```

## English Short Summary

Add watched movie: integrate StarRating in MovieDetails, show "Add to list" button after rating. Creates watched object with imdbID, title, poster, userRating, imdbRating, runtime. Prevents duplicates by checking if movie is already in watched list. Already-watched movies show existing rating instead of StarRating.

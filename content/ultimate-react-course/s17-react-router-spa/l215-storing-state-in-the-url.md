---
title: "Storing State in the URL"
lectureId: 215
section: 17
sectionTitle: "React Router: Building Single-Page Applications (SPA)"
date: "2026-03-04"
tags: [react, react-router, url-state, params, query-string]
---

## 中文短总结

URL 也是存储状态的方式。两种方式：① URL params（`/app/cities/123`）— 传递资源 ID。② Query string（`?lat=38&lng=-9`）— 传递附加数据。优势：可分享、可书签、全局可访问、不需 props 传递。

## 中文长总结

### URL 状态的两种形式
```
/app/cities/73723?lat=38.727&lng=-9.14

/app/cities/73723  → params（动态路由参数）
?lat=38.727&lng=-9.14  → query string（查询字符串）
```

### 为什么在 URL 中存状态
1. **可分享** — 复制 URL 就能分享精确的应用状态
2. **可书签** — 收藏后直接回到特定状态
3. **全局性** — 不需要 props drilling
4. **不需要额外 state** — URL 本身就是 state

### 使用场景
- 当前查看的资源 ID → params
- 地图坐标 → query string
- 过滤/排序条件 → query string
- 当前 tab/页面 → params

### React Router 提供的 Hooks
- `useParams()` — 读取 URL params
- `useSearchParams()` — 读写 query string

## English Short Summary

URL as state storage. Two forms: params (`/cities/123` for resource IDs) and query string (`?lat=38&lng=-9` for supplementary data). Benefits: shareable, bookmarkable, globally accessible, no props drilling. Hooks: `useParams()`, `useSearchParams()`.

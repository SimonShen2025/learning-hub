---
title: "Reading and Setting a Query String"
lectureId: 217
section: 17
sectionTitle: "React Router: Building Single-Page Applications (SPA)"
date: "2026-03-04"
tags: [react, react-router, useSearchParams, query-string]
---

## 中文短总结

用 `useSearchParams()` 读写 query string。类似 useState — 返回 `[searchParams, setSearchParams]`。读取：`searchParams.get("lat")`。设置：`setSearchParams({ lat, lng })`。用于在地图组件中同步城市坐标。

## 中文长总结

### 基本用法
```jsx
import { useSearchParams } from "react-router-dom";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div onClick={() => setSearchParams({ lat: 23, lng: 50 })}>
      Position: {lat}, {lng}
    </div>
  );
}
```

### 在 CityItem 中设置
```jsx
// 链接中携带 query string
<Link to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
```

### 特点
- `searchParams.get()` 返回字符串（或 null）
- `setSearchParams()` 替换整个 query string
- URL 变化会触发重新渲染
- 不同组件可以读取同一个 query string

### 与 useState 对比
| useState | useSearchParams |
|----------|----------------|
| 组件私有 | URL 中全局可见 |
| 刷新丢失 | 刷新保留 |
| 不可分享 | 可分享 |

## English Short Summary

`useSearchParams()` reads/writes query string. Returns `[searchParams, setSearchParams]` like useState. Read: `searchParams.get("lat")`. Set: `setSearchParams({ lat, lng })`. State persists in URL — survives refresh, shareable. Used for map coordinates.

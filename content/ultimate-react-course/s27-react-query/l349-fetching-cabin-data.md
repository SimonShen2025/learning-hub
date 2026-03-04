---
title: "Fetching Cabin Data"
lectureId: 349
section: 27
sectionTitle: "React Query: Managing Remote State"
date: "2026-03-05"
tags: [react-query, useQuery, data-fetching, cabins]
---

## 中文短总结

用 `useQuery` hook 获取小木屋数据。传入 `queryKey`（缓存键）和 `queryFn`（数据获取函数）。返回 `data`、`isLoading`、`error`。React Query 自动缓存、后台更新、错误处理。

## 中文长总结

### useQuery 基本用法
```jsx
import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

function CabinTable() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],         // 缓存键（数组）
    queryFn: getCabins,           // 获取数据的异步函数
  });

  if (isLoading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Table>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
}
```

### queryKey
```jsx
// 简单键
queryKey: ["cabins"]

// 带参数的键（自动根据参数 refetch）
queryKey: ["cabin", cabinId]
queryKey: ["bookings", { page, filter, sortBy }]
```

### queryFn
```js
// services/apiCabins.js
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) throw new Error("Cabins could not be loaded");
  return data;
}
```

### 关键行为
- 首次加载：`isLoading: true` → 获取 → 缓存
- 再次访问：立即显示缓存，后台更新
- 窗口聚焦：自动后台 refetch

## English Short Summary

`useQuery` for data fetching: pass `queryKey` (cache key array) and `queryFn` (async function). Returns `data`, `isLoading`, `error`. Auto-caches, background refetches, handles errors. Key-based cache management.

---
title: "Prefetching With React Query"
lectureId: 383
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [prefetching, react-query, pagination, performance]
---

## 中文短总结

`queryClient.prefetchQuery` 预获取下一页数据。用户浏览当前页时，后台已加载下一页 → 翻页瞬间显示。在 `useBookings` hook 中添加 prefetch 逻辑。预获取的数据自动存入 React Query 缓存。

## 中文长总结

### 实现
```jsx
export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  // ... filter, sortBy

  const { isLoading, data: { data: bookings, count } = {} } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // PREFETCH
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, bookings, count };
}
```

### 效果
- 用户在第 1 页 → 后台加载第 2 页
- 点击 Next → 数据已在缓存中 → 瞬间显示
- 同时预获取上一页（用户可能返回）
- DevTools 可看到预获取的缓存条目

## English Short Summary

`queryClient.prefetchQuery` preloads next/previous page data in background. Data cached before user navigates. Instant page transitions. Prefetch both next and previous pages for smooth pagination experience.

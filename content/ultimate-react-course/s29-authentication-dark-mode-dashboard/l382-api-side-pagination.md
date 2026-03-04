---
title: "API-Side Pagination: Paginating Bookings"
lectureId: 382
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [pagination, api-side, supabase, range]
---

## 中文短总结

Supabase API 端分页。用 `.range(from, to)` 限制返回数据范围。`{ count: "exact" }` 获取总数。页码参数加入 queryKey → 翻页自动 refetch。配合 Pagination 组件完成全栈分页。

## 中文长总结

### API 分页
```js
const PAGE_SIZE = 10;

export async function getBookings({ filter, sortBy, page }) {
  let query = supabase
    .from("bookings")
    .select("...", { count: "exact" });

  // Filter & Sort...

  // Pagination
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  return { data, count };
}
```

### Hook 中使用 page
```jsx
const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

const { data: { data: bookings, count } = {} } = useQuery({
  queryKey: ["bookings", filter, sortBy, page],
  queryFn: () => getBookings({ filter, sortBy, page }),
});
```

### 完整数据流
1. 用户点击 Next → URL 更新 `?page=2`
2. `useBookings` 读取 page=2
3. queryKey 变化 → refetch
4. API 用 `.range(10, 19)` 获取第 2 页
5. UI 更新

## English Short Summary

API-side pagination: Supabase `.range(from, to)` for page slicing. `{ count: "exact" }` for total count. Page in `queryKey` triggers auto-refetch on navigation. Combined with Pagination component for full-stack pagination.

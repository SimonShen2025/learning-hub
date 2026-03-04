---
title: "API-Side Filtering: Filtering Bookings"
lectureId: 379
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [filtering, api-side, supabase, server-side]
---

## 中文短总结

服务端过滤：将过滤条件传给 Supabase API 而不是在客户端过滤。URL 参数 → 构建 Supabase `.eq()` 查询。Filter 参数作为 `useQuery` 的 queryKey 一部分 → 参数变化自动 refetch。

## 中文长总结

### API 函数
```js
export async function getBookings({ filter, sortBy, page }) {
  let query = supabase
    .from("bookings")
    .select("id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)", { count: "exact" });

  // 过滤
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  const { data, error, count } = await query;
  if (error) throw new Error("Bookings could not be loaded");
  return { data, count };
}
```

### Hook 中传入过滤参数
```jsx
export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter = !filterValue || filterValue === "all"
    ? null
    : { field: "status", value: filterValue };

  const { isLoading, data: { data: bookings, count } = {} } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { isLoading, bookings, count };
}
```

### 关键点
- 过滤在数据库层面完成 → 性能好
- `queryKey` 包含 filter → 参数变化自动重新获取
- 灵活的 filter 对象 `{ field, value, method }` 支持不同比较方法

## English Short Summary

API-side filtering: pass filter params to Supabase query (`.eq()`, `.gte()`, etc.). Include filter in `queryKey` for automatic refetch on change. Database-level filtering for better performance with large datasets.

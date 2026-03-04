---
title: "API-Side Sorting: Sorting Bookings"
lectureId: 380
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [sorting, api-side, supabase, server-side]
---

## 中文短总结

服务端排序：Supabase 的 `.order(field, { ascending })` 方法。`sortBy` 对象包含 `field` 和 `direction`。也作为 `queryKey` 的一部分实现自动刷新。与过滤组合使用。

## 中文长总结

### API 中添加排序
```js
export async function getBookings({ filter, sortBy, page }) {
  let query = supabase.from("bookings").select("...", { count: "exact" });

  // Filter
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  // Sort
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  const { data, error, count } = await query;
  if (error) throw new Error("Bookings could not be loaded");
  return { data, count };
}
```

### Hook 中解析 URL
```jsx
const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
const [field, direction] = sortByRaw.split("-");
const sortBy = { field, direction };

const { data } = useQuery({
  queryKey: ["bookings", filter, sortBy, page],
  queryFn: () => getBookings({ filter, sortBy, page }),
});
```

### 客户端 vs 服务端
| 客户端 | 服务端 |
|--------|--------|
| 全部数据已加载 | 只加载当前页 |
| 小数据集 | 大数据集 |
| `Array.sort()` | `.order()` |
| Cabins（少量数据） | Bookings（大量数据） |

## English Short Summary

API-side sorting with Supabase `.order(field, { ascending })`. Parse URL `sortBy` param into `{ field, direction }`. Include in `queryKey` for auto-refetch. Server-side for large datasets, client-side for small ones.

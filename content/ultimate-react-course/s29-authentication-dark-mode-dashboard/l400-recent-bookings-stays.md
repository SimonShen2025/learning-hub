---
title: "Computing Recent Bookings and Stays"
lectureId: 400
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [bookings, stays, date-query, supabase, hooks]
---

## 中文短总结

`useRecentBookings` 和 `useRecentStays` 获取最近 N 天的数据。区分 bookings（创建的订单）和 stays（实际入住）。用 Supabase 的 `.gte()` 和 `.lte()` 按日期范围过滤。`subDays` 计算起始日期。

## 中文长总结

### useRecentBookings
```jsx
export function useRecentBookings() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last") ? 7 : Number(searchParams.get("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${numDays}`],
  });

  return { isLoading, bookings };
}
```

### useRecentStays
```jsx
export function useRecentStays() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last") ? 7 : Number(searchParams.get("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ["stays", `last-${numDays}`],
  });

  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  return { isLoading, confirmedStays, numDays };
}
```

### Bookings vs Stays
| Bookings | Stays |
|----------|-------|
| 按 `created_at` 过滤 | 按 `startDate` 过滤 |
| 所有新创建的预订 | 实际入住的客人 |
| 用于销售统计 | 用于入住率统计 |
| 包含 unconfirmed | 只含 checked-in/out |

## English Short Summary

`useRecentBookings` (by `created_at`) and `useRecentStays` (by `startDate`) with date range filtering. `subDays` for N days ago. Stays filtered to confirmed only (checked-in/out). Different purposes: sales vs occupancy.

---
title: "Data Fetching Strategies for the Reservation Section"
lectureId: 467
section: 35
sectionTitle: "Client and Server Interactions"
date: "2026-03-05"
tags: [data-fetching, strategy, reservation, parallel]
---

## 中文短总结

Reservation 区域数据获取策略。需要三个数据：cabin 信息、已预定日期、应用设置。在 Server Component 中并行获取（`Promise.all`）。DateSelector 和 ReservationForm 需要交互 → Client Component。

## 中文长总结

### 数据需求
```
Reservation 区域需要：
1. cabin — 已在页面级获取
2. bookedDates — 该 cabin 已被预定的日期
3. settings — 应用设置（最少/最多住宿天数等）
```

### 并行获取
```jsx
// app/cabins/[cabinId]/page.js
import { getCabin, getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  // 并行获取（不互相依赖）
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(params.cabinId),
  ]);

  return (
    <div>
      {/* Cabin 详情 */}
      <CabinDetail cabin={cabin} />

      {/* Reservation 区域 */}
      <Reservation cabin={cabin}>
        <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin} />
      </Reservation>
    </div>
  );
}
```

### 为什么不在一个组件获取
```
✅ 并行获取：
  getCabin(id)        ─── 200ms ───→ done
  getSettings()       ─── 150ms ───→ done
  getBookedDates(id)  ─── 300ms ───→ done
  总时间：300ms（最慢的那个）

❌ 顺序获取：
  getCabin → 200ms → getSettings → 150ms → getBookedDates → 300ms
  总时间：650ms
```

### 替代方案
```
也可以把 Reservation 区域用 <Suspense> 独立加载：
- Cabin 详情立即显示
- Reservation 区域显示 Spinner → 数据就绪后显示
```

## English Short Summary

Reservation data strategy: parallel fetch with `Promise.all()` for settings + booked dates. SC fetches data, passes to CC (DateSelector, ReservationForm). Parallel saves time vs sequential. Can wrap in Suspense for independent loading.

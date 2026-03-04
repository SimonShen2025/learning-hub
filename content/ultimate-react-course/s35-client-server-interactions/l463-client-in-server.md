---
title: "Client Components in Server Components"
lectureId: 463
section: 35
sectionTitle: "Client and Server Interactions"
date: "2026-03-05"
tags: [client-in-server, composition, pattern]
---

## 中文短总结

在 Server Component 中使用 Client Component 的模式。把需要交互的小组件提取为 `"use client"`。父 Server Component 导入并使用它。数据在 SC 中获取 → 作为 props 传给 CC。最小化 client 代码。

## 中文长总结

### 模式：SC 获取数据 + CC 提供交互
```jsx
// app/cabins/page.js — Server Component
import Filter from "@/app/_components/Filter";
import CabinList from "@/app/_components/CabinList";
import { Suspense } from "react";

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <h1>Our Luxury Cabins</h1>

      {/* Client Component — 提供交互（按钮点击） */}
      <Filter />

      {/* Server Component — 获取数据 */}
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
```

### Filter（Client Component）
```jsx
"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex gap-2">
      {["all", "small", "medium", "large"].map(filter => (
        <button
          key={filter}
          onClick={() => handleFilter(filter)}
          className={activeFilter === filter ? "bg-primary-700" : ""}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
```

### CabinList（Server Component）
```jsx
// 保持为 Server Component，根据 filter 筛选
export default async function CabinList({ filter }) {
  const cabins = await getCabins();
  let filteredCabins;
  if (filter === "small") filteredCabins = cabins.filter(c => c.maxCapacity <= 3);
  else if (filter === "medium") filteredCabins = cabins.filter(c => c.maxCapacity >= 4 && c.maxCapacity <= 7);
  else if (filter === "large") filteredCabins = cabins.filter(c => c.maxCapacity >= 8);
  else filteredCabins = cabins;

  return <div>{filteredCabins.map(c => <CabinCard cabin={c} key={c.id} />)}</div>;
}
```

## English Short Summary

Pattern: Server Component fetches data, Client Component provides interactivity. Filter (CC) updates URL params, CabinList (SC) reads params and filters data. Minimize client JS by keeping data fetching in SC.

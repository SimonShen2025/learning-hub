---
title: "Adding Interactivity With Client Components"
lectureId: 427
section: 32
sectionTitle: "Overview of Next.js With the App Router"
date: "2026-03-05"
tags: [client-component, use-client, interactivity, state]
---

## 中文短总结

需要交互时用 `"use client"` 声明 Client Component。Client Component 可以用 useState、useEffect、onClick 等。策略：尽量让 "use client" 的范围小 → 只把需要交互的部分提取为 Client Component。

## 中文长总结

### 添加交互
```jsx
// components/Filter.js — 需要交互，标记为 Client Component
"use client";

import { useState } from "react";

export default function Filter() {
  const [filter, setFilter] = useState("all");

  return (
    <div>
      <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>
        All cabins
      </button>
      <button onClick={() => setFilter("small")} className={filter === "small" ? "active" : ""}>
        1-3 guests
      </button>
      <button onClick={() => setFilter("medium")} className={filter === "medium" ? "active" : ""}>
        4-7 guests
      </button>
      <button onClick={() => setFilter("large")} className={filter === "large" ? "active" : ""}>
        8-12 guests
      </button>
    </div>
  );
}
```

### 在 Server Component 中使用
```jsx
// app/cabins/page.js — Server Component
import Filter from "@/components/Filter";

export default async function Page() {
  const cabins = await getCabins();
  return (
    <div>
      <h1>Our Luxury Cabins</h1>
      <Filter />
      <CabinList cabins={cabins} />
    </div>
  );
}
```

### "use client" 边界
- `"use client"` 标记的组件 + 它的所有子组件都是 Client Component
- 所以 → 尽量在叶子组件标记 `"use client"`
- Server Component 可以传 Server Component 作为 children 给 Client Component

## English Short Summary

`"use client"` directive for interactive components (useState, onClick). Keep client boundary small — extract only interactive parts. Server Components can render Client Components as children. Client boundary includes all children.

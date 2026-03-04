---
title: "CHALLENGE #1: Fetching the Number of Cabins"
lectureId: 460
section: 34
sectionTitle: "Data Fetching, Caching, and Rendering"
date: "2026-03-05"
tags: [challenge, data-fetching, practice]
---

## 中文短总结

练习挑战：在 About 页面显示 cabin 数量。在 data-service 中创建 `getCabins()` 或复用已有函数。在 Server Component 中 `await` 获取数据。验证：修改数据后检查 revalidation 行为。

## 中文长总结

### 挑战目标
在 About 页面动态显示小屋数量，而不是硬编码。

### 解决方案
```jsx
// app/about/page.js
import { getCabins } from "@/app/_lib/data-service";

export const metadata = { title: "About" };

export default async function Page() {
  const cabins = await getCabins();
  const numCabins = cabins.length;

  return (
    <div>
      <h1>Welcome to The Wild Oasis</h1>
      <p>
        Our {numCabins} luxury cabins provide a cozy base...
      </p>
      {/* ... rest of the about page */}
    </div>
  );
}
```

### 关键要点
1. About 页面变成 async Server Component
2. 直接 `await getCabins()` → 获取数据
3. 数据被缓存（Request Memoization + Data Cache）
4. 如果需要实时数据 → 设置 `revalidate`

### 思考
- 这个调用和 Cabins 页面的 `getCabins()` 是同一个函数
- 但因为不在同一次渲染中 → 不会被 Request Memoization 去重
- Data Cache 会缓存结果 → 不会重复请求 Supabase

## English Short Summary

Challenge: Display cabin count on About page. Async Server Component, `await getCabins()`, use `cabins.length`. Data cached by Data Cache across pages. Simple exercise to practice Server Component data fetching.

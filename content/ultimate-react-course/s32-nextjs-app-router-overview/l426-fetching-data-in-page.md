---
title: "Fetching Data in a Page"
lectureId: 426
section: 32
sectionTitle: "Overview of Next.js With the App Router"
date: "2026-03-05"
tags: [data-fetching, server-component, async, fetch]
---

## 中文短总结

在 Server Component 中直接用 `async/await` 获取数据。页面组件可以是 `async function`。不需要 useEffect、useState、React Query。数据在服务端获取，HTML 包含数据返回客户端。更简单、更高效。

## 中文长总结

### Server Component 数据获取
```jsx
// app/cabins/page.js — Server Component (default)
import { getCabins } from "@/app/_lib/data-service";

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div>
      <h1>Our Luxury Cabins</h1>
      <p>
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation.
      </p>

      {cabins.length > 0 && <CabinList cabins={cabins} />}
    </div>
  );
}
```

### 数据服务
```js
// _lib/data-service.js
import { supabase } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase
    .from("cabins")
    .select("id, name, maxCapacity, regularPrice, discount, image")
    .order("name");

  if (error) throw new Error("Cabins could not be loaded");
  return data;
}
```

### 对比
```jsx
// ❌ 旧方式（Client Component + useEffect）
"use client";
function Page() {
  const [cabins, setCabins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => { getCabins().then(setCabins).finally(() => setIsLoading(false)); }, []);
}

// ✅ 新方式（Server Component）
async function Page() {
  const cabins = await getCabins();
  return <CabinList cabins={cabins} />;
}
```

## English Short Summary

Data fetching in Server Components: async page function, direct `await`. No useEffect, useState, or React Query needed. Data fetched on server, HTML includes data. Simpler, more efficient. Data service functions shared.

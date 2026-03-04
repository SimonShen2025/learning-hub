---
title: "Fetching and Displaying Cabin List"
lectureId: 445
section: 34
sectionTitle: "Data Fetching, Caching, and Rendering"
date: "2026-03-05"
tags: [data-fetching, cabin-list, server-component, supabase]
---

## 中文短总结

在 Server Component 中获取并展示 cabin 列表。`async` 页面组件直接 `await getCabins()`。创建 `CabinCard` 组件展示每个小屋。使用 `<Image>` 优化图片。数据在服务端获取 → 客户端无 API 调用。

## 中文长总结

### Cabins 页面
```jsx
// app/cabins/page.js
import CabinList from "@/app/_components/CabinList";

export const metadata = { title: "Cabins" };

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites...
      </p>
      <CabinList />
    </div>
  );
}
```

### CabinList 组件
```jsx
// _components/CabinList.js
import { getCabins } from "@/app/_lib/data-service";
import CabinCard from "./CabinCard";

export default async function CabinList() {
  const cabins = await getCabins();
  if (!cabins.length) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map(cabin => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
```

### CabinCard 组件
```jsx
import Image from "next/image";
import Link from "next/link";

export default function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex border-primary-800 border">
      <div className="flex-1 relative">
        <Image src={image} fill alt={`Cabin ${name}`} className="object-cover border-r border-primary-800" />
      </div>
      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">Cabin {name}</h3>
          <p>For up to <span className="font-bold">{maxCapacity}</span> guests</p>
          <p className="flex gap-3 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">${regularPrice - discount}</span>
                <span className="line-through text-primary-600">${regularPrice}</span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>
        <div className="border-t border-t-primary-800 text-right">
          <Link href={`/cabins/${id}`} className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900">
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
```

## English Short Summary

Fetch cabin list in Server Component with `await getCabins()`. CabinList + CabinCard components. `<Image fill>` for optimized cabin images. Link to detail page. No client-side API calls.

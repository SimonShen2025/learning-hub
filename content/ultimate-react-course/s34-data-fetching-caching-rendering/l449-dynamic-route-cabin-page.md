---
title: "Dynamic Route Segments: Building the Cabin Page"
lectureId: 449
section: 34
sectionTitle: "Data Fetching, Caching, and Rendering"
date: "2026-03-05"
tags: [dynamic-route, cabin-detail, params, nextjs]
---

## 中文短总结

动态路由 `/cabins/[cabinId]` 构建 cabin 详情页。`params.cabinId` 获取 URL 参数。Server Component 中 `await getCabin(cabinId)` 获取数据。展示图片、描述、价格、容量等信息。

## 中文长总结

### 动态路由页面
```jsx
// app/cabins/[cabinId]/page.js
import { getCabin } from "@/app/_lib/data-service";
import Image from "next/image";

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);
  const { name, maxCapacity, image, description, regularPrice, discount } = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[1fr_2fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          <Image
            src={image}
            fill
            className="object-cover"
            alt={`Cabin ${name}`}
          />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
            Cabin {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">{description}</p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <span className="text-5xl">
                {discount > 0
                  ? `$${regularPrice - discount}`
                  : `$${regularPrice}`}
              </span>
              {discount > 0 && (
                <span className="line-through text-primary-600">${regularPrice}</span>
              )}
              <span className="text-primary-200">/ night</span>
            </li>
            <li>
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </li>
          </ul>
        </div>
      </div>

      {/* Reservation section will go here */}
    </div>
  );
}
```

### 数据获取
```js
export async function getCabin(id) {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    notFound(); // 触发 not-found.js
  }

  return data;
}
```

### 关键点
- `[cabinId]` 文件夹名 = 动态参数名
- `params` 是 Promise（Next.js 15）或普通对象
- 可以在同一个文件中 `generateMetadata` + `Page`

## English Short Summary

Dynamic route `/cabins/[cabinId]`: `params.cabinId` to get URL param. Fetch cabin data in Server Component. Display image, description, price, capacity. `notFound()` if cabin doesn't exist.

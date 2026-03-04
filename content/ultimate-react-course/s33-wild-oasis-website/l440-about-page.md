---
title: "Building the About Page With Responsive Images"
lectureId: 440
section: 33
sectionTitle: "Building the Wild Oasis Customer Website"
date: "2026-03-05"
tags: [about-page, responsive-images, content, nextjs]
---

## 中文短总结

构建 About 页面。图文混排布局（Grid）。使用 `<Image>` 组件展示多张图片。响应式设计用 Tailwind 的 `grid-cols-1 md:grid-cols-2`。从 Supabase 获取小屋数量动态展示。导出 metadata 设置页面标题。

## 中文长总结

### About 页面
```jsx
// app/about/page.js
import Image from "next/image";
import { getCabins } from "@/app/_lib/data-service";
import about1 from "@/public/about-1.jpg";
import about2 from "@/public/about-2.jpg";

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();
  const numCabins = cabins.length;

  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>
        <div className="space-y-8">
          <p>
            Where nature's beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it's not just about the cozy cabin.
            It's about the experience of reconnecting with nature...
          </p>
          <p>
            Our {numCabins} luxury cabins provide a cozy base, but the real
            freedom and peace you'll find in the surrounding mountains...
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image src={about1} alt="Family sitting around a fire pit" placeholder="blur" quality={80} />
      </div>

      <div className="col-span-2">
        <Image src={about2} alt="Family that manages The Wild Oasis" placeholder="blur" quality={80} />
      </div>

      <div className="col-span-3">
        <h2 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h2>
        <div className="space-y-8">
          <p>Since 1962, The Wild Oasis has been a cherished family-run retreat...</p>
        </div>
      </div>
    </div>
  );
}
```

### 关键技术
- **Server Component** — 直接 `await getCabins()` 获取数据
- **Grid 布局** — `grid-cols-5` 分配图文比例
- **动态数据** — `{numCabins}` 从数据库获取
- **响应式图片** — `<Image>` 自动优化
- **SEO** — 导出 `metadata` 设置标题

## English Short Summary

About page: grid layout with text and images. Server Component fetches cabin count. `<Image placeholder="blur">` for optimized images. Export `metadata` for page title. `grid-cols-5` for text/image proportions.

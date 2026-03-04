---
title: "Building the Home Page"
lectureId: 439
section: 33
sectionTitle: "Building the Wild Oasis Customer Website"
date: "2026-03-05"
tags: [home-page, hero, landing, nextjs]
---

## 中文短总结

构建首页。全屏 Hero 背景图（用 `<Image fill>`）+ 居中标题 + CTA 按钮链接到 `/cabins`。简洁设计，突出品牌。背景图用 `priority` 属性优先加载。

## 中文长总结

### 首页组件
```jsx
// app/page.js
import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
```

### 设计要点
| 元素 | 实现 |
|------|------|
| 全屏背景 | `<Image fill>` + `object-cover` |
| 模糊占位 | `placeholder="blur"`（本地图片） |
| 文字层 | `relative z-10` 浮在图片上方 |
| CTA 按钮 | `<Link>` 到 `/cabins` |
| 优先加载 | 首屏大图用 `priority` |

### 性能
- 本地图片 → 构建时压缩
- `quality={80}` → 减小文件大小
- `placeholder="blur"` → 加载时显示模糊版本

## English Short Summary

Home page: full-screen hero with `<Image fill placeholder="blur">`, centered heading, CTA Link to `/cabins`. Local image auto-compressed. `quality={80}` for smaller file size. `z-10` for text overlay.

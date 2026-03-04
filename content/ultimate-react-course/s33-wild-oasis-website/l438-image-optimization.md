---
title: "Optimizing Images With Next.js <Image /> Component"
lectureId: 438
section: 33
sectionTitle: "Building the Wild Oasis Customer Website"
date: "2026-03-05"
tags: [image, optimization, next-image, performance]
---

## 中文短总结

`next/image` 的 `<Image />` 组件自动优化图片：懒加载、自动 WebP/AVIF、响应式 sizes、防止 CLS。本地图片自动推断尺寸。远程图片需要配置 `next.config.js` 的 domains 并指定宽高或用 `fill`。

## 中文长总结

### 本地图片
```jsx
import Image from "next/image";
import bg from "@/public/bg.png";

// 本地图片：自动推断宽高
<Image src={bg} fill placeholder="blur" alt="Mountains and forests" className="object-cover object-top" />
```

### 远程图片
```jsx
// 远程图片：需要指定尺寸
<Image
  src={cabin.image} // Supabase URL
  fill
  alt={`Cabin ${cabin.name}`}
  className="object-cover"
/>
```

### 配置远程图片域名
```js
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dclaevazetcjjkrzczpc.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
};
```

### Image 组件特性
| 特性 | 说明 |
|------|------|
| 懒加载 | 视口内才加载 |
| 格式转换 | 自动 WebP/AVIF |
| 响应式 | `sizes` 属性 |
| 防止 CLS | 需要宽高或 `fill` |
| 模糊占位 | `placeholder="blur"`（仅本地图片） |
| `fill` 模式 | 填满父容器（需要 `position: relative`） |
| `priority` | 首屏图片优先加载 |

### fill 模式
```jsx
<div className="relative h-[60vh]">
  <Image src={bg} fill className="object-cover" alt="..." />
</div>
```

## English Short Summary

`next/image <Image />`: auto lazy-load, WebP/AVIF conversion, responsive sizes, CLS prevention. Local images auto-size. Remote images need `remotePatterns` config + `fill` or explicit dimensions. `placeholder="blur"` for local only.

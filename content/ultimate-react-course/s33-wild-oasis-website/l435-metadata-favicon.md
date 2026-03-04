---
title: "Adding Page Metadata and Favicon"
lectureId: 435
section: 33
sectionTitle: "Building the Wild Oasis Customer Website"
date: "2026-03-05"
tags: [metadata, seo, favicon, nextjs]
---

## 中文短总结

Next.js Metadata API：导出 `metadata` 对象设置 `<title>`, `<meta>` 等 SEO 标签。支持静态和动态 metadata（`generateMetadata` 函数）。Favicon 放在 `app/` 目录下自动识别。每个页面可以覆盖父布局的 metadata。

## 中文长总结

### 静态 Metadata
```jsx
// app/layout.js — 根布局
export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description: "Luxurious cabin hotel, located in the heart of the Italian Dolomites...",
};
```

### 页面级 Metadata
```jsx
// app/about/page.js
export const metadata = {
  title: "About", // → "About | The Wild Oasis" (用了 template)
};

export default function Page() { ... }
```

### 动态 Metadata
```jsx
// app/cabins/[cabinId]/page.js
export async function generateMetadata({ params }) {
  const cabin = await getCabin(params.cabinId);
  return {
    title: `Cabin ${cabin.name}`,
  };
}
```

### Favicon
```
app/
  icon.png       → 自动变成 favicon
  favicon.ico    → 也可以
  apple-icon.png → Apple touch icon
```

### Metadata 继承
- 子页面自动继承父布局的 metadata
- 可以覆盖特定字段
- `title.template` 用 `%s` 作为占位符

## English Short Summary

Next.js Metadata API: export `metadata` object for SEO tags. `title.template` for consistent titles. `generateMetadata()` for dynamic metadata. Favicon in `app/icon.png`. Child pages inherit and override parent metadata.

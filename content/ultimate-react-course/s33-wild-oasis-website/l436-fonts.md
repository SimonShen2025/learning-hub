---
title: "Loading and Optimizing Fonts"
lectureId: 436
section: 33
sectionTitle: "Building the Wild Oasis Customer Website"
date: "2026-03-05"
tags: [fonts, next-font, optimization, cls]
---

## 中文短总结

`next/font` 自动优化字体加载。在构建时下载字体（self-host），零 CLS（Cumulative Layout Shift）。支持 Google Fonts 和本地字体。在根布局应用字体 className 到 `<body>` 或 `<html>`。

## 中文长总结

### 使用 Google Fonts
```jsx
// app/layout.js
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
```

### 工作原理
```
构建时：
  1. 从 Google Fonts 下载字体文件
  2. Self-host 在你的服务器上
  3. 自动设置 font-display: swap
  4. 生成 CSS with font-face

结果：
  - 不向 Google 发请求（隐私+速度）
  - 零 CLS（布局不跳动）
  - 自动最佳实践
```

### 多个字体
```jsx
import { Josefin_Sans } from "next/font/google";
import { Playfair_Display } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });

// 在特定元素上用
<h1 className={playfair.className}>Title</h1>
```

### 本地字体
```jsx
import localFont from "next/font/local";
const myFont = localFont({ src: "./my-font.woff2" });
```

## English Short Summary

`next/font`: auto-optimizes fonts. Downloads at build time (self-hosted), zero CLS. Google Fonts + local fonts. Apply `className` to `<body>`. No external requests to Google in production.

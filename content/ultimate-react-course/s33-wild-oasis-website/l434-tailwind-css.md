---
title: "Styling With Tailwind CSS"
lectureId: 434
section: 33
sectionTitle: "Building the Wild Oasis Customer Website"
date: "2026-03-05"
tags: [tailwind-css, styling, utility-classes, nextjs]
---

## 中文短总结

Tailwind CSS 在 Next.js 中使用。`create-next-app` 已自动配置。utility class 直接在 JSX 中写样式。响应式用 `sm:`, `md:`, `lg:` 前缀。暗色模式、hover、focus 等状态变体。配置在 `tailwind.config.js`。

## 中文长总结

### 基本用法
```jsx
// Utility classes 直接在 className 中
function CabinCard({ cabin }) {
  return (
    <div className="flex border-primary-800 border">
      <div className="relative">
        <Image src={cabin.image} fill alt={cabin.name} className="object-cover border-r border-primary-800" />
      </div>
      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7">
          <h3 className="bg-primary-950 px-7 py-3 text-2xl font-semibold text-accent-500 mb-3">
            Cabin {cabin.name}
          </h3>
          <p className="text-lg text-primary-200">
            For up to <span className="font-bold">{cabin.maxCapacity}</span> guests
          </p>
          <p className="flex gap-3 items-baseline">
            {cabin.discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">${cabin.regularPrice - cabin.discount}</span>
                <span className="line-through font-semibold text-primary-600">${cabin.regularPrice}</span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${cabin.regularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>
      </div>
    </div>
  );
}
```

### Tailwind 配置
```js
// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { /* 自定义色板 */ },
        accent: { /* 强调色 */ },
      },
    },
  },
};
```

### 响应式设计
```jsx
className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
```

### 全局样式
```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 自定义全局样式（少用） */
```

## English Short Summary

Tailwind CSS in Next.js: utility classes in JSX, responsive prefixes (`sm:`, `md:`, `lg:`), custom theme colors in config, auto-configured by `create-next-app`. Global styles in `globals.css`.

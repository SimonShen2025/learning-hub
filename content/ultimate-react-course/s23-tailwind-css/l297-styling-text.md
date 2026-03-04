---
title: "Styling Text"
lectureId: 297
section: 23
sectionTitle: "[Optional] Tailwind CSS Crash Course: Styling the App"
date: "2026-03-04"
tags: [tailwind-css, text, typography]
---

## 中文短总结

Tailwind 文字样式。字号：`text-sm` / `text-xl` / `text-3xl`。字重：`font-bold` / `font-semibold`。行高、字间距、对齐、大小写变换、下划线。所有 CSS 文字属性都有对应的 utility class。

## 中文长总结

### 文字大小
```jsx
<p className="text-xs">Extra small</p>   // 12px
<p className="text-sm">Small</p>          // 14px
<p className="text-base">Base</p>         // 16px
<p className="text-lg">Large</p>          // 18px
<p className="text-xl">Extra large</p>    // 20px
<p className="text-2xl">2X large</p>      // 24px
<p className="text-3xl">3X large</p>      // 30px
```

### 字重
```jsx
<p className="font-thin">100</p>
<p className="font-light">300</p>
<p className="font-normal">400</p>
<p className="font-medium">500</p>
<p className="font-semibold">600</p>
<p className="font-bold">700</p>
```

### 其他
```jsx
// 对齐
<p className="text-center">Centered</p>
<p className="text-right">Right aligned</p>

// 变换
<p className="uppercase">UPPERCASE</p>
<p className="capitalize">Capitalize</p>
<p className="italic">Italic</p>

// 装饰
<p className="underline">Underlined</p>
<p className="line-through">Strikethrough</p>

// 行高
<p className="leading-relaxed">Relaxed line height</p>

// 字间距
<p className="tracking-wide">Wide letter spacing</p>
```

## English Short Summary

Tailwind text styling: size (`text-sm/xl/3xl`), weight (`font-bold/semibold`), alignment (`text-center`), transform (`uppercase/italic`), decoration (`underline`), line-height (`leading-relaxed`), letter-spacing (`tracking-wide`).

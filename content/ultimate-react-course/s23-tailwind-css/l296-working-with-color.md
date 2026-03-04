---
title: "Working With Color"
lectureId: 296
section: 23
sectionTitle: "[Optional] Tailwind CSS Crash Course: Styling the App"
date: "2026-03-04"
tags: [tailwind-css, colors, styling]
---

## 中文短总结

Tailwind 颜色系统。格式：`{属性}-{颜色}-{深度}`。如 `text-red-500`、`bg-blue-100`、`border-green-700`。深度从 50（最浅）到 950（最深）。也有 `black`、`white`、`transparent`。文档是最好的参考。

## 中文长总结

### 颜色类名格式
```
{property}-{color}-{shade}
```

### 属性类型
| 前缀 | 用途 |
|------|------|
| `text-` | 文字颜色 |
| `bg-` | 背景颜色 |
| `border-` | 边框颜色 |
| `ring-` | 轮廓颜色 |
| `divide-` | 分割线颜色 |

### 颜色和深度
```jsx
// 颜色名
<p className="text-red-500">Red text</p>
<p className="text-blue-700">Dark blue</p>
<p className="bg-yellow-100">Light yellow bg</p>

// 深度范围：50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
// 50 = 最浅, 950 = 最深, 500 = 中间

// 特殊颜色
<p className="text-black">Black</p>
<p className="bg-white">White</p>
<p className="bg-transparent">Transparent</p>
```

### 预设颜色
slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose

## English Short Summary

Tailwind color system: `{property}-{color}-{shade}`. Properties: text-, bg-, border-, ring-. Shades from 50 (lightest) to 950 (darkest). Rich preset palette. Special: black, white, transparent.

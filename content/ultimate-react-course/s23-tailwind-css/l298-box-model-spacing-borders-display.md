---
title: "The Box Model: Spacing, Borders, and Display"
lectureId: 298
section: 23
sectionTitle: "[Optional] Tailwind CSS Crash Course: Styling the App"
date: "2026-03-04"
tags: [tailwind-css, box-model, spacing, margin, padding]
---

## 中文短总结

盒模型 utilities。Padding：`p-4`（四边）、`px-4`（水平）、`py-2`（垂直）、`pt-1`（单边）。Margin 同理用 `m-`。间距值：0-96（4=1rem=16px）。Border：`border`、`rounded-lg`。Display：`block`、`inline`、`hidden`。

## 中文长总结

### 间距系统
```
0 → 0px
1 → 4px (0.25rem)
2 → 8px
3 → 12px
4 → 16px (1rem)
5 → 20px
6 → 24px
8 → 32px (2rem)
10 → 40px
12 → 48px
16 → 64px
20 → 80px
```

### Padding
```jsx
<div className="p-4">16px all sides</div>
<div className="px-6 py-3">24px horizontal, 12px vertical</div>
<div className="pt-8 pb-4">Top 32px, bottom 16px</div>
```

### Margin
```jsx
<div className="m-4">16px margin</div>
<div className="mx-auto">Center horizontally</div>
<div className="mt-8 mb-4">Top/bottom margins</div>
<div className="-mt-2">Negative margin</div>
```

### Border
```jsx
<div className="border border-gray-300">1px border</div>
<div className="border-2 border-red-500">2px red border</div>
<div className="rounded">4px radius</div>
<div className="rounded-lg">8px radius</div>
<div className="rounded-full">Full circle/pill</div>
```

### 宽高
```jsx
<div className="w-full h-screen">Full width, screen height</div>
<div className="w-64 h-32">256px × 128px</div>
```

## English Short Summary

Box model: padding `p-4/px-6/py-3/pt-8`, margin `m-4/mx-auto/mt-8` (spacing scale 4=1rem). Border `border/border-2`, radius `rounded-lg/rounded-full`. Width/height `w-full/h-screen/w-64`.

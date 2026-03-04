---
title: "Absolute Positioning, z-index, and More"
lectureId: 306
section: 23
sectionTitle: "[Optional] Tailwind CSS Crash Course: Styling the App"
date: "2026-03-04"
tags: [tailwind-css, positioning, z-index, advanced]
---

## 中文短总结

定位和层叠。`relative`/`absolute`/`fixed`/`sticky`。`top-0 left-0 right-0 bottom-0` 或简写 `inset-0`。`z-10`/`z-50` 控制层叠。`overflow-hidden`/`overflow-scroll`。全屏遮罩层模式：`fixed inset-0 z-50 bg-black/50`。

## 中文长总结

### 定位
```jsx
// 相对/绝对定位
<div className="relative">
  <div className="absolute top-0 right-0">
    Badge
  </div>
</div>

// 固定定位（全屏遮罩）
<div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
  <div className="bg-white p-8 rounded-lg">Modal content</div>
</div>

// 粘性定位
<header className="sticky top-0 z-10 bg-white shadow">Nav</header>
```

### z-index
```jsx
<div className="z-0">Default</div>
<div className="z-10">Above</div>
<div className="z-20">Higher</div>
<div className="z-50">Highest (modals)</div>
```

### Inset 简写
```jsx
// inset-0 = top: 0; right: 0; bottom: 0; left: 0;
<div className="absolute inset-0">Full overlay</div>

// 水平/垂直
<div className="absolute inset-x-0 bottom-0">Bottom bar</div>
```

### 其他
```jsx
// 溢出
<div className="overflow-hidden">Hidden overflow</div>
<div className="overflow-auto">Scrollable</div>

// 透明度
<div className="bg-black/50">50% black overlay</div>
<div className="opacity-75">75% opacity</div>
```

## English Short Summary

Positioning: `relative/absolute/fixed/sticky` with `top-0/inset-0`. Z-index: `z-10/z-50`. Overlay pattern: `fixed inset-0 z-50 bg-black/50`. Overflow: `overflow-hidden/auto`. Opacity via `/50` shorthand or `opacity-75`.

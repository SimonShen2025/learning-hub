---
title: "Configuring Tailwind: Custom Font Family"
lectureId: 307
section: 23
sectionTitle: "[Optional] Tailwind CSS Crash Course: Styling the App"
date: "2026-03-04"
tags: [tailwind-css, configuration, custom-font, tailwind-config]
---

## 中文短总结

自定义 Tailwind 配置。在 `tailwind.config.js` 的 `theme.extend` 中添加自定义字体。用 Google Fonts 导入字体 → 配置 fontFamily → 用 `font-sans` 或自定义名。extend 是扩展而非覆盖默认值。

## 中文长总结

### 添加 Google Font
```html
<!-- index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
```

### 配置 Tailwind
```js
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto Mono, monospace", // 覆盖默认 sans
        // 或添加自定义名
        pizza: "Roboto Mono, monospace",
      },
      colors: {
        // 扩展颜色
        brand: "#facc15",
      },
      height: {
        screen: "100dvh", // 使用动态视口高度
      },
    },
  },
};
```

### extend vs 根级
```js
// extend — 添加到默认值
theme: {
  extend: {
    colors: { brand: "#facc15" } // 保留所有默认颜色 + 添加 brand
  }
}

// 根级 — 替换默认值
theme: {
  colors: { brand: "#facc15" } // 只有 brand！丢失所有默认颜色
}
```

## English Short Summary

Customize Tailwind via `tailwind.config.js` `theme.extend`. Add Google Fonts, custom colors, heights. `extend` adds to defaults; root-level replaces them. Use `font-sans` or custom names like `font-pizza`.

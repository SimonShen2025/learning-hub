---
title: "Setting Up Tailwind CSS"
lectureId: 295
section: 23
sectionTitle: "[Optional] Tailwind CSS Crash Course: Styling the App"
date: "2026-03-04"
tags: [tailwind-css, setup, configuration]
---

## 中文短总结

在 Vite + React 项目中安装 Tailwind CSS。安装三个包 → 生成配置文件 → 配置 content 路径 → 在 CSS 中添加 @tailwind 指令。安装 VS Code Tailwind 插件提供智能提示。

## 中文长总结

### 安装步骤
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 配置 tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 添加 Tailwind 指令到 CSS
```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### VS Code 插件
- **Tailwind CSS IntelliSense** — 类名自动补全
- 悬停预览 CSS 属性
- 排序建议

### 验证
```jsx
<h1 className="text-3xl font-bold text-blue-500">
  Hello Tailwind!
</h1>
```

## English Short Summary

Install Tailwind in Vite: `tailwindcss postcss autoprefixer` → `npx tailwindcss init -p` → configure content paths → add @tailwind directives to CSS. Install VS Code Tailwind IntelliSense extension for autocomplete.

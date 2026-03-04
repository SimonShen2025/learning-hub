---
title: "Reusing Styles With @apply"
lectureId: 304
section: 23
sectionTitle: "[Optional] Tailwind CSS Crash Course: Styling the App"
date: "2026-03-04"
tags: [tailwind-css, apply, reuse, styles]
---

## 中文短总结

`@apply` 指令在 CSS 中组合 Tailwind utility classes 为自定义类。写在全局 CSS 中。但官方不推荐 — React 组件封装是更好的复用方式。@apply 只适合无法用组件封装的场景（如 CMS 生成的 HTML）。

## 中文长总结

### @apply 用法
```css
/* index.css */
@layer components {
  .input {
    @apply w-full rounded-full border border-stone-200 px-4 py-2 text-sm
      transition-all duration-300 placeholder:text-stone-400
      focus:outline-none focus:ring focus:ring-yellow-400;
  }
}
```

```jsx
// 使用
<input className="input" type="text" />
```

### 为什么不推荐
1. 失去了 utility-first 的本意
2. 重新回到了抽象类名
3. React 组件封装更好（可带逻辑 + props）
4. 文件间切换（CSS ↔ JSX）

### 何时用
- 第三方 HTML（不能修改标记）
- CMS 输出（没有 React 组件）
- 非常简单的复用（如统一 input 样式）

## English Short Summary

`@apply` composes Tailwind utilities into custom CSS classes. Use in global CSS within `@layer components`. Not recommended in React — component encapsulation is better for style reuse. Only use when can't use React components.

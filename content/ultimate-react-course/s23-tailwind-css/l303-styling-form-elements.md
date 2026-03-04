---
title: "Styling Form Elements"
lectureId: 303
section: 23
sectionTitle: "[Optional] Tailwind CSS Crash Course: Styling the App"
date: "2026-03-04"
tags: [tailwind-css, forms, input, styling]
---

## 中文短总结

Tailwind 表单样式。Input：`border rounded-full px-4 py-2 w-full`。Focus 状态用 ring。Select、checkbox 也用相同模式。Tailwind 默认移除浏览器表单样式，需自己重建。

## 中文长总结

### Input 样式
```jsx
<input
  className="
    w-full rounded-full border border-stone-200
    px-4 py-2 text-sm
    transition-all duration-300
    placeholder:text-stone-400
    focus:outline-none focus:ring focus:ring-yellow-400
  "
  type="text"
  placeholder="Your full name"
/>
```

### Select
```jsx
<select className="rounded-full border border-stone-200 px-4 py-2">
  <option value="USD">USD</option>
  <option value="EUR">EUR</option>
</select>
```

### Checkbox
```jsx
<input
  type="checkbox"
  className="h-6 w-6 accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2"
/>
```

### Placeholder 样式
```jsx
// 用 placeholder: 前缀
<input className="placeholder:text-stone-400 placeholder:italic" />
```

## English Short Summary

Tailwind form styling: inputs with `rounded-full border px-4 py-2`, focus with `focus:ring`. Placeholder styled with `placeholder:` prefix. Checkbox with `accent-` color. Rebuild form styles from scratch (Tailwind resets defaults).

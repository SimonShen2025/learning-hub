---
title: "Reusing Styles With React Components"
lectureId: 305
section: 23
sectionTitle: "[Optional] Tailwind CSS Crash Course: Styling the App"
date: "2026-03-04"
tags: [tailwind-css, react, reusable-components, button]
---

## 中文短总结

更好的样式复用方式 — 创建 React 组件。Button 组件接收 `type` prop 控制变体（primary/small/secondary/round）。根据 type 拼接不同的 className。这是 Tailwind + React 的推荐方式。

## 中文长总结

### Button 组件
```jsx
function Button({ children, disabled, to, type, onClick }) {
  const base = "inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary: "inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-all duration-300 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to)
    return <Link to={to} className={styles[type]}>{children}</Link>;

  if (onClick)
    return <button onClick={onClick} disabled={disabled} className={styles[type]}>{children}</button>;

  return <button disabled={disabled} className={styles[type]}>{children}</button>;
}
```

### 使用
```jsx
<Button type="primary">Order now</Button>
<Button type="small" onClick={handleDelete}>Delete</Button>
<Button type="secondary" to="/menu">Back to menu</Button>
```

### 优势
- 样式 + 逻辑在一起
- Props 控制变体
- 真正的可复用组件
- 比 @apply 更灵活

## English Short Summary

Better style reuse: React components with variant props. Button accepts `type` (primary/small/secondary/round) for different styles. Can render as `<button>` or `<Link>`. Preferred Tailwind + React pattern over @apply.

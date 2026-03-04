---
title: "Creating a Layout"
lectureId: 424
section: 32
sectionTitle: "Overview of Next.js With the App Router"
date: "2026-03-05"
tags: [layout, nextjs, nested-layout, root-layout]
---

## 中文短总结

`layout.js` 定义共享布局（导航、Footer 等），在路由切换时不重新渲染。根布局（`app/layout.js`）必须包含 `<html>` 和 `<body>`。嵌套 `layout.js` 自动嵌套到父布局中。`children` prop 接收页面内容。

## 中文长总结

### 根布局
```jsx
// app/layout.js — 必须有
export const metadata = {
  title: "The Wild Oasis",
  description: "Luxurious cabin hotel...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright © The Wild Oasis</footer>
      </body>
    </html>
  );
}
```

### 嵌套布局
```
app/
  layout.js          ← 根布局
  account/
    layout.js        ← account 子布局
    page.js
    settings/
      page.js
```

```jsx
// app/account/layout.js
export default function AccountLayout({ children }) {
  return (
    <div>
      <SideNav />
      <div>{children}</div>
    </div>
  );
}
```

### 布局特性
- 路由切换时布局不卸载不重新渲染
- 状态在布局中保持
- 布局不能访问当前路由（用 middleware 或 `usePathname`）
- 根布局是唯一必须的布局

## English Short Summary

`layout.js` for shared UI: navigation, footer, etc. Root layout requires `<html>` + `<body>`. Nested layouts auto-wrap. `{children}` receives page content. Layouts persist across navigations (never unmount/re-render).

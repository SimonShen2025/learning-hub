---
title: "Defining Routes and Pages"
lectureId: 422
section: 32
sectionTitle: "Overview of Next.js With the App Router"
date: "2026-03-05"
tags: [routing, file-based, pages, nextjs]
---

## 中文短总结

Next.js App Router 文件路由：每个文件夹名 = URL 路径。`page.js` 定义该路由的页面组件。`app/about/page.js` → `/about`。嵌套文件夹 = 嵌套路由。动态路由用 `[param]` 文件夹。

## 中文长总结

### 文件路由
```
app/
  page.js              → /
  about/
    page.js            → /about
  cabins/
    page.js            → /cabins
    [cabinId]/
      page.js          → /cabins/123
  account/
    page.js            → /account
```

### 页面组件
```jsx
// app/about/page.js
export default function Page() {
  return (
    <div>
      <h1>About The Wild Oasis</h1>
      <p>...</p>
    </div>
  );
}
```

### 动态路由
```jsx
// app/cabins/[cabinId]/page.js
export default function Page({ params }) {
  const { cabinId } = params;
  return <h1>Cabin {cabinId}</h1>;
}
```

### 特殊文件
| 文件名 | 用途 |
|--------|------|
| `page.js` | 路由页面组件 |
| `layout.js` | 布局（包裹子路由） |
| `loading.js` | 加载状态 |
| `error.js` | 错误状态 |
| `not-found.js` | 404 页面 |

### 注意
- 文件夹名只是路由段
- 只有 `page.js` 存在时文件夹才是有效路由
- 其他文件（组件、工具函数）不会变成路由

## English Short Summary

File-based routing in App Router: folder name = URL segment. `page.js` defines the page. Dynamic routes with `[param]` folders. Special files: `layout.js`, `loading.js`, `error.js`, `not-found.js`. Only folders with `page.js` become routes.

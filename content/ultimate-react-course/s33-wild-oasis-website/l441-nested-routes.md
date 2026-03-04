---
title: "Adding Nested Routes and Pages"
lectureId: 441
section: 33
sectionTitle: "Building the Wild Oasis Customer Website"
date: "2026-03-05"
tags: [nested-routes, dynamic-routes, account, nextjs]
---

## 中文短总结

创建嵌套路由：`/account`, `/account/profile`, `/account/reservations`。Account 页面作为仪表盘。动态路由 `/cabins/[cabinId]` 获取单个小屋信息。每个嵌套路由有自己的 `page.js`。

## 中文长总结

### 嵌套路由结构
```
app/
  account/
    page.js             → /account (仪表盘)
    profile/
      page.js           → /account/profile
    reservations/
      page.js           → /account/reservations
  cabins/
    page.js             → /cabins (列表)
    [cabinId]/
      page.js           → /cabins/123 (详情)
```

### Account 仪表盘
```jsx
// app/account/page.js
export const metadata = {
  title: "Guest area",
};

export default function Page() {
  return <h2 className="font-semibold text-2xl text-accent-400 mb-7">Welcome, guest</h2>;
}
```

### 动态路由页面
```jsx
// app/cabins/[cabinId]/page.js
import { getCabin } from "@/app/_lib/data-service";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  return (
    <div>
      <h3 className="text-accent-100 font-black text-7xl mb-5">
        Cabin {cabin.name}
      </h3>
      <p className="text-lg text-primary-300 mb-10">{cabin.description}</p>
    </div>
  );
}
```

### 路由特点
- 文件夹层级 = URL 层级
- 动态段 `[param]` → `params` prop 自动注入
- 每个路由可以独立设置 metadata

## English Short Summary

Nested routes: `/account/profile`, `/account/reservations`. Dynamic route `/cabins/[cabinId]` with `params` prop. Each route has own `page.js` and can export `metadata`. Folder hierarchy = URL hierarchy.

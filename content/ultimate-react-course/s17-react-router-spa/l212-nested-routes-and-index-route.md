---
title: "Nested Routes and Index Route"
lectureId: 212
section: 17
sectionTitle: "React Router: Building Single-Page Applications (SPA)"
date: "2026-03-04"
tags: [react, react-router, nested-routes, outlet, index-route]
---

## 中文短总结

嵌套路由：`<Route>` 内部嵌套子 `<Route>`。父路由用 `<Outlet />` 渲染子路由内容。Index Route（`index` 属性）是嵌套路由的默认页面。URL 结构：`/app/cities`、`/app/countries`。

## 中文长总结

### 嵌套路由定义
```jsx
<Route path="app" element={<AppLayout />}>
  <Route index element={<Navigate replace to="cities" />} />
  <Route path="cities" element={<CityList />} />
  <Route path="cities/:id" element={<City />} />
  <Route path="countries" element={<CountryList />} />
  <Route path="form" element={<Form />} />
</Route>
```

### Outlet 组件
```jsx
// Sidebar.jsx — 子路由在这里渲染
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <AppNav />
      <Outlet />  {/* 这里渲染 CityList、CountryList 等 */}
    </div>
  );
}
```

### Index Route
```jsx
<Route index element={<Navigate replace to="cities" />} />
```
- 访问 `/app` 时自动跳转到 `/app/cities`
- `index` 属性 = 默认子路由
- `replace` 替换历史记录（不产生新条目）

### URL 结构
```
/app          → 重定向 → /app/cities
/app/cities   → CityList
/app/cities/1 → City (详情)
/app/countries → CountryList
/app/form     → Form
```

## English Short Summary

Nested routes: child `<Route>` inside parent, rendered at `<Outlet />`. Index route (default child) uses `index` attribute. Navigate component redirects `/app` → `/app/cities`. URL hierarchy: `/app/cities`, `/app/cities/:id`, `/app/countries`.

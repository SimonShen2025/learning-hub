---
title: "Setting Up Pages and Routes"
lectureId: 333
section: 25
sectionTitle: "Setting Up Our Biggest Project + Styled Components"
date: "2026-03-04"
tags: [react-router, pages, routes, spa]
---

## 中文短总结

安装 React Router v6，设置应用路由。页面组件放在 `pages/` 目录。Dashboard、Bookings、Cabins、Settings、Users、Login、Account 页面。`/` 重定向到 `/dashboard`。统一使用 `BrowserRouter`。

## 中文长总结

### 路由配置
```jsx
// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="bookings/:bookingId" element={<Booking />} />
          <Route path="checkin/:bookingId" element={<Checkin />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
```

### 页面组件模式
```jsx
// pages/Dashboard.jsx
function Dashboard() {
  return <Heading as="h1">Dashboard</Heading>;
}
```

### 关键点
- `<Navigate replace to="dashboard">` — 默认重定向
- `*` — 404 匹配
- `:bookingId` — 动态路由参数
- 页面组件只是路由入口，逻辑在 feature 组件中

## English Short Summary

Set up React Router v6: Dashboard, Bookings, Cabins, Users, Settings, Login, Account pages. Index redirects to /dashboard. Dynamic routes for booking details and check-in. Page components as thin route entry points.

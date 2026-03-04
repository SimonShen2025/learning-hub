---
title: "A New Way Of Implementing Routes"
lectureId: 285
section: 22
sectionTitle: "React Router With Data Loading (v6.4+)"
date: "2026-03-04"
tags: [react, react-router, createBrowserRouter, RouterProvider]
---

## 中文短总结

React Router v6.4 新方式定义路由。用 `createBrowserRouter` 创建路由配置（数据对象而非 JSX）→ `<RouterProvider>` 渲染。这种方式支持 loaders 和 actions 等数据 API。旧的 `<BrowserRouter>` + `<Routes>` 不支持数据加载。

## 中文长总结

### 新方式（v6.4+）
```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu />, loader: menuLoader },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreateOrder />, action: createOrderAction },
      { path: "/order/:orderId", element: <Order />, loader: orderLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
```

### 与旧方式对比
```jsx
// 旧方式 — 不支持 loaders/actions
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<Menu />} />
  </Routes>
</BrowserRouter>
```

### 关键区别
- 路由定义为**数据对象**（可附加 loader/action/errorElement）
- 用 RouterProvider 而非 BrowserRouter
- 支持嵌套路由（children）
- 父级 errorElement 冒泡捕获子路由错误

## English Short Summary

React Router v6.4: `createBrowserRouter` defines routes as data objects (supports loaders/actions). `RouterProvider` renders the router. Old `<BrowserRouter>` + `<Routes>` doesn't support data APIs. Routes can have loader, action, errorElement.

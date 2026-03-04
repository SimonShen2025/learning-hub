---
title: "Handling Errors With Error Elements"
lectureId: 289
section: 22
sectionTitle: "React Router With Data Loading (v6.4+)"
date: "2026-03-04"
tags: [react, react-router, error-handling, errorElement, useRouteError]
---

## 中文短总结

React Router 路由级错误处理。`errorElement` 属性指定错误 UI。`useRouteError()` hook 获取错误详情。错误向上冒泡 — 子路由未定义 errorElement 时由父路由捕获。可以在不同层级定义不同的错误 UI。

## 中文长总结

### 路由错误处理
```jsx
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,  // 捕获所有子路由错误
    children: [
      { path: "/menu", element: <Menu />, loader: menuLoader,
        errorElement: <Error /> },  // 特定路由错误
      { path: "/order/:orderId", element: <Order />, loader: orderLoader,
        errorElement: <Error /> },
    ],
  },
]);
```

### Error 组件
```jsx
import { useRouteError, useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}
```

### 错误冒泡
```
Root (errorElement: <Error />)
└── /menu (无 errorElement)
    → menu loader 报错 → 冒泡到 Root 的 errorElement

Root (errorElement: <Error />)
└── /menu (errorElement: <MenuError />)
    → menu loader 报错 → 用 MenuError 渲染（不冒泡）
```

## English Short Summary

Route-level error handling: `errorElement` shows error UI. `useRouteError()` gets error details. Errors bubble up — child without errorElement uses parent's. Can define different error UI at different levels.

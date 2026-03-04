---
title: "Building the App Layout"
lectureId: 286
section: 22
sectionTitle: "React Router With Data Loading (v6.4+)"
date: "2026-03-04"
tags: [react, react-router, layout, Outlet]
---

## 中文短总结

用 React Router 实现全局布局。AppLayout 组件包含 Header、`<Outlet />`（子路由渲染位置）、CartOverview。在 createBrowserRouter 中，AppLayout 作为父路由的 element — 所有子路由共享布局。`useNavigation` 检测全局加载状态。

## 中文长总结

### AppLayout
```jsx
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}
```

### 路由配置
```jsx
const router = createBrowserRouter([
  {
    element: <AppLayout />,  // 父布局
    children: [
      { path: "/", element: <Home /> },    // 渲染在 <Outlet /> 位置
      { path: "/menu", element: <Menu /> },
      // ...
    ],
  },
]);
```

### useNavigation
- 提供全局导航/加载状态
- `state: "idle" | "loading" | "submitting"`
- 适合显示全局 loading indicator

## English Short Summary

App layout with React Router: AppLayout has Header, `<Outlet />` (child route render point), CartOverview. Parent route element shared by all children. `useNavigation` provides global loading state for loading indicators.

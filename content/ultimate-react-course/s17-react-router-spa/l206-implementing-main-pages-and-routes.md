---
title: "Implementing Main Pages and Routes"
lectureId: 206
section: 17
sectionTitle: "React Router: Building Single-Page Applications (SPA)"
date: "2026-03-04"
tags: [react, react-router, routes, BrowserRouter]
---

## 中文短总结

首次使用 React Router。安装 `react-router-dom`。用 `<BrowserRouter>` 包裹应用，`<Routes>` 包含所有 `<Route>`。每个 Route 映射 path → element（组件）。`*` 路径匹配 404。

## 中文长总结

### 安装
```bash
npm i react-router-dom
```

### 基本路由设置
```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 关键概念
- `BrowserRouter`：使用浏览器 History API 的路由器
- `Routes`：所有 Route 的容器
- `Route`：path → element 映射
- `path="*"`：通配符，匹配所有未定义路由
- `element` prop 接收 JSX（React Router v6）

## English Short Summary

First React Router setup: install `react-router-dom`, wrap app in `<BrowserRouter>`, define `<Routes>` with `<Route path="" element={} />`. Wildcard `*` for 404. React Router v6 uses `element` prop (JSX) instead of `component` prop.

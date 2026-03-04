---
title: "Optimizing Bundle Size With Code Splitting"
lectureId: 253
section: 19
sectionTitle: "Performance Optimization and Advanced useEffect"
date: "2026-03-04"
tags: [react, code-splitting, lazy, suspense, bundle-size]
---

## 中文短总结

代码分割减小初始 bundle。`React.lazy()` 动态导入页面组件 → 按需加载。`Suspense` 显示加载界面。每个路由一个 chunk — 用户只下载当前页面的代码。最重要的性能优化之一。

## 中文长总结

### 问题
SPA 默认将所有代码打包成一个文件
→ 首次加载下载全部代码
→ 大应用首屏很慢

### 解决方案：lazy + Suspense
```jsx
// 之前：静态导入
// import Homepage from "./pages/Homepage";
// import Product from "./pages/Product";

// 之后：动态导入
const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const AppLayout = lazy(() => import("./pages/AppLayout"));

function App() {
  return (
    <Suspense fallback={<SpinnerFullPage />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="app" element={<AppLayout />} />
      </Routes>
    </Suspense>
  );
}
```

### 效果
- 每个 lazy 组件成为独立 chunk
- 导航到该路由时才加载对应 chunk
- Network 面板可观察按需加载行为
- 初始 bundle 大幅减小

### 注意事项
- 通常按**路由**级别分割（不是每个组件）
- Suspense 的 fallback 在加载时显示
- 对 SPA 尤其重要
- Vite/Webpack 自动处理 chunk 生成

## English Short Summary

Code splitting with `React.lazy()` + `Suspense`. Dynamic imports create separate chunks per route — loaded on demand. Initial bundle shrinks significantly. Usually split at route level. Suspense shows fallback during chunk loading.

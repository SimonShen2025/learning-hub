---
title: "Building the App Layout"
lectureId: 211
section: 17
sectionTitle: "React Router: Building Single-Page Applications (SPA)"
date: "2026-03-04"
tags: [react, layout, components, worldwise]
---

## 中文短总结

构建应用主布局：Sidebar + Map 双栏结构。Sidebar 包含 Logo、搜索/过滤和列表内容。Map 占据右侧区域。组件文件从 pages/ 移到 components/。AppLayout 作为页面容器协调子组件。

## 中文长总结

### 布局结构
```jsx
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}
```

### CSS Grid 布局
```css
.app {
  display: grid;
  grid-template-columns: 56rem 1fr;
  height: calc(100vh - 3rem);
}
```

### Sidebar 结构
```jsx
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* 嵌套路由内容在这里渲染 */}
      <Outlet />
      <Footer />
    </div>
  );
}
```

### 文件组织
- pages/ — 页面级组件
- components/ — 可复用组件
- 将 UI 组件移到 components/

## English Short Summary

Build app layout: Sidebar + Map grid (56rem | 1fr). Sidebar contains Logo, AppNav, Outlet (for nested routes), Footer. Components organized into pages/ and components/ folders. CSS Grid for two-column layout.

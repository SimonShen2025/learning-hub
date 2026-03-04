---
title: "Building the Pages"
lectureId: 210
section: 17
sectionTitle: "React Router: Building Single-Page Applications (SPA)"
date: "2026-03-04"
tags: [react, components, pages, worldwise]
---

## 中文短总结

构建 WorldWise 各页面组件：Homepage、Pricing、Product、Login、AppLayout、PageNotFound。每个页面是一个组件文件。用 CSS Modules 为每个页面写样式。页面组件负责布局结构，具体内容组件后续添加。

## 中文长总结

### 页面组件
```
pages/
  Homepage.jsx + Homepage.module.css
  Pricing.jsx + Pricing.module.css
  Product.jsx + Product.module.css
  Login.jsx + Login.module.css
  AppLayout.jsx + AppLayout.module.css
  PageNotFound.jsx
```

### 页面结构示例
```jsx
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>You travel the world.<br/>WorldWise keeps track...</h1>
        <Link to="/app" className="cta">Start tracking now</Link>
      </section>
    </main>
  );
}
```

### 共享组件
- PageNav 导航栏复用于多个页面
- 每个页面有独立的 CSS Module

## English Short Summary

Build WorldWise page components: Homepage, Pricing, Product, Login, AppLayout, PageNotFound. Each page has its own CSS Module file. Pages handle layout, delegate to shared components like PageNav. CTA links to app route.

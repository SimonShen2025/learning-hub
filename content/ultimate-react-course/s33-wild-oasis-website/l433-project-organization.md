---
title: "Project Organization"
lectureId: 433
section: 33
sectionTitle: "Building the Wild Oasis Customer Website"
date: "2026-03-05"
tags: [project-structure, organization, nextjs, conventions]
---

## 中文短总结

项目文件组织。`app/` 放路由页面，`app/_components/` 放组件（`_` 前缀防止变成路由），`app/_lib/` 放工具函数和数据服务。全局样式在 `app/globals.css`。`public/` 放静态资源。

## 中文长总结

### 目录结构
```
app/
  _components/         ← 共享组件（_ 防止变成路由）
    Navigation.js
    Logo.js
    CabinList.js
    CabinCard.js
    ...
  _lib/                ← 工具函数
    data-service.js    ← 数据获取函数
    supabase.js        ← Supabase 客户端
    auth.js            ← NextAuth 配置
  about/
    page.js
  cabins/
    [cabinId]/
      page.js
    page.js
  account/
    profile/
      page.js
    reservations/
      page.js
    layout.js
    page.js
  layout.js            ← 根布局
  page.js              ← 首页
  globals.css          ← 全局样式
  loading.js           ← 全局加载状态
  not-found.js         ← 404 页面
public/
  about-1.jpg          ← 静态图片
  bg.png
  logo.png
  ...
```

### 命名约定
- `_` 前缀的文件夹 → Next.js 忽略（不会变成路由）
- `page.js` → 定义路由页面
- `layout.js` → 定义布局
- `loading.js` → 加载状态
- 组件用 PascalCase

### 与内部系统对比
- 内部系统：`src/features/` 按功能组织
- 客户网站：`app/_components/` 按类型组织（更简单）

## English Short Summary

Project organization: `app/` for routes, `app/_components/` for shared components (`_` prefix prevents routing), `app/_lib/` for utilities/data service. `public/` for static assets. PascalCase components.

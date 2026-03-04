---
title: "Setting Up a Professional File Structure"
lectureId: 284
section: 22
sectionTitle: "React Router With Data Loading (v6.4+)"
date: "2026-03-04"
tags: [react, file-structure, project-organization, features]
---

## 中文短总结

按 feature 组织文件（不是按技术类型）。每个 feature 文件夹包含该功能的所有文件（组件、slice、loader、样式）。features/、services/、ui/、utils/ 四个顶层目录。比按 components/pages/styles 分更适合大项目。

## 中文长总结

### 文件结构
```
src/
  features/
    cart/
      Cart.jsx
      CartItem.jsx
      CartOverview.jsx
      cartSlice.js
    menu/
      Menu.jsx
      MenuItem.jsx
      menuLoader.js
    order/
      CreateOrder.jsx
      Order.jsx
      SearchOrder.jsx
      orderLoader.js
    user/
      CreateUser.jsx
      userSlice.js
  services/
    apiGeocoding.js
    apiRestaurant.js
  ui/
    AppLayout.jsx
    Button.jsx
    Error.jsx
    Header.jsx
    Home.jsx
    Loader.jsx
    LinkButton.jsx
  utils/
    helpers.js
```

### 原则
- **Feature-based** > type-based
- 相关文件放一起（组件 + slice + loader）
- `services/` — API 调用
- `ui/` — 通用/共享 UI 组件
- `utils/` — 工具函数

## English Short Summary

Feature-based file structure: each feature folder contains components, slices, loaders together. Four top folders: features/, services/, ui/, utils/. Better for large projects than type-based (components/pages) organization.

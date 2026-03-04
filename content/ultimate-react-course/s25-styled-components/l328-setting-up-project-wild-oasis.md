---
title: "Setting Up the Project: 'The Wild Oasis'"
lectureId: 328
section: 25
sectionTitle: "Setting Up Our Biggest Project + Styled Components"
date: "2026-03-04"
tags: [vite, project-setup, eslint, wild-oasis]
---

## 中文短总结

用 Vite 创建 The Wild Oasis 项目。安装依赖、配置 ESLint。清理模板文件。安装 styled-components。按 feature 组织文件夹结构：features/、services/、ui/、hooks/、utils/、pages/。

## 中文长总结

### 创建项目
```bash
npm create vite@latest the-wild-oasis -- --template react
cd the-wild-oasis
npm install
```

### 安装核心依赖
```bash
npm install styled-components react-router-dom@6
npm install react-query react-hook-form
npm install react-icons react-hot-toast recharts date-fns
npm install -D eslint-config-react-app
```

### 文件结构
```
src/
  features/
    authentication/
    bookings/
    cabins/
    check-in-out/
    dashboard/
    settings/
  hooks/
  pages/
  services/
  styles/
  ui/
  utils/
```

### 关键决策
- **Feature-based** 文件夹组织（非 type-based）
- 每个 feature 包含组件 + hooks + services
- `pages/` 只做路由到组件的映射
- `ui/` 放通用 UI 组件（Button、Modal 等）
- `services/` 放 API 调用

## English Short Summary

Set up Vite project for The Wild Oasis. Install styled-components, react-router, react-query, react-hook-form, and utilities. Feature-based folder structure: features/, pages/, ui/, hooks/, services/, styles/, utils/.

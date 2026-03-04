---
title: "Building the Layout"
lectureId: 70
section: 6
sectionTitle: "State, Events, and Forms: Interactive Components"
date: "2026-03-04"
tags: [react, components, layout, far-away]
---

## 中文短总结

构建 Far Away 应用的静态布局。拆分为 4 个组件：`Logo`、`Form`、`PackingList`、`Stats`，全部放在 `App` 中。先导入 CSS 文件获取预定义样式。使用初始硬编码数据构建 UI 骨架，后续添加 state 实现交互。

## 中文长总结

### 组件结构
```
App
├── Logo          → 标题/品牌
├── Form          → 添加物品表单
├── PackingList   → 物品列表
└── Stats         → 打包进度统计
```

### 实践要点
- 从 CSS starter file 导入样式
- 先硬编码数据，确认布局正确
- 使用语义化组件名
- 后续用 state 替代硬编码数据

## English Short Summary

Build static layout for Far Away app with 4 components: Logo, Form, PackingList, Stats inside App. Import CSS starter file for styling. Use hardcoded data initially to verify layout, then add state for interactivity in subsequent lectures.

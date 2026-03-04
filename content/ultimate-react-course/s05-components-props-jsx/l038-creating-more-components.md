---
title: "Creating More Components"
lectureId: 38
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, components, pizza-menu]
---

## 中文短总结

继续构建 Pizza Menu 应用，创建 `Header`、`Menu`、`Footer` 组件。组件结构：App 包含 Header + Menu + Footer，Menu 包含多个 Pizza。每个组件职责明确。注意：组件函数必须返回 JSX，`return` 后面如果换行需要加括号 `return (...)`。

## 中文长总结

### 组件拆分
```
App
├── Header  → 显示餐厅名称
├── Menu    → 包含 Pizza 列表
│   └── Pizza × N
└── Footer  → 营业时间信息
```

### 实践要点
- 每个组件一个函数，返回一段 JSX
- `return` 后换行时必须用括号包裹 JSX
- 组件之间通过嵌套（组合）构建页面
- 目前数据直接写在组件内部（硬编码），后续用 props 和 state 改进

## English Short Summary

Build Header, Menu, and Footer components for Pizza Menu app. App contains Header + Menu + Footer; Menu contains multiple Pizza components. Each component returns JSX — use parentheses after `return` when JSX spans multiple lines: `return (...)`.

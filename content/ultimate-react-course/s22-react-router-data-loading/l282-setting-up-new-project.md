---
title: "Setting Up a New Project: \"Fast React Pizza Co.\""
lectureId: 282
section: 22
sectionTitle: "React Router With Data Loading (v6.4+)"
date: "2026-03-04"
tags: [react, vite, project-setup, fast-react-pizza]
---

## 中文短总结

用 Vite 创建 Fast React Pizza Co. 项目。清理模板文件。安装 React Router、Tailwind CSS 等依赖。这是 Part 4 的第一个项目 — 专业级开发，不再用 starter files。

## 中文长总结

### 项目搭建
```bash
npm create vite@latest fast-react-pizza -- --template react
cd fast-react-pizza
npm i
npm i react-router-dom
```

### 项目功能规划
- 查看比萨菜单（从 API 加载）
- 用户输入名字开始使用
- 添加比萨到购物车
- 提交订单
- 通过订单号查询订单状态
- 可标记优先订单

### 技术栈
- Vite + React
- React Router v6.4+（数据加载）
- Redux Toolkit（购物车状态）
- Tailwind CSS（样式）

## English Short Summary

Set up Fast React Pizza Co. with Vite. Professional project setup without starters. Install React Router, plan features: menu viewing, cart, order creation/tracking. Stack: Vite, React Router v6.4+, Redux Toolkit, Tailwind CSS.

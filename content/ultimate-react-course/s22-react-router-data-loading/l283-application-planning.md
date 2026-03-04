---
title: "Application Planning"
lectureId: 283
section: 22
sectionTitle: "React Router With Data Loading (v6.4+)"
date: "2026-03-04"
tags: [react, project-planning, requirements, architecture]
---

## 中文短总结

模拟真实项目规划。分析业务需求 → 确定功能 → 划分页面/路由 → 确定状态管理方案 → 选择技术栈。无设计稿 — 自己做 UI 决策。Global state 用 Redux（user + cart），Remote state 用 React Router loaders。

## 中文长总结

### 功能需求
1. 用户无需登录，输入名字即可
2. 菜单从 API 动态加载
3. 购物车：添加多个比萨，下单前可修改
4. 需要地址（可用地理定位自动填充）
5. 可标记优先订单（+20% 费用）
6. 提交后通过唯一 ID 查询订单
7. 下单后仍可标记为优先

### 页面/路由
| 路由 | 页面 |
|------|------|
| `/` | 首页（输入名字） |
| `/menu` | 比萨菜单 |
| `/cart` | 购物车 |
| `/order/new` | 创建订单 |
| `/order/:orderId` | 订单详情 |

### 状态管理方案
- **User state** → Redux（全局）
- **Cart state** → Redux（全局）
- **Menu data** → React Router loader（远程）
- **Order data** → React Router loader（远程）

## English Short Summary

Application planning: analyze requirements, define pages/routes, choose state management. User/cart → Redux (global). Menu/order data → React Router loaders (remote). Five routes: home, menu, cart, create order, order detail.

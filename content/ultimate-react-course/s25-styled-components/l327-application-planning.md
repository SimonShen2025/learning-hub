---
title: "Application Planning"
lectureId: 327
section: 25
sectionTitle: "Setting Up Our Biggest Project + Styled Components"
date: "2026-03-04"
tags: [planning, requirements, architecture, wild-oasis]
---

## 中文短总结

The Wild Oasis 应用规划。需求分析：小木屋管理、预订管理、客人管理、仪表盘、设置、认证。技术决策：SPA（非 SSR）、Styled Components 样式、React Query 远程状态、Context API 本地状态。

## 中文长总结

### 业务需求
1. **认证** — 酒店员工登录/注册
2. **小木屋** — 查看/创建/编辑/删除小木屋
3. **预订** — 查看/更新预订状态（入住/退房/删除）
4. **客人** — 查看客人信息
5. **仪表盘** — 统计概览、图表
6. **设置** — 早餐价格、入住时间等
7. **深色模式** — 主题切换

### 技术选型
| 需求 | 选择 | 原因 |
|------|------|------|
| 路由 | React Router | SPA，行业标准 |
| 样式 | Styled Components | 组件级 CSS，动态主题 |
| 远程状态 | React Query | 缓存、自动重新获取 |
| UI 状态 | Context API | 简单，够用 |
| 表单 | React Hook Form | 性能好，验证方便 |
| 后端 | Supabase | 免费 Postgres + API |

### 页面规划
- `/dashboard` — 仪表盘
- `/bookings` — 预订列表
- `/cabins` — 小木屋列表
- `/checkin/:id` — 入住
- `/settings` — 设置
- `/users` — 用户管理
- `/login` — 登录
- `/account` — 账户设置

## English Short Summary

Plan The Wild Oasis: hotel employee app. Features: cabins CRUD, bookings management, dashboard, settings, auth, dark mode. Tech: React Router, Styled Components, React Query, Context API, React Hook Form, Supabase.

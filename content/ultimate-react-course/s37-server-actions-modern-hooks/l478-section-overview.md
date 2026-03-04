---
title: "Section Overview"
lectureId: 478
section: 37
sectionTitle: "Mutations With Server Actions + Modern React Hooks"
date: "2026-03-05"
tags: [server-actions, mutations, react-hooks, overview]
---

## 中文短总结

Server Actions + 现代 React Hooks 综述。学习 Server Actions 概念、表单处理、缓存 revalidation、useFormStatus、useTransition、useOptimistic。实现 CRUD：更新 Profile、管理预订（创建/编辑/删除）。

## 中文长总结

### 学习内容
1. **Server Actions 概念** — 什么是 Server Actions
2. **更新 Profile** — 表单提交到 Server Action
3. **缓存 Revalidation** — 修改数据后更新缓存
4. **useFormStatus** — 表单提交中的 loading 状态
5. **预订列表** — 展示用户的预订
6. **删除预订** — Server Action 删除
7. **useTransition** — 独立的 loading 状态
8. **Challenge** — 更新预订
9. **useOptimistic** — 乐观更新 UI
10. **DateSelector** — 日期选择器完善
11. **创建预订** — 完整的预订提交流程

### 核心概念
```
Server Actions:
- 在服务端执行的函数
- 直接在 form action 中调用
- 可以修改数据库 + revalidate 缓存
- 替代传统 API Route + fetch 流程
```

## English Short Summary

Server Actions + React hooks overview: form mutations, cache revalidation, useFormStatus, useTransition, useOptimistic. CRUD operations: update profile, manage reservations (create/edit/delete).

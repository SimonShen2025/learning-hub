---
title: "Section Overview"
lectureId: 345
section: 27
sectionTitle: "React Query: Managing Remote State"
date: "2026-03-05"
tags: [react-query, remote-state, overview]
---

## 中文短总结

使用 React Query 管理远程状态。React Query 自动处理数据获取、缓存、失效重验证、错误/加载状态。本节为 Wild Oasis 项目引入 React Query，替代手动的 useEffect + fetch。

## 中文长总结

### 本节学习内容
1. React Query 是什么、为什么用
2. 安装和配置
3. useQuery 获取数据
4. useMutation 修改数据
5. Toast 通知（react-hot-toast）
6. React Hook Form 集成
7. 图片上传到 Supabase Storage
8. 自定义 hooks 封装 React Query 逻辑
9. 数据预获取（Prefetching）

### 目标
- 用 React Query 替代手动状态管理
- 实现小木屋（Cabins）的 CRUD 操作
- 应用设置（Settings）的读取和更新

## English Short Summary

React Query for remote state management. Replace manual useEffect + fetch with useQuery/useMutation. Covers caching, mutations, toast notifications, React Hook Form integration, image uploads, and custom hooks.

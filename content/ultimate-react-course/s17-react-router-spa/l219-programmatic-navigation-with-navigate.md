---
title: "Programmatic Navigation with <Navigate />"
lectureId: 219
section: 17
sectionTitle: "React Router: Building Single-Page Applications (SPA)"
date: "2026-03-04"
tags: [react, react-router, Navigate, redirect]
---

## 中文短总结

`<Navigate />` 组件是声明式重定向。渲染时自动导航到目标路径。主要用途：Index Route 默认重定向。`<Navigate replace to="cities" />` — replace 避免产生新的历史条目。自从有了 Hooks，很少直接使用。

## 中文长总结

### 基本用法
```jsx
// 作为 Index Route 的重定向
<Route path="app" element={<AppLayout />}>
  <Route index element={<Navigate replace to="cities" />} />
  <Route path="cities" element={<CityList />} />
</Route>
```

### Navigate vs useNavigate
| Navigate (声明式) | useNavigate (命令式) |
|------------------|---------------------|
| 组件渲染时触发 | 手动调用 |
| `<Navigate to="..." />` | `navigate("...")` |
| 适合路由配置中 | 适合事件处理中 |
| 不需要 JS 逻辑 | 需要条件逻辑 |

### replace prop
```jsx
<Navigate replace to="cities" />
// replace=true → 替换当前历史记录
// 用户按后退不会回到重定向前的页面
```

### 使用场景
1. Index Route 重定向（最常见）
2. 未登录时重定向到登录页
3. 旧路径重定向到新路径

## English Short Summary

`<Navigate />` is declarative redirect — navigates when rendered. Main use: index route default redirect `<Navigate replace to="cities" />`. `replace` prevents new history entry. Rarely needed since hooks; useNavigate preferred for event-driven navigation.

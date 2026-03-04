---
title: "Adding Fake Authentication: Protecting a Route"
lectureId: 240
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, context-api, authentication, protected-route, worldwise]
---

## 中文短总结

ProtectedRoute 组件保护需要登录的路由。检查 isAuthenticated → 未登录则重定向到 /login。包裹 AppLayout 使其成为受保护页面。useEffect 中检查认证状态，避免闪烁。

## 中文长总结

### ProtectedRoute 组件
```jsx
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}
```

### 在路由中使用
```jsx
<Route
  path="app"
  element={
    <ProtectedRoute>
      <AppLayout />
    </ProtectedRoute>
  }
>
  <Route index element={<Navigate replace to="cities" />} />
  <Route path="cities" element={<CityList />} />
  {/* ... */}
</Route>
```

### 流程
1. 用户直接访问 `/app`
2. ProtectedRoute 检查 isAuthenticated
3. 未登录 → useEffect 导航回首页
4. 已登录 → 正常渲染 children

### 注意
- 使用 useEffect 导航（不是直接 return Navigate）
- 未认证时返回 null 避免闪烁
- 这是客户端保护 — 真实应用还需要后端验证

## English Short Summary

ProtectedRoute: checks `isAuthenticated`, redirects to home if not. Wraps AppLayout in route config. useEffect-based navigation prevents flash. Returns null when unauthenticated. Client-side protection — real apps also need backend validation.

---
title: "Fixing an Important Bug"
lectureId: 392
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [bug-fix, authentication, redirect, race-condition]
---

## 中文短总结

修复认证相关的重要 bug。问题：用户未登录时 ProtectedRoute 在 useUser 加载完成前可能短暂显示受保护内容。解决：确保 `isLoading` 为 true 时只显示 Spinner，避免闪烁。

## 中文长总结

### Bug 描述
- 用户未登录 → 访问受保护路由
- `useUser` 开始获取 → `isLoading: true`
- 在获取完成前可能短暂渲染子组件
- 获取完成 → `isAuthenticated: false` → 重定向

### 修复
```jsx
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // 加载中 → 只显示 Spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 只有认证通过才渲染子组件
  if (isAuthenticated) return children;

  // 未认证 → return nothing（useEffect 会重定向）
  return null;
}
```

### 关键点
- `if (isAuthenticated) return children` 确保只有认证后才渲染
- 不返回 children 作为默认 → 避免内容闪烁
- `useEffect` 异步重定向，所以需要返回 null 兜底

## English Short Summary

Fix auth bug: ProtectedRoute might briefly show protected content before redirect. Solution: only render `children` when `isAuthenticated` is true. Return `null` otherwise. Loading shows full-screen spinner.

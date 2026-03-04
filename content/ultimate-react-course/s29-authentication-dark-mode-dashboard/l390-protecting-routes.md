---
title: "Authorization: Protecting Routes"
lectureId: 390
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [authorization, protected-routes, guard, redirect]
---

## 中文短总结

`ProtectedRoute` 组件包裹整个应用。先获取当前用户 → 未登录则重定向到 `/login`。加载中显示全屏 Spinner。用 `useUser` hook 查询 Supabase session，根据 `isAuthenticated` 决定访问权限。

## 中文长总结

### useUser Hook
```jsx
export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    isLoading,
    user,
    isAuthenticated: user?.role === "authenticated",
  };
}
```

### API
```js
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return data?.user;
}
```

### ProtectedRoute 组件
```jsx
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuthenticated) return children;
}
```

### 使用
```jsx
<BrowserRouter>
  <Routes>
    <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
      <Route index element={<Navigate replace to="dashboard" />} />
      <Route path="dashboard" element={<Dashboard />} />
      {/* ... other routes */}
    </Route>
    <Route path="login" element={<Login />} />
  </Routes>
</BrowserRouter>
```

## English Short Summary

`ProtectedRoute` wraps app, checks authentication via `useUser`. Not logged in → redirect to `/login`. Loading → full-screen spinner. `getCurrentUser` checks Supabase session. Login route stays outside protection.

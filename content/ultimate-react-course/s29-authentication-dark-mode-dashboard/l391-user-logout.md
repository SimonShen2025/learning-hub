---
title: "User Logout"
lectureId: 391
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [logout, supabase-auth, session, navigation]
---

## 中文短总结

登出功能：`supabase.auth.signOut()` 清除 session。`useLogout` hook 成功后 `queryClient.removeQueries()` 清空所有缓存 → 导航到 `/login`。Header 中放置 Logout 按钮。

## 中文长总结

### API
```js
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
```

### useLogout Hook
```jsx
export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logoutFn, isLoading } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout: logoutFn, isLoading };
}
```

### 使用
```jsx
function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}
```

### 关键点
- `removeQueries()` 清空所有缓存（不仅是 user）
- `replace: true` 防止回退到受保护页面
- 加载时显示 SpinnerMini 替代图标

## English Short Summary

Logout: `supabase.auth.signOut()` → `queryClient.removeQueries()` clears all cache → navigate to `/login` with `replace: true`. Logout button in header with loading spinner.

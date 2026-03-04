---
title: "Authentication: User Login With Supabase"
lectureId: 389
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [authentication, login, supabase-auth, session]
---

## 中文短总结

用 Supabase Auth 实现登录。`supabase.auth.signInWithPassword({ email, password })` 验证用户。登录成功后 → queryClient 设置 user 缓存 → 导航到首页。LoginForm 组件收集邮箱和密码。

## 中文长总结

### API
```js
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}
```

### useLogin Hook
```jsx
export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: loginFn, isLoading } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.error("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login: loginFn, isLoading };
}
```

### LoginForm
```jsx
function LoginForm() {
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("password123");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password }, { onSettled: () => { setEmail(""); setPassword(""); } });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={isLoading} />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={isLoading} />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>Log in</Button>
      </FormRowVertical>
    </Form>
  );
}
```

### 关键点
- `setQueryData` 手动设置缓存 → 避免额外 fetch
- `replace: true` 替换历史记录 → 登录后按返回不回到 login

## English Short Summary

Login with Supabase Auth: `signInWithPassword({ email, password })`. `useLogin` mutation sets user cache via `setQueryData`, navigates to dashboard with `replace: true`. LoginForm with email/password inputs.

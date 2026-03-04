---
title: "Adding Fake Authentication: Implementing \"Login\""
lectureId: 239
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, context-api, authentication, login, worldwise]
---

## 中文短总结

实现登录功能和 UI。Login 页面表单 → 调用 `login(email, password)` → 成功后 `navigate("/app")`。登录后显示用户头像和名字。登出按钮调用 `logout()` → 导航回首页。useAuth() 自定义 Hook 访问认证上下文。

## 中文长总结

### Login 页面
```jsx
function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/app", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={...} />
      <input type="password" value={password} onChange={...} />
      <button>Login</button>
    </form>
  );
}
```

### 用户显示
```jsx
function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
```

## English Short Summary

Login implementation: form submits `login(email, password)`, useEffect navigates to `/app` on success. User component shows avatar/name + logout button. logout() clears state + navigates home. useAuth() hook for context access.

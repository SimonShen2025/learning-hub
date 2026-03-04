---
title: "Adding Fake Authentication: Setting Up Context"
lectureId: 238
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, context-api, authentication, worldwise]
---

## 中文短总结

搭建假认证系统。创建 AuthContext + AuthProvider。state 包含 user 和 isAuthenticated。假认证 — 硬编码用户名密码对比（无真实 API）。目的是学习认证流程架构，不是安全实现。

## 中文长总结

### AuthContext
```jsx
const AuthContext = createContext();

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      setUser(FAKE_USER);
      setIsAuthenticated(true);
    }
  }

  function logout() {
    setUser(null);
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
```

### 使用
```jsx
// App.jsx
<AuthProvider>
  <CitiesProvider>
    <BrowserRouter>...</BrowserRouter>
  </CitiesProvider>
</AuthProvider>
```

### "假"的含义
- 无真实后端验证
- 密码明文比对
- 仅为演示认证架构
- 真实应用需要 JWT、OAuth 等

## English Short Summary

Fake authentication setup: AuthContext with user, isAuthenticated state. Login compares hardcoded credentials (no real API). Demonstrates auth architecture pattern: Context provides login/logout/user/isAuthenticated. Real apps need JWT/OAuth.

---
title: "Building The App Header"
lectureId: 396
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [header, avatar, user-info, layout]
---

## 中文短总结

构建应用 Header。显示当前用户头像和姓名。`useUser` hook 获取用户信息。HeaderMenu 包含用户头像/姓名 + 账户设置链接 + 暗色模式切换 + 登出按钮。从 `user_metadata` 读取 fullName 和 avatar。

## 中文长总结

### Header 组件
```jsx
function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}
```

### UserAvatar
```jsx
function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <StyledUserAvatar>
      <Avatar
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${fullName}`}
      />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}
```

### HeaderMenu
```jsx
function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}
```

## English Short Summary

App Header: displays user avatar + name from `user_metadata`. HeaderMenu with account settings link, dark mode toggle, and logout button. `useUser` hook provides current user info.

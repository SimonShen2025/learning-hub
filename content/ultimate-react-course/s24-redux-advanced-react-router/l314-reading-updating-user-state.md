---
title: "Reading and Updating the User State"
lectureId: 314
section: 24
sectionTitle: "Adding Redux and Advanced React Router"
date: "2026-03-04"
tags: [redux, useSelector, useDispatch, state-management]
---

## 中文短总结

在组件中使用 `useSelector` 读取 Redux state，`useDispatch` 分发 action 更新 state。多个组件可订阅同一 state。用户名输入后 dispatch `updateName`，Header 和 Cart 等组件都能读取到最新值。

## 中文长总结

### 读取 State
```jsx
import { useSelector } from "react-redux";

function Username() {
  const username = useSelector(state => state.user.username);
  if (!username) return null;
  return <div className="text-sm font-semibold">{username}</div>;
}
```

### 更新 State
```jsx
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={e => setUsername(e.target.value)} />
      <Button type="primary">Start ordering</Button>
    </form>
  );
}
```

### 状态流转
1. 用户输入名字 → dispatch `updateName(name)`
2. Redux store 更新 `state.user.username`
3. 所有用 `useSelector` 订阅的组件自动 re-render
4. Header 显示用户名、Cart 页显示 "Your cart, {username}"

## English Short Summary

Read Redux state with `useSelector(state => state.user.username)`. Update with `useDispatch()` + `dispatch(updateName(value))`. Multiple components subscribe to same state — all re-render on updates.

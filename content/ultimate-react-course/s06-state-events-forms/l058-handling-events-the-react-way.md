---
title: "Handling Events the React Way"
lectureId: 58
section: 6
sectionTitle: "State, Events, and Forms: Interactive Components"
date: "2026-03-04"
tags: [react, events, onClick, event-handling]
---

## 中文短总结

React 事件处理是**声明式**的：在 JSX 中用 `onClick={handleClick}` 绑定事件（不是 `addEventListener`）。事件处理函数命名约定 `handleXxx`。**注意**：传递函数引用（`onClick={handleClick}`），不是函数调用（`onClick={handleClick()}` ❌ 会立即执行）。

## 中文长总结

### React 事件处理
```jsx
function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click me</button>;
}
```

### 关键规则
1. **传函数引用，不是调用**
   - ✅ `onClick={handleClick}`
   - ❌ `onClick={handleClick()}` → 渲染时就执行了！

2. **内联写法**
   ```jsx
   <button onClick={() => alert("clicked!")}>Click</button>
   ```

3. **命名约定**
   - 事件处理函数：`handleClick`、`handleSubmit`、`handleChange`
   - Props 名：`onClick`、`onSubmit`、`onChange`

### 常用事件
- `onClick` — 点击
- `onChange` — 输入变化
- `onSubmit` — 表单提交
- `onMouseEnter` — 鼠标悬停

### 与 Vanilla JS 对比
| Vanilla JS | React |
|-----------|-------|
| `el.addEventListener('click', fn)` | `onClick={fn}` |
| 命令式：手动绑定 | 声明式：JSX 属性 |

## English Short Summary

React handles events declaratively via JSX attributes: `onClick={handleClick}`. Pass function references, not calls (`onClick={handleClick}` ✅, `onClick={handleClick()}` ❌ executes immediately). Naming convention: `handleXxx` for handlers. Common events: `onClick`, `onChange`, `onSubmit`.

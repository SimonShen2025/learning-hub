---
title: "Building a Form and Handling Submissions"
lectureId: 72
section: 6
sectionTitle: "State, Events, and Forms: Interactive Components"
date: "2026-03-04"
tags: [react, forms, onSubmit, preventDefault]
---

## 中文短总结

在 React 中使用标准 HTML `<form>` 元素。用 `onSubmit` 处理表单提交（不是给 button 加 onClick）。必须调用 `e.preventDefault()` 阻止页面刷新。表单包含 `<select>`（数量选择）和 `<input>`（物品名称），通过 state 管理输入值。

## 中文长总结

### 表单提交处理
```jsx
function Form() {
  function handleSubmit(e) {
    e.preventDefault();  // 阻止默认的页面刷新！
    // 处理提交逻辑...
  }

  return (
    <form onSubmit={handleSubmit}>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </form>
  );
}
```

### 关键点
1. **`onSubmit` 不是 `onClick`**：使用表单的 `onSubmit` 而非按钮的 `onClick`
2. **`e.preventDefault()`**：阻止 HTML 表单的默认提交行为（页面刷新）
3. **动态生成 select 选项**：`Array.from({ length: 20 })` 创建 1-20 的选项
4. 表单输入值的管理 → 下一讲（受控组件）

## English Short Summary

Use HTML `<form>` with `onSubmit` handler (not button onClick). Always call `e.preventDefault()` to prevent page reload. Generate select options dynamically with `Array.from()`. Form input state management covered next (controlled elements).

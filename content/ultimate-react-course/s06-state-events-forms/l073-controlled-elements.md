---
title: "Controlled Elements"
lectureId: 73
section: 6
sectionTitle: "State, Events, and Forms: Interactive Components"
date: "2026-03-04"
tags: [react, controlled-elements, forms, useState]
---

## 中文短总结

**受控组件**：让 React 的 state 成为表单输入的"单一数据源"（single source of truth）。三步法：1）创建 state 变量，2）`value={state}` 绑定输入值，3）`onChange={e => setState(e.target.value)}` 同步更新。不使用 DOM 读取值（`document.querySelector`），让 React 控制一切。

## 中文长总结

### 受控组件模式
```jsx
function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <form>
      <select
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
      >
        {/* options */}
      </select>
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
    </form>
  );
}
```

### 三步核心
1. **创建 state**：`const [value, setValue] = useState(initialValue)`
2. **绑定 value**：`value={value}` → React state 决定显示什么
3. **onChange 更新**：`onChange={e => setValue(e.target.value)}` → 输入变化同步到 state

### 为什么要受控
- **不受控**：DOM 自己管理输入值 → React 不知道值是什么
- **受控**：React state 管理输入值 → React 完全控制，可以做验证、格式化等
- React 推荐受控组件（单一数据源 = single source of truth）

### 注意事项
- `<select>` 的 `onChange` 返回的 `e.target.value` 是字符串 → 需要用 `Number()` 转换
- 提交后重置表单：`setDescription(""); setQuantity(1);`

## English Short Summary

Controlled elements: React state as single source of truth for form inputs. Three steps: 1) Create state, 2) Bind `value={state}`, 3) Sync with `onChange={e => setState(e.target.value)}`. React controls the input — no DOM reading needed. Reset form by resetting state after submission.

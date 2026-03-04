---
title: "React Fragments"
lectureId: 52
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, fragments]
---

## 中文短总结

**React Fragment**（`<>...</>` 或 `<React.Fragment>...</React.Fragment>`）让组件在不添加额外 DOM 节点的情况下返回多个元素。解决 JSX 必须有单根元素的限制。需要传 `key` prop 时必须用 `<React.Fragment key={...}>`（简写 `<>` 不支持 key）。

## 中文长总结

### 问题
```jsx
// JSX 必须有单个根元素 → 被迫加 <div>
function Component() {
  return (
    <div>  {/* 多余的 div！ */}
      <h1>Title</h1>
      <p>Content</p>
    </div>
  );
}
```

### Fragment 解决方案
```jsx
// 简写语法
function Component() {
  return (
    <>
      <h1>Title</h1>
      <p>Content</p>
    </>
  );
}

// 完整语法（需要传 key 时使用）
{items.map(item => (
  <React.Fragment key={item.id}>
    <dt>{item.term}</dt>
    <dd>{item.definition}</dd>
  </React.Fragment>
))}
```

### 何时使用
- 组件需要返回并列的多个元素，但不想添加额外 DOM 节点
- 列表渲染中每个 item 包含多个同级元素（需要用完整语法加 key）
- 保持 DOM 结构整洁（如 table 中的 tr/td）

## English Short Summary

React Fragment (`<>...</>`) returns multiple elements without adding extra DOM nodes. Solves JSX's single-root-element requirement. Use `<React.Fragment key={...}>` when a key is needed (shorthand `<>` doesn't support key). Keeps DOM clean.

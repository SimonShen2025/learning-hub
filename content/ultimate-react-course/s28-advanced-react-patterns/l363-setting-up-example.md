---
title: "Setting Up an Example"
lectureId: 363
section: 28
sectionTitle: "Advanced React Patterns"
date: "2026-03-05"
tags: [code-sandbox, setup, example]
---

## 中文短总结

在 CodeSandbox 上设置 Render Props 模式的学习示例。有一个 List 组件渲染产品列表和公司列表，但渲染每个 item 的方式硬编码在 List 中 — 这正是 Render Props 要解决的问题。

## 中文长总结

### 问题
```jsx
// ❌ List 组件硬编码了渲染方式
function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.productName}>
          {item.productName} - ${item.price}
        </li>
      ))}
    </ul>
  );
}
```

- 同一个 List 用于产品和公司
- 但产品和公司的渲染方式不同
- List 不知道每个 item 该怎么渲染

### 需要的方案
- 让 List 组件不关心 item 的具体渲染
- 由使用者决定每个 item 长什么样
- → 这就是 Render Props 模式

## English Short Summary

Set up CodeSandbox example with a List component that renders products and companies. Problem: rendering logic hardcoded in List. Need: let consumer decide how to render each item → solved by Render Props pattern.

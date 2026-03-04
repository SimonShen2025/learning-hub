---
title: "Setting Classes and Text Conditionally"
lectureId: 53
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, conditional-classes, dynamic-text]
---

## 中文短总结

用三元运算符或模板字符串动态设置 CSS 类名：`` className={`pizza ${soldOut ? "sold-out" : ""}`} ``。同时可条件显示不同的文本内容：`{soldOut ? "SOLD OUT" : price}`。这两个技巧在实际项目中非常常用（如高亮激活项、禁用按钮、状态标签等）。

## 中文长总结

### 条件设置 className
```jsx
<li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
  ...
</li>
```
- 模板字符串 + 三元运算符
- 也可以用变量提前计算：
  ```jsx
  const classes = `pizza ${soldOut ? "sold-out" : ""}`;
  <li className={classes}>
  ```

### 条件显示文本
```jsx
<span>{pizza.soldOut ? "SOLD OUT" : `$${pizza.price}`}</span>
```

### 实际应用场景
- 激活/选中状态：`active` class
- 禁用状态样式
- 错误/成功状态指示
- 响应式显示/隐藏
- 暗色/亮色主题切换

## English Short Summary

Dynamically set CSS classes using template literals + ternary: `` className={`pizza ${soldOut ? "sold-out" : ""}`} ``. Conditionally display text: `{soldOut ? "SOLD OUT" : price}`. Extremely common patterns for active states, disabled styles, and status indicators.

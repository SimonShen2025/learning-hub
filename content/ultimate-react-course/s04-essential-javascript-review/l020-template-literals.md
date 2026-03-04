---
title: "Template Literals"
lectureId: 20
section: 4
sectionTitle: "[Optional] Review of Essential JavaScript for React"
date: "2026-03-04"
tags: [javascript, template-literals]
---

## 中文短总结

模板字符串用反引号（`` ` ``）包裹，`${expression}` 插入任意 JS 表达式。比字符串拼接更简洁、可读性更好。React JSX 中常结合使用，如动态 className 或文本内容。

## 中文长总结

### 语法
```javascript
const summary = `${title} is a ${pages}-page book written by ${author}`;
```
- 反引号包裹，`${}` 内可放任意 JS 表达式（变量、函数调用、三元运算等）
- 支持多行字符串

### React 中常见用法
- 动态 class：`` className={`btn ${isActive ? 'active' : ''}`} ``
- 动态 style 值、URL 拼接
- 模板文本渲染

## English Short Summary

Template literals use backticks with `${expression}` for string interpolation. Accepts any JS expression inside `${}`. Commonly used in React for dynamic classNames, URLs, and text content.

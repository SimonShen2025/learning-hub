---
title: "Introduction to Styled Components"
lectureId: 329
section: 25
sectionTitle: "Setting Up Our Biggest Project + Styled Components"
date: "2026-03-04"
tags: [styled-components, css-in-js, basics]
---

## 中文短总结

Styled Components 基础。用 `styled.div` 创建带样式的组件。模板字面量写 CSS。样式完全隔离（生成唯一类名）。每个样式组件是真正的 React 组件，可组合、复用。

## 中文长总结

### 基本用法
```jsx
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  cursor: pointer;
`;

// 使用
function App() {
  return (
    <div>
      <H1>The Wild Oasis</H1>
      <Button>Check in</Button>
    </div>
  );
}
```

### 工作原理
1. `styled.div` 创建一个新 React 组件
2. 模板字面量中写标准 CSS
3. 编译时生成唯一类名（如 `.sc-bczRLJ`）
4. CSS 自动注入到 `<head>`

### 优势
| 特性 | 说明 |
|------|------|
| 隔离 | 样式不会泄漏到其他组件 |
| 组件化 | 样式即组件，可传 props |
| 动态 | 基于 props 改变样式 |
| SSR 支持 | 服务端渲染兼容 |
| 自动前缀 | 无需 autoprefixer |

## English Short Summary

Styled Components: CSS-in-JS library. `styled.div` creates styled React components with template literals. Styles are scoped (unique class names), composable, and support dynamic props. CSS auto-injected into `<head>`.

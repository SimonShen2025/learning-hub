---
title: "Styled Component Props and the 'css' Function"
lectureId: 331
section: 25
sectionTitle: "Setting Up Our Biggest Project + Styled Components"
date: "2026-03-04"
tags: [styled-components, props, css-function, dynamic-styles]
---

## 中文短总结

Styled Components 动态样式。通过 props 控制样式变体。`css` 辅助函数写多行条件样式。Heading 组件根据 `as` prop 渲染不同标签，根据自定义 prop 应用不同大小。

## 中文长总结

### 基于 Props 的动态样式
```jsx
import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

  line-height: 1.4;
`;

// 使用
<Heading as="h1">The Wild Oasis</Heading>
<Heading as="h2">Check in</Heading>
<Heading as="h3">Settings</Heading>
```

### css 函数
```jsx
import { css } from "styled-components";

// 当需要多行 CSS 时用 css``
const test = css`
  font-size: 1.5rem;
  font-weight: 500;
  color: red;
`;

// 直接在 styled 中使用
const StyledDiv = styled.div`
  ${test}
  padding: 1rem;
`;
```

### as prop
- Styled Components 内置 `as` prop
- 改变渲染的 HTML 标签
- `<Heading as="h2">` → 渲染 `<h2>` 元素但用 h2 的样式

### Transient Props（防止传递到 DOM）
```jsx
// 用 $ 前缀
const Heading = styled.h1`
  text-align: ${(props) => props.$textAlign || "left"};
`;
<Heading $textAlign="center">Title</Heading>
// $textAlign 不会传到 DOM
```

## English Short Summary

Dynamic Styled Components with props. `css` helper for multi-line conditional styles. `as` prop changes rendered HTML tag. Transient props (`$prefix`) prevent DOM forwarding. Create variants like Heading with different sizes.

---
title: "Building More Reusable Styled Components"
lectureId: 332
section: 25
sectionTitle: "Setting Up Our Biggest Project + Styled Components"
date: "2026-03-04"
tags: [styled-components, reusable, row, flag]
---

## 中文短总结

构建更多可复用的 Styled Components。Row 组件（`horizontal`/`vertical` 变体）。Flag 组件。用 `defaultProps` 设置默认 prop 值。展示如何用 Styled Components 创建设计系统基础组件。

## 中文长总结

### Row 组件
```jsx
const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

// 使用
<Row type="horizontal">
  <Heading as="h1">All cabins</Heading>
  <Filter />
</Row>
```

### 其他可复用组件
```jsx
// Input
const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

// Flag
const Flag = styled.img`
  max-width: 2rem;
  border-radius: var(--border-radius-tiny);
  display: block;
  border: 1px solid var(--color-grey-100);
`;
```

### 设计系统思路
- 基础组件：Heading, Row, Button, Input, Flag
- 用 CSS 变量保持一致性
- `defaultProps` 简化常用模式
- 每个组件只做一件事，可自由组合

## English Short Summary

Build reusable Styled Components: Row (horizontal/vertical), Input, Flag. Use `defaultProps` for defaults. CSS variables for consistency. Foundation of a design system — composable, single-responsibility components.

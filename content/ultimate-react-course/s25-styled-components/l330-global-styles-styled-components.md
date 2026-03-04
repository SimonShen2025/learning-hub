---
title: "Global Styles With Styled Components"
lectureId: 330
section: 25
sectionTitle: "Setting Up Our Biggest Project + Styled Components"
date: "2026-03-04"
tags: [styled-components, global-styles, createGlobalStyle]
---

## 中文短总结

用 `createGlobalStyle` 创建全局样式。定义 CSS 变量（颜色、阴影、边框圆角）。设置 `*` 重置和 `body` 基础样式。在 App 组件顶层渲染 `<GlobalStyles />`。为深色模式预留 CSS 变量。

## 中文长总结

### 创建全局样式
```jsx
// styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    /* Indigo */
    --color-brand-50: #eef2ff;
    --color-brand-100: #e0e7ff;
    --color-brand-500: #6366f1;
    --color-brand-600: #4f46e5;
    --color-brand-700: #4338ca;
    --color-brand-800: #3730a3;
    --color-brand-900: #312e81;

    /* Grey */
    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-500: #6b7280;
    --color-grey-900: #111827;

    --backdrop-color: rgba(255, 255, 255, 0.1);
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: "Sono", sans-serif;
    color: var(--color-grey-700);
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.4rem;
  }
`;

export default GlobalStyles;
```

### 在 App 中使用
```jsx
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>{/* ... */}</Routes>
      </BrowserRouter>
    </>
  );
}
```

### 关键点
- `createGlobalStyle` 不生成元素，只注入全局 CSS
- CSS 变量便于深色模式切换
- 放在最顶层，所有组件之前

## English Short Summary

`createGlobalStyle` for global CSS with Styled Components. Define CSS custom properties (colors, shadows, radii), reset styles, body defaults. Render `<GlobalStyles />` at top of App. CSS variables enable dark mode switching.

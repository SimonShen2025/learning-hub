---
title: "Building the Sidebar and Main Navigation"
lectureId: 335
section: 25
sectionTitle: "Setting Up Our Biggest Project + Styled Components"
date: "2026-03-04"
tags: [styled-components, sidebar, navigation, NavLink]
---

## 中文短总结

构建侧边栏和主导航。用 Styled Components 样式化 `NavLink`。Logo 组件。导航项用 react-icons 图标。Active 状态高亮。`&:hover` 和 `&:active` 伪类选择器在 Styled Components 中的使用。

## 中文长总结

### Sidebar
```jsx
const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}
```

### MainNav
```jsx
import { NavLink } from "react-router-dom";
import { HiOutlineHome, HiOutlineCalendar, HiOutlineCog } from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;
```

### 关键技巧
- `styled(NavLink)` — 样式化第三方组件
- `&` 引用当前组件（类似 SCSS）
- `.active` — React Router 自动添加的 active 类
- `grid-row: 1 / -1` — Sidebar 跨所有行

## English Short Summary

Build Sidebar and MainNav: `styled(NavLink)` for nav links with icons. Active state via `.active` class. Logo component. Sidebar spans full height with `grid-row: 1 / -1`. `&` for nesting (hover, active, svg styles).

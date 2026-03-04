---
title: "Building the App Layout"
lectureId: 334
section: 25
sectionTitle: "Setting Up Our Biggest Project + Styled Components"
date: "2026-03-04"
tags: [styled-components, layout, css-grid, outlet]
---

## 中文短总结

用 CSS Grid 构建应用整体布局。三区域：Header（顶部）+ Sidebar（左侧）+ Main（右侧内容区）。用 React Router `<Outlet />` 渲染子路由。Grid 模板：`grid-template-columns: 26rem 1fr`，`grid-template-rows: auto 1fr`。

## 中文长总结

### AppLayout 组件
```jsx
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}
```

### 路由嵌套
```jsx
<BrowserRouter>
  <Routes>
    <Route element={<AppLayout />}>
      <Route index element={<Navigate replace to="dashboard" />} />
      <Route path="dashboard" element={<Dashboard />} />
      {/* 其他路由... */}
    </Route>
    <Route path="login" element={<Login />} />
  </Routes>
</BrowserRouter>
```

### 布局说明
- Sidebar 占据左侧 26rem
- Main 占据剩余空间
- Header 横跨顶部（但只在右侧，Sidebar 高度 100%）
- Login 页不使用 AppLayout

## English Short Summary

Build app layout with CSS Grid: `26rem 1fr` columns, `auto 1fr` rows. Sidebar left, Header top-right, Main content with `<Outlet/>`. Nested routes: AppLayout wraps dashboard/bookings/cabins. Login page outside layout.

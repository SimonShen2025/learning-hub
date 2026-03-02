---
title: "Nested Routes & Layout Routes"
lectureId: 25
section: 7
sectionTitle: "React Router & Navigation"
date: "2026-03-03"
tags: ["react", "routing", "nested-routes", "layout"]
---

## Summary

Nested routes allow child routes to render inside a parent layout component. This is ideal for dashboard layouts, sidebars, and tabbed UIs.

## Key Concepts

- A parent route with `<Outlet />` renders the matched child route
- Index routes (`index`) render at the parent's exact path
- Layout routes have no `path` — used purely for shared UI

## Detailed Notes

```jsx
// Route config
<Routes>
  <Route path="/" element={<RootLayout />}>
    <Route index element={<HomePage />} />
    <Route path="courses" element={<CoursesLayout />}>
      <Route index element={<CourseListPage />} />
      <Route path=":courseId" element={<CourseDetailPage />} />
    </Route>
    <Route path="about" element={<AboutPage />} />
  </Route>
</Routes>

// RootLayout.jsx — shared navbar + footer
function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* child route renders here */}
      </main>
      <Footer />
    </>
  );
}
```

## Code Examples

```jsx
// Active link styling with NavLink
import { NavLink } from 'react-router-dom';

<NavLink
  to="/courses"
  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
>
  Courses
</NavLink>
```

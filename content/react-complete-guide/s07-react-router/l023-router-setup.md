---
title: "React Router v6 Setup"
lectureId: 23
section: 7
sectionTitle: "React Router & Navigation"
date: "2026-03-03"
tags: ["react", "routing", "react-router"]
---

## Summary

React Router is the standard client-side routing library for React SPAs. Version 6 introduced a simplified API with nested routes and layout routes.

## Key Concepts

- Install `react-router-dom` (not `react-router`)
- Wrap app in `<BrowserRouter>` (or `<RouterProvider>` for v6.4+)
- Define routes with `<Routes>` and `<Route>`
- Navigate programmatically with `useNavigate()`

## Detailed Notes

```bash
npm install react-router-dom
```

```jsx
// src/main.jsx
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
```

## Code Examples

```jsx
// Link component — client-side navigation (no page reload)
import { Link } from 'react-router-dom';

<nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
</nav>
```

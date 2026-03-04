---
title: "Error Boundaries"
lectureId: 405
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [error-boundary, react, error-handling, fallback]
---

## 中文短总结

Error Boundary 捕获 React 渲染错误。只能用 class component 实现。使用 `react-error-boundary` 库简化。包裹 App → 渲染错误时显示 fallback UI → 有"Try again"按钮重置。

## 中文长总结

### 安装
```bash
npm install react-error-boundary
```

### 使用
```jsx
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <StyledErrorFallback>
      <Box>
        <Heading as="h1">Something went wrong 🧐</Heading>
        <p>{error.message}</p>
        <Button size="large" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </Box>
    </StyledErrorFallback>
  );
}

// main.jsx
root.render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
```

### 关键点
- Error Boundary 只捕获 **渲染过程中** 的错误
- 不捕获：事件处理、异步代码、服务端代码
- `onReset` 重置时导航到首页
- 建议放在最外层包裹整个应用
- 也可以在特定组件周围放置更细粒度的 boundary

## English Short Summary

Error boundaries catch React render errors. `react-error-boundary` library simplifies implementation. `ErrorFallback` shows error message + "Try again" button. `onReset` navigates home. Wrap entire app at top level.

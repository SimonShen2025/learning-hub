---
title: "The Custom _app File"
lectureId: 498
section: 39
sectionTitle: "[Legacy] The Next.js Pages Router"
date: "2026-03-05"
tags: [_app, layout, global, pages-router]
---

## 中文短总结

`pages/_app.js` 是 Pages Router 的全局 App 组件。每次页面切换都会执行。用于：全局 CSS 导入、全局 Layout（Header/Footer）、Context Providers、持久化组件。相当于 App Router 的 `layout.js`。

## 中文长总结

### 基本 _app.js
```jsx
// pages/_app.js
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

### 添加 Layout
```jsx
// pages/_app.js
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
```

### 添加 Providers
```jsx
// pages/_app.js
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "../contexts/ThemeContext";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </SessionProvider>
  );
}
```

### _app vs App Router layout
```
Pages Router _app.js:
- 单一全局 layout
- 无法嵌套 layout
- 每次导航重新渲染

App Router layout.js:
- 嵌套 layout
- 不同路由段可以有不同 layout
- 共享 layout 不重新渲染
```

### _document.js
```jsx
// pages/_document.js — 自定义 HTML 结构
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

## English Short Summary

`_app.js`: global App wrapper, runs on every page. Import global CSS, add Layout (Header/Footer), wrap Providers. `_document.js` for custom HTML structure. Unlike App Router, only one global layout (no nesting).

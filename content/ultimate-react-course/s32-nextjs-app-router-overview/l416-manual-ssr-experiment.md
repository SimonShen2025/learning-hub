---
title: "Experiment: Manual SSR With React DOM + Node.js"
lectureId: 416
section: 32
sectionTitle: "Overview of Next.js With the App Router"
date: "2026-03-05"
tags: [ssr, manual, react-dom-server, nodejs, experiment]
---

## 中文短总结

手动实现 SSR 实验。Node.js 服务器 + `react-dom/server` 的 `renderToString()`。将 React 组件渲染为 HTML 字符串 → 返回给浏览器。此时页面还不能交互（没有 hydration）。

## 中文长总结

### 手动 SSR
```jsx
// server.js
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";

const app = express();

function Home() {
  return (
    <div>
      <h1>Hello from the server!</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </div>
  );
}

app.get("/", (req, res) => {
  const html = renderToString(<Home />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `);
});

app.listen(3000);
```

### 结果
- 浏览器收到完整 HTML → 立即显示
- 但按钮点击无反应（没有 JS → 没有事件处理）
- 需要 hydration 把 React 和 DOM 连接起来

### 关键 API
- `renderToString(jsx)` — 将 React 元素渲染为 HTML 字符串
- 只渲染初始状态，不包含交互逻辑
- 是旧的 API，新的是 `renderToPipeableStream`

## English Short Summary

Manual SSR experiment: Express server + `renderToString()` from `react-dom/server`. Renders React to HTML string. Page displays but no interactivity (buttons don't work). Demonstrates need for hydration.

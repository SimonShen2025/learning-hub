---
title: "Implementing Hydration"
lectureId: 418
section: 32
sectionTitle: "Overview of Next.js With the App Router"
date: "2026-03-05"
tags: [hydration, implementation, hydrateRoot, bundle]
---

## 中文短总结

实际实现 hydration。服务端返回 HTML + `<script>` 标签加载客户端 JS。客户端 JS 调用 `hydrateRoot(container, <App />)`。需要打包客户端代码（如用 webpack/vite）。按钮现在可以点击了！

## 中文长总结

### 服务端修改
```jsx
app.get("/", (req, res) => {
  const html = renderToString(<Home />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root">${html}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `);
});

// 提供静态文件
app.use(express.static("public"));
```

### 客户端代码
```jsx
// client.js
import { hydrateRoot } from "react-dom/client";
import Home from "./Home";

hydrateRoot(document.getElementById("root"), <Home />);
```

### 打包
```bash
# 需要打包客户端代码（JSX → 浏览器可运行的 JS）
npx esbuild client.jsx --bundle --outfile=public/client.js
```

### 完整流程
1. 用户访问 `/` → 服务器 `renderToString(<Home />)` → HTML
2. HTML 显示在浏览器 → 用户看到内容
3. 浏览器下载 `client.js`
4. `hydrateRoot` 接管 DOM → 绑定事件
5. Counter 按钮可以点击了 ✅

### 为什么需要框架
- 手动实现太复杂（打包、路由、数据获取）
- Next.js 自动处理所有这些

## English Short Summary

Implement hydration: server returns HTML + `<script>` for client bundle. Client calls `hydrateRoot(container, <App />)`. Bundle client code with esbuild/webpack. Full flow: SSR HTML → download JS → hydrate → interactive. Framework (Next.js) automates this.

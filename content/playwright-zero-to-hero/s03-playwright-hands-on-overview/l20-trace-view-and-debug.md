---
title: "Trace View and Debug"
lectureId: 20
section: 3
sectionTitle: "Playwright Hands-On Overview"
date: "2026-04-29"
tags: [playwright, debugging, trace]
---

## 中文短总结

三种调试方式：**Trace 模式**（`--trace on`）— 生成可视化步骤回放，适合 CI 分析；**Playwright Inspector**（`--debug`）— 独立调试窗口 + 浏览器，step over 逐步执行；**VS Code 内置调试器** — 断点调试，悬停查看变量值，最推荐的方式。

## 中文长总结

### 方式一：Trace 模式

```bash
npx playwright test --project=chromium --trace on
```

- 在 HTML 报告中生成 Traces 链接
- 点击后可看到每步操作的 before/after 状态截图
- `playwright.config.ts` 中默认配置 `trace: 'on-first-retry'`（首次重试时记录），可改为 `'on'`（始终记录）
- **适合 CI/CD 环境**分析失败测试

### 方式二：Playwright Inspector

```bash
npx playwright test --debug
```

- 打开两个窗口：Inspector 控制台 + 浏览器
- 支持 step over 按钮逐步执行
- Inspector 中显示详细的操作日志（locator 解析、元素状态检查、click 执行等）
- 可观察每步操作在浏览器中的实际效果

### 方式三：VS Code 内置调试器（最推荐）

- 在代码中设置断点（点击行号）
- Test Explorer 中点击 Debug 按钮
- VS Code 进入调试模式，提供 Continue/Step Over/Stop/Restart 按钮
- **悬停变量可查看当前值**，对复杂逻辑和数据处理特别有用
- 代码中高亮当前执行行

## English Short Summary

Three debug methods: Trace mode (`--trace on`) for CI analysis with visual step replay; Playwright Inspector (`--debug`) for step-over debugging with live browser; VS Code built-in debugger (recommended) with breakpoints and variable inspection on hover.

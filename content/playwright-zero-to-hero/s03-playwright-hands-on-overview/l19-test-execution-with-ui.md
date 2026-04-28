---
title: "Test Execution with UI"
lectureId: 19
section: 3
sectionTitle: "Playwright Hands-On Overview"
date: "2026-04-29"
tags: [playwright, ui-mode, test-runner, vscode-extension]
---

## 中文短总结

两种 UI 执行方式：**VS Code Playwright 扩展** — Test Explorer 中运行，浏览器保持打开可继续手动操作；**UI 模式**（`npx playwright test --ui`）— 可视化 runner，显示每步截图、action/before/after 状态、源代码高亮，支持 watch 模式自动重跑。

## 中文长总结

### 方式一：VS Code Playwright 扩展

- Test Explorer 侧边栏显示测试列表
- 可配置：有头/无头模式（Show Browser 勾选框）、默认浏览器选择
- **优势**：运行后浏览器保持打开，可继续手动探索应用
- 可直接在 spec 文件中点击行号旁图标运行单个测试
- 显示每步耗时

### 方式二：UI 模式

```bash
npx playwright test --ui
```

- 左侧显示测试列表，点击运行
- 每个步骤显示 **三种状态截图**：Action（操作时）、Before（操作前）、After（操作后）
- Source 区域高亮当前执行的代码行
- **Watch 模式** — 点击 watch 图标后，代码修改自动触发测试重跑

### 使用建议

- UI 模式适合调试和理解测试行为（双屏：UI runner + 源代码）
- VS Code 扩展适合需要实际浏览器交互的场景
- 两者结合使用效果最佳

### 注意

UI 模式中的页面是截图而非实际网站，不能在其中进行导航操作。

## English Short Summary

Two UI approaches: VS Code extension (live browser stays open for manual exploration) and UI mode (`npx playwright test --ui`) with step-by-step screenshots, action/before/after states, source highlighting, and watch mode for auto-rerun on code changes. Best used in combination.

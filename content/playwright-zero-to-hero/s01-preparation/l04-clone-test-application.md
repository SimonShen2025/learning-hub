---
title: "Clone Test Application"
lectureId: 4
section: 1
sectionTitle: "Preparation"
date: "2026-04-29"
tags: [playwright, setup, practice-app]
---

## 中文短总结

从 GitHub 克隆练习应用 `pw-practice-app`。步骤：`git clone` → `npm install --force` → `npm start`，应用运行在 `localhost:4200`。运行测试时需要保持应用终端开启，另开第二个终端执行 Playwright 命令。

## 中文长总结

### 操作步骤

1. 在 GitHub 搜索 `pw-practice-app`，复制仓库 clone URL
2. 选择本地目录，执行 `git clone <url>`
3. 在 VS Code 中打开克隆的项目
4. 执行 `npm install --force` 安装依赖（忽略 warnings 和 vulnerabilities，只要没有 errors 即可）
5. 执行 `npm start` 启动应用

### 注意事项

- 应用运行在 **localhost:4200**
- 应用包含各种 UI 元素：表单、日期选择器、对话框等，用于课程自动化练习
- `Ctrl+C` 会停止应用，需重新 `npm start`
- 运行测试时需 **两个终端并行**：一个保持应用运行，另一个执行 Playwright 命令

## English Short Summary

Clone `pw-practice-app` from GitHub. Run `npm install --force` then `npm start` — app serves at localhost:4200. Keep the app terminal running and use a second terminal for Playwright commands.

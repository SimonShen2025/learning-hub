---
title: "Configuration of Development Environment"
lectureId: 3
section: 1
sectionTitle: "Preparation"
date: "2026-04-29"
tags: [playwright, setup, nodejs, vscode]
---

## 中文短总结

开发环境配置需要三个组件：Node.js（安装 LTS 版本）、VS Code、Git。安装完成后在 VS Code 终端验证 `node -v` 和 `npm -v`。最后安装 Playwright Test for VS Code 扩展以获得集成测试运行器。

## 中文长总结

### 必需组件

1. **Node.js** — 用于在浏览器外运行 JavaScript/TypeScript。务必安装 **LTS 版本**（非 Current 版本），避免兼容性问题。推荐使用 pre-built installer 方式安装，选择对应系统和芯片架构（x64/ARM64）。
2. **VS Code** — 注意下载 Visual Studio **Code**，不是 Visual Studio。
3. **Git** — 先检查是否已安装：`git -v`。Windows 直接下载安装包；Mac 需先安装 Homebrew 再 `brew install git`。

### 验证安装

在 VS Code 终端执行：
- `node -v` — 确认 Node.js 已安装
- `npm -v` — 确认 npm 已安装

### VS Code 扩展

安装 **Playwright Test for VS Code** 扩展，安装后侧边栏出现测试运行器图标，用于管理和运行测试。

## English Short Summary

Dev environment requires Node.js (LTS version), VS Code, and Git. Verify with `node -v` and `npm -v`. Install the Playwright Test for VS Code extension for integrated test management.

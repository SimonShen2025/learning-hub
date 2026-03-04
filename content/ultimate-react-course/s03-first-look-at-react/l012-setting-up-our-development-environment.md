---
title: "Setting Up Our Development Environment"
lectureId: 12
section: 3
sectionTitle: "A First Look at React"
date: "2026-03-04"
tags: [setup, vscode, nodejs, eslint, prettier]
---

## 中文短总结

开发环境设置清单：安装 VS Code + Google Chrome + Node.js（≥v18）。VS Code 必装扩展：ESLint（代码 lint）和 Prettier（代码格式化）。关键设置：Auto Save = onFocusChange、Default Formatter = Prettier、Format On Save = on、ESLint Run = onSave。可选主题：One Monokai + Material Icons。最后导入课程提供的 3 个 VS Code snippets（cl、rfc、rsc）。

## 中文长总结

### 必需工具
| 工具 | 说明 |
|------|------|
| **VS Code** | 推荐的代码编辑器 |
| **Google Chrome** | 运行和调试 React 应用 |
| **Node.js ≥ v18** | React 工具链的运行环境（非 Node 开发），用 `node -v` 检查版本 |

### VS Code 必装扩展
- **ESLint**：自动查找代码错误和违反最佳实践的地方
- **Prettier**：自动格式化代码，保持一致性

### 关键 VS Code 设置
- `Auto Save` → **onFocusChange**（切换标签/窗口时自动保存）
- `Default Formatter` → **Prettier**
- `Format On Save` → **开启**
- `ESLint Run` → **onSave**（避免每次键入都检查）

### 可选美化
- 主题：One Monokai
- 文件图标：Material Icons

### Snippets
从课程 GitHub 仓库（setup 文件夹）导入 3 个代码片段：
- `cl` → `console.log()`
- `rfc` → React Functional Component 模板
- `rsc` → React Styled Component 模板

## English Short Summary

Dev environment setup: VS Code + Chrome + Node.js (≥v18). Essential VS Code extensions: ESLint and Prettier. Key settings: Auto Save on focus change, Prettier as default formatter, format on save enabled, ESLint run on save. Import 3 course snippets from GitHub (cl, rfc, rsc).

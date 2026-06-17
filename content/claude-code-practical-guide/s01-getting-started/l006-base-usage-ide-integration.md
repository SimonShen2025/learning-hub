---
title: "Base Usage & IDE Integration"
lectureId: 6
section: 1
sectionTitle: "Getting Started"
date: "2026-06-17"
tags: ["claude-code", "vscode", "permissions", "ide-integration"]
---

## 中文短总结

演示用自然语言 prompt 让 Claude Code 修改 Next.js 首页。默认模式编辑文件前需授权；VS Code 官方扩展提供 diff 预览。可选「allow all edits during session」减少重复确认，也可用 Command Palette 的 Focus Input 替代终端交互。

## 中文长总结

### 基本工作流

1. 启动 dev server，在 Claude Code 中描述任务（如将首页改为居中 "Hello World"）
2. Claude 自动探索代码库（读 package.json、搜索 page.tsx 等）
3. 默认模式下编辑前请求权限

### VS Code 集成

- 安装 Anthropic 官方 **Claude Code** 扩展
- 编辑请求以 side-by-side diff 展示（左旧右新）
- 可选：Accept / Reject，或「Yes, allow all edits during session」

### 替代界面

- Command Palette →「Claude Code: Focus Input」打开独立对话窗口
- 支持附加文件、粘贴图片
- 课程主要用终端，但 GUI 模式功能等价

### 关键实践

- 简单任务可用模糊 prompt；复杂任务应更具体（后续课程详述）
- Shift+Tab 切换 permission mode

## English Short Summary

Demo: prompt Claude Code to change a Next.js homepage. By default it asks permission before edits. VS Code extension shows diff previews. Use "allow all edits during session" to skip repeated prompts. Alternative: Focus Input panel via Command Palette instead of terminal.

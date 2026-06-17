---
title: "Using Screenshots For Prompting With Feedback"
lectureId: 39
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "screenshots", "plan-mode", "visual-feedback"]
---

## 中文短总结

可用截图向 Claude Code 提供视觉反馈：dashboard 不显示笔记 → Plan Mode 下 prompt 修复 → 验证 clickable 链接和渲染。截图 + 文字描述比纯文字更高效传达 UI 问题。

## 中文长总结

### 场景

Dashboard 路由不显示用户笔记，无法 click/view/edit/delete。

### 工作流

1. Plan Mode 下发 prompt：dashboard 显示用户笔记、可点击跳转 viewing page、正确渲染
2. 审查 plan → 批准 → 执行
3. 验证功能
4. 下一 prompt：添加 edit/delete 功能

### 截图 Prompting

- Claude Code 支持在 terminal 或 Focus Input 中**粘贴图片**
- 截图 + 描述 UI 问题 → Claude 理解 visual context
- 比纯文字描述 layout 问题更精确

### 模式

始终从 Plan Mode 开始较大 UI 变更，确认方向后再执行。

## English Short Summary

Use screenshots pasted into Claude Code for visual UI feedback. Demo: fix dashboard not showing notes via Plan Mode, then add edit/delete. Screenshot + text beats pure text for layout issues. Always plan before large UI changes.

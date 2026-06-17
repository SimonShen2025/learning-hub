---
title: "Advanced Permissions Management"
lectureId: 13
section: 1
sectionTitle: "Getting Started"
date: "2026-06-17"
tags: ["claude-code", "permissions", "accept-edits", "dangerously-skip-permissions"]
---

## 中文短总结

三种权限模式：默认（逐项确认）、Accept Edits（自动接受文件编辑，但 bash/git 等仍需确认）、`--dangerously-skip-permissions`（跳过所有确认，风险极高）。Shift+Tab 切换模式；可对特定 bash 命令设置永久 allow/deny。

## 中文长总结

### 默认模式

- 编辑文件前显示 diff 并请求确认
- 可选：单次 Yes / 本次 session 全部允许 / Escape 取消

### Accept Edits 模式（Shift+Tab）

- 自动接受**项目内代码文件**的编辑
- **仍不能**自动执行 bash 命令（git add/commit、创建文件夹等）
- 可对特定命令（如 git add、git commit）选择「不再询问」

### Dangerously Skip Permissions

```bash
claude --dangerously-skip-permissions
```

- 跳过所有权限请求，可完全 hands-off
- 风险：可删除 git 历史、执行破坏性脚本
- 项目外硬盘仍不可访问，但项目内可造成不可逆损失

### 最佳实践

- 日常开发：Accept Edits + 审查 git diff
- 完全 unattended：配合 Docker Sandbox 或 Native Sandbox 使用（下两节）

## English Short Summary

Three permission tiers: default (confirm each edit), Accept Edits (auto-approve file edits, bash still prompts), --dangerously-skip-permissions (skip all—high risk). Shift+Tab to switch modes. Can permanently allow/deny specific bash commands like git commit.

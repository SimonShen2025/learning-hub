---
title: "Configuring Claude Code"
lectureId: 8
section: 1
sectionTitle: "Getting Started"
date: "2026-06-17"
tags: ["claude-code", "configuration", "settings", "permissions"]
---

## 中文短总结

配置分三级：全局 `~/.claude/settings.json`、项目 `.claude/settings.json`、本地 `.claude/settings.local.json`（不提交 Git）。用 `/config` 交互修改。重要安全设置：deny 对 `.env` 文件的 read/write 权限。

## 中文长总结

### 配置层级

| 层级 | 路径 | 说明 |
|------|------|------|
| Global | `~/.claude/settings.json` | 用户级，所有项目生效 |
| Project | `.claude/settings.json` | 项目级，可提交 Git |
| Local | `.claude/settings.local.json` | 个人覆盖，不提交 Git |

修改 `/config` 中的值会写回对应 settings 文件。

### 常用设置

- **Always Thinking Enabled**：思考模式，耗 token 但复杂任务更好
- 官方文档维护完整 settings 列表（随版本变化）

### 权限规则（重要）

在 permissions 中 deny Claude 读取 `.env` 等敏感文件：

```
工具: Read, Write, Bash
规则: deny 匹配 **/.env 的文件
```

不是禁用 read/write 工具本身，而是限制特定路径。

## English Short Summary

Three config tiers: global (~/.claude/settings.json), project (.claude/settings.json), local (.claude/settings.local.json, gitignored). Use /config to tweak interactively. Critical security: deny Read/Write on .env files via permissions rules—not disabling tools entirely.

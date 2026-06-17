---
title: "Don't forget to configure!"
lectureId: 48
section: 3
sectionTitle: "Beyond Local CLI Usage"
date: "2026-06-17"
tags: ["claude-code", "desktop-app", "configuration"]
---

## 中文短总结

Desktop App 有独立配置项：Settings 中可启用 bypass permissions mode（永不询问权限）、查看 usage 剩余额度、字体/主题等。即使 GUI 模式也需注意权限和安全设置，与 CLI 配置互补。

## 中文长总结

### Desktop Settings 入口

点击 Settings → 多个配置面板

### 关键选项

- **Bypass permissions mode**：Desktop 中 Claude Code 永不请求权限（等同 CLI 的 skip-permissions）
- **Usage**：查看 token/额度消耗，决定是否节省
- **Appearance**：字体、主题等
- **Claude settings**：Claude Code 特定配置

### 注意事项

- Desktop bypass 默认可能未启用，但启用后风险同 CLI skip-permissions
- Desktop 与 CLI 共享项目级 `.claude/settings.json`
- 全局 Desktop 设置独立于 CLI `~/.claude/settings.json`

### 最佳实践

启用 bypass 前确保 sandbox 或 git 保护到位；定期查看 usage 避免超额。

## English Short Summary

Desktop App has its own settings: bypass permissions mode, usage monitoring, appearance. Bypass = never ask permissions (same risks as CLI). Desktop shares project .claude/settings.json but has separate global settings. Configure before hands-off usage.

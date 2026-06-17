---
title: "Using Agent Skills as Commands"
lectureId: 34
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "slash-commands", "agent-skills"]
---

## 中文短总结

自定义 skills 自动出现在 slash command 列表中（如 `/modern-accessible-html-jsx`）。输入 `/` 可访问 built-in 和 custom commands。Skills-as-commands 提供快捷方式，主动触发特定 skill 的 context 加载。

## 中文长总结

### Slash Commands 生态

- Built-in：`/clear`, `/config`, `/context`, `/plan`, `/sandbox` 等
- Custom skills → 自动注册为 `/skill-name` commands
- Custom commands → 独立 prompt 模板（下几节）

### Skills as Commands 的用途

- 主动触发 skill context，而非等 Claude 自动判断
- 快捷访问领域知识（如 React 最佳实践、HTML/JSX 无障碍规范）
- 与 built-in commands 并列出现在 `/` 菜单

### 使用场景

开发 React 组件时手动运行 `/modern-best-practice-react-components`，确保 Claude 遵循项目规范。

### 区分

| | Skill Command | Custom Command |
|---|--------------|----------------|
| 来源 | SKILL.md | .claude/commands/ 下的 prompt 模板 |
| 内容 | 领域知识/规则 | 可重复使用的 prompt |

## English Short Summary

Custom skills auto-appear as slash commands (e.g., /modern-accessible-html-jsx). Type / to see built-in + custom commands. Manually invoke skills to force-load their context. Distinct from custom commands which are reusable prompt templates.

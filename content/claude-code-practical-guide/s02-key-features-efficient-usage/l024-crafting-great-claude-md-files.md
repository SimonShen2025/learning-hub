---
title: "Crafting Great CLAUDE.MD Files"
lectureId: 24
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "claude-md", "project-memory"]
---

## 中文短总结

`CLAUDE.md` 是每个 Claude Code 项目的核心配置文件，内容自动注入每个新 session（含 `/clear` 后）。应包含项目规则、技术栈约定（如用 Bun 跑脚本）、Spec.md 引用等全局指令。可有多份 CLAUDE.md（如子目录）。

## 中文长总结

### CLAUDE.md 作用

- 位于项目根目录（或子目录）
- **自动加载**到每个 session 的 context
- 相当于项目的 persistent system instructions

### 应包含什么

- 包管理器约定（"Use Bun for scripts"）
- 技术栈与架构决策
- 指向 Spec.md 等关键文件的引用
- 编码规范、必须/禁止使用的模式
- 后续 field 使用规则

### 多文件支持

不限于根目录一份——子目录可有自己的 CLAUDE.md，scoped 到该路径下的工作。

### 与 Spec.md 的关系

- Spec.md：应用功能与架构描述
- CLAUDE.md：给 Claude Code 的操作指令与约束
- 在 CLAUDE.md 中引用 Spec.md，Claude 会自动找到

## English Short Summary

CLAUDE.md auto-loads into every session—put project rules, stack conventions (e.g., use Bun), and Spec.md references here. Can have multiple CLAUDE.md files in subdirectories. Think of it as persistent project instructions for Claude Code.

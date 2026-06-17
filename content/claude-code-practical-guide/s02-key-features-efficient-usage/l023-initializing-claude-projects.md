---
title: "Initializing Claude Projects"
lectureId: 23
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "project-setup", "bun", "tiptap"]
---

## 中文短总结

Spec 就绪后，开发者应手动完成「确定知道怎么做」的步骤：用 bun 安装 better-auth、zod、Tiptap 等依赖。AI 可能装错版本或漏包装，手动安装确保基础正确，再让 Claude Code 处理后续编码。

## 中文长总结

### 手动 vs AI 分工

**手动做（确定性高）：**
- `bun add better-auth` — auth 库
- `bun add zod` — 输入验证
- Tiptap 相关包 — 按官方安装文档复制命令

**交给 AI：**
- 基于已安装依赖编写业务代码
- 参考 Spec.md 实现功能

### 原则

作为开发者，你比 AI 更了解项目初始化最佳实践。关键基础设施（包管理、框架 scaffold）手动完成，减少 AI 幻觉导致的依赖问题。

### 跟练

课程 starter 已含 Next.js base；跟练者在此步骤安装上述包后再继续。

## English Short Summary

After Spec.md, manually install critical packages (better-auth, zod, Tiptap) via bun following official docs. Do what you know how to do correctly—don't rely on AI for dependency setup. Then hand off feature implementation to Claude Code.

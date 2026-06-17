---
title: "Making Sense of Prompt & Context Engineering"
lectureId: 20
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "prompt-engineering", "context-engineering"]
---

## 中文短总结

Prompt & Context Engineering 本质是写好输入：明确指令描述任务，提供相关上下文，避免无关信息。好输入通常带来好输出；LLM 虽能容忍差 prompt，但质量会下降。

## 中文长总结

### 核心公式

**Prompt = 明确指令 + 相关上下文**

### 指令（Instructions）

- 清晰描述 Claude Code 应完成的具体任务或问题
- 避免模糊、一次塞太多目标

### 上下文（Context）

- 提供任务相关的文件、文档、错误信息
- **不包含**无关信息——多余 context 会降低输出质量
- 知道某文件相关时用 `@filename` 显式引用（下节演示）

### 与 Vibe Coding 的区别

Agentic engineering 的核心：主动管理 AI 的输入，而非碰运气。

## English Short Summary

Prompt & context engineering = clear task instructions + relevant context, minus noise. Good input yields good output. LLMs tolerate bad prompts but quality drops. Foundation for all Claude Code workflows in this section.

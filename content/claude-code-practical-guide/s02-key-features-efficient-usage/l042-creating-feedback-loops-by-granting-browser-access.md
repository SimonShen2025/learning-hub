---
title: "Creating Feedback Loops by Granting Browser Access"
lectureId: 42
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "playwright", "browser-access", "feedback-loop"]
---

## 中文短总结

给 AI agent 验证手段很重要。Web 项目可通过 Playwright plugin/MCP 让 Claude Code 自动测试 UI：「用 Playwright 逐步测试所有主要功能，dev server 在 port 3001」。Browser access 创建 self-verification feedback loop。

## 中文长总结

### Feedback Loop 概念

AI 写完代码后应能**自行验证**是否正确，而非完全依赖开发者手动测试。

### Browser Access（Playwright）

- 安装 Playwright plugin/MCP
- Prompt 示例：
  ```
  Test the application using Playwright MCP.
  Test all main features step-by-step.
  Dev server running on port 3001.
  ```
- Claude 自动打开浏览器、点击、验证 UI 行为

### 前提

- Dev server 必须已运行
- 告知正确 port（默认 3000，课程用 3001）
- Playwright plugin 与 MCP 本质相同

### 局限

- Docker/Native Sandbox 中 browser 功能可能不稳定
- 复杂 UI 交互可能需要更详细 prompt

## English Short Summary

Grant Claude Code browser access via Playwright plugin/MCP for self-verification. Prompt it to test all main features against running dev server (specify port). Creates feedback loop—AI validates its own work. Alternative to manual QA after every change.

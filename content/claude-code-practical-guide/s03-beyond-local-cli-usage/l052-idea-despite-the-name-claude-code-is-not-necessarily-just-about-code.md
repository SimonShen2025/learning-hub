---
title: "Idea: Despite The Name, Claude Code Is Not (Necessarily) Just About Code"
lectureId: 52
section: 3
sectionTitle: "Beyond Local CLI Usage"
date: "2026-06-17"
tags: ["claude-code", "automation", "beyond-coding"]
---

## 中文短总结

Dispatch/Remote Control 本质是在本地运行 Claude Code agent——不限于编码。可 dispatch 浏览器操作、Excel 处理、PPT 制作等。甚至可在 VPS 上装 CLI + Remote Control，从 mobile 远程操控服务器。

## 中文长总结

### 超越 Coding

Claude Code 名字含 "Code"，但通过 Dispatch/Remote Control 触发的是**本地 agent**：
- Browser automation（有 browser access 时）
- 文件处理（Excel、PPT、PDF）
- 系统自动化任务
- VPS 上的远程操作

### VPS 场景

1. 在 VPS 安装 Claude Code CLI
2. 启动 Remote Control mode
3. 从 Mobile App 向 VPS 发送指令
4. VPS 执行并返回结果

### 创意用例

- 远程让 Claude 整理下载文件夹
- 自动生成周报/报告
- 监控并响应 webhook 事件

### 关键认知

Claude Code = 本地 AI agent with tools，coding 只是最 popular 的 use case。

## English Short Summary

Claude Code isn't just for coding—Dispatch/Remote Control invoke a local agent capable of browser automation, file processing, presentations, etc. Run CLI on a VPS + Remote Control for mobile-driven server automation. Name says "Code" but it's a general local AI agent.

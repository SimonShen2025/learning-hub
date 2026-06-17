---
title: "Claude Code Setup"
lectureId: 3
section: 1
sectionTitle: "Getting Started"
date: "2026-06-17"
tags: ["claude-code", "setup", "cli", "vscode"]
---

## 中文短总结

Claude Code 支持全平台，通过命令行安装后在项目目录运行 `claude` 启动。首次运行会询问是否信任当前文件夹——因为它会读写文件并执行命令（如测试）。课程使用 VS Code + Next.js  starter 项目演示。

## 中文长总结

### 安装与启动

- 官方文档提供各 OS 的一键安装命令
- 本质是 CLI 工具，无独立 GUI，但可与编辑器集成
- 在项目根目录终端运行 `claude` 进入交互模式

### 安全提示

首次启动会提示是否信任当前文件夹。Claude Code 会：
- 读写项目文件
- 执行 bash 命令（如跑测试）
- 因此不要在不可信目录运行

### 课程环境

- 编辑器：VS Code
- 示例项目：bare-bones Next.js（附 starter snapshot 供跟练）

## English Short Summary

Install Claude Code via official CLI commands (all OS supported). Run `claude` in a project directory—first launch asks you to trust the folder since it reads/writes files and executes commands. Demo uses VS Code with a Next.js starter project.

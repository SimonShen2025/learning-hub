---
title: "Using Claude Code's Native Sandboxing"
lectureId: 15
section: 1
sectionTitle: "Getting Started"
date: "2026-06-17"
tags: ["claude-code", "sandbox", "native-sandbox", "network-isolation"]
---

## 中文短总结

无 Docker 时可用内置 `/sandbox` 命令启用 Native Sandbox：限制文件访问到项目目录，并控制网络访问防数据外泄。Auto Allow 模式配合 skip-permissions 使用，settings 中写入 sandbox 配置后对所有 future session 生效。

## 中文长总结

### 为何需要 Native Sandbox

- 没有 Docker 或不想用 Docker
- Docker Sandbox 中 browser 等功能可能异常
- 需要 skip-permissions 体验但要有基本安全网

### 启用方式

1. 在 session 中运行 `/sandbox`
2. 选择 **Auto Allow**（推荐）或 Regular Permissions
3. 自动更新 `.claude/settings.json` 添加 sandbox 条目

### 安全特性

- 文件访问 scoped 到项目文件夹
- 网络访问受控，防止敏感数据 exfiltration
- 配合 `--dangerously-skip-permissions` 时，理论上无法误删整盘

### 讲师偏好

课程中不使用 skip-permissions，而是手动授权——便于在 AI 走错方向时及时干预。Sandbox + skip-permissions 适合偏好 hands-off 的开发者。

## English Short Summary

Built-in /sandbox command scopes file access to project folder and controls network to prevent data exfiltration. Choose Auto Allow for hands-off mode. Config persists in settings.json for all future sessions. Alternative to Docker Sandbox when browser features misbehave in Docker.

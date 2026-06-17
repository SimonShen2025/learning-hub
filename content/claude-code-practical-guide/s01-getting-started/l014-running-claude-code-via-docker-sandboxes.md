---
title: "Running Claude Code via Docker Sandboxes"
lectureId: 14
section: 1
sectionTitle: "Getting Started"
date: "2026-06-17"
tags: ["claude-code", "docker", "sandbox", "security"]
---

## 中文短总结

Docker Sandbox 可在隔离环境中运行 Claude Code，配合 skip-permissions 模式更安全：即使执行破坏性脚本也无法影响宿主机。项目文件在 sandbox 内仍可被修改（含 git 历史），但无法触及系统其他部分。

## 中文长总结

### 使用场景

想在 `--dangerously-skip-permissions` 模式下 hands-off 运行，但担心误删硬盘或执行危险脚本。

### Docker Sandbox 工作方式

- 需要 Docker 已安装并运行
- 用 `docker sandbox run claude`（或官方文档中的等效命令）启动
- 将本地项目包裹在临时 sandbox 中运行 Claude Code
- 默认以 bypass permissions 模式启动

### 安全边界

- ✅ 无法访问 sandbox 外的系统资源
- ⚠️ 仍可修改 sandbox 内项目文件、破坏 git 历史
- 比裸跑 skip-permissions 安全得多

### 限制

- 首次启动需重新 setup/connect
- 所有 CLI flag（如 `-p`）在 sandbox 内同样可用

## English Short Summary

Docker Sandbox isolates Claude Code when using skip-permissions mode. Run via `docker sandbox run claude`—project files are writable but host system is protected from destructive scripts. Safer hands-off automation; still can't recover damaged git history inside the project.

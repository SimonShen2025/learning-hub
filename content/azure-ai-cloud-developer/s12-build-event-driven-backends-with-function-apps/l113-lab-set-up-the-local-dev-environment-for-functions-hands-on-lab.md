---
title: "Lab: Set up the Local Dev Environment for Functions (Hands-On Lab)"
lectureId: 113
section: 12
sectionTitle: "Build Event Driven Backends with Function Apps"
date: "2026-09-22"
tags: ["azure-functions", "azure-functions-core-tools", "vs-code", "local-development"]
---

## 中文短总结

搭建 Azure Functions 本地开发环境需要两项准备：一是安装 Azure Functions Core Tools CLI（可用 winget 命令，或前往 learn.microsoft.com 下载 Windows/Mac/Linux 版本），安装后用 `func version` 命令验证；二是在 VS Code 扩展商店安装 Azure Functions 扩展，以便通过命令面板创建和管理 Function App 项目。

## 中文长总结

### 安装 Azure Functions Core Tools CLI

- 这是本地开发、测试和发布 Function App 所必需的命令行工具
- 可通过 Windows 包管理器执行 winget 命令进行安装
- 也可前往 learn.microsoft.com 搜索 "Azure Function Core Tools CLI" 下载页面，获取 Windows、macOS、Linux 各平台的安装指南
- 安装完成后，在终端执行 `func version` 命令验证版本号，确认安装成功

### 安装 VS Code 的 Azure Functions 扩展

- 在 VS Code 扩展市场搜索并安装 Azure Functions 扩展
- 该扩展提供通过命令面板创建 Function App 项目、选择触发器模板、本地调试及一键发布到 Azure 等功能，是后续实验的必备工具

## English Short Summary

Two prerequisites are needed for local Azure Functions development: installing the Azure Functions Core Tools CLI (via winget or the learn.microsoft.com installation guide for Windows/Mac/Linux, verified with `func version`), and installing the Azure Functions extension in the VS Code marketplace, which enables project scaffolding, trigger templates, and publishing from the command palette.

---
title: "Lab: Working with the KUDU Console (Hands-On Lab)"
lectureId: 31
section: 4
sectionTitle: "Containers and Azure Web Apps"
date: "2026-09-22"
tags: ["azure-app-service", "kudu", "debugging", "hands-on-lab"]
---

## 中文短总结

Kudu 控制台是 Azure Web App 内置的诊断工具，通过 `<app-name>.scm.azurewebsites.net` 访问，可查看应用运行状态、实时日志流（Log Stream）、已配置的环境变量，以及通过文件管理器浏览持久化存储（`/home` 目录）中的实际文件内容。

## 中文长总结

### 访问方式

- URL 格式：`<web-app-name>.scm.azurewebsites.net`
- 首次访问需登录 Azure 账号

### 主要功能

- **仪表盘视图**：显示当前定价层（如 Basic）、操作系统（Linux）
- **日志流（Log Stream）**：实时查看应用日志，包括状态码（200、404 等）与调试信息
- **环境（Environment）**：在配置面板下查看当前生效的环境变量（如指向 Key Vault 的 API Key 引用、Web App 名称、API 终结点、模型名）
- **文件管理器（File Manager）**：默认打开 `/home` 目录（持久化存储挂载点），可浏览此前实验中生成的 `chat_history` 文件夹及其中的 JSON 对话历史文件，直接查看时间戳、用户查询与模型回复内容

## English Short Summary

The Kudu console is a built-in diagnostic tool for Azure Web Apps, accessed via `<app-name>.scm.azurewebsites.net`. It shows the app's pricing tier and OS, a live Log Stream for status codes and debug info, the currently resolved Environment variables (including the Key Vault-backed API key reference), and a File Manager for browsing the `/home` persistent storage directory — including the previously saved `chat_history` JSON conversation files.

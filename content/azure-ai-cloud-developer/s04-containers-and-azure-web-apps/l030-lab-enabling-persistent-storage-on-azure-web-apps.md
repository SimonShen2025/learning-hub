---
title: "Lab: Enabling Persistent Storage on Azure Web Apps (Hands-On Lab)"
lectureId: 30
section: 4
sectionTitle: "Containers and Azure Web Apps"
date: "2026-09-22"
tags: ["azure-web-apps", "persistent-storage", "docker", "hands-on-lab"]
---

## 中文短总结

本实验演示为 Azure Web App 启用持久化存储：应用代码在 `/home/chat_history` 目录下写入每次对话的记录（该路径下的内容会被持久化），并设置系统环境变量 `WEBSITES_ENABLE_APP_SERVICE_STORAGE=true` 启用持久化存储。重启应用后，历史对话文件依然保留，验证了持久化生效。

## 中文长总结

### 应用改动

- 在 `app.py` 中新增：向 `/home/chat_history` 目录写入每次对话记录（时间戳、用户消息、模型回复），存为 JSON 文件
- 新增 `/history`（GET）端点，用于查看持久化目录中存储的所有对话历史文件
- **关键点**：必须使用 `/home` 路径下的目录才会被 Azure App Service 持久化；其他路径的内容会随容器重启丢失

### 部署新版本

- 构建 version 3 镜像（`docker build` → `docker tag` → `az acr login` → `docker push`）
- 在部署中心将镜像标签从 v2 改为 v3

### 启用持久化存储

- 在环境变量中新增系统定义变量 `WEBSITES_ENABLE_APP_SERVICE_STORAGE`，值设为 `true`
- 保存并重启应用实例使新版本与持久化存储配置生效

### 验证

1. 发送两次 `/chat` POST 请求，查询 `/history` 端点确认生成了两个 JSON 历史文件
2. 重启应用实例后再次查询 `/history`，确认两个历史文件依然存在，证明持久化存储生效（未随容器重启丢失）

## English Short Summary

Hands-on lab enabling persistent storage on an Azure Web App: the app writes each conversation (timestamp, user message, model reply) as a JSON file under `/home/chat_history` — a path Azure App Service persists across restarts — and exposes a `/history` GET endpoint to list them. After deploying v3 and setting the system environment variable `WEBSITES_ENABLE_APP_SERVICE_STORAGE=true`, the lab confirms that conversation history files survive an application restart.

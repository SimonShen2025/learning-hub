---
title: "Build serverless APIs, including implementing triggers and bindings"
lectureId: 23
section: 8
sectionTitle: "Develop and implement Azure Functions"
date: "2026-06-17"
tags: ["Azure Functions", "HTTP Trigger", "Triggers", "Bindings", "Serverless API"]
---

## 中文短总结

本讲介绍 **Azure Functions** 无服务器开发：在 VS Code 安装 Azure Functions 扩展，创建 Python HTTP Trigger 项目（`process document`），使用 **Azure Functions Core Tools**（`func start`）本地运行。演示两种函数：基础 HTTP 问候函数与调用 **Azure OpenAI GPT-4.1** 的文档摘要 API（POST JSON body 含 `text` 字段，返回摘要 JSON）。涵盖多种 Trigger 类型：HTTP、Timer、Blob、Event Grid、Cosmos DB、Service Bus 等。Function-level key 用于访问控制。

## 中文长总结

### Azure Functions 概述

- **Serverless**：无需部署 VM 或 App，按需执行
- AI-200 延续原 AZ-204 考点，Functions 仍是重要技能
- 可在 Portal 或 VS Code 中开发与运行

### 创建项目

1. VS Code 安装 **Azure Functions** 扩展
2. Command Palette → **Azure Functions: Create New Project**
3. 选择 Python、HTTP Trigger、函数名 `process document`
4. 授权级别：Anonymous / **Function** / Admin（演示选 Function level key）

### 本地运行

- `pip install azure-functions`
- `npm install -g azure-functions-core-tools`（Core Tools）
- `func start` → 本地 HTTP endpoint（如 `http://localhost:7071/api/processdocument`）

### 演示函数

**基础 HTTP Trigger**：
- GET/POST 查询参数或 body 中的 `name` → 返回问候语

**AI 摘要 API**（`function_app.py`）：
- POST body：`{"text": "..."}`
- 调用 Azure OpenAI GPT-4.1，prompt 为 "Summarize the following text in three bullet points"
- 返回 JSON 摘要
- 使用 `.http` 文件（REST Client 扩展）测试

### Trigger 类型（考试需知）

- **HTTP Trigger**：REST API endpoint
- **Timer Trigger**：定时调度
- **Blob Trigger**：Storage 文件变化
- **Event Grid Trigger**：Event Grid 事件
- **Cosmos DB Trigger**：容器变更
- **Service Bus Trigger**：队列/Topic 消息

## 考试要点

- Functions = **Trigger**（启动执行）+ **Bindings**（输入/输出连接）
- 常用 Trigger：HTTP、Timer、Blob、Event Grid、Cosmos DB、Service Bus
- 授权级别：**Anonymous**、**Function**（function key）、**Admin**（master key）
- 本地开发需 **Azure Functions Core Tools**（`func start`）
- VS Code **Azure Functions 扩展**用于创建与部署项目
- HTTP Trigger 可构建 serverless REST API，适合 AI endpoint 代理（需加安全控制）
- Python 项目结构含 `function_app.py`、`host.json`、`local.settings.json`

## English Short Summary

This lecture covers building serverless APIs with Azure Functions. Using the VS Code Azure Functions extension, a Python HTTP Trigger project (`process document`) is created and run locally via Azure Functions Core Tools (`func start`). Two functions are demonstrated: a basic HTTP greeting and an AI summarization API that POSTs text to Azure OpenAI GPT-4.1 and returns a JSON summary. Key trigger types include HTTP, Timer, Blob, Event Grid, Cosmos DB, and Service Bus. Authorization levels (Anonymous, Function, Admin) control access. Functions provide a serverless pattern for exposing AI endpoints, though production deployments require proper security.

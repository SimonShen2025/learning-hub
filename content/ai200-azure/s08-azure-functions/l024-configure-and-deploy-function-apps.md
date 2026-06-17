---
title: "Configure and deploy function apps"
lectureId: 24
section: 8
sectionTitle: "Develop and implement Azure Functions"
date: "2026-06-17"
tags: ["Azure Functions", "Deployment", "App Settings", "CORS", "Application Insights"]
---

## 中文短总结

本讲将 VS Code 中的 Function 部署到 Azure：Command Palette → **Deploy to Function App**，创建新 Function App（Python、Canada East）。部署后自动创建 App Service Plan、Storage Account 和 **Application Insights**。在 Portal **Environment variables（App Settings）** 配置 `OPENAI_ENDPOINT` 与 `OPENAI_KEY`；配置 **CORS**（演示用 `*` 允许所有来源）。可通过 Portal 内置 Test 面板或 VS Code `.http` 文件测试远程 API。Portal 内可直接编辑函数代码无需重新部署。

## 中文长总结

### 部署流程

1. VS Code Command Palette → **Azure Functions: Deploy to Function App**
2. 选择订阅 → **Create new Function App**
3. 指定区域（如 Canada East）、唯一名称（如 `azai200function`）
4. 选择运行时：**Python**
5. 部署完成后在 Portal 查看资源组中的 Function App

### 自动创建的资源

- **App Service Plan**（托管计划）
- **Storage Account**（Functions 内部状态）
- **Application Insights**（默认启用监控）

### 配置 App Settings

- 代码中引用的 `OPENAI_ENDPOINT`、`OPENAI_KEY` 等必须通过 **Settings → Environment variables** 配置
- 保存后 Function App 自动重启
- 生产环境不应将密钥硬编码在代码中

### CORS 配置

- **API → CORS**：跨域资源共享
- 浏览器从外部域名调用 API 时，未配置 CORS 会返回 500 错误
- 演示配置 `*`（允许所有来源）；生产应限制为具体应用 URL

### 测试方式

1. **Portal Test 面板**：POST JSON `{"text": "..."}`，带 function authorization key
2. **VS Code REST Client**：更新 `.http` 文件中的远程 URL，发送请求

### Portal 内编辑

- Function App → Functions → 选择函数 → **Code + Test**
- 可直接在浏览器修改代码，无需重新部署

## 考试要点

- 部署方式：VS Code **Deploy to Function App** 或 CLI/Portal
- 敏感配置通过 **App Settings / Environment variables**，非代码硬编码
- 修改 App Settings 会触发 Function App **重启**
- **CORS** 必须配置才能从浏览器跨域调用 HTTP Trigger
- 部署默认创建 **Application Insights** 用于监控
- Function App 运行在 **App Service Plan** 上，关联 **Storage Account**
- Portal 提供在线代码编辑与内置测试 harness
- 授权：Function-level key 需在请求中传递（query `code=` 或 header）

## English Short Summary

This lecture deploys the VS Code Function project to Azure via **Deploy to Function App**, creating a new Python Function App with an App Service Plan, Storage Account, and Application Insights. Post-deployment, OpenAI endpoint and key are configured as App Settings (environment variables), triggering an automatic restart. CORS is configured (demo uses `*`; production should restrict origins) to allow browser-based API calls. The function is tested via the Portal's built-in test panel and VS Code REST Client. The Portal also allows in-browser code editing without redeployment. Key exam topics: App Settings for secrets, CORS for cross-origin access, and Application Insights for monitoring.

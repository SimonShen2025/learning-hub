---
title: "Lab: Create an HTTP-Triggered App Locally and publish to Azure (Hands-On Lab)"
lectureId: 115
section: 12
sectionTitle: "Build Event Driven Backends with Function Apps"
date: "2026-09-22"
tags: ["azure-functions", "http-trigger", "azure-openai", "vs-code", "azure-cli"]
---

## 中文短总结

使用 VS Code 的 Azure Functions 扩展命令面板创建本地 Python Function App 项目，选择 HTTP Trigger 模板并设置为 Function 级别授权（需主/辅密钥才能触发，而非匿名）。生成的项目包含 function_app.py（主逻辑）、host.json、local.settings.json 和 requirements.txt。函数逻辑接收 POST 请求 JSON 中的 user query，构造 Azure OpenAI 客户端调用聊天模型并返回响应；声明 azure-functions 和 openai SDK 依赖后，通过 `az login` 并用 Function Core Tools CLI 将函数发布到已创建的 Function App 资源，最后在门户 Application Settings 中配置终结点、API Key 与模型名称三个环境变量并重启应用。

## 中文长总结

### 本地项目脚手架

- 在 VS Code 命令面板（Ctrl+Shift+P）搜索 Azure Functions，选择 "Create Function" 创建新项目
- 选定本地文件夹、语言为 Python、本地 Python 环境版本（如 3.14.4）
- 触发器模板选择 **HTTP trigger**，函数命名如 `OpenAIHTTPTriggerFunction`
- 授权级别选择 **Function**（需要主/辅密钥才能触发；Anonymous 则无需认证，本例不采用）
- 脚手架自动生成：`.gitignore`、`host.json`（含 Application Insights 引用与运行时版本配置）、`local.settings.json`（本地环境变量占位）、`requirements.txt`

### 编写函数逻辑

- 主文件 `function_app.py` 中定义与函数同名的处理函数
- 需手动补充依赖导入：`os`、`azure.ai.openai`（Azure OpenAI 客户端）、`json`
- 逻辑：从环境变量读取 Azure OpenAI 终结点、API Key 和模型部署名 → 解析 POST 请求体中的 user query → 构造 Azure OpenAI 客户端，以 "You are a helpful assistant" 为系统提示，温度设为 0.7，调用聊天模型 → 返回 assistant 响应作为函数输出
- 在 `requirements.txt` 中声明依赖：`azure-functions==2.1.0`、`openai==2.38.0`

### 发布到 Azure

- 通过 `az login` 完成 Azure CLI 登录
- 在包含 `function_app.py` 的本地项目目录下，使用 Function Core Tools CLI 命令并指定目标 Function App 资源名称（如 `AI200FunctionApp`）执行发布
- 发布成功后，门户中该 Function App 资源的 Functions 列表会出现新函数，且代码内容与本地一致

### 配置应用设置并重启

- 由于代码中读取的三个环境变量未写入 `.env`，需要在门户 Function App 的 **Application Settings** 中手动新增：Azure OpenAI 终结点、API Key、聊天模型名称（如 GPT-4.1），且变量名必须与代码中完全一致
- 保存设置后需要**重启** Function App 使新配置生效

## English Short Summary

Scaffolded a local Python Function App via the VS Code Azure Functions extension, using the HTTP trigger template with Function-level authorization. The project reads a user query from the POST body and calls an Azure OpenAI chat model using endpoint/key/model-name environment variables. After declaring the azure-functions and openai dependencies, the function was published via `az login` and the Functions Core Tools CLI, then the variables were set in the portal and the app restarted.

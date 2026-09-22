---
title: "Lab: Environment Variables and Secrets in Azure Container Apps (Hands-On Lab)"
lectureId: 50
section: 6
sectionTitle: "Deploy and Manage AI Apps on Azure Container Apps (ACA)"
date: "2026-09-22"
tags: ["azure-container-apps", "environment-variables", "secrets", "azure-cli"]
---

## 中文短总结

使用 Azure CLI 将一个 Python Flask 后端（读取 Azure OpenAI 端点、API Key、模型部署名）构建为 Docker 镜像并推送到 ACR，然后通过 `az containerapp create` 命令创建容器应用：普通配置项作为环境变量传入，敏感的 API Key 声明为 secret，环境变量再通过 `secretref` 引用该 secret，从而在门户中不会显示明文密钥。

## 中文长总结

### 应用与准备工作

- 后端是一个简单 Python 应用（`chat-backend` 文件夹），通过环境变量/密钥获取 Azure OpenAI 端点、API Key、模型部署名，创建 Azure OpenAI 客户端并暴露 `/chat` 接口，监听端口 5000
- 在 bash 终端中预先设置一系列导出变量（ACR 名称、Azure OpenAI 端点、API Key、模型部署名、资源组名、Container Apps 环境名），供后续 CLI 脚本复用

### 构建与推送镜像

1. 在 `chat-backend` 目录下使用 Docker 构建镜像（命名为 `chat-backend`）
2. 登录 ACR，重新打标签为 ACR 命名规范，推送到 ACR 仓库
3. 在 ACR 门户的 Repositories 中确认镜像已上传成功

### 创建容器应用并声明环境变量/密钥

- 使用 `az containerapp create` 在指定资源组和环境中创建名为 `chat-backend-app` 的容器应用
- 关键参数：镜像来源、暴露端口 5000、`ingress external`（允许公网访问）、`system-assigned` 托管标识（用于 ACR 拉取）
- **secrets**：声明 Azure API Key 为 secret，值来自 bash 导出变量
- **环境变量**：Azure API 端点、模型部署名作为普通环境变量直接声明；Azure API Key 作为环境变量时，通过 `secretref` 引用之前声明的 secret，而不是明文写入

### 验证

- 部署完成后，通过应用的完全限定域名（FQDN）发送 `curl POST` 请求到 `/chat` 接口，验证与 GPT-4.1 模型的对话正常工作
- 在门户 Container → Environment variables 中查看：普通环境变量显示明文值，而 Azure API Key 仅显示对 secret 的引用，不显示实际值

## English Short Summary

Built a Python Flask backend reading the Azure OpenAI endpoint, API key, and model deployment name from environment variables/secrets, pushed the Docker image to ACR, then used `az containerapp create` to deploy it: plain config values as environment variables, the sensitive API key declared as a secret and referenced via `secretref` so the raw value never appears in the portal.

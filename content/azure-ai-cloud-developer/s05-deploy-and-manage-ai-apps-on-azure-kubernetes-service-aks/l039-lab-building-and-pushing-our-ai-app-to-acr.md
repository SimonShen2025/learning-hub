---
title: "Lab: Building and Pushing our AI App to ACR (Hands-On Lab)"
lectureId: 39
section: 5
sectionTitle: "Deploy and Manage AI Apps on Azure Kubernetes Service (AKS)"
date: "2026-09-22"
tags: ["docker", "react", "azure-container-registry", "hands-on-lab"]
---

## 中文短总结

本实验构建一个 React JS 聊天机器人前端（通过 REST/curl 方式调用 Azure OpenAI，而非 Python SDK），基于 `node:18-alpine` 编写 Dockerfile（`npm install` → `npm run build` → 暴露端口 80），本地构建验证后推送到 ACR，为后续部署到 AKS 做准备。

## 中文长总结

### 应用与环境变量

- 应用为 React JS 聊天机器人，`.env` 中需配置 Microsoft Foundry API Key、Azure OpenAI 终结点、模型部署名
- 由于该应用以 REST（curl）方式直接调用，终结点需从 Foundry 门户 Build → Deployments → 选择模型 → "Call Model" → 切换到 curl 代码片段处获取，而非"密钥和终结点"页面的 OpenAI 标签终结点
- `app.jsx` 中通过 `fetch` 向该终结点发起 POST 请求，`max_tokens=4096`，`temperature=1`

### Dockerfile 要点

- 基础镜像：`node:18-alpine`
- 工作目录 `/app`，复制 `package.json` 并执行 `npm install`
- 复制环境变量与其余应用文件，执行 `npm run build`
- 暴露端口 **80**（前端应用监听端口）

### 构建、本地验证与推送

1. 在包含 Dockerfile 的目录执行 `docker build -t aoai-chat-app:latest .`
2. 本地运行验证：`docker run` 映射 `localhost:5000` → 容器端口 80，浏览器访问确认聊天界面正常工作
3. `az acr login --name $ACR_NAME` 登录 ACR
4. `docker tag` 按 `<acr>.azurecr.io/aoai-chat-app:latest` 命名规则重新打标签，`docker push` 推送至 ACR

## English Short Summary

Hands-on lab building a React JS chatbot frontend that calls Azure OpenAI via a REST/curl-style endpoint (grabbed from Foundry's Build → Deployments → Call Model tab rather than the standard OpenAI endpoint). The Dockerfile uses `node:18-alpine`, runs `npm install` and `npm run build`, and exposes port 80. After building and verifying the app locally with `docker run`, the image is tagged and pushed to Azure Container Registry in preparation for the next lab's AKS deployment.

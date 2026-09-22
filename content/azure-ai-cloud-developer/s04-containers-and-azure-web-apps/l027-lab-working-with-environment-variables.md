---
title: "Lab: Working with Environment Variables (Hands-On Lab)"
lectureId: 27
section: 4
sectionTitle: "Containers and Azure Web Apps"
date: "2026-09-22"
tags: ["azure-web-apps", "environment-variables", "docker", "hands-on-lab"]
---

## 中文短总结

本实验演示最佳实践：不在构建镜像时写死环境变量值，而是修改 `app.py` 读取运行时环境变量的方式，重新构建并推送 version 2 镜像，然后在 Azure Web App 的"环境变量"设置中动态配置这些值（终结点、API Key、模型名），重启后应用即可在不依赖 `.env` 文件内容的情况下正常工作。

## 中文长总结

### 最佳实践说明

- 此前做法：在构建容器镜像前，先将值写入 `.env` 文件，属于反模式（会将敏感信息烘焙进镜像）
- 正确做法：构建镜像时不填充环境变量值，运行时（在 Azure Web App 实例上）动态注入

### 实施步骤

1. 修改 `app.py`：将原先从 `.env` 文件读取变量的方式（`os.getenv`）替换为从 Azure Web App 运行时环境变量读取的写法
2. 清空 `.env` 文件中的值，证明应用不再依赖该文件
3. 重新执行 `docker build`（版本号 v2）、`docker tag`、`az acr login`、`docker push`，将新镜像推送到 ACR
4. 在 Azure Web App 的部署中心，将容器镜像标签从 v1 改为 v2 并应用
5. 在"环境变量"设置区域添加三个变量（须与代码中变量名完全一致）：Azure API URL、Azure API Key、Azure 模型名，并填入对应值
6. 重启 Web App 实例，使 v2 镜像与新配置的环境变量生效

### 验证

- 访问 `/health` 确认应用状态健康
- 通过 curl 向 `/chat` 端点发送 POST 请求，收到模型正常响应，证明环境变量已在运行时正确注入

## English Short Summary

Hands-on lab demonstrating the best practice of not baking environment variable values into the container image at build time. `app.py` is updated to read variables from the Azure Web App's runtime environment instead of a `.env` file, a new v2 image is built and pushed to ACR, the web app's container tag is switched to v2, and the three required environment variables (endpoint, API key, model name) are configured directly in the Azure portal before restarting — verified via `/health` and a `/chat` POST request.

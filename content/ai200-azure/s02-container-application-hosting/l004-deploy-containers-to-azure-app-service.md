---
title: "Deploy containers to Azure App Service"
lectureId: 4
section: 2
sectionTitle: "Implement container application hosting"
date: "2026-06-17"
tags: ["App-Service", "Linux-container", "web-app", "app-settings", "deployment"]
---

## 中文短总结

本节考试范围是 **App Service 部署容器**（非 Container Apps/AKS）。Portal：Web App → Linux 容器 → 选 ACR + admin 认证 + tag。CLI：`az appservice plan create --is-linux` → `az webapp create --deployment-container-image-name <acr>.azurecr.io/image:tag`。环境变量用 `az webapp config appsettings set` 或 Portal Environment variables；敏感信息勿硬编码。外部 80 端口映射到容器内部端口（如 5000）。

## 中文长总结

### 考试范围提醒
- **本节只考 App Service for Linux containers**
- Container Apps、AKS 在后续 section

### Portal 部署要点
1. Create → **Web App**（Featured）
2. **Publish: Docker Container**，OS: **Linux**
3. 新建或选择 **App Service Plan**（SKU：Free/Basic/Premium v3/v4）
4. Container 来源：**Azure Container Registry**（同 region 更佳）
5. **Admin credentials** 认证（与 L002 启用 admin 对应）
6. 选择 image **tag**（手动 build vs task 自动 build 的 tag 不同）
7. Application Insights 可选

### CLI 部署
```bash
az appservice plan create -g rg-acr-demo -n myplan --is-linux --sku B1
az webapp create -g rg-acr-demo -p myplan -n mywebapp \
  --deployment-container-image-name mynewacr887.azurecr.io/acr-demo-app:task-build-1.0
```
- **`--deployment-container-image-name`**：完整 ACR URL + tag（非 `--runtime`）
- Linux plan 必须 **`--is-linux`**

### 环境变量 / 连接字符串
```bash
az webapp config appsettings set -g rg-acr-demo -n mywebapp \
  --settings MY_KEY=value
```
- Portal：**Settings → Environment variables**
- **App settings** vs **Connection strings**：代码读取方式不同
- 密钥/连接串 **不要写进镜像或代码**，用 app settings 注入

### 网络映射
- 容器监听 **5000**，App Service 将 **入站 80/443** 转发到 target port
- 健康检查：Portal 显示 runtime status **Healthy**

## 考试要点

- 本节容器目标 = **Azure App Service (Linux)**，不是 ACA/AKS
- CLI 关键：`az appservice plan create --is-linux` + `az webapp create --deployment-container-image-name`
- 完整镜像 URI：`<registry>.azurecr.io/<repo>:<tag>`
- 配置注入：**`az webapp config appsettings set`** 或 Portal environment variables
- ACR 同 region + admin enabled 简化 pull 认证
- Connection strings 与 app settings 是不同配置槽位

## English Short Summary

This exam skill covers deploying containers to Azure App Service (Linux)—not Container Apps or AKS yet. Portal: Web App → Docker Container → pick ACR with admin auth and select tag. CLI: az appservice plan create --is-linux, then az webapp create --deployment-container-image-name registry.azurecr.io/image:tag. Inject secrets via az webapp config appsettings set or Portal environment variables—never hardcode. External port 80 maps to internal container port (e.g., 5000).

---
title: "Lab: Pushing AI App Image to ACR (Hands-On Lab)"
lectureId: 20
section: 4
sectionTitle: "Containers and Azure Web Apps"
date: "2026-09-22"
tags: ["azure-container-registry", "docker", "azure-cli", "hands-on-lab"]
---

## 中文短总结

本实验创建 Azure Container Registry（Basic 定价层，RBAC 权限模式，公共网络访问），通过 `az acr login` 登录后，使用 `docker tag` 将本地镜像重命名为 `<acr-name>.azurecr.io/<image>:<version>` 格式，再用 `docker push` 推送到 ACR。

## 中文长总结

### 创建 ACR 资源

- 在与 Foundry 资源相同的资源组中创建容器注册表，命名（如 `kuljoth-acr`），区域选 Sweden Central
- 登录服务器域名格式：`<acr-name>.azurecr.io`
- 定价层选择 **Basic**；角色分配权限模式选择 **RBAC registry permissions**（基于 Microsoft Entra ID 的角色访问控制）
- 网络：Basic 层仅支持公共访问；Premium 层可放入虚拟网络启用私有终结点以增强网络安全
- 加密：客户管理密钥仅 Premium 层支持
- 访问密钥页可获取登录服务器、用户名与密码（作为 API Key 使用）

### 推送镜像流程

1. `az login` 登录 Azure CLI
2. 通过 `export ACR_NAME=<name>` 设置环境变量，便于后续脚本复用
3. `az acr login --name $ACR_NAME` 登录到 ACR
4. 镜像命名需遵循 `<acr-name>.azurecr.io/<image-name>:<version>` 格式，使用 `docker tag` 重新打标签
5. `docker push <acr-name>.azurecr.io/<image-name>:<version>` 推送镜像到 ACR

## English Short Summary

Hands-on lab creating an Azure Container Registry (Basic tier, RBAC permission mode, public network access) in the same resource group as the Foundry resource, then logging in via `az acr login`, re-tagging the local Docker image to the `<acr-name>.azurecr.io/<image>:<version>` naming convention with `docker tag`, and pushing it with `docker push`.

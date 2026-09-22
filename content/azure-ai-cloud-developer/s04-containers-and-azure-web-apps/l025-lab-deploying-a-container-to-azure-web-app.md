---
title: "Lab: Deploying a Container to Azure Web App (Hands-On Lab)"
lectureId: 25
section: 4
sectionTitle: "Containers and Azure Web Apps"
date: "2026-09-22"
tags: ["azure-web-apps", "azure-app-service", "managed-identity", "hands-on-lab"]
---

## 中文短总结

本实验创建 Azure Web App（Linux，Basic 定价层）并绑定新建的 App Service Plan，发布方式选择容器，指定 ACR 中的 `aoai-python-app:v1` 镜像，认证方式选择托管标识（自动创建并赋予 ACR Pull 角色），端口映射为 5000。部署后通过 curl 向 `/chat` 端点发送请求验证应用正常工作，并演示部署中心（Deployment Center）查看/更换镜像版本与容器日志。

## 中文长总结

### 创建 Web App

- 在 Azure 门户搜索 "Azure Web App"，进入 App Services，选择创建 Web 应用
- 同一资源组内创建，命名（因重名需加后缀），域名形如 `<name>.azurewebsites.net`
- 因容器镜像基于 `python:3.11-slim`（Linux），操作系统选 **Linux**
- 需同时创建 App Service Plan（区域 Sweden Central，定价层选择 Basic，约 $13.14/月；Free 层延迟较高）

### 容器配置

- 发布方式选择"容器"，镜像来源选择 ACR（本例为 `kuljoth-acr`）
- 认证方式选择"托管标识"：创建 Web App 实例时会自动生成一个身份（实验中实际生成的是**用户分配**托管标识，而非讲师最初所说的系统分配），并自动赋予其 ACR 的 **Image Pull（ACR Pull）** 角色
- 镜像名称：`aoai-python-app`，标签：`v1`
- 端口映射设置为 5000（对应 Dockerfile 中 `EXPOSE 5000`）
- 网络标签页确保"公共访问"已启用

### 验证与管理

- 首次访问需等待约 10-20 秒完成"预热"
- 直接在浏览器访问 `/chat` 会报 "Method Not Allowed"（该端点仅接受 POST）
- 使用 curl 发送 POST 请求（URL 替换为 Web App 域名，无需指定端口，端口映射已在部署时配置）可验证应用正常返回模型响应
- **部署中心（Deployment Center）**：查看当前运行的容器镜像/标签、认证方式、监听端口；可修改镜像标签（如 v1 → v2）并重启应用以切换版本；提供容器日志用于调试
- **标识（Identity）**页可查看关联的用户分配托管标识

## English Short Summary

Hands-on lab creating an Azure Web App (Linux, Basic tier) with a new App Service Plan, publishing via container from ACR's `aoai-python-app:v1` image, using managed identity authentication (auto-granted the ACR Pull role) and port 5000. After deployment, a curl POST request to the `/chat` endpoint confirms the app responds correctly via the deployed GPT-4.1 model. The lab also tours the Deployment Center for viewing/switching the running image tag, container logs, and the web app's managed identity.

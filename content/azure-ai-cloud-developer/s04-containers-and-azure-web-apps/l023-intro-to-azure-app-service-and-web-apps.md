---
title: "Intro to Azure App Service and Web Apps"
lectureId: 23
section: 4
sectionTitle: "Containers and Azure Web Apps"
date: "2026-09-22"
tags: ["azure-app-service", "azure-web-apps", "load-balancing"]
---

## 中文短总结

Azure App Service Plan 定义 Web 应用运行所需的计算资源（操作系统、区域、VM 实例数量与规格、定价层），是发布应用前的第一步。Azure Web App 实例则是运行在该计划之上、可通过公共 URL 访问的应用运行副本，支持基于计划配置的扩缩容，流量由 Azure 负载均衡自动分发。

## 中文长总结

### App Service Plan（应用服务计划）

- 定义一组计算资源供 Web 应用运行，是使应用可通过公共 URL 访问前的第一步
- 关键配置：操作系统（Windows/Linux，取决于容器镜像类型）、区域、VM 实例数量（影响扩缩容能力）、VM 规格大小（小/中/大）
- 定价层：Free、Shared、Basic、Standard、Premium（含三种子选项）

### Azure Web App 实例

- 是运行在 App Service Worker 上的应用运行副本，可由 ACR 中存储的容器镜像生成
- 单个 App Service Plan 内可运行多个不同应用的多个实例
- 支持根据计划的 VM 实例数与定价层进行扩缩容以应对流量高峰
- 流量通过 Azure 负载均衡自动分发到各实例，此过程对开发者透明

### 整体工作流

1. 应用容器镜像存储在 ACR 仓库中
2. 创建 Azure App Service Plan（定义计算资源）
3. 创建 Azure Web App 实例，启用托管标识并赋予其对 ACR 的镜像拉取权限
4. Web App 实例通过托管标识认证到 ACR，拉取镜像并作为容器运行，使应用可通过公网 URL 访问

## English Short Summary

An Azure App Service Plan defines the compute resources (OS, region, VM instance count/size, pricing tier) a web app runs on — the first step before publishing an application. An Azure Web App instance is a running copy of the application on that plan, sourced from a container image in ACR, supporting scale-in/scale-out and automatic traffic distribution via Azure Load Balancing, with managed identity used to authenticate to ACR and pull the image.

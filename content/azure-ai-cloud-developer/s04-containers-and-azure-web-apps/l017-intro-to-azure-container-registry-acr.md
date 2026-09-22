---
title: "Intro to Azure Container Registry (ACR)"
lectureId: 17
section: 4
sectionTitle: "Containers and Azure Web Apps"
date: "2026-09-22"
tags: ["azure-container-registry", "docker", "rbac", "networking"]
---

## 中文短总结

Azure Container Registry (ACR) 是私有托管的 Docker 兼容镜像仓库，支持通过 RBAC 控制访问权限、通过私有终结点限制网络访问，并可直接与 AKS、Azure Container Apps、Web App、Azure Machine Learning 集成。资源结构为：注册表（Registry）→ 仓库（Repository，逻辑分区）→ 不同版本的镜像。

## 中文长总结

### ACR 的作用

- 提供安全存储 Docker 镜像的平台，供受信任成员拉取镜像并在服务器/虚拟机/应用平台上运行或测试

### 安全特性

- **基于角色的访问控制（RBAC）**：仅授权用户可访问/拉取镜像
- **网络访问限制**：ACR 可部署到虚拟网络中并配置私有终结点，仅允许该虚拟网络内的资源建立连接

### 服务集成

- 与 Azure Kubernetes Service (AKS)、Azure Container Apps、Azure Web App、Azure Machine Learning 直接集成，可将 ACR 中的镜像部署为容器应用

### 资源层级结构

- **注册表（Registry）**：顶层资源，终结点格式为 `<registry-name>.azurecr.io`
- **仓库（Repository）**：注册表内的逻辑分区，用于分别存储不同应用（如前端、后端）的镜像
- 每个仓库可存储同一应用的多个版本镜像（如 v1、v2）

## English Short Summary

Azure Container Registry (ACR) is a private, managed Docker-compatible registry that secures image access via RBAC and restricts network access via virtual network private endpoints, integrating directly with AKS, Azure Container Apps, Web App, and Azure Machine Learning. Its hierarchy is registry (endpoint `<name>.azurecr.io`) → repositories (logical separation per application) → versioned images within each repository.

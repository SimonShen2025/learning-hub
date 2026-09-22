---
title: "Understanding Managed Identity Auth for Pulling ACR Images"
lectureId: 24
section: 4
sectionTitle: "Containers and Azure Web Apps"
date: "2026-09-22"
tags: ["managed-identity", "entra-id", "azure-container-registry", "security"]
---

## 中文短总结

托管标识（Managed Identity）解决硬编码密钥的安全隐患与密钥轮换的管理难题：应用无需存储 API Key，而是通过 Microsoft Entra ID 支持的托管标识获得对目标资源（如存储账户、ACR）的角色权限。托管标识分为系统分配（随资源生命周期）与用户分配（独立生命周期，可绑定多个资源）两种类型。

## 中文长总结

### 问题背景

- 硬编码密钥（API Key、连接字符串、密码、证书、访问令牌）存在安全风险：一旦泄露（如误提交到公开 GitHub 仓库），攻击者可借此攻陷应用甚至整个组织
- 密钥轮换困难：应用规模增大后，逐处更新硬编码密钥版本几乎不可行

### 托管标识的解决方案

- 用托管标识替代硬编码 API Key：为标识分配所需角色（如 Storage Account Data Contributor、ACR Pull），由 Microsoft Entra ID 负责认证与授权
- 优势：无需轮换密钥；代码库中不出现任何密钥硬编码

### 两种托管标识类型

| 类型 | 生命周期 | 适用场景 |
|---|---|---|
| 系统分配（System-assigned） | 与所绑定的 Azure 资源同生共灭，每个资源仅一个 | 单一应用需要访问某资源 |
| 用户分配（User-assigned） | 独立于资源存在，可绑定到多个资源 | 多个应用需要相同权限级别，希望集中管理 RBAC |

### 应用场景（本课程）

- 部署容器到 Azure Web App 实例时，创建时启用系统分配托管标识，并在 ACR 的访问控制（IAM）中为该标识赋予 **ACR Pull** 角色
- Web App 实例即可通过该托管标识认证到 ACR，拉取镜像并运行为容器，使应用上线

## English Short Summary

Managed identities solve the security risk of hard-coded secrets and the burden of credential rotation: an application authenticates via a Microsoft Entra ID-backed identity assigned the necessary role (e.g., Storage Account Data Contributor, ACR Pull) instead of storing an API key. System-assigned identities share their Azure resource's lifecycle (one per resource), while user-assigned identities are independent and reusable across multiple resources. For pulling container images, an Azure Web App's managed identity is granted the ACR Pull role so it can authenticate and pull images from Azure Container Registry.

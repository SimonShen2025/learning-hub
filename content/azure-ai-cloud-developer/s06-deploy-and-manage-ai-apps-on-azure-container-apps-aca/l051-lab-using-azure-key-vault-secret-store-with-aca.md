---
title: "Lab: Using Azure Key Vault Secret Store with ACA (Hands-On Lab)"
lectureId: 51
section: 6
sectionTitle: "Deploy and Manage AI Apps on Azure Container Apps (ACA)"
date: "2026-09-22"
tags: ["azure-container-apps", "azure-key-vault", "managed-identity", "azure-cli"]
---

## 中文短总结

比起在容器应用中直接声明 secret，更安全的方式是将敏感值存放在 Azure Key Vault 中，并通过用户分配托管标识（User Assigned Managed Identity，赋予 Key Vault Secrets User 角色）让容器应用引用 Key Vault 中的密钥 URI。新建容器应用修订版本时，secrets 区域引用 Key Vault Secret URI，环境变量再通过 `secretref` 指向该 secret，从而避免密钥以任何形式暴露在容器应用配置中。

## 中文长总结

### 前置准备：Key Vault 与用户分配托管标识

1. Azure API Key 已作为 secret 存储在 Key Vault（如 `AI200kv-kuljul`）中
2. 创建一个用户分配托管标识（User Assigned Managed Identity，如 `ACAUAMI`），放置在与 Container Apps 环境相同的资源组中（**易踩坑点**：不同资源组会导致标识无法被正确识别）
3. 在 Key Vault 的访问控制（IAM）中为该托管标识分配 **Key Vault Secrets User** 角色

### 收集所需变量

- Key Vault Secret URI（从 Key Vault → Secrets → 当前版本的 Secret Identifier 获取）
- 用户分配托管标识名称
- 用户分配托管标识的资源 ID（Managed Identity → Overview → JSON view 中获取）
- 沿用上一课设置的资源组名、ACR 名称、环境名、Azure API 端点、模型部署名等导出变量

### 创建新修订版本

- 使用 `az containerapp create` 创建新的容器应用（名为 `chat-backend-app-akv`），镜像来自 ACR，监听端口 5000，`ingress external`
- 指定用户分配托管标识用于解析 Key Vault secret 引用
- **secrets** 区域：Azure API Key 声明为对 Key Vault Secret URI 的引用（而非直接值），并附加所用的托管标识
- **环境变量**：端点和模型名为普通环境变量；Azure API Key 通过 `secretref` 引用上面声明的 Key Vault 引用型 secret

### 验证

- 通过 `curl POST` 请求测试 `/chat` 接口，确认应用能正确从 Key Vault 解析密钥并调用 GPT-4.1 模型
- 在门户 Containers → Environment variables 中确认：端点和模型名显示明文值，而 API Key 显示为 Azure Key Vault 引用，无硬编码值

## English Short Summary

Instead of a plain container-app secret, stored the Azure OpenAI API key in Azure Key Vault and used a User Assigned Managed Identity (granted the Key Vault Secrets User role, placed in the same resource group as the ACA environment) so the container app's secret references the Key Vault Secret URI. Environment variables then use `secretref` to point at that Key Vault-backed secret, keeping the raw key out of the container app configuration entirely.

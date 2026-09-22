---
title: "Lab: Retrieve Secrets using SDK Client Libraries (Hands-On Lab)"
lectureId: 120
section: 13
sectionTitle: "Application Secrets and Configuration with Azure Key Vault"
date: "2026-09-22"
tags: ["azure-key-vault", "sdk", "azure-cli-credential", "managed-identity", "python"]
---

## 中文短总结

使用 azure-keyvault-secrets SDK（4.11.0）从 Python 代码中直接获取 Key Vault 密钥值，而非仅在环境变量中做引用。需先配置 Key Vault URL、密钥名称等环境变量；本地开发场景下用 `AzureCliCredential`（需先 `az login`，且当前用户需具备 Key Vault Administrator 权限）创建 `SecretClient`；若运行在 Azure 原生资源（如 App Service/Container Apps）上，则应改用托管标识（Managed Identity）并赋予其 "Key Vault Secrets User" 角色。通过 `client.get_secret(name).value` 获取密钥明文后即可安全用于调用 Azure OpenAI。

## 中文长总结

### 场景与 SDK

- 此前实验仅通过环境变量引用（Key Vault Reference）间接使用密钥；本课聚焦如何在代码中通过 SDK 主动解析（resolve）密钥值
- 使用的 SDK：`azure-keyvault-secrets`，版本 4.11.0

### 本地开发认证：Azure CLI Credential

- 本地 Jupyter Notebook 运行环境不在 Azure 原生资源上，因此不能使用托管标识
- 改为使用 `AzureCliCredential`：需先在终端执行 `az login`，且当前登录用户需在该 Key Vault 上具备 **Key Vault Administrator** 访问权限
- 用 Key Vault URL 与该凭据对象创建 `SecretClient`

### 生产环境认证：Managed Identity（对比说明）

- 若代码运行在 Azure 原生资源（如 App Service Plan、Container App 实例）上，应改用**托管标识**
- 需为该托管标识分配 **Key Vault Secrets User** 角色，并改用 `ManagedIdentityCredential`（传入托管标识的 client_id），而非 Azure CLI 凭据

### 获取密钥并调用 LLM

- 使用 `secret_client.get_secret(secret_name).value` 获取密钥明文（如 Azure OpenAI API Key）
- 用获取到的密钥创建 Azure OpenAI 客户端，调用 Chat Completions API（系统提示 "You are a helpful AI assistant"，用户问题 "What is Azure Key Vault?"），成功返回关于 Key Vault 的说明性回答，验证密钥解析与调用链路均正常工作

## English Short Summary

Used the `azure-keyvault-secrets` SDK to resolve a secret value directly in Python rather than only referencing it via environment variables. Locally, authenticated with `AzureCliCredential` (after `az login`, requiring Key Vault Administrator access), contrasted with `ManagedIdentityCredential` plus a "Key Vault Secrets User" role on an Azure-native resource. Fetched the Azure OpenAI API key via `get_secret(name).value` and used it to call the Chat Completions API, confirming the flow.

---
title: "Lab: Working with Azure Key Vault Secret Store (Hands-On Lab)"
lectureId: 29
section: 4
sectionTitle: "Containers and Azure Web Apps"
date: "2026-09-22"
tags: ["azure-key-vault", "managed-identity", "rbac", "hands-on-lab"]
---

## 中文短总结

本实验创建 Azure Key Vault（RBAC 权限模式，标准层，软删除保留），将 OpenAI API Key 存为密钥（需先为自身账号分配 Key Vault Administrator 角色），为 Web App 启用系统分配托管标识并赋予其 Key Vault Secrets User 角色，最后在环境变量中用 Key Vault 引用格式替换明文 API Key，重启后验证应用仍可正常调用模型。

## 中文长总结

### 创建 Key Vault

- 同一资源组内创建 Key Vault，权限模型选择 **Azure RBAC**
- 软删除（Soft Delete）默认开启，保留天数 90 天（删除的密钥可在此期间恢复）
- 网络可选公共访问或放入虚拟网络加强隔离

### 权限配置（两步 RBAC 分配）

1. 为当前登录用户分配 **Key Vault Administrator** 角色，才能在门户中创建密钥（未分配时会报 "operation not allowed by RBAC" 错误）
2. 手动在 Web App 的"标识"页启用**系统分配托管标识**（默认关闭），再到 Key Vault 的访问控制中，为该系统分配托管标识分配 **Key Vault Secrets User** 角色（而非管理员角色）

### 创建密钥与引用

- 在 Key Vault 的"机密"区域创建密钥，如 `openai-api-key`，值为实际的 API Key
- 在 Web App 环境变量中，将原先明文的 API Key 值替换为 Key Vault 引用格式（包含 Key Vault 名称与密钥名称）
- 保存后环境变量来源显示为 "Key Vault"（绿色图标），表示引用解析成功

### 验证

- 重启应用后，通过 curl 向 `/chat` 发送请求，成功获得模型响应，证明 Key Vault 引用在运行时被正确解析为实际密钥值

## English Short Summary

Hands-on lab creating an Azure Key Vault (RBAC permission model, soft-delete retention) and storing the OpenAI API key as a secret, after first assigning the current user the Key Vault Administrator role. A system-assigned managed identity is enabled on the Web App and granted the Key Vault Secrets User role, then the API key environment variable is replaced with a Key Vault reference. After restarting, a `/chat` POST request confirms the app correctly resolves the secret from Key Vault at runtime.

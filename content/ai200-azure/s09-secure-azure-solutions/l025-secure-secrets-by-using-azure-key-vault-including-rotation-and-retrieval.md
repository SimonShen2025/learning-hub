---
title: "Secure secrets by using Azure Key Vault, including rotation and retrieval"
lectureId: 25
section: 9
sectionTitle: "Implement secure Azure solutions"
date: "2026-06-17"
tags: ["Azure Key Vault", "Secrets", "Access Policies", "Entra ID", "Secret Rotation"]
---

## 中文短总结

本讲演示 **Azure Key Vault** 安全存储与检索密钥。Key Vault 可存储三类对象：**Keys**（加密密钥）、**Secrets**（名值对，如 OpenAI API Key）、**Certificates**（SSL 证书）。创建 Key Vault 后，在 Secrets 中新建 `OpenAIKey`，Python 程序通过 `azure-keyvault-secrets` 和 `azure-identity`（Entra ID 登录）检索 secret 并打印部分值。Access Policies 控制权限（Get、List、Set 等），可按最小权限原则配置。密钥不再硬编码或存于环境变量，改由 Key Vault 集中管理。

## 中文长总结

### Azure Key Vault 概述

- Azure 提供的**密钥、机密、证书**集中存储服务
- 替代代码硬编码、OS 环境变量等不安全做法
- 支持 Soft Delete（软删除保留密钥）

### 三类存储对象

| 类型 | 用途 |
|------|------|
| **Keys** | 加密/解密密钥 |
| **Secrets** | 名值对（API Key、连接字符串等） |
| **Certificates** | SSL/TLS 证书，可自动生成 |

### 创建与配置

1. Portal 搜索 Key Vault → Create
2. 选择 SKU：**Standard**（HSM 为硬件加密选项）
3. 权限模型：**Vault access policy** 或 **Azure RBAC**
4. 启用 Soft Delete；可配置 Purge protection

### 存储 Secret

- Objects → Secrets → **Generate/Import**
- 名称：`OpenAIKey`，值：API Key
- 可设激活/过期日期、标签

### 代码检索（Python）

```python
from azure.keyvault.secrets import SecretClient
from azure.identity import DefaultAzureCredential

client = SecretClient(vault_url="https://<vault-name>.vault.azure.net/", credential=DefaultAzureCredential())
secret = client.get_secret("OpenAIKey")
```

- 依赖：`azure-keyvault-secrets`、`azure-identity`
- 使用 **Entra ID**（`az login`）认证

### Access Policies

- 按主体（用户、SP、Managed Identity）分配权限
- 密钥/机密/证书分别有 Get、List、Set、Delete 等细粒度权限
- 最小权限：仅授予 Get + List Secrets

### 密钥轮换（Rotation）

- 同一 secret 可有多个 **版本**
- 更新 secret 值会创建新版本，旧版本仍保留
- 应用可指定版本或使用最新版本
- 可与 Azure Automation 或 Event Grid 配合实现自动轮换

## 考试要点

- Key Vault 三类对象：**Keys**、**Secrets**、**Certificates**
- Python SDK：`azure-keyvault-secrets` + `azure-identity`（DefaultAzureCredential）
- 权限模型：**Vault access policy** vs **Azure RBAC**
- Secret 支持**多版本**，便于轮换而不中断服务
- 应用通过 **Managed Identity** 或 Entra ID 访问，避免硬编码凭证
- Soft Delete 防止误删；Purge protection 防止永久清除
- 与 Function App / Container App 集成：App Settings 引用 Key Vault secret URI

## English Short Summary

This lecture demonstrates Azure Key Vault for secure secret storage and retrieval. Key Vault stores three object types: Keys, Secrets (name-value pairs like API keys), and Certificates. A secret `OpenAIKey` is created and retrieved via Python using `azure-keyvault-secrets` and `azure-identity` (Entra ID authentication). Access Policies grant granular permissions (Get, List, Set, etc.) per principal. Secrets support versioning for rotation without service disruption. Key Vault eliminates hardcoded secrets and OS environment variables, providing centralized, auditable secret management for Azure applications.

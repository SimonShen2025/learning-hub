---
title: "Store & retrieve app configuration information by using Azure App Configuration"
lectureId: 26
section: 9
sectionTitle: "Implement secure Azure solutions"
date: "2026-06-17"
tags: ["Azure App Configuration", "Key-Value", "Labels", "Feature Flags", "Environment Config"]
---

## 中文短总结

本讲介绍 **Azure App Configuration** 作为应用配置管理服务，区别于 Key Vault 更侧重非机密配置项。创建 Free 层 App Configuration 实例，通过 CLI（`az appconfig kv set`）设置键值：`ai-model-name`、`max-tokens`、`features.enable-vector-search`，并用 **label**（如 `dev`）区分环境。Python 程序使用 `azure-appconfiguration` 客户端按 key 和 label 检索配置并列出所有设置。需分配 **App Configuration Data Owner** RBAC 角色。

## 中文长总结

### App Configuration vs Key Vault

| 特性 | App Configuration | Key Vault |
|------|-------------------|-----------|
| 主要用途 | 应用配置、功能开关 | 密钥、证书 |
| 内容 | 非敏感配置为主 | 敏感 secret |
| 环境区分 | **Labels**（dev/staging/prod） | 版本管理 |
| 功能开关 | 内置 Feature Flags | 无 |

### 创建服务

1. Portal → App Configuration → Create
2. 选择 **Free** 层（开发/demo；Standard/Premium 支持 geo-replication）
3. 启用公共网络访问（demo）

### 设置配置（CLI）

```bash
az appconfig kv set --name <config-name> --key ai-model-name --value "gpt-4.1" --auth-mode login
az appconfig kv set --name <config-name> --key max-tokens --value "4096" --auth-mode login
az appconfig kv set --name <config-name> --key features.enable-vector-search --value "true" --auth-mode login
az appconfig kv set --name <config-name> --key ai-model-name --value "gpt-4-dev" --label dev --auth-mode login
```

### Labels 机制

- 同一 key 可有多个 label 版本（如默认 vs `dev`）
- 应用按 label 选择对应环境的配置值
- 实现 dev/staging/production 配置隔离

### Python 检索

```python
from azure.appconfiguration import AzureAppConfigurationClient
from azure.identity import DefaultAzureCredential

client = AzureAppConfigurationClient.from_connection_string(...)  # or endpoint + credential
setting = client.get_configuration_setting(key="ai-model-name")
dev_setting = client.get_configuration_setting(key="ai-model-name", label="dev")
```

- 依赖：`azure-appconfiguration`
- 认证：`az login`（Entra ID）或 connection string

### RBAC

- **App Configuration Data Owner**：读写权限
- **App Configuration Data Reader**：只读
- Portal → Access control → Add role assignment

## 考试要点

- **App Configuration** 管理应用配置与 feature flags；**Key Vault** 管理 secrets/keys/certificates
- 键值存储，支持 **Labels** 区分环境（dev/staging/prod）
- CLI：`az appconfig kv set` / `az appconfig kv list`
- Python SDK：`azure-appconfiguration`，`AzureAppConfigurationClient`
- RBAC 角色：**Data Owner**（读写）、**Data Reader**（只读）
- Feature Flags 可动态开关功能（如 `features.enable-vector-search`）
- Free 层无 geo-replication；Standard/Premium 支持
- 可与 Function App、Container Apps 集成，引用 App Configuration endpoint

## English Short Summary

This lecture covers Azure App Configuration for managing application settings separately from Key Vault secrets. A Free-tier instance is created, and key-value pairs (`ai-model-name`, `max-tokens`, `features.enable-vector-search`) are set via CLI (`az appconfig kv set`). Labels (e.g., `dev`) enable environment-specific configuration for the same key. Python retrieves settings using `azure-appconfiguration` with Entra ID authentication. RBAC roles (Data Owner, Data Reader) control access. App Configuration is ideal for non-sensitive, environment-differentiated settings and feature flags, complementing Key Vault for secrets.

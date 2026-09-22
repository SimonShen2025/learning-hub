---
title: "Lab: Rolling Updates with Feature Flags (Hands-On Lab)"
lectureId: 130
section: 14
sectionTitle: "Application Settings and Configuration with Azure App Configuration"
date: "2026-09-22"
tags: ["azure-app-configuration", "feature-flags", "azure-web-app", "key-vault", "managed-identity"]
---

## 中文短总结

端到端实现"功能标志 + Key Vault 引用"驱动的模型切换：Python 聊天后端使用 SettingSelector 同时监听默认与 production 标签、启用功能管理并监听 Sentinel 键刷新；`/chat` 路由通过 `use_new_chat_model` 功能标志的开关决定调用旧模型（`AzureOpenAI:ModelName`，GPT-4.1）还是新模型（新建的 `AzureOpenAI:NewModelName`，GPT-4.0）。应用容器化后经 ACR Tasks 构建推送镜像，部署为 Azure Web App（容器模式），启用系统分配托管身份并授予 App Configuration Data Reader 与 Key Vault Secrets User 两个角色，配置 App Configuration 终结点环境变量后重启。测试确认：标志关闭时返回 GPT-4.1 响应，标志开启时返回新模型响应，验证了不重新部署即可切换模型的能力。

## 中文长总结

### 应用代码结构

- Python 聊天后端在启动时创建 `SettingSelector`，同时监听 `AzureOpenAI` 前缀键的默认标签与 production 标签（production 覆盖默认）
- 使用应用的系统分配托管身份凭据创建 App Configuration 客户端，传入 App Configuration 终结点（将作为环境变量注入），并启用功能管理（Feature Management）与 Sentinel 键刷新（30 秒间隔）
- 暴露单一 `/chat` POST 路由：
  - 通过 Feature Manager 检查 `use_new_chat_model` 标志状态
  - 标志启用 → 读取 `AzureOpenAI:NewModelName`（本例设为 GPT-4.0，因 GPT-5.2 部署当时有问题）构建客户端并调用
  - 标志禁用 → 读取原有的 `AzureOpenAI:ModelName`（GPT-4.1）调用
  - 两种情况均返回包含所用模型名和助手回复的 JSON

### 配置变更（App Configuration 侧）

- 删除原先 `AzureOpenAI:ModelName` 键的 production 标签值，仅保留默认标签 GPT-4.1
- 新建 `AzureOpenAI:NewModelName` 键（默认标签，值为可用的新模型，如 GPT-4.0）
- 在 Feature Management 中创建功能标志 `use_new_chat_model`（类型为 Switch，默认标签，初始设为 Disabled）

### 容器化与部署

- 通过 **ACR Tasks**（无需本地 Docker 引擎）在指定 Container Registry 下构建镜像 `appconfigdemo:v1` 并推送
- 创建 Azure Web App（容器模式，Linux，Basic 定价层），镜像来源选择该 ACR 镜像，认证方式为托管身份（自动创建并赋予 AcrPull 角色），指定应用监听端口 5000

### 身份与角色配置

- 为 Web App 启用系统分配托管身份
- 分别在 App Configuration 资源和 Key Vault 资源的访问控制中为该身份新增角色：**App Configuration Data Reader**（读取配置及标志）与 **Key Vault Secrets User**（解析密钥引用）
- 在 Web App 的环境变量中新增 `AzureAppConfigEndpoint`，指向 App Configuration 资源终结点，随后重启应用

### 验证结果

- 功能标志禁用时，POST 请求 `/chat` 返回来自 GPT-4.1 的响应，证明 Key Vault 引用被正确解析（API Key 有效）
- 将标志切换为 Enabled 后，同一请求改为返回来自新模型（GPT-4.0）的响应
- 再次禁用标志后，响应恢复为 GPT-4.1，验证了功能标志实时、无需重新部署即可切换模型的能力

## English Short Summary

Built a feature-flag-driven model switch: a Python backend uses a `SettingSelector` (default + production labels), an App Configuration client with Sentinel-key refresh, and a `/chat` route checking `use_new_chat_model` to call GPT-4.1 or a new `AzureOpenAI:NewModelName` (GPT-4.0). The app was containerized, deployed as a Web App with managed identity granted App Configuration Data Reader and Key Vault Secrets User roles to resolve the key. Toggling the flag switched models without redeployment.

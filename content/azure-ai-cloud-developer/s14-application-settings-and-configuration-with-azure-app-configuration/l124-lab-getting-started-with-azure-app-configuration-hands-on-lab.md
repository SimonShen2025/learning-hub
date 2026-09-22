---
title: "Lab: Getting Started with Azure App Configuration (Hands-On Lab)"
lectureId: 124
section: 14
sectionTitle: "Application Settings and Configuration with Azure App Configuration"
date: "2026-09-22"
tags: ["azure-app-configuration", "sdk", "labels", "python", "setting-selector"]
---

## 中文短总结

在 Configuration Explorer 中创建三个键值对：`AzureOpenAI:Endpoint`、`AzureOpenAI:Key`（均使用默认标签）、`AzureOpenAI:ModelName`（默认标签值为 GPT-4.1，另创建 production 标签值为 GPT-4o）。命名遵循"服务名:配置项"的冒号分隔约定。使用 azure-appconfiguration-provider（2.5.0）SDK，通过读写连接字符串创建配置客户端；不指定标签时默认返回 default 标签的值；通过 SettingSelector 同时指定 key_filter 和 label_filter（如 `\0` 表示 default，"production" 表示生产标签）可实现"生产标签值覆盖默认标签值"的效果，即生产环境专属配置优先于默认配置。

## 中文长总结

### 创建键值对

- 场景：AI 微服务需要三项配置——Azure OpenAI 终结点、API Key、模型部署名
- 命名约定（最佳实践）：`Azure OpenAI` 前缀 + 冒号 + 具体项名，如 `AzureOpenAI:Endpoint`、`AzureOpenAI:Key`
- 终结点与 Key 均只创建**默认标签（default label，留空即表示默认）**的值
- 模型名（`AzureOpenAI:ModelName`）创建两个标签版本：默认标签值为 `GPT-4.1`（用于开发/默认环境），另建 **production** 标签值为 `GPT-4o`（用于生产环境）

### SDK 连接与基础读取

- 使用 SDK：`azure-appconfiguration-provider`，版本 2.5.0
- 连接字符串来自门户 Access Settings 中的 **Read Write** 连接字符串（endpoint + 密钥组合）
- 用连接字符串创建配置客户端后，不指定标签过滤时默认只返回 **default 标签**的值（此时模型名取到的是 GPT-4.1）

### 使用 SettingSelector 实现标签覆盖

- 通过 `SettingSelector` 对象定义过滤条件：`key_filter` 限定只关注 `AzureOpenAI` 相关键，`label_filter` 指定标签（`\0` 表示 default 标签，"production" 表示生产标签）
- 创建两个 selector：一个匹配 default 标签，一个匹配 production 标签，将二者一起传给配置客户端
- 效果：对于同时存在 default 和 production 两个标签值的键（如模型名），production 标签的值会**覆盖**default 标签的值；对于只有 default 标签的键（如终结点、Key），仍返回 default 值
- 实测结果：终结点与 API Key 仍为默认值，而模型名变为 production 标签下的 GPT-4o，验证了标签覆盖优先级机制

## English Short Summary

Created three key-value pairs using a colon-separated naming convention (`AzureOpenAI:Endpoint`, `AzureOpenAI:Key` default-label only, and `AzureOpenAI:ModelName` with default=GPT-4.1 and production=GPT-4o). Using the `azure-appconfiguration-provider` SDK and a read-write connection string, fetching without a label filter returns only default values. Two `SettingSelector` objects (default and production filters) make production values override default ones where both exist.

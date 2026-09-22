---
title: "Understand Azure App Configuration"
lectureId: 122
section: 14
sectionTitle: "Application Settings and Configuration with Azure App Configuration"
date: "2026-09-22"
tags: ["azure-app-configuration", "centralized-configuration", "key-value-store", "labels"]
---

## 中文短总结

Azure App Configuration 是一个集中式键值存储，用于统一管理多个应用/微服务共享的配置（如 LLM 终结点、API Key、模型部署名），改一处即可让所有引用它的实例同步获取新值，避免各处硬编码或重复配置。其"标签（Label）"特性支持同一个键在不同环境（如测试 vs. 生产）下拥有不同取值，实现环境隔离与灵活切换。

## 中文长总结

### 问题背景

- 多个 AI 微服务/应用（分别运行在 Container Apps、AKS、App Service 等）常常需要相同的配置项，例如连接 Microsoft Foundry 大语言模型所需的：模型终结点（endpoint）、API Key、模型部署名
- 若每个应用各自维护这些配置，一旦需要变更（如轮换密钥或切换模型），需要逐一修改，容易遗漏且难以保证一致性

### 核心概念：外部集中配置存储

- Azure App Configuration 本质上是一个**键值存储（key-value store）**，作为多应用/多实例共享配置的单一可信来源（single source of truth）
- 应用实例（Web App、Function、AKS、Container Apps 等）统一从该集中存储读取配置；修改集中存储中的值后，变更会传播到所有引用它的实例

### 标签（Labels）机制

- 同一个键可以配合不同**标签**存储多个不同的值，典型用途是区分环境：例如测试环境使用 GPT-4.1、标签为 test；生产环境使用不同模型、标签为 production
- 运行在测试环境中的应用实例读取带 test 标签的配置值，生产环境实例读取带 production 标签的配置值，从而实现环境间的灵活切换而无需修改代码

## English Short Summary

Azure App Configuration is a centralized key-value store used to share configuration (LLM endpoint, API key, model deployment name) across multiple AI applications and microservices running on App Service, AKS, Container Apps, etc. Updating a value in this single source of truth propagates to all referencing instances. Its labeling feature lets the same key hold different values per environment (e.g., test vs. production), enabling environment-specific configuration without code changes.

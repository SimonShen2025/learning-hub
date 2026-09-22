---
title: "Understanding ConfigMaps and Secrets"
lectureId: 43
section: 5
sectionTitle: "Deploy and Manage AI Apps on Azure Kubernetes Service (AKS)"
date: "2026-09-22"
tags: ["kubernetes", "configmap", "kubernetes-secrets", "aks"]
---

## 中文短总结

ConfigMap 用于以键值对形式存储非敏感配置数据（如 API 终结点、模型名），Secret 用于存储少量敏感数据（如 API Key）。两者均可在 YAML 清单文件中定义，并在运行时动态注入为容器的环境变量，避免将配置值硬编码进应用代码或镜像，从而实现模块化和可扩展性。

## 中文长总结

### 问题背景

- 假设一个调用 Microsoft Foundry 大语言模型的后端应用，需要三个值：终结点、API Key、模型部署名
- 若将这些值硬编码在代码中，每次变更（如切换模型）都需重新构建并推送镜像，缺乏模块化

### 解决方案：ConfigMap 与 Secret

- **ConfigMap**：用于存储非机密数据的键值对 API 对象，适合终结点、模型名等非敏感配置
- **Secret**：用于存储少量敏感数据（如密码、令牌、API Key）的对象，避免机密信息出现在应用代码中
- 两者都可在 YAML 清单文件中定义，并在部署时作为环境变量动态注入容器，无需重新构建镜像即可调整配置

## English Short Summary

A ConfigMap stores non-confidential key-value configuration data (like an API endpoint or model name), while a Secret stores small amounts of sensitive data (like an API key), both definable in YAML manifest files and injected as environment variables into containers at runtime — avoiding hard-coded values in application code or images and enabling modular, rebuild-free configuration changes.

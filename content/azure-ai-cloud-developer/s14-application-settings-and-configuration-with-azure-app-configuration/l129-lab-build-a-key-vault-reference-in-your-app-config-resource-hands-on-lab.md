---
title: "Lab: Build a Key Vault Reference in your App Config Resource (Hands-On Lab)"
lectureId: 129
section: 14
sectionTitle: "Application Settings and Configuration with Azure App Configuration"
date: "2026-09-22"
tags: ["azure-app-configuration", "azure-key-vault", "key-vault-reference"]
---

## 中文短总结

将此前以明文形式存储在 App Configuration 中的 `AzureOpenAI:Key` 删除，重新以 "Key Vault Reference" 类型创建同名键：指定目标 Key Vault 资源、对应密钥（Azure OpenAI API Key 密钥）及版本（选择最新版本），保存后该键值对不再直接存储密钥内容，而是保存一个指向 Key Vault 密钥的引用。真正的解析工作将在应用运行时，由应用的托管标识（需具备 Key Vault Secrets User 角色）向 Key Vault 发起请求完成。

## 中文长总结

### 替换明文密钥为 Key Vault 引用

- 现有的 `AzureOpenAI:Key` 键值对此前直接存储 API Key 明文，属于不安全做法
- 先删除该键值对，再重新创建：这次创建类型选择 **Key Vault Reference**（而非普通 Key Value）
- 键名保持一致（如 `AzureOpenAI:Key`），标签使用默认标签
- 指定引用目标：选择对应的 Key Vault 资源，以及该资源中存放 Azure OpenAI API Key 的具体密钥（Secret），并选择最新版本
- 保存后，App Configuration 中保存的不再是密钥明文，而是一条指向 Key Vault 密钥的元数据引用

### 引用的实际解析时机

- 该引用本身在 App Configuration 层面并不会自动解析出真实密钥内容
- 真正的解析发生在应用运行时：应用需要使用其托管标识，并具备 **Key Vault Secrets User** 角色，才能在读取到这条引用后进一步向 Key Vault 发起请求，取回真实密钥值
- 该解析流程与后续实验（结合功能标志部署到 Azure Web App）中的托管标识角色分配紧密相关

## English Short Summary

Replaced the previously plaintext `AzureOpenAI:Key` entry in App Configuration with a Key Vault Reference: deleted the old key-value pair and recreated it as a Key Vault Reference pointing to the corresponding secret (latest version) in the Key Vault resource. App Configuration now stores only reference metadata, not the secret itself; actual resolution happens at runtime when the application's managed identity (granted the Key Vault Secrets User role) fetches the real value from Key Vault.

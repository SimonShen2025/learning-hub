---
title: "Key Vault Integration in Azure App Configuration"
lectureId: 127
section: 14
sectionTitle: "Application Settings and Configuration with Azure App Configuration"
date: "2026-09-22"
tags: ["azure-app-configuration", "azure-key-vault", "managed-identity", "rbac"]
---

## 中文短总结

直接把 API Key 明文存放在 App Configuration 中并不安全；更好的做法是把密钥存入 Azure Key Vault，再在 App Configuration 中创建对该密钥的"引用（Key Vault Reference）"。普通配置值（如终结点）由 App Configuration 直接返回，而 Key Vault 引用类型的值需要应用的托管标识（Managed Identity）同时具备两个角色：App Configuration Data Reader（读取配置项/引用本身）和 Key Vault Secrets User（解析引用指向的实际密钥内容），二者缺一不可。

## 中文长总结

### 为什么不能直接存明文密钥

- App Configuration 是一个通用键值存储，直接存储 API Key 明文并不是最佳安全实践
- 更安全的做法：将 API Key 存入 Azure Key Vault 作为密钥（Secret），再在 App Configuration 中创建对该密钥的 **Key Vault 引用（Key Vault Reference）**，而非直接存值

### 引用解析的工作方式

- 简单值（如 endpoint）：App Configuration 直接返回配置的原始值，不会触发对 Key Vault 的调用
- Key Vault 引用值（如 API Key）：App Configuration 需要借助应用的身份，回源到 Key Vault 解析出真正的密钥内容后再返回

### 所需的双重角色授权

- 应用（如 Azure Web App）需要一个托管标识（系统分配或用户分配均可）
- 该托管标识需要同时具备两个角色：
  1. **App Configuration Data Reader**：允许读取 App Configuration 中的配置项（包括引用本身）
  2. **Key Vault Secrets User**：允许该身份从 Key Vault 中实际解析出被引用的密钥内容
- 若只有前一个角色而没有后一个角色，应用能读到"这是一个 Key Vault 引用"的元信息，但无法解析出真实密钥值，调用大语言模型时会因缺少有效 API Key 而失败

## English Short Summary

Storing an API key as plain text in Azure App Configuration is not secure; the better approach stores the secret in Azure Key Vault and creates a Key Vault Reference to it in App Configuration. Simple values (like an endpoint) are returned directly, but resolving a Key Vault Reference requires the app's managed identity to hold both App Configuration Data Reader (to read the reference) and Key Vault Secrets User (to resolve the secret) — both roles are required.

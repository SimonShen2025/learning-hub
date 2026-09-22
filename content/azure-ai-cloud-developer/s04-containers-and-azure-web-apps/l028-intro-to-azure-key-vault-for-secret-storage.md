---
title: "Intro to Azure Key Vault for Secret Storage"
lectureId: 28
section: 4
sectionTitle: "Containers and Azure Web Apps"
date: "2026-09-22"
tags: ["azure-key-vault", "managed-identity", "secrets-management"]
---

## 中文短总结

Azure Key Vault 是用于安全存储密钥、连接字符串、加解密密钥与证书的云服务。应用不直接硬编码 API Key，而是将其存为 Key Vault 密钥，并通过托管标识（赋予 Key Vault Secrets User 角色）在运行时获取，从而避免密钥明文暴露在环境变量或代码中。

## 中文长总结

### Azure Key Vault 概览

- 用于安全存储与管理敏感信息：连接字符串、API Key，也可存储加解密密钥、SSL/TLS 证书并管理证书生命周期
- 部署方式与其他 Azure 资源一致

### 与 Web 应用集成的典型流程

- 非敏感配置（如模型终结点、部署名）可直接作为环境变量注入 Azure Web App
- 敏感信息（API Key）应存储为 Key Vault 中的密钥（Secret），而非硬编码在环境变量或代码中
- Azure Web App 通过系统分配托管标识，被赋予 **Key Vault Secrets User** 角色，即可在运行时从 Key Vault 安全获取该密钥

### 安全收益

- 彻底避免在代码库、环境变量配置中出现明文密钥
- 认证与授权通过托管标识与 Microsoft Entra ID 完成，无需管理额外凭据

## English Short Summary

Azure Key Vault is a cloud service for securely storing secrets (connection strings, API keys), encryption/decryption keys, and certificates. Instead of hard-coding an API key, an app stores it as a Key Vault secret and retrieves it at runtime via a managed identity granted the Key Vault Secrets User role — while non-sensitive config like model endpoint and deployment name can still be injected as plain environment variables.

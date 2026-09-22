---
title: "Lab: Create an Azure App Config Resource (Hands-On Lab)"
lectureId: 123
section: 14
sectionTitle: "Application Settings and Configuration with Azure App Configuration"
date: "2026-09-22"
tags: ["azure-app-configuration", "azure-portal", "free-tier", "networking"]
---

## 中文短总结

在 Azure 门户创建 App Configuration 资源：定价层选择 Free；认证方式同时启用 Access Keys，认证模式选择 Pass-through（支持后续通过托管标识以 Microsoft Entra ID 方式访问）；高级标签页可设置删除后的保留天数与清除保护（软删除）；网络设置选择 Automatic（检测到私有终结点时自动禁用公网访问，否则自动启用，本实验需要公网访问）。部署完成后 Overview 中的 Endpoint 值将用于 SDK 连接，Configuration Explorer 用于管理键值对，Feature Management 区域用于管理功能标志（Feature Flags）。

## 中文长总结

### 创建资源的关键配置

- 门户搜索 "Azure App Configuration" 并创建，放入相同资源组，区域如 Sweden Central
- 定价层选择 **Free**
- 访问设置（Access Settings）：
  - 启用 Access Keys 认证路径
  - 认证模式选择 **Pass-through**，为后续通过托管标识 + Microsoft Entra ID 认证访问预留能力
- 高级（Advanced）标签页：
  - 可配置删除后的保留天数（recovery/retention days）
  - 可启用清除保护（Purge Protection），使删除的键值先进入软删除状态，之后仍可恢复
- 网络（Networking）标签页：选择 **Automatic**——检测到私有终结点时自动禁用公网访问，否则自动启用；本实验需要公网访问，因此保持默认

### 部署后的关键区域

- Overview 中的 **Endpoint** 值是 SDK 连接该资源时使用的地址
- **Configuration Explorer**（位于 Configuration Management 下）：管理所有键值对配置
- **Feature Management**（Configuration Management 下的另一区域）：管理功能标志（Feature Flags），后续实验会用到

## English Short Summary

Deployed an Azure App Configuration resource via the portal using the Free tier, Access Keys authentication with Pass-through mode (to also support managed-identity/Entra ID access later), Automatic networking (public access enabled, no private endpoint), and optional soft-delete/purge protection. After deployment, the Overview blade exposes the Endpoint for SDK connections, while Configuration Explorer manages key-value pairs and Feature Management handles feature flags.

---
title: "Lab - An example of creating a resource in Azure"
lectureId: 75
section: 4
sectionTitle: "AI-900 - Introduction and basics on Azure"
date: "2026-06-10"
tags: [azure, resource-creation, storage-account, lab]
---

## 中文短总结

在 Azure 中创建资源的通用流程示例（以 Storage Account 为例）。步骤：All Resources → Create → Azure Marketplace 搜索服务 → 配置向导（Subscription、Resource Group、Region、Name 等）→ Review + Create → Deploy。资源组用于逻辑分组，订阅用于计费。此通用流程适用于所有 Azure 服务。

## 中文长总结

### 通用资源创建流程
1. Home → All Resources → Create
2. Azure Marketplace 搜索服务名称
3. 配置向导：
   - Subscription（计费账户）
   - Resource Group（逻辑分组）
   - Region（部署区域）
   - Name（资源名称）
   - 其他服务特定配置
4. Review + Create → Deploy

### 关键概念复习
- **Resource Group**：逻辑容器，按部门/项目分组资源，免费
- **Subscription**：计费账户
- **Region**：资源物理位置

## English Short Summary

Generic resource creation flow in Azure (Storage Account example): All Resources → Create → search service in Marketplace → configure wizard (Subscription, Resource Group, Region, Name) → Review + Create → Deploy. Resource groups for logical grouping, subscriptions for billing. This pattern applies to all Azure services.

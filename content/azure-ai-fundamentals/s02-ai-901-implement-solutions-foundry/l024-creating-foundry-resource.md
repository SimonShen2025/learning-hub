---
title: "Lab - Creating a Microsoft Foundry Resource"
lectureId: 24
section: 2
sectionTitle: "AI-901 - Implement AI solutions - Microsoft Foundry"
date: "2026-06-10"
tags: [microsoft-foundry, azure-resource, lab, setup]
---

## 中文短总结

在 Azure 中创建 Microsoft Foundry 资源的步骤：Azure Portal → All Resources → Create → 搜索 "Microsoft Foundry" → 配置向导（选择订阅、资源组、区域如 East US 2、资源名称）→ 部署。资源组是逻辑容器用于组织资源。Foundry 资源部署约需1分钟，部署完成后可通过链接进入 ai.azure.com 的 Foundry Portal 进行 AI 开发。

## 中文长总结

### 创建流程
1. Azure Portal → All Resources → Create
2. Azure Marketplace 搜索 "Microsoft Foundry"
3. 配置向导填写：
   - **Subscription**：默认订阅（计费账户）
   - **Resource Group**：逻辑容器，用于组织相关资源（如 rg-foundry）
   - **Region**：选择 East US 2（避免某些模型部署限制）
   - **Name**：资源名称

4. Review + Create → 部署（约1分钟）

### 关键概念
- **Subscription**：Azure 账单账户，所有资源费用计入订阅
- **Resource Group**：逻辑分组容器，组织相关 Azure 资源
- **Region**：资源部署的物理位置，影响模型可用性
- 免费账号的 $200 额度覆盖 demo 费用

### 部署后
- 进入资源概览页
- 通过链接访问 Foundry Portal (ai.azure.com)
- Foundry Portal 是后续操作的主要界面

## 考试要点

- 使用 Microsoft Foundry 需先创建 Azure 资源
- Resource Group = 逻辑容器组织资源
- Subscription = 计费账户
- Region 选择影响模型可用性
- Foundry Portal 地址：ai.azure.com

## English Short Summary

Creating a Microsoft Foundry resource: Azure Portal → Create resource → search "Microsoft Foundry" → configure (subscription, resource group, region like East US 2, name) → deploy (~1 min). Resource group is a logical container for organizing resources. After deployment, access the Foundry Portal at ai.azure.com for AI development.

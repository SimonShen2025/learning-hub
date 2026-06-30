---
title: "Unit 2: Microsoft Foundry – The Agent Development Platform"
lectureId: 3
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["AI-103", "Microsoft-Foundry", "hub-project", "model-catalog", "Entra-Agent-ID"]
---

## 中文短总结

**Microsoft Foundry** 是 AI-103 考试核心平台，整合 Azure AI Studio 能力并原生支持 Agent（持久状态、工具框架、Entra Agent ID、Trace）。层级：**Subscription → Hub → Project → Agent Service**。Project 存放 agent code、system message、工具定义、memory 配置与 trace logs；Agent Service 为全托管运行时，自动扩缩。Model Catalog 可部署专属模型实例（endpoint + API key）。安全概念：Identity Blueprints、Conditional Access、Access Packages、Sponsor。

## 中文长总结

### Azure AI Studio → Foundry
| AI Studio | Foundry |
|-----------|---------|
| 单模型调用（语音、翻译等） | 原生 Agent：memory、多 Agent、身份 |
| Prompt 测试 | 持久状态 + tool calling + 安全身份 |

Foundry **单一服务**集成：Model Catalog、Agent Service、Foundry Trace、Entra Agent ID，无需手动拼接 OpenAI + App Service + Cosmos + Monitor。

### 三层架构
```
Subscription
  └── Hub（最高层：多 project、共享模型/安全策略、成本/区域隔离）
        └── Project（工作区：agent code、tools、memory、trace logs）
              └── Agent Service（托管运行时，自动扩缩，对用户暴露 endpoint）
```

**考试常问**：
- Agent code 存在哪？→ **Project**
- 谁运行已部署 Agent？→ **Agent Service**

### Model Catalog 与 Endpoint
- 从 catalog 选择模型 → **deploy** → 独占实例 + 专属 **endpoint URL**
- Agent 同一时刻用一个模型，但可按 prompt 切换或跨 Agent 共享/分离模型
- **Endpoint** = 模型/Agent 的唯一 URL；须配 **API key**（header 中发送）
- API key 存储：**Key Vault**（推荐）> 环境变量；Foundry 支持轮换 key 无需重部署

### 安全与治理（Foundry 管理 ≈ 15% 考试权重）
- **Identity Blueprint**：可复用权限模板，定义 Agent 可访问的 DB/API/Storage；Agent ID 是被 blueprint 应用的实体
- **Conditional Access**：网络、设备、时间窗口（如仅 9–17 点、仅企业 IP）；凌晨删记录可被拦截
- **Access Packages**：打包 RBAC 权限 + **过期时间**（如 24h 敏感数据访问）；Sponsor 审批
- **Sponsor**：每个 Entra Agent ID 必须绑定人类责任人；离职 → Agent **自动挂起**直至新 Sponsor

### 编码模式
- Endpoint/API key：**禁止硬编码**；用 `os.getenv("FOUNDRY_ENDPOINT")` 或 Key Vault
- **DefaultAzureCredential** 认证顺序：环境变量 → Managed Identity → VS 登录 → Azure CLI

## 考试要点

- Foundry 层级记忆：**Hub → Project → Agent Service**
- Agent code / tool definitions / memory config → **Project**
- 部署运行 → **Agent Service**（managed hosting，auto-scale）
- Endpoint + API key 配对；Key Vault 为最佳实践
- Blueprint vs Agent ID：ID = 身份，Blueprint = 权限模板
- Conditional Access、Access Packages、Sponsor lifecycle
- Foundry governance 约占 **15%** 考试权重
- DefaultAzureCredential 认证链顺序

## English Short Summary

Microsoft Foundry is the AI-103 exam hub—Azure AI Studio’s successor with native agent support. Hierarchy: subscription → hub (team/region isolation) → project (stores agent code, tools, memory, traces) → agent service (managed runtime with endpoints and auto-scaling). The model catalog lets you deploy dedicated model instances with their own URLs and API keys; secure keys in Key Vault. Governance features include identity blueprints (reusable RBAC templates), conditional access (time/location rules), time-bound access packages, and mandatory human sponsors who suspend agents on departure. DefaultAzureCredential plus Key Vault is the production auth pattern.

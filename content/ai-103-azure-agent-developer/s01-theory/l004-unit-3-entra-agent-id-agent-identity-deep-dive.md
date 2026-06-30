---
title: "Unit 3: Entra Agent ID – Agent Identity Deep Dive"
lectureId: 4
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["AI-103", "Entra-Agent-ID", "service-principal", "managed-identity", "RBAC"]
---

## 中文短总结

**Entra Agent ID** 为每个 Agent 创建独立 **Service Principal**（非人类身份），一 Agent 一身份，便于审计与最小权限。认证核心为 **Client Credentials Flow**：Client ID + Secret/Certificate → Entra ID 返回约 1 小时有效的 access token（`Authorization: Bearer`）。**Managed Identity** 是 gold standard，Azure 自动创建/轮换凭证。**Blueprint** 批量赋 RBAC；Sponsor 离职后 Agent **24 小时内挂起**，错误 `agent suspended, no sponsor assigned`。

## 中文长总结

### Service Principal 基础
- Azure 正式术语：代表**应用/Agent** 的非人类身份
- 人类：用户名+密码；SP：Client ID + Secret 或 Certificate
- 启用 Entra Agent ID → Foundry 在 tenant 自动创建 SP

### 注册与凭证
- Project 设置：**Enable Entra Agent ID**
- 获得 **Client ID**（公开，可出现在日志）+ **Secret**（可过期）或 **Certificate**（更安全，防 plain-text 泄露）
- **两 Agent 不可共享身份**

### Client Credentials Flow（考试重点）
1. Agent 发送 Client ID + Secret/Cert 至 Entra ID
2. 验证通过 → 返回 **access token**（~1 小时 TTL）
3. 调用 API 时在 header 嵌入 `Authorization: Bearer <token>`

### DefaultAzureCredential 顺序（需背诵）
1. 环境变量（`AZURE_CLIENT_ID`, `AZURE_CLIENT_SECRET`, `AZURE_TENANT_ID`）
2. **Managed Identity**（Azure 上运行时）
3. Visual Studio 登录
4. Azure CLI 登录（`az login`）

### Managed Identity
- Azure 自动创建 SP 并**轮换**凭证，代码中零 secret
- Foundry Agent Service 设置：**Enable system-assigned managed identity**

### Blueprint 与 RBAC
- Blueprint = 可复用 role assignment 列表（如 Storage Blob Data Reader on container A）
- 更新 blueprint → 所有绑定 Agent **自动**获得新权限（版本化，考试考点）
- 手动赋权：Storage Account → Access Control → 选 Agent SP
- **Least privilege**：只给完成任务所需最小权限

### Conditional Access（Agent 场景）
- 企业 IP 限制、营业时间（9–17）、异常活动（批量删除）→ 阻断直至 Sponsor 批准

### Access Packages
- 打包多组 RBAC + **时效**（如 24h HR 库访问）
- 开发者申请 → 经理/Sponsor 批准 → 到期自动撤销（防 permission creep）

### Sponsor Lifecycle
- 注册 Agent **必须**指定 Sponsor（可 primary + backup）
- Sponsor 账号删除/离职 → **24 小时窗口**后 Agent 权限挂起
- 新 Sponsor 分配后恢复
- Sponsor 职责：审日志、批 Access Package、响应安全告警

### 审计
- 用户调用 Agent 与 Agent 执行动作 **分开记录**（intent vs action）
- Azure Monitor 可按 **agent client ID** 过滤调查

## 考试要点

- Service Principal = Agent 的数字“驾照”；Entra Agent ID 自动创建
- Client ID 公开 vs Secret/Cert 私密；Certificate > Secret
- **Client Credentials Flow** 与 Bearer token header
- DefaultAzureCredential **四步顺序**及环境变量命名
- Managed Identity = 最安全，无 stored secrets
- Blueprint 更新 propagates 到所有绑定 Agent
- **Least privilege** 原则
- Sponsor 离职 → **24h** 后 suspend；错误消息识别
- 审计：用户 log 与 agent log 分离

## English Short Summary

Entra Agent ID registers each agent as its own Azure service principal—one identity per agent for audit and least-privilege RBAC. Authentication uses the client credentials flow (client ID + secret/certificate → ~1-hour bearer token). Managed identity is the gold standard with auto-rotated credentials. Blueprints codify reusable role assignments that propagate on update. Access packages grant time-limited permission bundles. Every agent requires a human sponsor; if the sponsor leaves, the agent suspends within 24 hours until reassigned. DefaultAzureCredential tries env vars, managed identity, VS login, then Azure CLI—in that order.

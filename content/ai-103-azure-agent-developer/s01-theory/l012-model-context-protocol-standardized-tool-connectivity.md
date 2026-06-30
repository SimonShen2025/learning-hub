---
title: "Unit 11: Model Context Protocol (MCP) – Standardized Tool Connectivity"
lectureId: 12
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["AI-103", "Azure AI", "MCP", "Model Context Protocol", "tool-discovery", "Microsoft Foundry"]
---

## 中文短总结

MCP（Anthropic 发起、Microsoft 采纳）是 AI 的「USB-C」：标准握手让 Agent 发现/调用外部工具，无需每家写定制集成。两阶段：list tools → call tool。MCP Server 由工具提供方部署（非 Microsoft 托管），负责认证/限流/格式转换；Agent Framework 内置 MCP Client。Foundry 配置 server URL+认证。MCP 适合 10+ 常变工具；定制工具适合 1–2 个稳定/深度优化场景。Whitelist + call-time validation 防越权。

## 中文长总结

### MCP 是什么
- **开放标准**：Agent 发现、连接、调用外部工具的通用握手
- Anthropic 开发 → Microsoft 采纳 → 行业标准
- 类比 **USB-C**：双方实现协议即可互通，无需定制代码
- 前提：工具提供方须部署 MCP Server

### 两阶段握手（考试核心）

#### 1. Discovery — `list tools`
- Agent → MCP Server 发送 list tools 请求
- Server 返回 JSON 工具列表（name, description, input schema）

#### 2. Call — `call tool`
- Agent 发送 tool name + parameters
- Server 执行 → 返回标准 JSON（success/content 或 isError）

### MCP Server
- 运行在**工具提供方基础设施**（非 Agent 侧）
- 桥接 Agent 与企业系统（SharePoint、Salesforce、内部 API）
- 职责：下游认证、rate limit、响应转 MCP 格式、logging
- **Microsoft 不提供 MCP Server**；企业自行部署（Microsoft 有 SharePoint 预构建 Server）

### MCP Client
- Agent 内置组件（**Microsoft Agent Framework 已集成**）
- Discovery：发送 list tools → **缓存工具列表**（session 内）
- Call：发送 call tool → 返回响应给 Agent
- 无需手写协议代码

### list tools 响应格式
```json
{
  "tools": [{
    "name": "searchSharePoint",
    "description": "Search documents in SharePoint",
    "inputSchema": { "query": "string", "siteId": "string" }
  }]
}
```
- LLM 读 description 决定是否调用；input schema 定义参数类型

### call tool 响应
- 成功：`content`（如「Found 3 documents」）
- 失败：`isError: true` + 错误说明（如 SharePoint auth failed）

### Foundry 配置
- Agent/Project 设置中添加 MCP Server：**URL + 认证类型 + 凭证**
- 可配置多个 Server（dev/staging/prod 不同 URL）
- Agent 可跨多 Server 发现并调用工具

### 认证
- **Bearer token**：Foundry 用 Agent Managed Identity 从 Entra ID 获取 token → Authorization header
- **API key**：静态 key 从 Key Vault → `X-API-Key` header
- MCP Server 可对照 **Entra ID / Entra Agent ID** 验证 Agent 权限

### MCP vs Custom Tools
| 场景 | 选择 |
|------|------|
| 10+ 工具、多团队频繁变更 | **MCP** |
| 1–2 稳定工具、需深度优化 | **Custom tools** |
| 混合 | MCP（SharePoint/Salesforce）+ Custom（聚合/校验逻辑） |

### SharePoint 示例
- Microsoft 预构建 SharePoint MCP Server
- 开箱工具：searchSharePoint、getDocument、updateMetadata
- Agent：list tools → call searchSharePoint → 无需 SharePoint 专用代码

### 本地工具暴露
- readFile（path 参数）、executeScript（scriptName + args）
- **Whitelist** 限制可访问路径/脚本 → 第一层安全

### 工具组合
- LLM 可推理依赖链：先 searchSharePoint 获 document ID → 再 summarizeText
- 第一工具失败则不调用后续

### 安全：Whitelist + Defense in Depth
- **Per-agent whitelist**：Agent A 只见 search，Agent B 可见 delete
- Server 对照 Entra Agent ID 过滤 list tools 响应
- **Call-time validation**：即使 Agent 硬编码工具名，Server 仍拒绝未授权 call

### Foundry Trace
- Discovery span：server URL, tool count, duration
- Call span：tool name, parameters, response length, status
- 按 MCP server 或 error type 过滤

## 考试要点

- MCP = 标准两阶段握手：**list tools → call tool**
- Server 由工具方部署；Client 在 Agent Framework 内置
- Foundry 配置 URL + Bearer/API key 认证
- MCP vs custom：多变/多工具用 MCP；稳定/优化用 custom
- Whitelist per agent + call-time validation（defense in depth）
- SharePoint 预构建 MCP Server
- Foundry Trace 记录 discovery + call spans

## English Short Summary

Model Context Protocol (MCP) is an open standard—originally from Anthropic, adopted by Microsoft—for agents to discover and call external tools via a two-phase handshake: list tools then call tool. MCP Servers run on the tool provider's infrastructure (not hosted by Microsoft), handling auth, rate limits, and format translation. The Microsoft Agent Framework includes a built-in MCP Client. Configure server URLs and credentials in Foundry. Use MCP for many frequently changing enterprise tools; custom tools for stable, optimized logic. Security via per-agent whitelists and call-time validation. Foundry Trace spans log discovery and call operations.

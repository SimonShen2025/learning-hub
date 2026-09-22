---
title: "Lab: Inspecting Agents Dashboard and Application Map (Hands-On Lab)"
lectureId: 134
section: 15
sectionTitle: "AI App Observability and Monitoring"
date: "2026-09-22"
tags: ["application-insights", "agents-dashboard", "application-map", "monitoring"]
---

## 中文短总结

在 Application Insights 资源的 Investigate 区域可查看 Agents 仪表盘：展示智能体运行次数、是否出现错误、是否发生工具调用（如调用 MS Learn MCP 服务器）、所用模型及 Token 消耗明细（输入/输出拆分）；All Agents 区域列出当前被监控的所有智能体。Application Map 以图结构展示请求来源（如客户端）、途经的智能体（Foundry 中的 MCP Agent）及其调用的下游资源（MCP 服务器），有助于理解调用拓扑，也可用于评估攻击面和暴露的资源/工具。

## 中文长总结

### Agents 仪表盘

- 路径：Application Insights 资源 → Investigate 区域 → Agents
- 展示内容：
  - 该智能体（示例中的 MCP Agent）被运行的次数（首次运行只显示一条记录）
  - 是否发生错误（若执行失败会在此显示）
  - 是否发生工具调用（本例中确实调用了 MS Learn MCP 服务器）
  - 用于智能体创建的模型（示例中含 GPT-4.1 等）
  - Token 消耗明细：输入 vs. 输出拆分，总计约 7.6k tokens

### All Agents 视图

- 列出当前被该 Application Insights 资源监控的所有智能体（本例中仅有一个 MCP Agent）

### Application Map（应用地图）

- 以图结构（graph）呈现请求的来源与流转路径：客户端 → Foundry 资源中的 MCP Agent → 下游调用的 MS Learn MCP 服务器
- 可点击图中节点查看详情（如发起调用的客户端计算资源信息）
- 除了用于理解调用拓扑外，该地图还有助于评估智能体的**攻击面**：可以清晰看到组织内暴露了哪些工具、资源和智能体，以及客户端主要与哪些资源交互，为安全分析提供参考

## English Short Summary

The Application Insights Agents dashboard (under Investigate) shows how many times an agent ran, whether errors occurred, whether tool calls were made, which models were used, and a token consumption breakdown (input vs. output). The All Agents view lists every monitored agent. The Application Map visualizes the request flow as a graph — client to Foundry Agent to the downstream MCP server — useful both for understanding call topology and for security analysis of exposed tools and resources.

---
title: "Lab: Trace an AI Agent with Automated Tracing (Hands-On Lab)"
lectureId: 133
section: 15
sectionTitle: "AI App Observability and Monitoring"
date: "2026-09-22"
tags: ["opentelemetry", "application-insights", "microsoft-foundry", "agent-tracing", "mcp"]
---

## 中文短总结

在 Microsoft Foundry 门户智能体的 Traces 标签页首次点击后会引导创建关联的 Application Insights 资源（同时自动创建 Log Analytics 工作区），并在 Foundry 项目的 Connected Resources 中建立连接。代码侧需安装 OpenTelemetry 及 Azure Monitor OpenTelemetry 相关 SDK，设置环境变量 `AZURE_EXPERIMENTAL_ENABLE_GENAI_TRACING=true` 启用追踪，通过 `get_application_insights_connection_string` 获取连接字符串并调用 `configure_azure_monitor` 完成配置，再用 `tracer.start_as_current_span` 包裹创建 MCP 工具、创建智能体、发起对话的全过程。执行后可在 Foundry 门户的 Traces 中查看总耗时、输入/输出 Token 数、预估成本，以及各步骤（如 14.12 秒、2.72 秒等）的详细分解，用于定位延迟瓶颈。

## 中文长总结

### 创建 Application Insights 连接

- 在 Microsoft Foundry 门户进入某个 Agent 的 **Traces** 标签页，若尚未关联 Application Insights 资源，会提示创建向导（填写资源名称等）
- 创建完成后，对应资源组中会出现两个新资源：Application Insights 资源本身，以及为其提供持久化存储的 **Log Analytics 工作区**
- 可在 Foundry 门户 Operate → Admin → 选择项目 → Connected Resources 中确认已生成指向 Application Insights 的外部连接

### 代码侧启用追踪

- 需要安装的关键库：OpenTelemetry SDK 及 Azure Monitor OpenTelemetry 集成包
- 设置环境变量 `AZURE_EXPERIMENTAL_ENABLE_GENAI_TRACING = true`，每次希望在自定义应用中启用 Foundry 智能体的 OpenTelemetry 追踪都需要设置该变量
- 加载环境变量（Foundry 项目终结点、模型部署名、MCP 服务器名称），创建 Foundry 项目客户端与 OpenAI 客户端
- 遍历项目连接，根据 MCP 服务器名称取得对应连接 ID，用于创建挂载了 MS Learn MCP 服务器工具的智能体
- 调用 `get_application_insights_connection_string` 获取连接字符串，再用 `configure_azure_monitor(connection_string=...)` 完成 OpenTelemetry 到 Application Insights 的对接

### 执行并记录追踪

- 使用 `tracer.start_as_current_span("Agent Tracing Scenario")` 开启一个新的追踪 span，将创建 MCP 工具、创建名为 "MCP Agent" 的智能体（系统提示为可与 MS Learn MCP 服务器交互的助手）、创建对话线程、发起用户查询（"最新的 AI Foundry SDK 代码示例"）等一系列操作全部纳入该 span 范围
- 执行后可在 Foundry 门户对应智能体的 Traces 标签页中看到新生成的追踪记录

### 查看追踪详情

- 追踪总览展示：总耗时、输入 Token 数、输出 Token 数、预估成本（示例中约 1.97 印度卢比）
- 展开追踪后可看到各子过程的具体耗时（如 14.12 秒、2.72 秒、9.68 秒、7.52 秒），帮助识别延迟最高的环节
- User View 视图展示用户查询与智能体响应，并汇总本次运行包含 1 次对话调用、1 次 MCP 工具调用、总执行时间约 26.9 秒、约 15,200 个 Token
- 追踪界面还支持"播放"功能，按步骤回放整个执行过程

## English Short Summary

Opening an Agent's Traces tab in the Foundry portal first prompts creating a linked Application Insights resource. In code: install the OpenTelemetry/Azure Monitor SDKs, set `AZURE_EXPERIMENTAL_ENABLE_GENAI_TRACING=true`, fetch the connection string, and call `configure_azure_monitor`. Wrapping tool creation, agent creation, and the conversation turn in `tracer.start_as_current_span` produced a trace showing duration, tokens, cost, and per-step latency for diagnosing bottlenecks.

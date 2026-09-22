---
title: "A Brief Look at the Tools for Observability and Monitoring"
lectureId: 131
section: 15
sectionTitle: "AI App Observability and Monitoring"
date: "2026-09-22"
tags: ["observability", "opentelemetry", "application-insights", "microsoft-foundry", "kql"]
---

## 中文短总结

Microsoft Foundry 智能体的可观测性技术栈：自定义应用集成 Microsoft Foundry SDK 后，通过开源的 OpenTelemetry SDK 采集智能体运行的追踪数据，写入与 Foundry 关联的 Application Insights 资源；Application Insights 底层依赖自动创建的 Log Analytics 工作区做持久化存储，可用 KQL（Kusto 查询语言，类似 SQL）查询和构建仪表盘。仪表盘可展示请求量、工具调用次数、成本明细，追踪视图可展示单次智能体运行各阶段的耗时，帮助定位性能瓶颈。

## 中文长总结

### 可观测性技术栈总览

- 目标：为基于 Microsoft Foundry 的智能体（Agent）应用记录助手响应与用户交互
- 核心难点：自定义应用代码（托管在云端服务器）如何将 Microsoft Foundry SDK 的交互数据接入统一的追踪体系
- 解决方案：使用开源的 **OpenTelemetry SDK**——该 SDK 广泛用于可观测性场景（如将 DevOps/Kubernetes 环境的应用交互日志发送到 Grafana 或 Prometheus 仪表盘）

### 数据流转链路

- 在 Foundry Agent 中集成 OpenTelemetry SDK，将智能体交互数据发送并存储到 **Application Insights** 资源（需在 Azure 门户创建，并与 Foundry 资源建立连接）
- Application Insights 展示的仪表盘可呈现：智能体收到的请求数、涉及的智能体总数、内部工具调用情况，以及交互的总成本明细，帮助评估智能体应用的财务开销
- 底层数据实际持久化存储在自动配置的 **Log Analytics 工作区（Log Analytics Workspace）** 中，Application Insights 负责读取该数据并可视化
- 可使用 **KQL（Kusto 查询语言）** 像 SQL 一样对 Log Analytics 工作区中的数据执行联接等查询操作，构建自定义仪表盘

### 追踪（Trace）的价值

- 一次典型的追踪展示了智能体运行各阶段（如某步骤耗时 11 秒、2 秒、3 秒等）的详细分解
- 通过分析这类追踪，可以定位延迟瓶颈，识别哪个环节耗时异常，从而针对性优化智能体性能

## English Short Summary

Microsoft Foundry agent observability stack: apps integrating the Foundry SDK use the open-source OpenTelemetry SDK to capture execution traces, sent to an Application Insights resource connected to the Foundry resource. Application Insights is backed by an auto-provisioned Log Analytics workspace, queryable via KQL for custom dashboards. Dashboards surface request volume, tool-call counts, and cost breakdowns, while individual traces show per-step latency to help pinpoint bottlenecks.

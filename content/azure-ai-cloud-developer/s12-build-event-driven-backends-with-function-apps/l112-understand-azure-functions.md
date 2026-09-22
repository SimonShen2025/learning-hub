---
title: "Understand Azure Functions"
lectureId: 112
section: 12
sectionTitle: "Build Event Driven Backends with Function Apps"
date: "2026-09-22"
tags: ["azure-functions", "serverless", "event-driven-architecture", "compute"]
---

## 中文短总结

Azure Functions 是无服务器（serverless）事件驱动计算服务：仅需编写业务逻辑代码，无需管理底层基础设施和扩缩容，按实际执行实例数和时长计费。触发器类型包括 HTTP 请求、Event Grid 事件、Service Bus 消息、Blob 上传、定时器等。底层构建于 Azure App Service 和 WebJobs SDK 之上，支持 C#、Node.js、Python 等多种语言运行时。部署方案分三种：专用 App Service 计划、Container Apps 托管、消费计划（即将被 Flex Consumption 计划取代，是完全无服务器的方案，本课程实验采用此计划）。

## 中文长总结

### Azure Functions 的定位

- 相较于 App Service、Container Instances、AKS、Container Apps 等 PaaS 方案，这些方案仍需要开发者承担一定的基础设施管理开销
- Azure Functions 是真正的无服务器（serverless）计算服务：只需专注编写业务逻辑（Python/C# 等），扩缩容规则（最大/最小实例数）设置后由 Azure 全权托管
- **Serverless** 含义：只为实际执行的实例数付费，空闲实例不产生费用，这与 App Service/AKS/Container Apps 的计费模式不同

### 事件驱动特性

- Azure Functions 是**事件驱动**的计算服务，可由 HTTP 请求、Event Grid 事件、Service Bus 消息、Blob 上传、定时器等多种触发器（trigger）驱动
- 扩缩容基于待处理的事件/消息数量：例如 Service Bus 队列中消息堆积时，Function App 可按预设规则自动扩展到最大实例数，无需手动管理底层扩容基础设施

### 底层架构与语言支持

- 底层构建于 **Azure App Service** 与 **WebJobs SDK** 之上，但该复杂度对开发者透明
- 部署 Function App 时甚至可以选择托管在已有的 App Service 计划上，印证了这一底层关系
- 支持的语言运行时包括 C#、Node.js、F#、PHP、Python 等

### 三种部署（托管）方案

1. **专用 App Service 计划（Dedicated App Service Plan）**：复用已有且未充分利用的 App Service 计划，与其他 Web App 共享计费
2. **Container Apps 托管**：复用已有的 Container Apps 环境承载 Function App
3. **消费计划（Consumption Plan）**：真正的无服务器方案，仅按实例数与执行时长计费；即将被新的 **Flex Consumption Plan** 取代，本课程的动手实验将采用此计划

### 典型架构回顾

- 图片上传到 Storage 账户 → 触发 Event Grid 事件 → Event Grid 将含图片 URL 的 JSON 负载写入 Service Bus 队列 → Function App 消费者根据队列消息数量自动扩缩容，彼此竞争消费消息，调用大语言模型生成图片描述并存储结果

## English Short Summary

Azure Functions is a serverless, event-driven compute service: developers write business logic while Azure manages infrastructure and scaling, billed only for executed instances. Triggers include HTTP requests, Event Grid events, Service Bus messages, Blob uploads, and timers. Built on Azure App Service and the WebJobs SDK, supporting C#, Node.js, Python, and more. Three hosting plans exist: dedicated App Service, Container Apps, and Consumption (soon replaced by Flex Consumption, used here).

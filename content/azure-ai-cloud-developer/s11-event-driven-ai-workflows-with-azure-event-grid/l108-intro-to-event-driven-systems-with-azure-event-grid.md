---
title: "Intro to Event-Driven Systems with Azure Event Grid"
lectureId: 108
section: 11
sectionTitle: "Event-Driven AI Workflows with Azure Event Grid"
date: "2026-09-22"
tags: ["event-grid", "event-driven-architecture", "pub-sub", "azure-storage"]
---

## 中文短总结

Azure Event Grid 是基于发布/订阅模型的全托管事件路由服务，与语言和平台无关。核心概念包括：事件（Event，轻量状态变更通知）、事件发布者（Event Publisher，如 Blob 存储或自定义应用）、主题（Topic，分系统主题和自定义主题）、事件订阅（Event Subscription，定义监听哪个主题、过滤条件和目标端点）以及事件处理程序（Event Handler，如 Function App、Logic App）。典型架构：Blob 上传触发 Event Grid 系统主题，写入 Service Bus 队列，多个 Function App 作为竞争消费者调用多模态 LLM 生成图片描述。

## 中文长总结

### Event Grid 是什么

- 全托管的事件路由服务，采用发布/订阅（pub-sub）模型
- 负责多个来源与订阅者之间的事件路由和投递，且与语言/平台无关
- 典型场景：Blob 存储上传新图片后需要触发通知，再交由消息系统（如 Service Bus）供下游消费者处理

### 核心组件

- **事件（Event）**：描述资源状态变更的轻量通知（如 "Blob created"），不携带完整变更后的资源内容
  - 分为 **Azure 原生事件**（与 Azure 资源关联，如 Blob 上传）和**自定义事件**（来自自定义应用，与 Azure 原生资源无关）
- **事件发布者（Event Publisher）**：产生状态变更的 Azure 原生资源或自定义应用
- **主题（Topic）**：将 Event Grid 关联到发布者的桥梁
  - **系统主题（System Topic）**：用于监听 Azure 原生资源事件
  - **自定义主题（Custom Topic）**：用于监听自定义应用产生的事件
- **事件订阅（Event Subscription）**：定义从某主题接收哪些事件、可选过滤条件，以及事件投递到哪个目标端点（Event Handler）
- **事件处理程序（Event Handler）**：接收并处理事件的目的地，如 Azure Function、Logic App、自定义 Web 应用

### 实战架构示例

- Azure Storage 账户持续上传图片 → 系统主题检测到 Blob 创建事件 → Event Grid 将 CloudEvents JSON 负载写入 Azure Service Bus 队列（作为 Event Handler）
- 负载中包含存储账户名、Blob 文件名和图片 URL
- 多个 Function App 作为**竞争消费者（competing consumers）**从队列中取消息，调用支持视觉输入的大语言模型生成图片描述并落库
- 该架构展示了 Event Grid 与 Service Bus 结合构建企业级事件驱动流水线的典型模式

## English Short Summary

Azure Event Grid is a managed pub-sub router. Events come from Azure resources or custom apps, pass through system or custom topics, and are delivered to filtered subscriptions and handlers such as Functions or Logic Apps. A typical design routes Blob-created events to Service Bus, where competing Function consumers call a multimodal LLM to caption images.

---
title: "CloudEvents Schema Structure for Custom Topics"
lectureId: 109
section: 11
sectionTitle: "Event-Driven AI Workflows with Azure Event Grid"
date: "2026-09-22"
tags: ["event-grid", "cloudevents", "json-schema", "interoperability"]
---

## 中文短总结

CloudEvents 是 Azure Event Grid 推荐使用的标准化、协议无关的事件负载格式，由 CNCF 支持，可跨 Azure、AWS、GCP 等云厂商互操作。关键字段包括：specversion（固定为 1）、type（反向 DNS 命名，标识事件类别与发布者）、source（事件来源系统/组件）、id（全局唯一标识符）、subject（可用于订阅者过滤的路径）、datacontenttype（如 application/json）以及 data（承载具体业务负载，如模型名称、请求 ID、处理时长等）。

## 中文长总结

### 为什么使用 CloudEvents Schema

- CloudEvents 是新实现推荐使用的事件格式，由 Azure Event Grid 原生支持，且由 Cloud Native Computing Foundation（CNCF）背书
- 标准化、协议无关的结构意味着只要下游应用监听符合 CloudEvents 规范的 JSON 负载，就不依赖具体云厂商
- 同样支持 CloudEvents 的 AWS 或 GCP 等价服务也能与之互操作，实现跨云事件驱动集成

### 关键字段解析

- **specversion**：固定为 `1`，表示 CloudEvents 规范版本
- **type**：对事件分类，采用反向 DNS 命名避免跨组织/服务冲突（如 `com.contoso.ai.inferenceCompleted` 表示 Contoso AI 工作负载下推理服务完成的事件）
- **source**：标识事件发生的系统或组件（如某内容审核服务）
- **id**：由字母数字组成的全局唯一标识符，每个负载必须携带
- **subject**：提供可供订阅者过滤的路径信息（如某批次 `batch 42`），订阅者可仅监听特定 subject 的事件
- **datacontenttype**：声明 data 字段的内容类型，通常为 `application/json`
- **data**：承载具体业务负载，字段因场景而异（如模型名称、请求 ID、结果位置 URL、处理耗时、状态、已处理条目数等），订阅者据此提取信息执行业务逻辑

## English Short Summary

CloudEvents is Azure Event Grid's recommended, CNCF-backed, protocol-agnostic event schema, enabling interoperability with AWS, GCP, and other systems supporting the spec. Key fields: specversion (always 1), type (reverse-DNS event category/publisher), source (originating system), id (unique identifier), subject (filterable path), datacontenttype (e.g. application/json), and data (payload such as model name, request id, duration, status).

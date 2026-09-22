---
title: "Lab: Setup an Event Grid Topic and Subscription (Hands-On Lab)"
lectureId: 110
section: 11
sectionTitle: "Event-Driven AI Workflows with Azure Event Grid"
date: "2026-09-22"
tags: ["event-grid", "azure-storage", "service-bus", "system-topic", "managed-identity"]
---

## 中文短总结

本实验搭建"Blob 上传 → Event Grid 系统主题 → Service Bus 队列 → LLM 图片描述"的事件驱动流水线。步骤：创建 Storage 账户并开启匿名 Blob 访问；在订阅的资源提供程序中注册 Microsoft.EventGrid；创建 Event Grid 系统主题（关联 Storage 账户，使用系统分配托管身份）；创建 Service Bus 队列作为事件订阅的目标端点，Schema 选择 Cloud Event Schema v1；为 Event Grid 订阅的托管身份在 Service Bus 上分配 "Azure Service Bus Data Sender" 角色，使其能够写入队列消息。

## 中文长总结

### 部署 Storage 账户并开启匿名访问

- 创建 Azure Storage 账户（Blob 存储类型），资源组与已有资源保持一致
- 默认禁止匿名 Blob 访问，需要在 Configuration 区域将 "Allow Blob Anonymous Access" 设为 Enabled（可能需要保存两次才能生效，属于已知偶发 Bug）
- 创建 images 容器，容器级匿名访问权限设为 Container，上传测试图片验证 URL 可直接公开访问

### 注册 Event Grid 资源提供程序

- 在创建 Event Grid 资源前，需在订阅（Subscription）的 Resource Providers 中搜索并注册 **Microsoft.EventGrid**
- 部分订阅默认未注册该提供程序，需手动点击 Register，等待约一分钟生效

### 创建系统主题（System Topic）

- 因为事件来源是 Azure 原生资源（Storage 账户）而非自定义应用，选择 **System Topic** 类型
- Topic Type 选 Storage Accounts，指定订阅、资源组和目标 Storage 账户，命名主题（如 images topic）
- 认证方式使用系统分配托管身份（System Assigned Managed Identity）

### 创建事件订阅（Event Subscription）

- 在系统主题下创建 Event Subscription，Schema 选择 **Cloud Event Schema v1**（因为消费端接收方按 CloudEvents 格式解析）
- Event Type 选择 **Blob Created**（也可选 Blob deleted/renamed 等其他类型）
- Endpoint Type 选择 Service Bus Queue，需预先在 Service Bus 命名空间中创建对应队列（如 images queue）
- 投递身份验证选择 System Assigned（若创建时报错，可先将身份设为 None，创建成功后再单独在 Identity 标签页启用）

### 授权 Event Grid 写入 Service Bus 队列

- Event Grid 订阅的系统分配托管身份默认没有权限写入 Service Bus 队列
- 需在 Service Bus 命名空间的 Access Control (IAM) 中为该托管身份新增角色分配：**Azure Service Bus Data Sender**
- 完成角色分配后，Event Grid 才能将 Blob 创建事件的 CloudEvents 负载成功写入 Service Bus 队列

## English Short Summary

This lab builds an event-driven pipeline: Blob upload → Event Grid system topic → Service Bus queue → LLM image captioning. Steps: enable anonymous blob access on a Storage account; register the Microsoft.EventGrid provider; create a system topic with a system-assigned managed identity; create a Service Bus queue endpoint using Cloud Event Schema v1 and the Blob Created event; and grant that identity the "Azure Service Bus Data Sender" role to write to the queue.

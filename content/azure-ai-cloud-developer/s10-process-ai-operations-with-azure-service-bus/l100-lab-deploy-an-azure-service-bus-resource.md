---
title: "Lab: Deploy an Azure Service Bus Resource (Hands-On Lab)"
lectureId: 100
section: 10
sectionTitle: "Process AI Operations with Azure Service Bus"
date: "2026-09-22"
tags: ["service-bus", "azure-portal", "hands-on-lab"]
---

## 中文短总结

通过 Azure 门户部署 Azure Service Bus 命名空间：选择 Standard 定价层（约每 1250 万次操作 10 美元，支持创建主题和订阅，而 Basic 层仅支持队列），启用本地身份验证并允许公网访问。部署完成后可在 Shared Access Policies 区域获取包含终结点和密钥的连接字符串，用于代码方式连接。

## 中文长总结

### 创建 Service Bus 命名空间

- 在 Azure 门户搜索 "Service Bus" 并创建，放入现有资源组
- 命名空间名称需全局唯一，区域选择（如 Sweden Central）
- 定价层选择 **Standard**（约 10 美元/1250 万次操作/月），因为 Basic 层**不支持**创建主题（Topic）和订阅（Subscription），只支持队列；Premium 层面向企业级场景，成本远高于演示需求（约 1000 美元/百万次操作/月）
- 高级（Advanced）标签页启用本地身份验证（基于密钥的认证方式）
- 网络标签页确保启用公网访问

### 部署后资源概览

- Overview 区域展示传入请求总数、成功请求数、服务器错误数等仪表盘指标（针对该命名空间下所有队列的消息）
- **Shared Access Policies** 区域（Settings 下）提供默认的 root 托管共享访问密钥，包含主密钥和辅助密钥
- 该策略提供连接字符串（终结点 + 密钥组合），用于代码方式连接 Service Bus 资源
- 策略中包含的"声明（Claims）"定义了访问权限模式，如允许客户端管理、发送、监听队列/主题/订阅中的所有消息

## English Short Summary

Deployed an Azure Service Bus namespace via the portal, selecting the Standard pricing tier (~$10/12.5M operations/month, required for topics and subscriptions since Basic only supports queues), enabling local (key-based) authentication and public network access. After deployment, retrieved the connection string (endpoint + key) from the Shared Access Policies blade for code-based connections.

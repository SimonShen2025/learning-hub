---
title: "Introduction to Azure Container Apps (ACA)"
lectureId: 47
section: 6
sectionTitle: "Deploy and Manage AI Apps on Azure Container Apps (ACA)"
date: "2026-09-22"
tags: ["azure-container-apps", "aca", "serverless", "microservices"]
---

## 中文短总结

Azure Container Apps（ACA）在“基础设施控制”与“开发者生产力”之间找到平衡点：相比 AKS 需要开发者管理节点、网络与服务暴露方式，ACA 抽象了大部分底层基础设施；相比 App Service/Function App 又保留了微服务架构所需的灵活性。ACA 支持修订版本（revisions）流量拆分、后台定时任务、事件驱动扩缩容，并支持缩容至零实例。

## 中文长总结

### 背景：基础设施控制 vs 开发者生产力

- 容器化工作负载谱系中存在一个权衡：基础设施控制越强，开发者生产力越低
- AKS 提供更强的基础设施控制（节点配置、网络、服务类型选择），但开发者需要承担更多运维负担，生产力较低
- App Service、Container Instance、Function App 提供更高的开发者生产力（只需关注业务逻辑），但牺牲了基础设施的精细控制

### ACA 的定位

- ACA 在两者之间找到"甜蜜点"（sweet spot）：既有足够的基础设施控制，又有足够的开发者生产力
- 概念上与 AKS 类似（可复用 AKS 的很多概念），但无需关心 AKS 层面的基础设施细节
- 可以构建与 AKS 类似的微服务架构，同时大部分底层基础设施管理被 Azure 抽象掉

### ACA 的核心能力

1. **修订版本（Revisions）与流量拆分**：可通过点击按钮实现蓝绿部署，如 80% 流量分给 revision 1、20% 分给 revision 2
2. **后台处理（Jobs）**：可创建类似 cron job 的定时任务，如每隔两天执行一次数据库迁移
3. **事件驱动处理**：可将容器化工作负载接入队列系统，根据队列消息数量自动扩缩容
4. **缩容至零（Scale to zero）**：在没有流量需求时可以缩容到零实例，避免为闲置实例付费（这是 AKS 所不具备的能力）
5. **完整的微服务架构支持**：可以构建多个不同的容器化工作负载（如前端、后端），彼此通信，并分别暴露给外部流量

## English Short Summary

Azure Container Apps (ACA) sits between AKS (more infrastructure control, less developer productivity) and App Service/Function App (more productivity, less control), abstracting away most infrastructure management while retaining microservices flexibility. Key capabilities include revision-based traffic splitting for blue-green deployments, background jobs (cron-like), event-driven scaling from queues, and scale-to-zero to avoid paying for idle instances.

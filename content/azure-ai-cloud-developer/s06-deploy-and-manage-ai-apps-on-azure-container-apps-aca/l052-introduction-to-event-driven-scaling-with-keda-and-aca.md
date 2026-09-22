---
title: "Introduction to Event Driven Scaling with KEDA and ACA"
lectureId: 52
section: 6
sectionTitle: "Deploy and Manage AI Apps on Azure Container Apps (ACA)"
date: "2026-09-22"
tags: ["azure-container-apps", "keda", "auto-scaling", "event-driven"]
---

## 中文短总结

ACA 支持两种自动扩缩容场景：基于 HTTP 请求量的 HTTP scaler（流量超过阈值时扩容，恢复正常后缩容），以及基于其他 Azure 资源（如 Blob Storage 中待处理图片数量）的事件驱动扩缩容。底层机制与 Kubernetes 相同，都使用 KEDA（Kubernetes Event Driven Auto Scaling），但 ACA 屏蔽了 KEDA 各组件（如 HPA、controller、admission webhook、API server）的配置复杂度。

## 中文长总结

### HTTP Scaler 场景

- 正常流量下容器应用只运行单个副本
- 当流量超过配置的阈值（在创建 HTTP scaler 规则时设定），副本数可扩展到多个实例（如 10 个）
- 流量恢复正常后，副本数会缩减回初始值（如 1 个）

### 事件驱动扩缩容场景（以 Blob Storage 为例）

- 示例：Blob Storage 中上传多张图片，Python 应用调用视觉大语言模型为图片生成描述
- 少量图片时单副本即可处理；但面对成千上万张图片时，单副本可能因资源不足而发生内存溢出（out-of-memory）错误
- 可配置 Azure Blob Storage 扩缩容规则，使副本数根据待处理图片数量自动扩展（如扩展到 10 个副本），处理完毕后再缩容回单副本

### 底层机制：KEDA

- ACA 与 Kubernetes 集群底层使用相同的扩缩容机制 —— KEDA（Kubernetes Event Driven Auto Scaling）
- 在原生 Kubernetes 集群中使用 KEDA，需要自行配置 Horizontal Pod Autoscaler、controller、admission webhook、Kubernetes API server 等组件
- ACA 作为 Azure 托管服务，屏蔽了这些底层组件的配置复杂度，开发者无需关心基础设施细节

## English Short Summary

ACA supports two auto-scaling scenarios: HTTP-based scaling (replicas scale out past a request threshold, then back in) and event-driven scaling from other Azure resources (e.g., scaling on pending Blob Storage images to avoid out-of-memory errors on one replica). Both use the same mechanism as Kubernetes — KEDA — but ACA abstracts away KEDA's components (HPA, controller, webhooks, API server) you'd otherwise configure manually.

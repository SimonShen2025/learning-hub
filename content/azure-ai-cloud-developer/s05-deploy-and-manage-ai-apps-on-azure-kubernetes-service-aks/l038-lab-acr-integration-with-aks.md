---
title: "Lab: ACR Integration with AKS (Hands-On Lab)"
lectureId: 38
section: 5
sectionTitle: "Deploy and Manage AI Apps on Azure Kubernetes Service (AKS)"
date: "2026-09-22"
tags: ["aks", "azure-container-registry", "managed-identity"]
---

## 中文短总结

创建 AKS 集群时若选择集成已有 ACR，Azure 会自动创建一个系统分配托管标识（AKS 代理池托管标识），并在 ACR 的访问控制中自动赋予该标识 **ACR Pull** 角色，全程无需手动配置，即可让 AKS 从 ACR 拉取镜像并部署容器。

## 中文长总结

### 自动化集成

- 在 AKS 创建向导的"集成"步骤选择关联已有 ACR 后，Azure 会在幕后自动完成以下操作：
  1. 为 AKS 集群创建一个系统分配托管标识（如 "AI200 AKS 集群代理池托管标识"）
  2. 在 ACR 的"访问控制（IAM）"中为该托管标识分配 **ACR Pull** 角色
- 该过程无需任何手动干预，可在 AKS 的"资源可视化工具"标签页查看托管标识及其与 ACR 的关联，也可在 ACR 的角色分配区域反向验证

### 意义

- 理解该自动化机制有助于排查权限问题，以及理解 AKS 拉取容器镜像背后的认证链路

## English Short Summary

When an existing ACR is integrated during AKS cluster creation, Azure automatically creates a system-assigned managed identity for the AKS agent pool and grants it the ACR Pull role on the registry's access control (IAM) — with zero manual configuration — enabling AKS to pull images and deploy them as containers.

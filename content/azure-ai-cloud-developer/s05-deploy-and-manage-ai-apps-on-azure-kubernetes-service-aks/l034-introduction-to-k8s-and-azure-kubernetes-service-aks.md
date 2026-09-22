---
title: "Introduction to K8s and Azure Kubernetes Service (AKS)"
lectureId: 34
section: 5
sectionTitle: "Deploy and Manage AI Apps on Azure Kubernetes Service (AKS)"
date: "2026-09-22"
tags: ["kubernetes", "aks", "container-orchestration", "microservices"]
---

## 中文短总结

Kubernetes 是一个开源的容器编排平台（CNCF 主导），解决微服务架构下容器的编排、监控、扩缩容与网络通信问题。它具有可移植、可扩展、自愈的特性。Azure Kubernetes Service (AKS) 是 Azure 托管版 Kubernetes：开发者只需专注应用开发、容器化与 YAML 清单文件，Azure 负责集群托管、计算资源、升级与安全补丁。

## 中文长总结

### 背景：从单体到微服务

- 传统应用直接部署在虚拟机/服务器上，难以在不同环境间复制、扩缩容困难
- 微服务架构结合容器化与云服务商（Azure/AWS/GCP），解决了环境复制与弹性扩展的痛点

### Kubernetes 的定位

- 一个开源的**容器编排平台**，由 Cloud Native Computing Foundation (CNCF) 主导
- 核心能力：编排规则设定（故障转移、可靠性）、扩缩容规则、容器间网络通信管理
- 特性：**可移植**（可在公有云/私有云/混合云/多云运行）、**可扩展**（各云厂商提供托管版本，容器可与云原生资源如 Key Vault 交互）、**自愈**

### 架构四大组成部分

1. **清单文件（Manifest Files）**：YAML 格式定义扩缩容、健康检查等规则
2. **控制平面节点（Control Plane Node）**：暴露 API，供清单文件设置集群规则
3. **节点（Nodes）**：计算引擎（虚拟机）
4. **Pod**：运行在节点内，承载应用容器；一个 Pod 可包含多个容器

### AKS 的价值

- 开发者只需负责：应用开发迭代调试、应用容器化、编写 YAML 清单文件
- Azure 负责：集群托管、提供虚拟机规模集形式的计算引擎、集群升级、安全补丁、监控与日志
- 按使用的 AKS 节点计费，无需管理底层基础设施

## English Short Summary

Kubernetes is an open-source container orchestration platform (led by the CNCF) that solves microservices-era problems around scaling, failover, monitoring, and inter-container networking, with portable, extensible, and self-healing characteristics. Azure Kubernetes Service (AKS) is Azure's managed Kubernetes offering: developers focus on app development, containerization, and YAML manifest files, while Azure handles cluster hosting, compute (VM scale sets), upgrades, security patching, and monitoring — billed only for the AKS nodes used.

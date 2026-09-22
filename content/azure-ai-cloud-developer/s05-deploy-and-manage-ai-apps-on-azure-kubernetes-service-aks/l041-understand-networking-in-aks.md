---
title: "Understand Networking in AKS"
lectureId: 41
section: 5
sectionTitle: "Deploy and Manage AI Apps on Azure Kubernetes Service (AKS)"
date: "2026-09-22"
tags: ["aks", "kubernetes-networking", "kubernetes-services", "load-balancer"]
---

## 中文短总结

AKS 网络涉及四类通信：容器间、Pod 间、Pod 到 Service、外部到 Service。节点（虚拟机规模集）位于 Azure 托管的虚拟网络中，Pod 拥有各自的虚拟 IP。由于 Pod 是短暂的（IP 可能变化），Kubernetes 用 Service 提供稳定的访问入口，常见类型有 ClusterIP（集群内通信）、LoadBalancer（公网入口）、NodePort（暴露节点端口）、ExternalName（映射外部 DNS 名称）。

## 中文长总结

### 四类通信场景

1. 容器到容器（如前端容器调后端容器）
2. Pod 到 Pod
3. Pod 到 Service
4. 外部到 Service

### 网络基础

- 节点（虚拟机规模集）位于 Azure 托管的虚拟网络中，CIDR 范围由 Azure 自动分配，无需手动配置
- 每个节点内的 Pod 拥有各自的虚拟 IP 段，Pod 间通信默认对外部不可见
- 若要将应用暴露给外部用户，需在前方配置 **Azure Load Balancer**，提供公网可访问 IP，由其负责内部负载均衡

### 为什么需要 Service

- Pod 是短暂的（ephemeral），故障恢复后 IP 地址可能变化，若应用直接依赖 Pod IP 通信会因 IP 变化而出错
- Service 提供稳定不变的 IP/DNS 名称，内部自动将请求负载均衡到对应的多个 Pod

### 四种主要 Service 类型

| 类型 | 用途 |
|---|---|
| **ClusterIP** | 集群内部通信（如前端 Pod 调用后端 Pod），提供稳定内部 IP，仅供集群内访问 |
| **LoadBalancer** | 提供公网可访问 IP，供外部用户访问，请求经负载均衡后路由到 ClusterIP 再到具体 Pod |
| **NodePort** | 通过节点上暴露的特定端口（如 3000、5000）接收外部请求 |
| **ExternalName** | 将 Service 映射到外部 DNS 名称（如 google.com），便于以域名而非 IP 访问 |

（第五种 Headless Service 超出课程范围，未详细讨论）

## English Short Summary

AKS networking involves four communication scenarios: container-to-container, pod-to-pod, pod-to-service, and external-to-service. Nodes (VM scale sets) sit in an Azure-managed virtual network with auto-assigned CIDR ranges, and pods get their own private virtual IPs. Since pods are ephemeral and their IPs can change, Kubernetes Services provide a stable access point: ClusterIP (internal pod-to-pod communication), LoadBalancer (public-facing entry point routed through ClusterIP), NodePort (exposes a specific node port), and ExternalName (maps to an external DNS name).

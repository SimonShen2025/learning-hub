---
title: "Understanding the K8s Architecture: The Fun Way!"
lectureId: 35
section: 5
sectionTitle: "Deploy and Manage AI Apps on Azure Kubernetes Service (AKS)"
date: "2026-09-22"
tags: ["kubernetes", "kube-api-server", "etcd", "kubelet"]
---

## 中文短总结

本课用"餐厅"类比讲解 Kubernetes 架构：Kube API Server（前台）接收清单文件请求；etcd（预订登记簿）存储所有规则的键值对，是唯一真实数据源；Scheduler（调度员）根据 etcd 信息决定容器运行在哪些节点上并维持期望状态；Controller Manager（餐厅经理）监督集群整体是否正常；Cloud Controller Manager 对接云厂商 API 供应计算资源；Kubelet（厨师）在节点上实际运行容器；Kube-proxy（协调员）负责集群内外通信。

## 中文长总结

### 餐厅类比

| Kubernetes 组件 | 餐厅角色 | 职责 |
|---|---|---|
| Kube API Server | 前台接待 | 接收开发者通过清单文件（YAML）发起的 API 请求 |
| etcd | 预订登记簿 | 以键值对形式存储所有规则（扩缩容、监控等），是集群的单一数据源 |
| Scheduler | 调度员 | 从 etcd 读取所需容器配置，决定容器运行在哪个节点，并持续维持期望状态（如实际运行数与期望数不符则自动补齐） |
| Controller Manager | 餐厅经理 | 监督节点/虚拟机是否正常运行，集群是否处于期望状态 |
| Cloud Controller Manager | 供应商对接人 | 对接具体云厂商 API（Azure/AWS/GCP）以置备虚拟机等资源 |
| Kubelet | 厨师 | 从 Scheduler 接收指令，在 Pod 中实际运行应用容器 |
| Pod | 正在烹饪的菜品 | 应用容器的运行环境，一个 Pod 可包含多个容器 |
| Kube-proxy | 厨房协调员 | 处理集群内（Pod 间）及集群外的网络通信 |
| 云提供商 API | 供应商仓库 | 提供虚拟机规模集等计算资源 |

### 关键要点

- etcd 是所有组件信息的唯一来源（single source of truth）
- 从宏观视角看，开发者只需关心清单文件、控制平面节点（Kube API Server）、Pod 与节点（虚拟机规模集）；其余组件属于底层实现细节

## English Short Summary

Using a restaurant analogy: the Kube API Server is the reception desk receiving manifest-file requests; etcd is the reservation logbook storing all rules as key-value pairs (the single source of truth); the Scheduler decides which nodes run which containers and maintains the desired state; the Controller Manager oversees overall cluster health; the Cloud Controller Manager talks to the cloud provider API (Azure/AWS/GCP) to provision VMs; the Kubelet (the chef) runs containers inside Pods; and Kube-proxy (the kitchen coordinator) handles intra- and inter-cluster networking.

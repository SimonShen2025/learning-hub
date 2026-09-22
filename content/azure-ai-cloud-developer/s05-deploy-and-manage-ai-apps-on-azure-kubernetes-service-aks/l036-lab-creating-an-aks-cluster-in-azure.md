---
title: "Lab: Creating an AKS Cluster in Azure (Hands-On Lab)"
lectureId: 36
section: 5
sectionTitle: "Deploy and Manage AI Apps on Azure Kubernetes Service (AKS)"
date: "2026-09-22"
tags: ["aks", "kubernetes", "azure-portal", "hands-on-lab"]
---

## 中文短总结

本实验在 Azure 门户创建 AKS 集群：选择 Dev/Test 预设、Free 定价层（免控制面费用，仍按计算节点计费）、默认节点池（2-5 节点自动扩缩容，单节点最多 110 个 Pod）、Azure CNI Overlay 网络、集成现有 ACR、启用容器日志（Azure Monitor + Log Analytics）。建议将 AKS 集群单独放入新资源组，方便实验结束后整体删除以控制成本。

## 中文长总结

### 关键配置

- **预设配置**：Dev/Test 环境（面向开发测试，而非生产标准/生产企业级）
- **定价层**：Free（不为控制面/编排层收费，但仍需为计算节点付费）；Kubernetes 版本使用默认值并启用自动安全补丁
- **身份验证**：本地账户 + Kubernetes RBAC

### 节点池（Node Pools）

- 系统节点池即虚拟机规模集，运行 Ubuntu，承载 Pod 与容器
- 扩缩容规则：至少 2 节点，最多可扩展到 5 节点；单节点最多运行 110 个 Pod

### 网络

- 容器网络方案：Azure CNI Overlay（系统托管），自动创建虚拟网络并为 Pod 分配 IP
- 网络策略引擎设为 None（允许所有入站/出站流量）
- 内置负载均衡器按需分配流量

### 集成与安全

- **集成（Integrations）**：关联已有的 Azure Container Registry，供 AKS 拉取镜像
- **监视（Monitoring）**：启用容器日志需要 Azure Monitor，会创建 Log Analytics 工作区，可用 KQL 查询日志
- **安全（Security）**：可选启用 Microsoft Defender for Cloud（安全漏洞监控）与 Key Vault 集成（容器引用密钥）
- **高级（Advanced）**：命名空间（Namespace）用于逻辑隔离生产/预发布/测试工作负载

### 部署结果观察

- 建议单独创建新资源组存放 AKS 相关资源，方便实验结束后整体删除以节省成本
- 部署后额外生成的资源组中包含托管标识、公网 IP、负载均衡器、虚拟网络、虚拟机规模集、网络安全组等
- 默认已有系统命名空间（default、kube-system 等）及系统 Pod（如 CoreDNS、Metrics Server、CoreDNS Autoscaler）在 `kube-system` 命名空间运行

## English Short Summary

Hands-on lab creating an AKS cluster in the Azure portal using the Dev/Test preset, the Free pricing tier (no control-plane charge, still billed for compute nodes), a default node pool (2–5 auto-scaling nodes, up to 110 pods/node), Azure CNI Overlay networking, integration with an existing ACR, and container logging via Azure Monitor/Log Analytics. The lab recommends placing the AKS cluster in its own resource group for easy teardown, and tours the auto-created supporting resources (managed identity, load balancer, VNet, VM scale set) plus the built-in system namespaces and pods (CoreDNS, Metrics Server) running in `kube-system`.

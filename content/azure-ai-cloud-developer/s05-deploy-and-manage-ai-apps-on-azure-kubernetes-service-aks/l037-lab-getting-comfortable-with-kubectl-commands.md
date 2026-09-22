---
title: "Lab: Getting Comfortable with Kubectl Commands (Hands-On Lab)"
lectureId: 37
section: 5
sectionTitle: "Deploy and Manage AI Apps on Azure Kubernetes Service (AKS)"
date: "2026-09-22"
tags: ["kubectl", "aks", "azure-cli", "hands-on-lab"]
---

## 中文短总结

本实验安装 `kubectl` CLI（Windows 可用 `winget install`），通过 `az aks get-credentials --resource-group <rg> --name <cluster>` 获取管理员凭据并连接 AKS 集群，随后使用 `kubectl get nodes`、`kubectl get pods -n kube-system`、`kubectl get namespace` 等命令查看节点、（指定命名空间下的）Pod 与命名空间列表。

## 中文长总结

### 安装与连接

- 安装 `kubectl`：Windows 上可用 `winget install` 安装
- 验证安装：`kubectl version --client`
- 获取集群凭据并连接：`az aks get-credentials --resource-group <resource-group> --name <aks-cluster-name>`（使用管理员账户凭据）

### 常用 kubectl 命令

- `kubectl get nodes`：查看集群中所有节点（虚拟机规模集成员），可看到节点存活时长
- `kubectl get pods`：默认仅查询 `default` 命名空间，若无应用部署在该命名空间会显示 "no resources found"
- `kubectl get pods -n kube-system`：需显式指定命名空间才能查看系统 Pod（如 CoreDNS 等），与 Azure 门户中看到的一致
- `kubectl get namespace`：列出集群中所有命名空间（示例：`default`、`kube-node-lease`、`kube-public`、`kube-system`），系统 Pod 多运行于 `kube-system`

## English Short Summary

Hands-on lab installing `kubectl` (via `winget install` on Windows), connecting to the AKS cluster with `az aks get-credentials --resource-group <rg> --name <cluster>` using admin credentials, and exploring the cluster with `kubectl get nodes`, `kubectl get pods` (which defaults to the empty `default` namespace), `kubectl get pods -n kube-system` (to see the system pods), and `kubectl get namespace` to list all namespaces.

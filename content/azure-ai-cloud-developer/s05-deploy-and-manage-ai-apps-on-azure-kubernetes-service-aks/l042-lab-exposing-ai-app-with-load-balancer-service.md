---
title: "Lab: Exposing AI App with Load Balancer Service (Hands-On Lab)"
lectureId: 42
section: 5
sectionTitle: "Deploy and Manage AI Apps on Azure Kubernetes Service (AKS)"
date: "2026-09-22"
tags: ["aks", "load-balancer", "kubectl", "hands-on-lab"]
---

## 中文短总结

本实验使用 `kubectl expose deployment <name> --type=LoadBalancer` 为应用创建 Azure 负载均衡器服务，自动配置公网 IP。通过 `kubectl get service` 获取外部 IP 后，直接在浏览器访问该公网 IP 即可从外部访问运行在 AKS 上的应用，替代此前仅用于测试的端口转发方式。

## 中文长总结

### 创建负载均衡器服务

- 命令：`kubectl expose deployment <deployment-name> --type=LoadBalancer --name=<service-name> --port=80`（基于清单文件中定义的标签选择器，选中所有匹配副本）
- `--type=LoadBalancer` 会在后台自动创建一个 Azure Load Balancer 资源并分配公网 IP
- 若有多个副本，负载均衡器会自动对所有副本进行流量分发

### 获取与验证

- `kubectl get service <service-name>`：查看集群 IP（内部）与外部 IP（EXTERNAL-IP，即公网 IP）
- 直接在浏览器访问该公网 IP，即可像最终用户一样访问运行在 AKS 上的应用，验证功能正常

### 门户中的对应资源

- AKS 集群的"服务和入口"（Services and Ingresses）区域可查看该 LoadBalancer 类型服务的详情（集群 IP、外部 IP、选择器）
- 对应的 Azure Load Balancer 资源实际创建在 AKS 节点资源组（而非主资源组）中，其"后端池"指向承载应用的节点

## English Short Summary

Hands-on lab creating an Azure Load Balancer service via `kubectl expose deployment <name> --type=LoadBalancer`, which auto-provisions an Azure Load Balancer with a public IP and load-balances traffic across all matching replicas. `kubectl get service` reveals the external IP, which can be browsed directly to access the AKS-hosted app from outside the cluster — replacing the earlier port-forwarding approach used only for local testing. The corresponding Load Balancer resource is created in the AKS node resource group, not the main resource group.

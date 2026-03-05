---
title: "Amazon EKS - Hands On"
lectureId: 207
section: "s18"
sectionTitle: "Containers on AWS: ECS, Fargate, ECR & EKS"
date: "2026-03-05"
tags: [eks, kubernetes, hands-on, node-group, aws]
---

## 中文短总结

本实操演示了 EKS 集群的创建流程（注意：费用较高，建议仅观看）：创建 EKS Cluster Role、配置 VPC/子网/安全组、设置公开端点访问、安装网络插件。集群创建后配置 Compute：添加 Managed Node Group（创建 EKS Node Role、选择实例类型和扩缩配置）或 Fargate Profile。还可通过 Add-ons 安装 EBS CSI Driver 等存储驱动。EKS 配置较为复杂，需要专门的 Kubernetes 知识。

## English Short Summary

This hands-on (costly — watch only recommended) walks through creating an EKS cluster: creating an EKS Cluster Role (IAM), configuring VPC/subnets/security groups, setting public cluster endpoint access, and installing networking add-ons (VPC CNI, kube-proxy, CoreDNS). After cluster creation, compute is configured by adding **Managed Node Groups** (requires EKS Node Role with `AmazonEKSWorkerNodePolicy` and `AmazonEC2ContainerRegistryReadOnly`, choose instance types and scaling config) or **Fargate Profiles**. Storage add-ons like **EBS CSI driver** can be installed. EKS is complex and requires dedicated Kubernetes knowledge. Cleanup: delete node groups first, then the cluster.

---
title: "Lab: Deploying an ACA Environment on Azure (Hands-On Lab)"
lectureId: 49
section: 6
sectionTitle: "Deploy and Manage AI Apps on Azure Container Apps (ACA)"
date: "2026-09-22"
tags: ["azure-container-apps", "azure-portal", "hands-on-lab", "container-registry"]
---

## 中文短总结

通过 Azure 门户创建 Container Apps 环境并同步部署一个基于 ACR 中已有镜像（ReactJS 聊天应用）的容器应用：选择 consumption plan、配置托管标识拉取镜像、设置 ingress 规则暴露端口 80。部署完成后可在 Revisions and replicas、Containers、Scale 等页签查看修订版本、资源分配和副本扩缩容设置，并可将最小副本数从 0 改为 1 以避免冷启动延迟。

## 中文长总结

### 部署流程

1. 在 Azure 门户搜索 "Container Apps"，选择创建容器应用
2. 新建资源组（便于后续统一清理，避免持续计费）
3. 填写容器应用名称，部署源选择 ACR 中已有的容器镜像
4. 由于没有现成的 ACA 环境，需要同时创建新的 Container Apps 环境：
   - 设置区域（如 Sweden Central）
   - Zone redundancy 默认关闭（生产环境可开启以提升弹性）
   - Workload profiles 选择 consumption plan（默认提供 4 vCPU、8GB 内存，无需预付费）
   - 网络默认允许公网访问（Public network access enabled）

### 容器与 Ingress 配置

- 在 Container 标签页选择 ACR 资源和镜像名称、标签（latest）
- 身份验证类型设置为 Managed Identity，Azure 会自动创建系统分配的托管标识并赋予 ACR 镜像拉取角色
- 在 Ingress 标签页勾选启用，接受来自任意来源的流量，Ingress type 设为 HTTP，目标端口设为 80（对应应用 Dockerfile 中监听的端口）

### 部署后验证与探索

- 部署完成后资源组内会出现：Log Analytics workspace（容器日志）、Container Apps 环境、容器应用本身
- 通过应用的 Application URL 可访问 ReactJS 前端，并测试与大语言模型的对话功能
- **Revisions and replicas** 页面：查看当前 active revision 及其副本数量；每个 revision 都有独立的 URL，可用于单独测试某个版本或进行流量拆分
- **Containers** 页面：查看容器镜像来源（ACR）、托管标识、CPU/内存资源分配（来自环境的 consumption 配额，如最大 4 vCPU / 8GB）
- **Logs** 页面：查看容器日志用于调试
- **Scale** 页面：默认最小副本数为 0，闲置 300 秒（约 5 分钟）后会缩容至零，导致下次请求有冷启动延迟；可将最小副本数改为 1 并保存为新修订版本，确保始终至少有一个副本在运行

## English Short Summary

Deployed an Azure Container Apps environment via the Azure portal alongside a container app using an existing ACR-hosted ReactJS chatbot image: chose the consumption plan, enabled system-assigned managed identity for ACR pull, and configured ingress on port 80 for public HTTP traffic. After deployment, explored Revisions and replicas, Containers, and Scale tabs, and changed the minimum replica count from 0 to 1 to avoid cold-start latency after scale-to-zero.

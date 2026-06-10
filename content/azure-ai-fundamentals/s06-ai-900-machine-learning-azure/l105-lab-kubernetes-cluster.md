---
title: "Lab - Binary Classification Model - Creating a Kubernetes Cluster"
lectureId: 105
section: 6
sectionTitle: "AI-900 - Describe fundamental principles of machine learning on Azure"
date: "2026-06-10"
tags: [kubernetes, aks, model-deployment, endpoint, lab]
---

## 中文短总结

模型部署准备：训练完成后需要部署到生产环境供应用调用。类比：应用开发后部署到服务器。在 ML Studio → Compute 创建 Kubernetes Cluster（Azure Kubernetes Service）用于托管模型端点。训练用一台机器，部署用另一套（24/7 运行）。Kubernetes = 容器编排工具，不需深入了解（考试不考细节）。

## 考试要点

- 训练 vs 部署：不同的计算基础设施
- 模型部署 = 让模型 24/7 可用于接收请求
- AKS (Azure Kubernetes Service) 可用于托管模型
- Endpoint = 模型的访问入口
- 部署后应用可通过 API 调用模型

## English Short Summary

Model deployment prep: after training, deploy to production for applications to consume. Create Kubernetes Cluster (AKS) in ML Studio → Compute to host model endpoint. Training uses one machine; deployment uses another (runs 24/7). Kubernetes = container orchestration tool (exam doesn't require deep knowledge).

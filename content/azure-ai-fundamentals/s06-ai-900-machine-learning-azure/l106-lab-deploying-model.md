---
title: "Lab - Binary Classification Model - Deploying Your Model"
lectureId: 106
section: 6
sectionTitle: "AI-900 - Describe fundamental principles of machine learning on Azure"
date: "2026-06-10"
tags: [model-deployment, inference-pipeline, real-time-endpoint, lab]
---

## 中文短总结

模型部署步骤：1) 从已完成的 Pipeline Job → 创建 Real-time Inference Pipeline（自动添加 Web Service Input/Output 组件）；2) Configure and Submit 运行 inference pipeline；3) Deploy 到 AKS 集群创建端点。Inference Pipeline = 训练 pipeline + Web 输入/输出能力。部署后获得公网 IP + 认证 key，可通过 HTTP 请求调用模型。

## 考试要点

- Inference Pipeline = 生产 pipeline（接收请求 → 返回预测）
- Real-time vs Batch inference
- Web Service Input/Output 组件
- 部署到 AKS → 获得 endpoint（公网 IP + 认证）
- 模型 = 训练时的文件，部署时的服务

## English Short Summary

Deployment steps: 1) From completed Pipeline Job → Create Real-time Inference Pipeline (auto-adds Web Service Input/Output); 2) Submit inference pipeline; 3) Deploy to AKS cluster → creates endpoint. Gets public IP + authentication key for HTTP requests. Inference Pipeline = training pipeline + web I/O capability.

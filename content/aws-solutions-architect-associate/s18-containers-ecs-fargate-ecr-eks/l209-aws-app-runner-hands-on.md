---
title: "AWS App Runner - Hands On"
lectureId: 209
section: "s18"
sectionTitle: "Containers on AWS: ECS, Fargate, ECR & EKS"
date: "2026-03-05"
tags: [app-runner, hands-on, ecr, deployment, aws]
---

## 中文短总结

本实操演示了 App Runner 的部署流程（有费用）：选择部署源（Container Registry 或 Source Code/GitHub）、使用 ECR Public 的 HTTPD 镜像、选择手动/自动部署、配置服务名称和资源（1 vCPU / 2GB 内存）、设置端口（80）、Auto Scaling（1~25 实例，100 并发请求/实例）、健康检查和网络设置。部署完成后获得默认域名访问 "It works!" 页面。一个界面即可完成：日志、活动、指标、可观测性、自定义域名配置。

## English Short Summary

This hands-on (costs money) deploys an App Runner service: select source (**Container Registry** — ECR Public HTTPD image or Source Code from GitHub), configure deployment settings (manual/automatic), set service name (DemoHTTP), resources (1 vCPU, 2GB memory), port (80), auto-scaling (1–25 instances, 100 concurrent requests/instance), health checks, and networking (public access). After deployment, access the default domain showing "It works!". The single App Runner console provides logs, activity, metrics, observability, and custom domain configuration. Cleanup: type "delete" to remove the service.

---
title: "Introduction to the Sidecar and Init Container Patterns in K8s"
lectureId: 45
section: 5
sectionTitle: "Deploy and Manage AI Apps on Azure Kubernetes Service (AKS)"
date: "2026-09-22"
tags: ["kubernetes", "sidecar-pattern", "init-container", "design-patterns"]
---

## 中文短总结

Kubernetes 支持两种多容器设计模式：**Sidecar（边车）模式**——在同一 Pod 中与主容器并行运行辅助容器（如代理容器做流量监控/限流/mTLS，日志采集容器定期将日志迁移到云端）以增强主容器功能；**Init Container（初始化容器）模式**——在主容器启动前依次运行并终止，用于系统配置写入或数据库迁移等前置任务。

## 中文长总结

### Sidecar 容器模式

- 同一 Pod 内除主容器（承担核心业务逻辑，如调用 Microsoft Foundry LLM）外，并行运行一个或多个 Sidecar 容器
- 示例一：**代理（Proxy）Sidecar** —— 监控主容器的入站/出站流量，可实现限流、强制 mTLS、身份验证等，类似 API 网关
- 示例二：**日志采集（Log Scraper）Sidecar** —— 定期（如每天/每隔几天）从共享文件系统（持久卷）读取主容器写入的日志，迁移到云端日志分析/监控系统
- 命名来源：类比摩托车边车，用于扩展主体（主容器）的功能，而非替代

### Init Container 模式

- "Init" 即初始化（Initialization）之意
- 一个或多个初始化容器在主容器启动**之前**依次运行，完成任务后终止，不会常驻
- 示例：初始化容器 1 向共享文件系统写入系统配置；初始化容器 2 从云端执行数据库迁移，写入共享文件系统
- 两个初始化容器完成任务后终止，最终只有主容器（与 LLM 交互）持续运行

## English Short Summary

Kubernetes supports two multi-container design patterns within a single pod: the **sidecar pattern**, where helper containers run alongside the main container to extend its functionality (e.g., a proxy sidecar for rate limiting/mTLS/auth, or a log-scraper sidecar periodically shipping logs from a shared volume to a cloud monitoring system); and the **init container pattern**, where one or more containers run to completion and terminate before the main container starts, used for tasks like writing system configuration or running database migrations into a shared volume.

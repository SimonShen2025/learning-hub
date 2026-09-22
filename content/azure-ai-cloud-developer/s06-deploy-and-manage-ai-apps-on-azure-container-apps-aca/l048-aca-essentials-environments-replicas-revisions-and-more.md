---
title: "ACA Essentials: Environments, Replicas, Revisions and More"
lectureId: 48
section: 6
sectionTitle: "Deploy and Manage AI Apps on Azure Container Apps (ACA)"
date: "2026-09-22"
tags: ["azure-container-apps", "revisions", "replicas", "workload-profiles"]
---

## 中文短总结

ACA 环境（Environment）是容器应用的安全边界，类似 Kubernetes 集群；提供两种计费模式：workload profile（预配置计算容量，无缩容至零）与 consumption plan（按用量付费，支持缩容至零，适合开发测试）。Revision 是应用配置和镜像的不可变快照，可实现 A/B 测试和流量拆分；Replica 是 revision 的运行实例，用于扩缩容；Job 类似 Kubernetes cron job，用于后台任务。

## 中文长总结

### Container Apps Environment

- 是一个或多个容器应用与任务（Jobs）的安全边界，类比 Kubernetes 集群
- 提供计算能力，并管理 OS 升级、扩缩容操作、故障转移、资源均衡
- 同一环境内的多个容器应用共享同一个虚拟网络，并将日志写入同一个日志目标

### 两种运行时配置文件（Profile）

| 维度 | Workload Profile | Consumption Plan |
|---|---|---|
| 计算容量 | 预先配置（预留 CPU/内存） | 按需获取（无服务器式） |
| 计费方式 | 按预留容量计费，无论实例数 | 按实际使用的实例数计费 |
| 缩容至零 | 不支持 | 支持 |
| 性能表现 | 可预期、稳定 | 从零扩容时存在延迟 |
| 适用场景 | 生产环境、需要明确性能保证 | 开发/测试环境 |

### Revisions（修订版本）

- 是容器应用配置和容器镜像的不可变快照
- 典型场景：生产环境运行 revision 1，团队修复 bug/新增功能后创建 revision 2
- 可以配置流量拆分（如 80% 到 revision 1、20% 到 revision 2）实现 A/B 测试
- 逐步调整流量比例后，最终将旧 revision 移至 inactive 并销毁，新 revision 接管 100% 流量
- 应用生命周期围绕 active revision 和 inactive revision 管理

### Replicas（副本）

- 是某个 revision 的运行实例，用于扩缩容（scale out/scale in）
- 根据用户需求峰值可扩展到多个副本（如 10 个），需求下降后可缩减副本数量

### Jobs（任务）

- 类似 Kubernetes 中的 cron job，用于后台处理任务（如定期数据库迁移）
- 可以在同一容器应用环境中定义多个任务，并根据工作负载独立扩缩容

## English Short Summary

An ACA environment is a secure boundary (similar to a Kubernetes cluster) hosting container apps and jobs, with two billing profiles: workload profile (pre-provisioned capacity, no scale-to-zero, predictable performance) and consumption plan (serverless, pay-per-use, scale-to-zero, best for dev/test). Revisions are immutable snapshots enabling A/B testing via traffic splitting; replicas are running instances of a revision used for scaling; jobs are cron-like background tasks.

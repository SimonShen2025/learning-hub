---
title: "Introduction to Deployment Slots"
lectureId: 32
section: 4
sectionTitle: "Containers and Azure Web Apps"
date: "2026-09-22"
tags: ["azure-app-service", "deployment-slots", "rolling-updates", "ci-cd"]
---

## 中文短总结

部署槽（Deployment Slots）是与 Azure Web App 关联的多个实时环境（如生产槽与预发布槽），可将测试通过的预发布版本与生产版本互换，实现近零停机上线。部署槽仅在 Premium 定价层支持，交换过程基于滚动更新（Rolling Update）策略逐步替换实例，而非瞬时切换。

## 中文长总结

### 部署槽概念

- 部署槽是与 Azure Web App 实例关联的多个实时环境，典型场景是生产槽（Production）与预发布槽（Staging）
- 预发布槽可运行新版本（如新模型 B），供 QA/测试团队验证，验证通过后与生产槽"交换"（Swap），预发布版本变为生产版本
- **仅 Premium 定价层支持部署槽**

### 与 CI/CD 结合

- 可对应 GitHub 仓库的多分支策略：`main` 分支 → 生产槽，`staging` 分支 → 预发布槽，`dev` 分支 → 开发槽
- 各分支镜像存储在 ACR 中，通过部署槽运行对应版本
- 交换顺序：dev 槽 → staging 槽 → 生产（main）槽

### 滚动更新（Rolling Update）

- 交换并非瞬时完成，而是逐步将旧版本实例替换为新版本实例，以实现近零停机
- 例如生产槽原有 3 个 v1 实例，交换过程中逐步变为"1 个 v2 + 2 个 v1" → 最终全部替换为 3 个 v2 实例

## 考试要点

- 部署槽（Deployment Slots）仅在 Azure App Service **Premium** 计划中可用
- 槽交换（Slot Swap）基于滚动更新策略，实现近零停机部署

## English Short Summary

Deployment slots are separate live environments (e.g., production and staging) associated with an Azure Web App, allowing a validated staging version to be swapped into production for near-zero-downtime releases. Deployment slots are only available on **Premium** App Service plans, and the swap itself uses a rolling update strategy that gradually replaces old instances with new ones rather than switching all at once — commonly paired with a branch-based CI/CD strategy (dev/staging/main branches mapped to slots).

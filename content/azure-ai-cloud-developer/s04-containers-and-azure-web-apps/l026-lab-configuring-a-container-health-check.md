---
title: "Lab: Configuring a Container Health Check (Hands-On Lab)"
lectureId: 26
section: 4
sectionTitle: "Containers and Azure Web Apps"
date: "2026-09-22"
tags: ["azure-app-service", "health-check", "load-balancing", "hands-on-lab"]
---

## 中文短总结

本实验在 Azure App Service Plan 的"监视 → 运行状况检查"中启用容器健康检查，配置路径为 `/health`，并设置不健康实例的移除阈值（如 10 分钟）。App Service 会持续轮询该路径，若持续返回非 200 状态码，该实例将被从负载均衡器移除并重启，恢复健康后重新加入。

## 中文长总结

### 背景

- 应用已暴露 `/health` GET 端点，返回状态码 200 与 `{"status": "healthy"}`
- 若不集成健康检查，需要手动确认应用是否正常运行，效率低下

### 配置步骤

1. 进入 Azure Web App 所在的 App Service Plan，导航到"监视"下的"运行状况检查"（Health Check）
2. 勾选启用，并填写路径 `/health`
3. 配置"不健康实例移除阈值"（Unhealthy Instance Removal，单位分钟）：例如设为 10 分钟，表示某实例连续 10 分钟返回非 200 状态码，将被判定为不健康，从负载均衡器移除并重启，恢复健康后重新纳入负载均衡

### 验证

- 保存后等待几分钟，可在"实例"标签页看到实例状态为 healthy
- 也可直接在浏览器访问 `<app-domain>/health` 验证返回状态健康

## English Short Summary

Hands-on lab enabling a container health check under the App Service Plan's Monitoring → Health Check section, configured to ping the `/health` path and set an unhealthy-instance removal threshold (e.g., 10 minutes). Instances that keep returning non-200 status codes are removed from the load balancer and restarted, then re-added once healthy again — verified via the Instances tab and by browsing to `/health` directly.

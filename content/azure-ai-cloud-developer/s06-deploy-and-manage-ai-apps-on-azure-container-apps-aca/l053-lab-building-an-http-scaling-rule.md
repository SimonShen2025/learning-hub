---
title: "Lab: Building an HTTP Scaling Rule (Hands-On Lab)"
lectureId: 53
section: 6
sectionTitle: "Deploy and Manage AI Apps on Azure Container Apps (ACA)"
date: "2026-09-22"
tags: ["azure-container-apps", "http-scaling", "azure-cli", "monitoring"]
---

## 中文短总结

使用 `az containerapp update` 命令为已部署的 `chat-backend-app` 添加 HTTP 扩缩容规则：最小副本数 1、最大副本数 10、并发数为 1。通过并行发送 100 个请求（20 个并发）触发扩容，观察副本数从 1 升至 10，300 秒冷却期后再缩回 1；并在 Monitoring → Metrics 中查看副本数（Replica Count）与请求数（Requests）指标随时间变化的曲线。

## 中文长总结

### 创建 HTTP 扩缩容规则

- 使用 `az containerapp update` 命令更新已有的容器应用（`chat-backend-app`）
- 规则参数：最小副本数 1，最大副本数 10，规则名 `my-http-scale-rule`，类型为 HTTP，并发数（concurrency）设为 1
- 执行命令后会创建新的 revision，旧的无扩缩容规则的 revision 将被自动取消预配（deprovision）

### 验证扩缩容规则配置

- 门户 Scale 页签显示：最小副本数 1，最大副本数 10，冷却期（cooldown period）300 秒，轮询间隔（polling interval）30 秒
- 冷却期表示流量恢复正常后经过 300 秒会缩容回初始状态；轮询间隔表示每 30 秒检查一次 HTTP 流量决定是否触发扩缩容

### 实时压测验证

- 使用命令并行发送 100 个请求（20 个并发）到 `/chat` 接口，请求内容为示例查询（"tell me something about France"），需要将命令中的 URL 替换为容器应用的完全限定域名（FQDN）
- 压测过程中，Revisions and replicas 页面显示副本数从 1 扩展到 10
- 300 秒冷却期结束后，副本数会缩减回最小值 1

### 使用 Metrics 分析扩缩容行为

- 在 Monitoring → Metrics 中选择 **Replica count** 指标（聚合方式设为 maximum），可以看到副本数从 1 扩展到 10 再缩回 1 的完整曲线
- 选择 **Requests** 指标可以看到请求量从初始的 3 个请求跃升到 100 个并发请求（20 个并行）的峰值，正是这次峰值触发了扩缩容规则

## English Short Summary

Used `az containerapp update` to add an HTTP scaling rule to `chat-backend-app`: min replicas 1, max replicas 10, concurrency 1. Triggered scaling by sending 100 requests (20 concurrent), observed replica count rise from 1 to 10 and fall back after a 300-second cooldown, and used the Metrics blade (Replica count, Requests) to visualize the scale-out/scale-in behavior over time.

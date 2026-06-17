---
title: "Implement event-driven scaling using KEDA in Container Apps"
lectureId: 6
section: 3
sectionTitle: "Implement container-orchestrated solutions"
date: "2026-06-17"
tags: ["KEDA", "Container-Apps", "Service-Bus", "auto-scaling", "scale-to-zero"]
---

## 中文短总结

Container Apps 内置 **KEDA** 事件驱动缩放。Demo：无 HTTP 的 worker 从 Service Bus 拉消息。先建 namespace/queue，取 connection string。`az containerapp create` 配 `--min-replicas 0 --max-replicas 5` 和 **`--scale-rule-name` + `--scale-rule-type azure-servicebus`**（queue 名、message count 阈值）。Cooldown ~5 分钟才缩回零。与 AWS：类似 SQS + Lambda concurrency，但 ACA 用 KEDA scaler 原生集成。

## 中文长总结

### 场景架构
- **Worker Container App**（无 Ingress）← 消费 **Service Bus Queue**
- 消息积压 → KEDA 增加 replica；空闲 → scale to **0**

### Service Bus 准备
```bash
az servicebus namespace create -g rg -n mysbns -l eastus
az servicebus queue create -g rg --namespace-name mysbns -n orders
az servicebus namespace authorization-rule keys list \
  -g rg --namespace-name mysbns -n RootManageSharedAccessKey \
  --query primaryConnectionString -o tsv
```
- Connection string 注入容器 env：`SERVICE_BUS_CONNECTION_STRING`

### 构建 worker 镜像
```bash
az acr build -r mynewacr887 -t aca-keda-worker:0.2 ./aca-keda
```

### 创建 Environment + App（含 KEDA rule）
```bash
az containerapp env create -g rg -n ca-env -l eastus

az containerapp create -g rg -n ca-worker --environment ca-env \
  --image mynewacr887.azurecr.io/aca-keda-worker:0.2 \
  --min-replicas 0 --max-replicas 5 \
  --secrets sb-conn="<connection-string>" \
  --env-vars SERVICE_BUS_CONNECTION_STRING=secretref:sb-conn \
  --scale-rule-name sb-scaler \
  --scale-rule-type azure-servicebus \
  --scale-rule-metadata queueName=orders namespace=mysbns messageCount=5 \
  --scale-rule-auth connection=sb-conn
```
- **`--min-replicas 0`**：scale to zero（省成本，考试考点）
- **`messageCount=5`**：队列 ≥5 条消息时扩容
- ACR pull：demo 用 admin creds（`az acr credential show`）；生产用 **Managed Identity**

### 行为观察
- Portal → **Replicas**：0 → 灌 100 消息 → 扩至 5 → 处理完 → **~5 min cooldown** → 回 0
- KEDA 每 ~30s 检查 queue depth

### 与 AWS 对照
- AWS：SQS depth → Lambda reserved concurrency / ECS autoscaling
- Azure ACA：**KEDA azure-servicebus scaler** 声明式配置在 `az containerapp create`

## 考试要点

- KEDA 在 ACA **内置**，scale rule 在 create/update 时定义
- **`--scale-rule-type azure-servicebus`** + metadata：`queueName`、`namespace`、`messageCount`
- **`--min-replicas 0`**：无流量/无消息时零实例
- Connection string 用 **secret** + `secretref:` 引用
- Cooldown period ~**5 分钟**（缩容延迟，非即时）
- 非 HTTP workload **不要开 Ingress**
- CLI 扩展：`az extension add --name containerapp`

## English Short Summary

Container Apps has built-in KEDA event-driven scaling. Demo: a headless worker pulls Service Bus queue messages. Create namespace/queue, inject connection string as secret. az containerapp create with --min-replicas 0 --max-replicas 5 and --scale-rule-type azure-servicebus (queueName, namespace, messageCount threshold). Scale-out when queue depth exceeds threshold; ~5-minute cooldown before scale-to-zero. Similar to SQS-driven scaling on AWS but declarative KEDA rules on ACA. No Ingress for non-HTTP workers.

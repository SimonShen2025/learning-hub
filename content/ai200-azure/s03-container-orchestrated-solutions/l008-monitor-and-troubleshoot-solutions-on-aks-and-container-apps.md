---
title: "Monitor and troubleshoot solutions on AKS and Container Apps"
lectureId: 8
section: 3
sectionTitle: "Implement container-orchestrated solutions"
date: "2026-06-17"
tags: ["kubectl", "troubleshooting", "Log-Analytics", "diagnostics", "Container-Apps"]
---

## 中文短总结

AKS 排错：`kubectl get pods` 看 **ImagePullBackOff** → `kubectl describe pod` 读 Events → `kubectl logs <pod>`。故意错误 tag 演示 pull 失败。ACA 日志：`az containerapp logs show --follow` 或 Portal Log stream。Environment 级可切换 **Log Analytics → Azure Monitor**，配置 **Diagnostic settings** 送 Log Analytics，用 Kusto 查 `ContainerAppSystemLogs`/`ContainerAppConsoleLogs`。AKS 同样在 Monitoring → Diagnostic settings 启用 K8s 日志。

## 中文长总结

### AKS 故障排查流程
1. 修改 deployment.yaml 为 **不存在的 image tag**
2. `kubectl delete deployment demo-app` → `kubectl apply -f deployment.yaml`
3. `kubectl get pods` → 状态 **ImagePullBackOff**
4. **`kubectl describe pod <name>`** → Events 显示 `failed to pull image`
5. **`kubectl logs <pod>`** → 若容器未启动，日志有限
6. 修复 tag → 重新 apply → describe 显示 **Container created and started**

### 常用 kubectl 排错命令
```bash
kubectl get pods
kubectl describe pod <pod-name>
kubectl logs <pod-name>
kubectl delete deployment <name>
kubectl apply -f deployment.yaml
```

### Container Apps 日志
```bash
az containerapp logs show -g rg -n ca-worker --follow
```
- Portal → Container App → **Log stream**（实时）
- Worker scale-to-zero 时需先 **注入消息** 唤醒 replica 才有日志

### Environment 级诊断（ACA）
- 从 **Container Apps Environment**（非单个 app）配置
- Logging：**Log Analytics** ↔ **Azure Monitor** 可切换
- **Diagnostic settings** → 勾选：
  - ContainerAppConsoleLogs
  - ContainerAppSystemLogs
  - CPU/Memory metrics 等
- 目的地：**Log Analytics workspace**
- Portal → Logs → Tables → Kusto 查询

### AKS Diagnostic Settings
- AKS → Monitoring → **Diagnostic settings** → 仅 **Kubernetes 相关** 类别
- 发送到同一 Log Analytics workspace
- **非历史**：启用后才开始采集

### 端口连通性
- 外部 **80** → Service/Ingress → 容器 **5000**
- 排错时检查 targetPort、Ingress、Service selector 是否匹配 deployment labels

## 考试要点

- **ImagePullBackOff** → `kubectl describe pod` 查 Events（镜像名/tag/ACR 权限）
- **`kubectl logs`**：运行中 Pod 的应用日志
- ACA 实时日志：**`az containerapp logs show --follow`**
- Diagnostic settings 在 **Environment 层（ACA）** 和 **AKS 资源层** 分别配置
- 日志目的地：**Log Analytics** → **Kusto (KQL)** 查询
- System logs vs Console logs 表不同
- 诊断数据 **非追溯**，启用后 forward only

## English Short Summary

AKS troubleshooting: kubectl get pods for ImagePullBackOff, kubectl describe pod for Events (bad image tag/ACR auth), kubectl logs for app output. Fix YAML and re-apply. Container Apps: az containerapp logs show --follow or Portal log stream; wake scaled-to-zero workers first. Configure Diagnostic settings at the Environment level (ACA) or AKS resource to send ContainerAppConsoleLogs/SystemLogs and Kubernetes logs to Log Analytics for Kusto queries. Verify port mapping (80 external → container targetPort). Diagnostics are forward-only, not historical.

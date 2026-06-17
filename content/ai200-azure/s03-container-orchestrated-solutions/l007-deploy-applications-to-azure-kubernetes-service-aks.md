---
title: "Deploy applications to Azure Kubernetes Service (AKS)"
lectureId: 7
section: 3
sectionTitle: "Implement container-orchestrated solutions"
date: "2026-06-17"
tags: ["AKS", "kubectl", "Kubernetes", "YAML-manifest", "LoadBalancer"]
---

## 中文短总结

AI-200 要求用 **manifest YAML** 部署 AKS。`deployment.yaml` 定义 Pod/副本/镜像/env；`service.yaml` 定义 **LoadBalancer**（80→5000）。流程：`az aks create --attach-acr` → `az aks get-credentials` → `kubectl apply -f deployment.yaml` → `kubectl apply -f service.yaml` → `kubectl get pods/service`。扩缩：`kubectl scale deployment --replicas=4`。与 AWS EKS 相同 kubectl 模型，Azure 侧 cluster 创建 attach ACR 是考点。

## 中文长总结

### Manifest 文件结构
**deployment.yaml**
- `replicas: 2`
- `containers[].image`: `mynewacr887.azurecr.io/acr-demo-app:1`
- `containerPort: 5000`
- 可设 `env` 环境变量

**service.yaml**
- `type: LoadBalancer`
- `port: 80` → `targetPort: 5000`
- 对外 IP 访问集群内多个 Pod

### AKS 创建（attach ACR）
```bash
az aks create -g rg -n aks-demo \
  --node-count 1 \
  --generate-ssh-keys \
  --attach-acr mynewacr887
```
- **`--attach-acr`**：授予 AKS 从 ACR pull 的权限（考试常考，免 docker secret）
- 创建耗时数分钟

### 获取凭证并部署
```bash
az aks get-credentials -g rg -n aks-demo   # 写入 ~/.kube/config
kubectl apply -f aks-demo/deployment.yaml
kubectl apply -f aks-demo/service.yaml
kubectl get pods
kubectl get service demo-service          # 取 EXTERNAL-IP
kubectl scale deployment demo-app --replicas=4
```

### kubectl vs az aks
- **Cluster 生命周期**：`az aks`（create、scale nodes、upgrade）
- **Workload 操作**：**kubectl**（apply、get、scale、logs、describe）
- 考试：manifest 部署 = **`kubectl apply`**

### Portal 验证
- AKS → Workloads → Pods（default namespace，2→4 replicas）
- 与 EKS 对照：相同 YAML/kubectl，差异在 `az aks create --attach-acr` 和 Azure LB

## 考试要点

- 部署方式 = **Kubernetes manifest YAML**（deployment + service）
- **`az aks create --attach-acr <acr-name>`**：AKS 拉 ACR 镜像权限
- **`az aks get-credentials`**：本地 kubectl 上下文
- **`kubectl apply -f`** 部署；**`kubectl scale deployment --replicas=N`** 扩缩
- Service **LoadBalancer** 暴露 80，targetPort 指向容器端口
- Workload 管理用 **kubectl**，不是 az aks
- VS Code Kubernetes 扩展可选

## English Short Summary

AI-200 requires deploying to AKS using YAML manifests. deployment.yaml defines replicas, ACR image, ports, env; service.yaml exposes LoadBalancer on port 80 targeting container port 5000. Flow: az aks create --attach-acr → az aks get-credentials → kubectl apply for deployment and service → kubectl get pods/service. Scale with kubectl scale deployment --replicas=4. Cluster ops use az aks; workload ops use kubectl—common exam distinction. Same kubectl model as EKS; Azure-specific gotcha is --attach-acr for image pull permissions.

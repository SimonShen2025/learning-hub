---
title: "Lab: Running AI App on AKS from ACR (Hands-On Lab)"
lectureId: 40
section: 5
sectionTitle: "Deploy and Manage AI Apps on Azure Kubernetes Service (AKS)"
date: "2026-09-22"
tags: ["aks", "kubectl", "yaml-manifest", "hands-on-lab"]
---

## 中文短总结

本实验用 `kubectl create deployment ... --dry-run=client -o yaml` 生成部署清单模板（YAML），关键字段包括 `apiVersion: apps/v1`、`kind: Deployment`、`replicas`、容器镜像引用与暴露端口（80）。通过 `kubectl apply -f <manifest>` 部署到 AKS，用 `kubectl get deployment` 验证运行状态，并用 `kubectl port-forward` 将本地端口映射到 Pod 端口以测试应用。

## 中文长总结

### 生成清单模板

- 命令：`kubectl create deployment aoai-chat-app --image=<acr>.azurecr.io/aoai-chat-app:latest --port=80 --dry-run=client -o yaml > manifest/deployment.yaml`
- `--dry-run=client` 表示仅生成模板输出而不真正创建部署，可将输出重定向保存为 YAML 文件供后续检查与复用

### YAML 关键字段解读

- `apiVersion: apps/v1`，`kind: Deployment`：表明这是一个部署到 Kube API Server 的部署资源
- `replicas`：期望的应用实例（副本）数量，示例设为 1
- `spec.containers.image`：指向 ACR 中的完整镜像地址
- 容器暴露端口 80（与 Dockerfile 中 `EXPOSE 80` 对应）

### 部署与验证

- 应用清单：`kubectl apply -f <manifest-file>`
- 查看部署状态：`kubectl get deployment`（可查看副本数、就绪状态、运行时长）
- 因未指定命名空间，Pod 默认创建在 `default` 命名空间，可在 Azure 门户"工作负载"区域查看 Pod 名称、状态、所在节点及私有 IP（如 `10.244.1.14`）

### 测试访问：端口转发

- 使用 `kubectl port-forward deployment/<name> 8080:80` 将本地 8080 端口映射到容器的 80 端口
- 浏览器访问 `localhost:8080` 即可测试应用（无需暴露公网 IP），适合开发调试阶段

## English Short Summary

Hands-on lab generating a deployment manifest template with `kubectl create deployment ... --dry-run=client -o yaml`, examining its key fields (apiVersion, replicas, container image reference, exposed port 80), then applying it with `kubectl apply -f` to deploy the React app image from ACR onto the AKS cluster. `kubectl get deployment` confirms the pod is running (in the default namespace, since none was specified), and `kubectl port-forward` maps a local port to the pod's port 80 for quick browser-based testing without exposing a public IP.

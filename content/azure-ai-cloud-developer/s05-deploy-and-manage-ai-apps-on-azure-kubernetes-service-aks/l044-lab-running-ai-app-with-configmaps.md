---
title: "Lab: Running AI App with ConfigMaps (Hands-On Lab)"
lectureId: 44
section: 5
sectionTitle: "Deploy and Manage AI Apps on Azure Kubernetes Service (AKS)"
date: "2026-09-22"
tags: ["kubernetes", "configmap", "aks", "hands-on-lab"]
---

## 中文短总结

本实验通过 `kubectl create configmap aoai-python-app-configs --from-literal=...` 创建包含终结点、API Key、模型名的 ConfigMap（变量名需与 `app.py` 中一致），构建并推送 Python 应用镜像后，在部署清单中加入 `envFrom: configMapRef` 引用该 ConfigMap，`kubectl apply` 部署后通过端口转发验证应用正确使用了 ConfigMap 中的配置。

## 中文长总结

### 准备工作

- 应用（`app.py`）从环境变量 `AZURE_API_URL`、`API_KEY`、`MODEL_NAME` 读取配置并创建 Azure OpenAI 客户端，暴露 `/chat`（POST）端点，监听端口 5000
- 在终端将终结点、API Key、模型名存为 bash 变量，便于后续命令复用

### 创建 ConfigMap

- 命令：`kubectl create configmap aoai-python-app-configs --from-literal=AZURE_API_URL=$ENDPOINT --from-literal=API_KEY=$KEY --from-literal=MODEL_NAME=$MODEL`
- **关键点**：ConfigMap 中的变量名必须与应用代码中读取的环境变量名完全一致
- 默认创建在 `default` 命名空间，可在 AKS 门户"配置"区域查看

### 构建镜像与部署清单

- 构建 Python 应用镜像并推送到 ACR（`docker build` → `az acr login` → `docker tag` → `docker push`）
- 用 `kubectl create deployment ... --dry-run=client -o yaml` 生成模板清单，再手动为其添加 `envFrom` 字段引用该 ConfigMap（`configMapRef.name: aoai-python-app-configs`），并填入正确的 ACR 名称
- `kubectl apply -f <manifest>` 应用清单

### 验证

- `kubectl get deployments` / `kubectl get pods` 确认副本已运行
- `kubectl port-forward` 将容器端口 5000 映射到本地 8000
- 通过 curl 向 `/chat` 发送 POST 请求，成功获得模型响应，证明应用正确从 ConfigMap 注入的环境变量中读取配置

## English Short Summary

Hands-on lab creating a Kubernetes ConfigMap (`kubectl create configmap ... --from-literal=...`) holding the endpoint, API key, and model name (variable names must match the app code exactly), building and pushing the Python app image to ACR, then adding an `envFrom.configMapRef` reference to the deployment manifest before applying it with `kubectl apply`. Port-forwarding and a `/chat` POST request confirm the app correctly picks up its configuration from the ConfigMap at runtime.

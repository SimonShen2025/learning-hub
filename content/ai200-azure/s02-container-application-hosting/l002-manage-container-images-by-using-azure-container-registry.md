---
title: "Manage container images by using Azure Container Registry"
lectureId: 2
section: 2
sectionTitle: "Implement container application hosting"
date: "2026-06-17"
tags: ["ACR", "Docker", "container-registry", "Azure CLI", "image-push"]
---

## 中文短总结

ACR 是 Azure 私有镜像仓库（类比 ECR）。完整 CLI 流程：`az login` → `az group create` → `az acr create`（名称全局唯一，如 basic SKU）→ `az acr update --admin-enabled true` → `az acr login`（需 Docker Desktop 运行）→ `docker build/tag/push`。镜像推入 ACR 不等于已部署，还需目标运行时。Admin 凭据用于认证，生产应优先 Managed Identity。

## 中文长总结

### ACR 角色
- **Azure Container Registry (ACR)** = 集中式容器镜像库，类似 AWS ECR
- 全局唯一 DNS：`<name>.azurecr.io`
- 镜像在 ACR 中 **不会自动运行**，需部署到 App Service / Container Apps / AKS

### CLI 工作流（考试高频）
```bash
az login --tenant <tenant-id>
az group create -n rg-acr-demo -l eastus
az acr create -g rg-acr-demo -n mynewacr887 --sku Basic
az acr update -n mynewacr887 --admin-enabled true
az acr login -n mynewacr887          # 需要 Docker Desktop 运行
docker build -t acr-demo-app .
docker tag acr-demo-app mynewacr887.azurecr.io/acr-demo-app:1
docker push mynewacr887.azurecr.io/acr-demo-app:1
```

### 关键细节
- **ACR 名称全局唯一**（含 URL 访问）
- **SKU**：Basic / Standard / Premium（考试常考差异：geo-replication、content trust 在 Premium）
- **`--admin-enabled true`**：启用 admin 用户，便于 demo；生产用 **Managed Identity** 或 **Service Principal**
- **`az acr login` 依赖本地 Docker** — 未运行 Docker Desktop 会报错
- Portal 验证：Container Registries → Repositories → 查看 manifest/tag

### Dockerfile 要点
- `EXPOSE 5000`、复制 requirements、启动命令
- 与 AWS：build/tag/push 流程相同，registry URL 格式不同

## 考试要点

- **`az acr create`**：`-g`、`-n`（全局唯一）、`--sku`
- **`az acr update --admin-enabled true`**：启用 admin 凭据（demo/legacy；生产不推荐）
- **`az acr login`**：本地 Docker 必须运行
- 镜像命名：`<registry>.azurecr.io/<repo>:<tag>`
- ACR 只存镜像，**部署是独立步骤**
- 与 AKS/Container Apps 集成时后续会 attach ACR（见 L007/L005）

## English Short Summary

Azure Container Registry (ACR) is Azure's private container image registry (ECR equivalent). CLI flow: az group create → az acr create (globally unique name, SKU Basic) → az acr update --admin-enabled true → az acr login (requires Docker Desktop running) → docker build/tag/push to registry.azurecr.io/repo:tag. Pushing an image does not deploy it—you still need App Service, Container Apps, or AKS. Admin credentials are a demo shortcut; production should use Managed Identity.

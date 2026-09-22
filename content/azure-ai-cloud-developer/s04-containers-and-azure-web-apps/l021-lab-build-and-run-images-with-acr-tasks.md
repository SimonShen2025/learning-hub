---
title: "Lab: Build and Run Images with ACR Tasks (Hands-On Lab)"
lectureId: 21
section: 4
sectionTitle: "Containers and Azure Web Apps"
date: "2026-09-22"
tags: ["azure-container-registry", "acr-tasks", "azure-cli", "hands-on-lab"]
---

## 中文短总结

ACR Tasks 允许在不运行本地 Docker 运行时的情况下，直接借助 Azure Container Registry 的云端能力构建、测试并存储镜像。通过命令 `az acr build --registry $ACR_NAME --image aoai-python-app:acr-tasks .` 即可在 ACR 内完成镜像构建，无需 Docker Desktop 后台运行。

## 中文长总结

### 解决的问题

- 此前的实验依赖本地运行 Docker Desktop 作为容器运行时来构建、打标签、推送镜像
- 若设备无法运行 Docker，或希望简化流程，可改用 ACR 提供的云端构建能力

### ACR Tasks 使用方式

- 在包含 Dockerfile 的目录下执行一条命令：`az acr build --registry $ACR_NAME --image aoai-python-app:acr-tasks .`
- 命令末尾的 `.` 表示当前目录包含 Dockerfile，供 ACR 云端构建服务使用
- 执行过程（约 15-26 秒）完成后，镜像会直接构建并存储在 ACR 仓库中，生成新版本（如 `acr-tasks`），与此前手动推送的 `version 1` 版本并存于同一仓库

## English Short Summary

ACR Tasks let you build, test, and store a container image directly via Azure Container Registry's cloud build service, without needing Docker Desktop running locally. A single command, `az acr build --registry $ACR_NAME --image aoai-python-app:acr-tasks .`, builds the image from the Dockerfile in the current directory and stores the new version directly in the ACR repository.

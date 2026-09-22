---
title: "Understanding the World of Containers"
lectureId: 16
section: 4
sectionTitle: "Containers and Azure Web Apps"
date: "2026-09-22"
tags: ["docker", "containers", "containerization"]
---

## 中文短总结

容器化解决"在我机器上能跑"的问题：通过 Docker 将应用及其运行环境打包为不可变的镜像，从而在任意设备上复现一致的运行环境。核心概念：Dockerfile（定义环境与依赖）→ Docker Image（不可变的可移植包）→ Docker Container（镜像的运行实例）。

## 中文长总结

### 问题背景

- "在我机器上能跑"问题：应用在开发者本地正常运行，分发给同事后因环境差异（缺少依赖、配置不同）导致运行失败，浪费大量时间排查
- 虚拟机方式难以管理和复制一致的运行环境

### 容器化核心概念

- **软件容器化**：一种无需虚拟机即可部署和运行容器的操作系统虚拟化方法，目标是在多台设备间复制一致的运行环境
- **Docker**：用于开发和运行容器的容器化平台（可安装于 macOS/Windows）
- **Dockerfile**：定义应用运行所需的规格，如所用语言/库/依赖包、监听端口等
- **Docker Image（镜像）**：执行 Dockerfile 后生成的可移植软件包，是不可变的（immutable）；如需修改，必须更新 Dockerfile 并重新生成新版本镜像
- **Docker Container（容器）**：镜像运行时的实例，包含应用的复制运行环境

### 工作流程

1. 编写 Dockerfile，列出所有系统依赖与运行配置
2. 用 Docker 运行时执行 Dockerfile，生成 Docker Image
3. 将镜像分发/发布到云服务器或其他设备
4. 在目标设备上以容器形式运行该镜像，得到一致的运行环境

## English Short Summary

Containerization solves the "works on my machine" problem by packaging an application and its environment into an immutable, portable Docker image that can run consistently anywhere. Key concepts: a Dockerfile defines the environment/dependencies/port, executing it produces an immutable Docker image, and running that image creates a Docker container — a live instance of the replicated environment.

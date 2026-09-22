---
title: "Lab: Building and Running AI App Locally with Docker (Hands-On Lab)"
lectureId: 19
section: 4
sectionTitle: "Containers and Azure Web Apps"
date: "2026-09-22"
tags: ["docker", "flask", "openai-sdk", "hands-on-lab"]
---

## 中文短总结

本实验构建一个 Flask AI 聊天机器人（`/chat` POST 端点调用 Azure OpenAI，`/health` GET 端点做健康检查，监听 5000 端口），编写基于 `python:3.11-slim` 基础镜像的 Dockerfile（设置工作目录、安装 `requirements.txt`、暴露端口、`CMD python app.py`），并用 Docker Desktop 在本地构建与运行容器镜像。

## 中文长总结

### 应用结构（Flask）

- `.env`：OpenAI 终结点、API Key、模型部署名
- `app.py`：使用 OpenAI SDK 创建 `AzureOpenAI` 客户端
  - `/chat`（POST）：从请求体 `message` 字段取用户查询，系统提示为 "you are a helpful assistant"，`max_tokens=8192`，`temperature=0.7`，返回模型名与回复
  - `/health`（GET）：健康检查端点，返回 `{"status": "healthy"}` 及状态码 200，用于验证容器是否正常接收流量
- 应用监听端口 5000

### Dockerfile 要点

- 基础镜像：`python:3.11-slim`
- 工作目录设为 `/app`
- 复制 `requirements.txt` 并执行 `pip install -r requirements.txt`
- 复制其余应用文件（`.env`、`app.py` 等）
- `EXPOSE 5000`
- `CMD ["python", "app.py"]` 作为启动命令

### 构建与运行

- 需保持 Docker Desktop 后台运行以提供容器运行时
- 在包含 Dockerfile 的目录执行 `docker build -t aoai-python-app .`
- 使用 `docker run` 在本地映射端口运行该镜像，验证应用可正常工作

## English Short Summary

Hands-on lab building a Flask-based AI chatbot with a `/chat` POST endpoint (calls Azure OpenAI with a system prompt, max_tokens=8192, temperature=0.7) and a `/health` GET endpoint for container health checks, listening on port 5000. A Dockerfile based on `python:3.11-slim` sets the working directory, installs `requirements.txt`, copies the app, exposes port 5000, and runs `python app.py`. The image is built and run locally via Docker Desktop before being pushed to Azure Container Registry in later labs.

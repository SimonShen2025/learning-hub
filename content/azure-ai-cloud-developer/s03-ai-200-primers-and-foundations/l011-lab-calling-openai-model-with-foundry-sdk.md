---
title: "Lab: Calling OpenAI Model with Foundry SDK (Hands-On Lab)"
lectureId: 11
section: 3
sectionTitle: "AI-200 Primers and Foundations"
date: "2026-09-22"
tags: ["microsoft-foundry", "python-sdk", "azure-cli", "jupyter-notebook"]
---

## 中文短总结

本实验使用 Jupyter Notebook（`chatcompletions.ipynb`）配合 Foundry SDK 调用已部署的 GPT-4.1 模型：填写 `.env` 中的 Foundry 项目端点与模型部署名，通过 `az login` 认证，创建 `AIProjectClient` 与其派生的 OpenAI Client，调用 `.responses.create()` 发送系统提示与用户查询并获取响应。

## 中文长总结

### 环境准备

- 克隆 AI-200 GitHub 仓库，在 VS Code 中打开 `AI Foundations` 文件夹下的 `chatcompletions.ipynb`
- `.env` 中只需填写两个变量：Foundry 项目端点（从 Foundry 门户 Home 页复制）与模型部署名（如 `gpt-4.1`）
- 在集成终端执行 `az login` 完成 Azure 账号认证（`az account show` 可验证当前登录账号）

### 代码实现要点

- 使用 SDK 包 `azure-ai-projects`（示例版本 2.0.0b2）
- 创建 `AIProjectClient(endpoint, credential=DefaultAzureCredential())`，凭据使用当前登录的 Azure CLI 身份
- 通过 `project_client.get_openai_client()` 派生出 OpenAI Client
- 调用 `openai_client.responses.create(model=<deployment_name>, instructions=<system_prompt>, input=<user_query>, temperature=0.7, max_output_tokens=1000)`
- 响应文本位于 `response.output_text`

### 演示结果与要点

- 询问 "Microsoft Foundry 是什么" 时，模型误将其描述为一个项目而非平台产品，说明模型训练数据可能早于 Foundry 更名/发布，提示需要联网检索等外部工具来增强时效性
- 询问印度旅游景点等训练数据内知识时，响应准确

## English Short Summary

Hands-on lab calling a deployed GPT-4.1 model via the Foundry SDK from a Jupyter notebook. After filling in the Foundry project endpoint and model deployment name in `.env` and authenticating with `az login`, the lab creates an `AIProjectClient` with `DefaultAzureCredential`, derives an OpenAI client via `get_openai_client()`, and calls `.responses.create()` with a system instruction, user input, temperature=0.7, and max_output_tokens=1000. A demo query about Microsoft Foundry itself shows the model's training-data cutoff limitation, motivating external tools like web search for real-time grounding.

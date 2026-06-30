---
title: "Preview: Unit 1 Code Walkthrough: Deploying your first Agent"
lectureId: 2
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["AI-103", "Bicep", "Azure-CLI", "GPT-4.1-mini", "DefaultAzureCredential"]
---

## 中文短总结

Unit 1 代码演练：用 **Bicep + Azure CLI** 部署 Resource Group、Microsoft Foundry（`Microsoft.CognitiveServices/accounts`，kind `AIServices`）、Hub、Project 及 **GPT-4.1 mini** 模型；Python 通过 **OpenAI SDK + DefaultAzureCredential**（Bearer token，非静态 API key）发送 system/user message 并读取 `choices[0].message.content`。启用 **System-assigned Managed Identity**；Bicep outputs 注入 `launch.json` 环境变量。部署本身几乎无费用，推理 token 成本极低（示例 55 tokens）。

## 中文长总结

### 课程模板
- 全课程统一：**Bicep IaC**、**Azure CLI**、VS Code Python、debug 模式
- 每单元可下载完整可复现文件

### 本地环境
1. 创建并激活 venv/conda
2. `pip install -r requirements.txt`（frozen 版本）
3. VS Code `launch.json`：指定 `ai_python_unit1.py` 与 Python 解释器路径
4. 安装 Azure CLI → `az login`

### Shell 脚本部署流程
1. **Resource Group**：`az group create`
2. **Bicep deploy**：引用 Microsoft Foundry 官方 GitHub 示例（文档常更新，勿硬抄旧模板）

### Bicep 资源链（顺序依赖）
| 资源 | 要点 |
|------|------|
| Foundry Account | `Microsoft.CognitiveServices/accounts`，kind `AIServices`，SKU **Standard**（最低档） |
| Managed Identity | **System-assigned**，最佳实践 |
| Hub | 随 Foundry 创建 |
| Project | 需单独部署，`parent` 指向 Foundry account |
| Model Deployment | **gpt-4.1-mini**；`model.name` / `format` / `version` 必须精确匹配 catalog |

- Bicep **outputs**：endpoint URL、deployment name → 避免手动去 Portal 抄
- 部署耗时：数分钟至 ~10 分钟

### Python 调用模式
```python
# 核心模式（考试需熟悉）
from azure.identity import DefaultAzureCredential, get_bearer_token_provider
from openai import AzureOpenAI

token_provider = get_bearer_token_provider(
    DefaultAzureCredential(), "https://cognitiveservices.azure.com/.default")
client = AzureOpenAI(azure_endpoint=..., azure_ad_token_provider=token_provider, ...)
response = client.chat.completions.create(model=deployment_name, messages=[...])
reply = response.choices[0].message.content
```

### 关键概念
- **Deployment name ≠ model name**：Bicep 中自定义 deployment name，代码引用 deployment name
- **404 常见原因**：endpoint URL 错误 → 回 Portal 核对 OpenAI endpoint
- **费用**：资源部署免费；仅模型推理计费；mini 模型 + 少量 token ≪ $0.01
- 后续单元将用 **Key Vault** 替代硬编码环境变量

### 本单元验证项
- System message + user message 组合
- Token 用量：`response.usage.total_tokens`（示例 55）

## 考试要点

- Foundry 资源类型：`Microsoft.CognitiveServices/accounts`，kind **`AIServices`**
- **System-assigned Managed Identity** 优于硬编码密钥
- **DefaultAzureCredential** + Bearer token 是推荐认证路径
- Bicep 部署顺序：Account/Hub → Project → Model deployment
- 响应提取：`choices[0].message.content`
- Deployment name 在代码与 Bicep 中必须一致
- GPT-4.1 mini：低成本 SLM，适合 lab/入门

## English Short Summary

Hands-on Unit 1 deploys Microsoft Foundry via official Bicep samples and Azure CLI: resource group, Cognitive Services account (AIServices kind) with system-assigned managed identity, hub, project, and a gpt-4.1-mini model deployment. Bicep outputs feed VS Code launch.json env vars. Python uses the OpenAI SDK authenticated with DefaultAzureCredential bearer tokens—not static API keys—to send system and user messages and read choices[0].message.content. Deployment is nearly free; inference on mini models costs fractions of a cent per call. Common 404s trace to wrong endpoint URLs.

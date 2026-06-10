---
title: "Your First AI-Powered Program"
lectureId: 36
section: 2
sectionTitle: "AI-901 - Implement AI solutions - Microsoft Foundry"
date: "2026-06-10"
tags: [python, openai-sdk, responses-api, completions-api, lab]
---

## 中文短总结

第一个 AI Python 程序。使用 OpenAI SDK 调用 Microsoft Foundry 中的模型。两种 API：Completions API（旧版）和 Responses API（新版，支持 Agent）。关键代码结构：安装 openai 包 → 创建 AzureOpenAI client（endpoint + api_key）→ 调用 client.responses.create（model=部署名, input=用户prompt）→ 获取响应文本。Foundry 模型的 Code 面板可直接获取 starter code。

## 中文长总结

### 两种 API
| API | 状态 | 特点 |
|-----|------|------|
| Completions API | 旧版 | 模型早期的调用方式 |
| Responses API | 新版 | 支持 Agent 功能，OpenAI 推荐 |

### 代码结构
```python
# 1. 安装包
# pip install openai

# 2. 导入并创建客户端
from openai import AzureOpenAI
client = AzureOpenAI(
    azure_endpoint="<FOUNDRY_ENDPOINT>",
    api_key="<API_KEY>",
    api_version="<VERSION>"
)

# 3. 调用模型
response = client.responses.create(
    model="<DEPLOYMENT_NAME>",
    input="<USER_PROMPT>"
)

# 4. 获取响应
print(response.output_text)
```

### 关键要素
- **Endpoint**：Microsoft Foundry 资源的 URL
- **API Key**：认证密钥（从 Foundry Portal 获取）
- **Deployment Name**：模型部署的名称（非模型名）
- **Input**：用户 prompt

### 获取 starter code
- Foundry → 模型 → Code 面板
- 可选择语言（Python/JavaScript）
- 可选择 API 类型（Responses/Completions）

## 考试要点

- 使用 `openai` Python 包调用 Azure 上的模型
- AzureOpenAI client 需要：endpoint + api_key + api_version
- Responses API 是新版，Completions API 是旧版
- model 参数使用 deployment name（不是模型名）
- response.output_text 获取响应文本

## English Short Summary

First AI Python program using OpenAI SDK with Microsoft Foundry. Two APIs: Completions (legacy) and Responses (new, supports agents). Code structure: install openai → create AzureOpenAI client (endpoint + api_key) → call client.responses.create(model=deployment_name, input=prompt) → get response.output_text. The Foundry portal's Code panel provides starter code snippets.

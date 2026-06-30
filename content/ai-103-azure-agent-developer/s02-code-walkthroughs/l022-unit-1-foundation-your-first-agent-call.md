---
title: "Unit 1: Foundation – Your First Agent Call"
lectureId: 22
section: 2
sectionTitle: "Code Walkthroughs"
date: "2026-07-01"
tags:
  - azure-ai-foundry
  - bicep
  - azure-cli
  - openai-sdk
  - azure-identity
  - managed-identity
  - lab
---

## 中文短总结

本单元建立整套 Code Walkthrough 的标准工作流：Python 虚拟环境 → `az login` → Bicep 部署 Microsoft Foundry（Cognitive Services `kind: AIServices`）+ Project + GPT-4.1 mini → 用 `DefaultAzureCredential` + Bearer Token 调用 OpenAI SDK，完成首次 LLM 对话并统计 token 用量。

## 中文长总结

### 环境与工具链

- 每单元使用独立 virtual environment + `requirements.txt`（frozen 版本）
- VS Code `launch.json` 指定 Python 解释器路径与 `AIPythonUnit1.py`
- 本单元暂用 hard-coded 环境变量；后续单元改用 Azure Key Vault
- 需安装 [Azure CLI](https://learn.microsoft.com/cli/azure/install-azure-cli)，执行 `az login`

### Azure CLI 部署步骤

```bash
# 创建资源组
az group create --name <rg> --location australiaeast

# 部署 Bicep
az deployment group create \
  --resource-group <rg> \
  --template-file main.bicep \
  --parameters coursePrefix=unit1course

# 获取输出
az deployment group show --resource-group <rg> --name <deployment> --query properties.outputs
```

### Bicep 关键资源（源自 Microsoft Foundry 官方 GitHub 示例）

| 资源 | 说明 |
|------|------|
| `Microsoft.CognitiveServices/accounts` (`kind: AIServices`) | AI Foundry 账户 + Hub |
| `Microsoft.CognitiveServices/accounts/projects` | Foundry Project（需单独部署） |
| Model deployment | GPT-4.1 mini，`format`/`version`/`name` 必须精确匹配 |

**最佳实践：**
- System-assigned **Managed Identity**（不用硬编码密钥）
- SKU 选 **Standard**（最低成本 tier）
- Bicep **outputs** 导出 endpoint 与 deployment name，避免手动去 Portal 复制

### Python 调用模式

```python
from openai import AzureOpenAI
from azure.identity import DefaultAzureCredential, get_bearer_token_provider

token_provider = get_bearer_token_provider(
    DefaultAzureCredential(),
    "https://cognitiveservices.azure.com/.default"
)
client = AzureOpenAI(
    azure_endpoint=os.environ["AZURE_OPENAI_ENDPOINT"],
    azure_ad_token_provider=token_provider,
    api_version="2024-..."
)
response = client.chat.completions.create(
    model=os.environ["DEPLOYMENT_NAME"],
    messages=[
        {"role": "system", "content": "..."},
        {"role": "user", "content": "..."}
    ]
)
reply = response.choices[0].message.content
# Token 统计：response.usage.total_tokens
```

### 成本与排错

- 部署资源本身几乎无费用；**调用模型才计费**（mini 模型约 < $0.01）
- 常见 **404 Deployment not found**：endpoint URL 错误或 deployment name 与 Bicep 中自定义名称不一致 → 去 Foundry Portal → Build → Deployments 核对

## 考试要点

- Foundry 资源类型：`Microsoft.CognitiveServices/accounts`，`kind: AIServices`
- 认证优先：**Managed Identity + DefaultAzureCredential**，优于 static API key
- Project 与 Hub 需**分步部署**；模型 deployment name 可与 model name 不同
- 提取回复：`response.choices[0].message.content`；token 用量在 `response.usage`
- Bicep 来自官方文档可避免因 Azure 更新导致的部署失败
- `az login` 凭证供 DefaultAzureCredential 在本地开发时使用

## English Short Summary

Unit 1 establishes the course template: virtual env, Azure CLI (`az login`), Bicep-deployed Microsoft Foundry (Cognitive Services AIServices kind) with a project and GPT-4.1 mini, then a Python script using OpenAI SDK + Azure Identity (DefaultAzureCredential bearer token) for the first chat completion. Key exam topics: managed identity over API keys, separate Foundry project deployment, correct deployment name vs model name, Bicep outputs for endpoint/deployment, and token usage tracking. Deployment is nearly free; only model inference incurs cost.

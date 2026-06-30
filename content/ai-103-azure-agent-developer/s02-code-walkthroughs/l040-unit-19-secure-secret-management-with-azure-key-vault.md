---
title: "Unit 19 : Secure Secret Management with Azure Key Vault"
lectureId: 40
section: 2
sectionTitle: "Code Walkthroughs"
date: "2026-07-01"
tags:
  - azure-key-vault
  - secret-management
  - managed-identity
  - bicep
  - rbac
  - lab
---

## 中文短总结

用 **Azure Key Vault** 替代硬编码 endpoint/API key：Bicep 部署时将 secrets 直接写入 Key Vault，Python 通过 **Managed Identity + SecretClient** 读取；**SecretManager** 类实现 LRU cache 减少调用与成本。

## 中文长总结

### Bicep 变更

资源：Foundry + Content Safety + Language Service + **Key Vault**

Key Vault 配置：
- `enablePurgeProtection: true`（Microsoft 强制；软删除后须等 7 天 scheduled purge，**不可手动 purge**）
- `enableRbacAuthorization: true`

Secrets 在 Bicep 中直接写入 Key Vault：

```bicep
resource openAiEndpointSecret 'Microsoft.KeyVault/vaults/secrets@...' = {
  parent: keyVault
  name: 'openai-endpoint'
  properties: { value: foundry.outputs.endpoint }
}
// 同样：deployment name, content-safety-endpoint, language-endpoint, language-key
```

**Outputs 仅保留 Key Vault URI**（不再输出明文 secrets）。

### RBAC

```bash
az role assignment create \
  --assignee <objectId> \
  --role "Key Vault Secrets User" \
  --scope <keyVaultResourceId>
```

### SecretManager 类

```python
from azure.keyvault.secrets import SecretClient
from azure.identity import DefaultAzureCredential

credential = DefaultAzureCredential()
secret_client = SecretClient(vault_url=KEY_VAULT_URI, credential=credential)

class SecretManager:
    def get_secret(self, name):
        if name in self._cache:
            return self._cache[name]
        value = self._client.get_secret(name).value
        self._cache[name] = value
        return value
```

- `get_secret(name)` → cache hit 或 Key Vault fetch
- Cache 降低 rate limit 风险与 micro-cost
- 立即 consume secret（`client = AzureOpenAI(azure_endpoint=sm.get_secret(...))`），避免中间变量

### 认证层级

| Level | 方式 |
|-------|------|
| Level 1 | 硬编码 connection strings / API keys |
| **Level 2** | Key Vault 存 secrets（本单元） |
| Level 3 | 全 Managed Identity，无 API key |

- OpenAI / Content Safety 用 Managed Identity 访问
- Language Service 仍用 API key，但从 Key Vault 读取（Level 2）

### Key Vault 删除注意

```bash
# 软删除后查找
az keyvault list-deleted

# purge protection 启用时无法手动 purge，须等 scheduledPurgeDate（~7天）
# 同名 redeploy 可能报错直到 purge 完成
# 软删除状态无费用
```

### 迁移模式

仅改 **authentication 阶段**：将 `os.environ[...]` 替换为 `secret_manager.get_secret(...)`，业务逻辑不变。

## 考试要点

- Key Vault 存储 secrets、keys、certificates；消除硬编码凭证
- Bicep 可在部署时自动 populate secrets
- **Key Vault Secrets User** role 读取 secrets
- 认证 Key Vault 用 **Managed Identity**（DefaultAzureCredential），不用 connection string
- **Purge protection** 启用 → 软删除后 7 天自动 purge，不可强制
- Secret caching 降低 latency、cost、rate limits
- Level 2 vs Level 3 security 模型

## English Short Summary

Unit 19 implements Azure Key Vault for secret management: Bicep deploys Key Vault with purge protection and RBAC, stores all endpoints/keys as secrets during deployment, outputs only vault URI. Python uses DefaultAzureCredential + SecretClient with a cached SecretManager class. Key Vault Secrets User role required. Purge protection means 7-day wait after soft delete. Security levels: L1 hardcoded, L2 Key Vault (this unit), L3 full managed identity. Exam focus: Bicep secret population, RBAC role, managed identity auth, and caching rationale.

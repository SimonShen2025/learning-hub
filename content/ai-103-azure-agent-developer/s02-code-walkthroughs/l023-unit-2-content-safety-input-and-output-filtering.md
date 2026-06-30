---
title: "Unit 2: Content Safety - Input and Output Filtering"
lectureId: 23
section: 2
sectionTitle: "Code Walkthroughs"
date: "2026-07-01"
tags:
  - azure-ai-content-safety
  - responsible-ai
  - bicep
  - input-filtering
  - output-filtering
  - lab
---

## 中文短总结

在 Unit 1 基础上新增 **Azure AI Content Safety** 独立资源，实现 **输入过滤**（用户消息进 LLM 前扫描）与 **输出过滤**（助手回复展示前扫描）。四大有害类别：hate、sexual、violence、self-harm；可配置 severity threshold（0–6）决定是否拦截。

## 中文长总结

### 资源清理与部署

```bash
# 删除整组部署
az deployment group delete --resource-group <rg> --name <deployment>

# Foundry / Content Safety 可能残留，需单独删除
az cognitiveservices account list --query "[?resourceGroup=='<rg>']"
az cognitiveservices account delete --name <name> --resource-group <rg>
```

Bicep 新增 Content Safety 资源：

```bicep
resource contentSafety 'Microsoft.CognitiveServices/accounts@...' = {
  kind: 'ContentSafety'
  sku: { name: 'S0' }  // 最低成本
  identity: { type: 'SystemAssigned' }
}
```

Outputs 增加 `contentSafetyEndpoint`；**无需 API key**，用 DefaultAzureCredential 认证。

### Content Safety 四大类别

| 类别 | 含义 |
|------|------|
| **Hate** | 基于种族、宗教、性别身份等的攻击 |
| **Sexual** |  explicit 性内容 |
| **Violence** | 威胁、伤害描述、美化暴力 |
| **Self-harm** | 自伤、自杀相关内容 |

### Python 实现流程

1. 创建 **OpenAI client** + **Content Safety client**（双 client）
2. 设置 `severity_threshold = 1`（保守；0=安全，6=极有害）
3. **Input filtering**：`analyze_text` → 解析四类 severity → 任一超过阈值则返回 safe response 并 exit
4. 调用 GPT-4.1 mini
5. **Output filtering**：对 assistant reply 再次调用 `is_text_safe`
6. 统计 LLM token（Content Safety 调用成本极低）

```python
# Content Safety 分析
result = content_safety_client.analyze_text(
    AnalyzeTextOptions(text=user_message)
)
# 返回 JSON：categoriesAnalysis → category + severity (0-6)
```

### 调试经验

- "I hate you" 可能只得到 severity **2**（非最高）→ 需充分测试与 CI/CD 自动化测试
- 提高 threshold 到 3 可让有害输入通过 input filter，演示 output filter 仍有效
- 即使 system prompt 要求生成有害内容，GPT 常仍拒绝；但**不能依赖 LLM 自律**，必须做 output filtering
- 反复删建资源可能导致 **Deployment not found** 瞬态错误 → 改 deployment 名称/prefix 重新部署

## 考试要点

- Content Safety 是**独立** Cognitive Services 资源（`kind: ContentSafety`）
- 四个检测类别：**hate, sexual, violence, self-harm**
- **Input filtering** vs **Output filtering** 的区别与顺序
- Severity 范围 0–6；threshold 越低越保守
- 使用 DefaultAzureCredential，避免硬编码 Content Safety API key
- 生产环境需在 CI/CD 中持续回归测试 content safety 行为

## English Short Summary

Unit 2 adds Azure AI Content Safety as a separate Bicep resource and implements input filtering (scan user messages before LLM) and output filtering (scan assistant replies before display). Four harm categories: hate, sexual, violence, self-harm, with configurable severity thresholds (0–6). Dual clients (OpenAI + Content Safety) authenticate via DefaultAzureCredential. Exam focus: independent Content Safety resource, four categories, input vs output filtering, threshold tuning, and why LLM refusals alone are insufficient for responsible AI.

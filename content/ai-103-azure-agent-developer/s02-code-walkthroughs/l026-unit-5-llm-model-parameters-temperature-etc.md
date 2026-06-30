---
title: "Unit 5: LLM Model Parameters (Temperature, etc.)"
lectureId: 26
section: 2
sectionTitle: "Code Walkthroughs"
date: "2026-07-01"
tags:
  - llm-parameters
  - temperature
  - max-tokens
  - top-p
  - config-yaml
  - intent-classification
  - lab
---

## 中文短总结

通过 `config.yaml` 管理 LLM 参数，演示 **max_past_messages**、**max_tokens**、**temperature**、**top_p** 对大小模型（intent classifier / SLM / LLM）响应质量、成本与延迟的影响；intent classifier 用 temperature=0、max_tokens=2 以最小化成本。

## 中文长总结

### Bicep 资源

- Foundry + Project + Content Safety + **LLM (GPT-4.1 mini)** + **SLM**（Phi-3.5 mini 不可用时用 GPT-4o mini 替代）
- 删建资源时改 `coursePrefix`（如加 `debug`）避免 Azure 残留资源冲突

### 核心参数

| 参数 | 作用 |
|------|------|
| **max_past_messages** | 截断对话历史（模型无状态，需手动重发 history） |
| **max_tokens** | 限制回复最大 token 数，控制成本与长度 |
| **temperature** | 随机性/创造力（0=确定性，1=高随机） |
| **top_p** | nucleus sampling，控制 token 选择多样性（与 temperature 类似） |

### 在 API 调用中设置

```python
client.chat.completions.create(
    model=deployment_name,
    messages=messages,
    max_tokens=150,
    temperature=0.5,
    top_p=0.5
)
```

### config.yaml 分层配置

```yaml
content_safety: { severity_threshold: ... }
intent_classifier: { temperature: 0, max_tokens: 2, top_p: 0 }
large_language_model: { temperature: 0.7, max_tokens: 500, max_past_messages: 10 }
small_language_model: { temperature: 0.3, max_tokens: 250 }
```

- Intent classifier：**temperature=0, max_tokens=2** → 仅输出 "simple" 或 "complex"
- LLM：适度 temperature 保证复杂问题创造力
- SLM：低 temperature，简单问题简短回复

### 实验结论

- max_tokens=10 → 回复过短不可用；150 较合理
- temperature=0 → 相同问题得到**完全相同**回复，便于调试
- temperature=0 **且** top_p=0 → 延迟可暴增（模型"挣扎"生成），即使回复看起来正常
- 截断 max_tokens 降低 latency 与 cost

## 考试要点

- 模型**无内置会话记忆**；history 由应用层管理，`max_past_messages` 截断时需保留 system message
- **temperature** 控制随机性；**top_p** 控制 nucleus sampling 多样性
- **max_tokens** 硬限制输出长度，影响成本与用户体验
- Intent classification 应用最低 temperature 与最少 max_tokens 以降本
- 极低 temperature + top_p 可能导致**延迟增加**（非仅影响内容质量）
- 生产代码应用 config 文件或类管理参数，避免单文件硬编码

## English Short Summary

Unit 5 demonstrates LLM parameters via config.yaml: max_past_messages (history truncation for stateless models), max_tokens (output length/cost), temperature (randomness), and top_p (nucleus sampling). Separate settings for intent classifier (temp=0, max_tokens=2), SLM, and LLM. Key findings: very low temperature gives deterministic replies; combining temperature=0 and top_p=0 can spike latency. Exam focus: parameter effects on cost, latency, and routing between SLM/LLM via intent classification.

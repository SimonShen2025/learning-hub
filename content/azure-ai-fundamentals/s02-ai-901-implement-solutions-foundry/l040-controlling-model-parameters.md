---
title: "Controlling Model Behavior with Parameters"
lectureId: 40
section: 2
sectionTitle: "AI-901 - Implement AI solutions - Microsoft Foundry"
date: "2026-06-10"
tags: [model-parameters, max-output-tokens, temperature, responses-api]
---

## 中文短总结

通过参数控制模型行为。max_output_tokens：限制响应长度（硬限制 token 数），用于成本控制——当大量用户调用模型时，限制输出 token 可显著降低费用。Temperature：控制输出的随机性/创造性（0=确定性高，1=创造性高）。这两个参数在 Responses API 和 Completions API 中都可用。企业通过这些参数平衡质量和成本。

## 中文长总结

### max_output_tokens（最大输出 token 数）

**作用**：设置模型响应的 token 硬上限

**使用场景**：
- 大量用户同时调用模型时控制成本
- 不需要冗长响应的场景
- API 成本按 output tokens 计费 → 限制 = 省钱

**效果**：
- 响应被截断，不会得到完整答案
- 是一个硬限制（hard limit）

**代码示例**：
```python
response = client.responses.create(
    model="<DEPLOYMENT_NAME>",
    input="<PROMPT>",
    max_output_tokens=100
)
```

### Temperature（温度）

**作用**：控制输出的随机性/创造性

| 值 | 效果 |
|----|------|
| 0（或接近0） | 确定性高，一致性强，适合事实性回答 |
| 1（或接近1） | 随机性高，创造性强，适合创意写作 |

### 企业应用
- 成本管理：max_output_tokens 限制输出
- 一致性：temperature 低 → 回答更稳定
- 创意任务：temperature 高 → 回答更多样

## 考试要点

- max_output_tokens = 限制响应长度（硬限制）
- Temperature = 控制随机性（0=确定，1=创造）
- 两者都是成本和质量平衡的工具
- max_output_tokens 超限时响应会被截断
- 企业用这些参数控制 API 成本

## English Short Summary

Control model behavior with parameters: max_output_tokens sets a hard limit on response length (for cost control — limits output tokens when many users call the model). Temperature controls randomness/creativity (0=deterministic, 1=creative). Both are available in Responses API and Completions API. Enterprises use these to balance quality vs. cost.

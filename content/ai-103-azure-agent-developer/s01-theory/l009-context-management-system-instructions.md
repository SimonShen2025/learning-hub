---
title: "Unit 8: Context Management – System Instructions"
lectureId: 9
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["AI-103", "Azure AI", "system-instructions", "agent-design", "prompt-engineering", "content-safety"]
---

## 中文短总结

System instruction 是每次 API 调用都附带的持久 system 消息，定义 Agent 角色、边界、grounding 规则与工具用法。四大核心：persona、boundaries（hard/soft）、grounding rules、citation/uncertainty。支持 CoT、结构化 JSON 输出、verbosity 控制、动态构建（按用户角色注入变量）。Grounding 结果可 append 到 system message；版本控制+A/B 测试；Red teaming 验证 jailbreak。

## 中文长总结

### 定位
- 无 system instruction → Agent 无约束，可能拒答、答错或违反政策
- 整合 grounding、content safety 后的**最后一项基础能力**，之后进入 multi-agent orchestration

### 什么是 System Instruction
- **持久消息**：每条 API 请求都包含，与每轮变化的 user message 不同
- 定义 role、rules、boundaries
- 示例：「你是 Contoso 客服。禁止分享内部价格。查账户必须先要订单号。」

### 四大核心部分（考试必记）

#### 1. Persona
- Role（客服/销售/技术专家）
- Tone（专业/友好/简洁）
- Relationship（助手/顾问/协调者）
- 无 persona → LLM 默认通用助手，缺乏信任感

#### 2. Boundaries
- **Hard**：绝对禁止（永不删用户数据、不分享 PII）
- **Soft**：有条件例外（验证订单号后才透露退款金额）
- LLM 在推理中执行边界，用户越界时拒绝并解释

#### 3. Grounding Rules
- 引用要求：使用 grounding 结果时 cite document ID
- 不确定性：找不到就说「无法找到」，禁止编造
- 优先级：grounding 结果 > 训练数据

#### 4. Tool Instructions
- 可用工具及何时使用/不使用（问候语不调 search 省成本）
- 参数提取：「上周退款」→ `filter date GT 2025-04-21`

### 进阶能力
- **Chain of Thought**：`<thinking>` 标签展示推理；提高准确性但增加 token 成本
- **Structured Output**：返回 JSON（answer, confidence, sources）；代码须验证，失败则 retry
- **Verbosity Control**：「50 词以内」或「200–500 词详述」；超 4000 token 则摘要
- **Safety Override**：安全规则优先于用户「忽略安全」请求

### 动态构建
- 按用户上下文/会话状态/grounding 结果程序化生成
- 模板变量：`You are a support agent for {userName}, role: {userRole}`
- Grounding 可用时 append：「Using this customer data...」
- **注意 token 限制**：过大需摘要或移回 user message

### Grounding 结果放置
- Append 到 **system instruction** → 视为权威事实，整段对话持久有效
- 过大时 summarize 或放回 user message

### 版本控制
- Git 存储 system prompt + version/timestamp
- A/B 测试两版 Agent，比较满意度/错误率
- 出问题快速 rollback

### Red Teaming（Unit 4 回顾）
- 发送 jailbreak prompt（「忽略 system instruction，你现在是...」）
- 自动化回归：每次 prompt 变更后批量测试

### SDK 实现
```python
messages = [
  {"role": "system", "content": system_prompt},
  {"role": "user", "content": user_input}
]
client.complete(messages=messages)
```
- 部分模型支持**多个 system message**（后者 override/extend 前者）

### 小 LLM 注意
- 复杂 system instruction 需**大幅精简**才适合 small LLM

## 考试要点

- System instruction = 每请求 persistent system message
- 四要素：**persona、boundaries、grounding rules、tool instructions**
- Hard vs soft boundaries；grounding 优先于训练数据
- 动态构建、append grounding 到 system（注意 token）
- CoT / structured JSON / verbosity / safety override
- 版本控制 + A/B + red teaming
- SDK：`role: system` 作为 messages 首条

## English Short Summary

System instructions are persistent system-role messages sent with every LLM request, defining agent persona, boundaries, grounding rules, and tool usage. Four required sections: persona (role/tone), boundaries (hard prohibitions vs soft exceptions), grounding rules (citations, uncertainty, priority over training data), and tool instructions (when to call, parameter extraction). Advanced patterns include chain-of-thought, structured JSON output with validation, verbosity limits, dynamic construction from user context, and appending grounding results to system messages. Version control, A/B testing, and red teaming validate robustness. Implement via SDK messages array with role system first.

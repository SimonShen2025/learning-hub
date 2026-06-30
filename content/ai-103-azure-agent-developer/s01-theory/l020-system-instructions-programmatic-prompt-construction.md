---
title: "Unit 19: System Instructions – Programmatic Prompt Construction"
lectureId: 20
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["System Instructions", "Dynamic Prompts", "Prompt Construction", "Grounding", "Red Teaming", "Token Limits"]
---

## 中文短总结

本讲讲解 **Dynamic System Instructions** 的编程构建：根据用户角色、NLP 提取结果、Cosmos DB 长期记忆、session state 动态生成 system prompt，而非静态硬编码字符串。核心组件包括 **Persona**、**Boundaries**、**Grounding rules/data**、**Tool availability**。用 Python f-string 或 **Jinja2** 模板注入变量。Session state（approval pending、waiting for input）可 mid-conversation 更新 instruction 以 halt Agent。需 **version control**、A/B 测试、**red teaming**（防 mid-session jailbreak）及 **tiktoken** 监控 token 限制。

## 中文长总结

### Static vs Dynamic

| 类型 | 示例 |
|------|------|
| **Static** | 「You are a Contoso support agent. Never share internal prices.」— 所有人相同 |
| **Dynamic** | 「You are support for {user_name}, role={role}. Price threshold={threshold}.」— 按用户定制 |

### 动态构建原因

- 不同用户需要不同权限、persona、工具集
- Admin vs Guest vs Support agent 角色差异
- Session state 变化需 mid-conversation 更新

### 四大核心组件

1. **Persona**：适应用户的角色描述（technical support engineer、patient tone）
2. **Boundaries**：动态边界（admin 可 delete data，guest 不可）
3. **Grounding rules/data**：何时引用 search results / internal data（注意 truncation/summarization 防 token 爆炸）
4. **Tools**：按角色条件附加 tool list（admin 更多 tools）

### 注入数据源

- NLP 提取：user name、role、timezone、entities
- **Cosmos DB** long-term memory：preferences、history
- Session state：approval pending、waiting for order number、admin override active

### Session State 动态更新示例

- Approval pending → 「Do not take further action until approval received.」
- Waiting for input → 「Do not call tools until user provides order number.」
- Admin override → 「Admin override active. Restrict certain actions.」

→ 可 **立即 halt** Agent 进一步操作

### 编程实现

```python
def build_system_instruction(user, memory, session_state, grounding):
    return f"""You are {user.role} support for {user.name}.
    Boundaries: {user.boundaries}
    Grounding: {grounding[:2000]}  # truncate
    State: {session_state}
    Tools: {user.allowed_tools}"""
```

- 复杂场景用 **Jinja2 templates**
- 封装为 **function** 便于 version control

### 发送格式

```json
{
  "messages": [
    {"role": "system", "content": "<dynamic instruction>"},
    {"role": "user", "content": "<user input>"}
  ]
}
```

- SDK 和 REST API 均使用相同 JSON 结构
- System instruction 可在 **mid-session** 持续更新

### Version Control & Testing

- Version control 整个 **build function** 或关联 template 文件
- 生产变更 → **A/B test**（部分用户试用新版本）
- **Red teaming**：测试动态 instruction 是否在 conversation 进行中产生 jailbreak 漏洞
  - 初始 instruction 可能 bulletproof，但 mid-session 更新后可能变脆弱

### Token 管理

- 用 **tiktoken** 库计算 system message token 数
- Grounding results 可能很大 → truncation 或 summarization
- 超限时 summarize system instructions

### 监控

- Span：`system.instruction.construction`
- Attributes：注入的 variables、components
- 分阶段 logging 便于 red teaming 漏洞调试

## 考试要点

- Dynamic vs static system instructions 区别
- 四大组件：persona、boundaries、grounding、tools
- 注入来源：NLP entities、Cosmos DB memory、session state
- Session state 可 mid-conversation 更新以 halt agent（approval pending 等）
- Role-based：admin（全 tools）vs guest（restricted tools + public info only）
- 封装为 function 便于 version control（优于单个 text file）
- Grounding data 需 **truncation/summarization** 防 token 超限
- **tiktoken** 计算 token；超限则 summarize
- Red teaming 需测试 mid-session instruction 变化的安全风险
- A/B testing 用于 production instruction 变更
- Messages JSON 格式：role=system + role=user
- Foundry Trace span 监控 instruction construction

## English Short Summary

This lecture covers programmatic construction of dynamic system instructions instead of static hard-coded strings. Core components—persona, boundaries, grounding rules/data, and conditional tool availability—are injected with user context from NLP extraction, Cosmos DB long-term memory, and session state (approval pending, waiting for input, admin override). Python f-strings or Jinja2 templates build instructions; encapsulate in version-controlled functions. Instructions update mid-session as state changes, enabling agent halting. Grounding results require truncation to manage tokens (use tiktoken library). Production changes need A/B testing and red teaming to catch mid-conversation jailbreak vulnerabilities. Send via standard messages JSON (role=system, role=user). Monitor construction via Foundry Trace spans.

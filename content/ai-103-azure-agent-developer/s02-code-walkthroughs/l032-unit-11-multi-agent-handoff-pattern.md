---
title: "Unit 11: Multi-Agent - Handoff Pattern"
lectureId: 32
section: 2
sectionTitle: "Code Walkthroughs"
date: "2026-07-01"
tags:
  - multi-agent
  - handoff-pattern
  - tool-calling
  - conversation-router
  - lab
---

## 中文短总结

实现 **Handoff Pattern**：Support Agent 与 Billing Agent 通过对等 handoff tool 转移对话控制权，**ConversationRouter** 管理当前 active agent 并传递完整 conversation history。Handoff 本质是 LLM **tool call** 的特殊用法，非真正执行外部 tool。

## 中文长总结

### Bicep（最简）

- Foundry + Project + 单个 LLM（GPT-4.1 mini）
- 一个模型服务多个 agent

### Agent 类架构

| 组件 | 职责 |
|------|------|
| **SupportAgent** | 产品/政策支持；handoff tool → billing |
| **BillingAgent** | 退款/账单；handoff tool → support |
| **ConversationRouter** | 入口；跟踪 current_agent；处理 handoff 信号 |
| **ContentSafety** | 每轮 input/output 安全检查 |

### Handoff Tool 定义

```python
{
    "type": "function",
    "function": {
        "name": "handoff_to_billing",
        "description": "Transfer conversation to billing agent",
        "parameters": {
            "type": "object",
            "properties": {
                "reason": {"type": "string", "description": "Why handoff is needed"}
            },
            "required": ["reason"]
        }
    }
}
```

### process_message 返回值模式

- **无 handoff**：`(assistant_content, None)`
- **有 handoff**：`(None, {"agent": "billing", "reason": "...", "updated_history": [...]})`

Router 检测 handoff → 切换 `current_agent` → 用 updated_history 递归调用新 agent。

### 与 Tool Calling 的区别

- LLM 认为在 call tool，但应用层**不执行 tool**，而是返回特殊 handoff 信号
- Handoff 传递**完整 conversation history**（与 Magentic 模式对比）

### 主循环

```python
while True:
    response, handoff = router.process_message(user_input)
    if not content_safety.is_safe(response): ...
    user_input = input(...)  # quit/exit/bye 退出
```

## 考试要点

- **Handoff pattern**：peer agents 对等转移，带 conversation history
- Handoff 通过 **function/tool definition** 实现，tool_choice="auto"
- **ConversationRouter** 管理 active agent 与 handoff 路由
- 各 agent 有独立 system instructions 与专属 handoff tools
- Handoff 时 content=None，tool_calls 含 target agent 与 reason
- 与 Magentic（manager）模式是**不同** orchestration pattern

## English Short Summary

Unit 11 implements the multi-agent handoff pattern: Support and Billing agents use handoff tools (special tool calls, not external API execution) to transfer control with full conversation history. ConversationRouter manages the active agent and recursive handoff processing. Single LLM serves both agents. Exam focus: handoff vs tool calling distinction, router pattern, history transfer, and peer-agent orchestration.

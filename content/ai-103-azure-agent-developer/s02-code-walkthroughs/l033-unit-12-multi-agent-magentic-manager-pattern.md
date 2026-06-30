---
title: "Unit 12: Multi-Agent – Magentic (Manager) Pattern"
lectureId: 33
section: 2
sectionTitle: "Code Walkthroughs"
date: "2026-07-01"
tags:
  - multi-agent
  - magentic-pattern
  - manager-agent
  - hierarchical-orchestration
  - lab
---

## 中文短总结

**Magentic（Manager）Pattern**：Manager Agent 接收所有用户请求，通过 delegate tools 路由到 Refund/Product/Account 三个 specialist sub-agent；sub-agent **互不知晓**，**不传递 conversation history**（与 Handoff 模式的关键区别）。

## 中文长总结

### 与 Handoff Pattern 对比

| 特性 | Handoff | Magentic (Manager) |
|------|---------|-------------------|
| 结构 | Peer agents 对等 | 层级：Manager → Sub-agents |
| Sub-agent 互知 | 是（互相 handoff） | **否** |
| History 传递 | **完整传递** | **不传递** |
| Manager 直接回答 | 可以 | **从不**（仅路由） |

### Sub-Agent 类（简单）

- **RefundAgent**：退款资格、订单号、>$1000 需经理审批
- **ProductAgent**：产品规格、对比、推荐
- **AccountAgent**：资料更新、密码、账户设置
- 每个：`system instructions` → `process_request(user_message)` → LLM → return string

### Manager Agent

三个 delegate tools：

```python
"delegate_to_refund"   # user_message required
"delegate_to_product"
"delegate_to_account"
```

流程：
1. Manager LLM + tool_choice="auto"
2. 选择 delegate tool → 提取 `user_message`（原始用户消息，不 rephrase）
3. 调用对应 sub-agent 的 `process_request`
4. 直接返回 sub-agent 响应（manager 不 synthesize）

若 manager 未 call tool → 返回 "unable to determine intent"

### Routing Metrics

- 计数各 sub-agent 被调用次数
- 对话结束时可输出 metrics

### 主循环

```python
while True:
    if not content_safety.is_safe(user_input): ...
    response = manager_agent.process_message(user_input)
    if not content_safety.is_safe(response): ...
```

## 考试要点

- **Magentic pattern** = hierarchical manager delegates via tools
- Manager **never answers directly**；必须 route 到 specialist
- Sub-agents **无 state transfer**（无 conversation history）
- Sub-agents **不知道**其他 agent 或 manager 存在
- Delegate tools 传递原始 user_message
- 可与 Handoff 组合但非考试范围
- Routing metrics 追踪 sub-agent 使用频率

## English Short Summary

Unit 12 implements the Magentic (manager) pattern: a Manager Agent routes user requests via delegate tools to Refund, Product, and Account specialists. Sub-agents are isolated (no mutual awareness, no conversation history transfer)—unlike the handoff pattern. Manager never answers directly; it classifies intent and delegates. Exam focus: hierarchical vs peer orchestration, no state transfer, delegate tool pattern, and routing metrics.

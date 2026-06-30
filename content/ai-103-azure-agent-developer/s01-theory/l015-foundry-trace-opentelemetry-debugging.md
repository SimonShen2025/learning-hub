---
title: "Unit 14: Foundry Trace – OpenTelemetry Debugging"
lectureId: 15
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["Foundry Trace", "OpenTelemetry", "Distributed Tracing", "Spans", "KQL", "Reasoning Loops"]
---

## 中文短总结

本讲深入讲解 **Microsoft Foundry Trace** 与 **OpenTelemetry (OTEL)** 分布式追踪。**Trace** 记录单次完整对话；**Span** 表示 LLM 调用、工具调用、记忆读取等单个操作；**Attributes** 为键值元数据，**Events** 为 span 内的时间点记录。Foundry Trace 自动捕获 Agent 执行轨迹并集成 **Azure Monitor**，可用 **KQL** 查询失败工具调用与慢 LLM 响应。重点包括 **reasoning loop**（重复相同 span）检测、自定义 span 编写、采样策略（head/tail-based）及五步调试工作流。

## 中文长总结

### 分布式追踪核心概念

- **Trace**：一次 Agent 完整对话记录，从首条用户消息到最终响应
- **Span**：Trace 内的单个操作（LLM 调用、工具调用、记忆查找、handoff）
- **Attributes**：Span 上的键值对元数据，描述操作结果
- **Events**：Span 内的瞬时时间点记录（如 request sent、response received），可多次发生

### OpenTelemetry 与 Foundry Trace

- **OpenTelemetry**：厂商中立的追踪 API/SDK/协议标准
- **Foundry Trace**：Microsoft 对 OTEL 的托管实现，自动集成 Azure Monitor
- Agent 在 Foundry 中运行时自动捕获 trace；也可通过 OTEL SDK 发送自定义 span
- Portal 中按 conversation ID 查看 **waterfall** 交互式时间线

### 自动 Span 类型

| Span 名称 | 关键 Attributes |
|-----------|----------------|
| `LLM call` | model name, prompt/completion/total tokens, latency |
| `tool call` | tool.name, tool.parameters, http.statuscode, response.sizebytes |
| `handoff` | from agent, to agent, conversation state size bytes, success |

Duration 由 OTEL SDK 自动记录，无需手动设置。

### Reasoning Loop（推理循环）

- **定义**：Agent 重复相同操作、无进展（如反复用相同参数调用 search）
- **检测**：Trace 中出现相同 operation name、相同 parameters 的重复 span 序列
- **代价**：可能消耗 10 倍 token/API 调用
- **修复**：检查 span attributes（如缺少预期字段）、调整 system message 或添加 fail-safe

### 自定义 Span 代码模式

```python
from opentelemetry import trace
tracer = trace.get_tracer(__name__)
with tracer.start_as_current_span("tool_call") as span:
    span.set_attribute("tool.name", "search")
    span.set_attribute("query", "budget report")
```

### 考试必知 Attributes

- `agent.name`、`operation.type`（LLM call / tool call / handoff）
- `duration.ms`、`status`、`error.message`

### KQL 查询示例

- 查找失败工具调用：filter span name = tool call + error attributes
- 查找慢 LLM：span name = LLM call AND duration > 2000ms
- 建议加时间范围限制（last hour / 24 hours）

### Trace Sampling

- **Head-based**：只记录前 N% trace（如 10%），其余跳过
- **Tail-based**：全部记录，仅保留含错误的 trace
- 生产环境可随机采样 10%，开发环境 100%

### 五步调试工作流

1. **Identify**：用户报告或告警发现失败
2. **Search**：用 conversation ID 加载 trace waterfall
3. **Locate**：找首个 error=true 或异常长 duration 的 span
4. **Examine**：检查 attributes 和 events
5. **Fix & Verify**：修复代码、重新部署、复现验证

## 考试要点

- **Trace / Span / Attribute / Event** 四者区别是高频考点
- Reasoning loop 表现为 **重复相同 span**（相同 operation name + parameters）
- 自定义 span 使用 **OpenTelemetry SDK**（非 Foundry 专有 API）：`tracer.start_as_current_span()`
- Attributes 描述 span **结果**；Events 描述 span **过程**
- Foundry Trace 数据可发送到 Azure Monitor Log Analytics，用 **KQL** 查询
- 自动 span：`LLM call`、`tool call`、`handoff` 及各自标准 attributes
- **Head-based vs tail-based sampling** 的权衡（性能/存储 vs 错误保留）
- Multi-agent handoff 可在 waterfall 中用箭头可视化
- AI-103 有多道 reasoning loop 与 identical spans 相关考题

## English Short Summary

This lecture covers Microsoft Foundry Trace built on OpenTelemetry. Traces record full agent conversations; spans represent individual operations (LLM calls, tool calls, memory lookups, handoffs); attributes provide key-value metadata; events capture point-in-time progress within spans. Foundry Trace auto-captures agent execution and integrates with Azure Monitor for KQL queries and waterfall visualization. Key exam topics: detecting reasoning loops (repeating identical spans), creating custom spans via OTEL SDK with `start_as_current_span()`, standard attributes (agent.name, operation.type, duration.ms, status, error.message), sampling strategies, and the five-step debugging workflow (identify, search, locate, examine, fix).

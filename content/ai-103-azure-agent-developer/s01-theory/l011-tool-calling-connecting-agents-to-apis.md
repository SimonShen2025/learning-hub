---
title: "Unit 10: Tool Calling – Connecting Agents to APIs"
lectureId: 11
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["AI-103", "Azure AI", "tool-calling", "function-calling", "REST API", "orchestration"]
---

## 中文短总结

Tool calling 三步：Agent 请求工具（LLM 生成 JSON）→ 编排代码执行 → 结果以 role:tool 消息回传 LLM。工具定义 = JSON schema（name/description/parameters）。REST 工具用 GET/POST + Bearer key（Key Vault）。tool_calls 数组可并行（asyncio.gather）。tool_choice: forced/auto/none。幂等工具用 request ID 去重；超时+指数退避+circuit breaker。Foundry Trace span 记录调用；参数校验防注入。

## 中文长总结

### Tool Calling 三步流程
1. **Agent 请求**：LLM 生成 JSON（tool name + parameters），在 **tool_calls 数组**中（非普通文本）
2. **代码执行**：Orchestrator 查找函数/REST endpoint 并执行
3. **返回结果**：以 `role: tool` + **相同 toolCallId** 送回 LLM 继续推理

### Tool Definition（JSON Schema）
```json
{
  "name": "getCurrentWeather",
  "description": "Get weather for a city",
  "parameters": { "city": { "type": "string" } }
}
```
- 通过 API `tools` 参数传给 LLM

### REST API Tool
- HTTP GET/POST；定义含 endpoint、method、headers、响应格式
- 认证：`Authorization: Bearer {key}`，从 env 或 **Key Vault** 注入
- 构建请求 → `requests.post/get` → 200 返回 JSON；4xx/5xx 也回传 Agent

### 提取 tool_calls
```python
tool_calls = response.choices[0].message.tool_calls
# 每项：function.name, function.arguments (JSON string → json.loads)
```
- 单次响应可请求**多个工具**，循环或并行执行

### tool_choice 控制
| 值 | 行为 |
|----|------|
| `auto` | LLM 自主决定是否调用（最常用） |
| `forced` | 强制至少调用一个工具 |
| `none` | 禁止调用工具 |

### 并行 vs 顺序
- **并行**：`asyncio.gather`，工具**无依赖**（三城市天气同时查）
- **顺序**：第二工具依赖第一工具结果

### 幂等性（Idempotency）
- **幂等**：多次调用同结果（设温度 72°）
- **非幂等**：发邮件（重复危险）
- 解决：工具端检查 **request ID**，已执行则返回缓存

### 超时与重试
- 默认 10 秒 timeout
- **指数退避**：1s → 2s → 4s...
- **Circuit breaker**：连续失败则暂停再试
- 可组合使用

### 历史去重
- Tool call/result 自动存入 conversation history
- 代码检查近 10 条是否相同参数 → 用缓存
- 或在 system instruction 中要求「已问过则凭记忆回答」

### API Key 管理
- 字典映射 tool → API key；运行时注入
- 支持 key rotation

### 安全（考试）
- **永不信任 LLM 参数**：验证格式、范围
- SQL：参数化查询，禁止拼接
- URL：白名单域名，阻止意外 URL

### Foundry Trace
- 每 tool call = span（name, parameters, status, duration, result/error）
- 按 error type 过滤调试

## 考试要点

- 三步：request → execute → role:tool 返回（matching toolCallId）
- Tool definition JSON schema；tool_calls 数组提取
- REST + Bearer auth + Key Vault
- tool_choice: auto/forced/none；并行 gather vs 顺序依赖
- 幂等 request ID；timeout + exponential backoff + circuit breaker
- 参数校验防 SQL/URL injection
- Foundry Trace span 监控

## English Short Summary

Tool calling follows three steps: the LLM requests a tool via a tool_calls JSON array, orchestration code executes it (often REST with Bearer keys from Key Vault), and results return as role:tool messages matching the toolCallId. Tools are defined with JSON schemas (name, description, parameters). Control via tool_choice (auto/forced/none). Run independent tools in parallel with asyncio.gather; dependent tools sequentially. Handle idempotency with request IDs, timeouts, exponential backoff, and circuit breakers. Never trust LLM parameters—validate inputs against injection. Foundry Trace spans log every call for debugging.

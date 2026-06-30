---
title: "Unit 12: Sequential vs. Concurrent Agent Execution"
lectureId: 13
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["AI-103", "Azure AI", "multi-agent", "sequential", "concurrent", "asyncio", "orchestration"]
---

## 中文短总结

Sequential：A 完成→B 用 A 输出，无时间重叠，总耗时=A+B+C。Concurrent：独立任务并行（asyncio.gather），总耗时=max(A,B,C)。依赖关系决定模式：search→fetch 顺序；三城市天气并行。部分并发：两工具并行后 summarizer 顺序合并。gather 默认一错全取消；return_exceptions=True 保留成功结果。Orchestrator 用同一 conversation ID 传递 state。Foundry Trace：顺序 span 不重叠，并发 span 重叠。

## 中文长总结

### Sequential Execution
- Agent/Tool **逐步完成**：A 全部做完 → 返回结果 → B 才开始
- **无时间重叠**（no overlap）
- 总耗时 = **A + B + C**（求和）
- 适用：B 的输入**依赖** A 的输出

#### 经典模式：Search then Fetch
1. searchDocuments("budget report") → 返回 doc 1,2,3...
2. fetchDocument(docId) → **必须等 search 结果**

### Concurrent Execution
- 多 Agent/Tool **同时运行**，Orchestrator 等全部完成后合并
- 总耗时 = **max(A, B, C)**（取最长）
- 适用：步骤**独立**、无数据共享、但结果都需要

#### 经典模式：Three Queries
- 「比较 Seattle、Boston、Miami 天气」→ 三城市并行查 weather tool

### 部分并发（Partial Concurrency，考试）
- 例：「获取订单历史 + 产品推荐，然后总结」
- order history ∥ recommendations（并发）
- summarizer **顺序**等待两者完成后再执行
- 总耗时 = **max(并发组) + summarizer 时间**

### 依赖判断（考试高频）
| 条件 | 模式 |
|------|------|
| B 需要 A 的输出 | Sequential |
| 各 Agent 独立数据/任务 | Concurrent |

### Python 实现

#### Sequential
```python
r1 = await agent1.run(input)
r2 = await agent2.run(r1)  # A 异常则 B 不执行
r3 = await agent3.run(r2)
# 总时间 = t1 + t2 + t3
```

#### Concurrent
```python
async def getWeather(city): ...
results = await asyncio.gather(
    getWeather("Seattle"),
    getWeather("Boston"),
    getWeather("Miami")
)
# 返回顺序 = 输入顺序（即使 Seattle 最慢，仍在 index 0）
```

### 超时
```python
await asyncio.wait_for(asyncio.gather(...), timeout=5.0)
```
- 默认 gather 超时 → **取消所有 pending task**，无 partial results
- 设置 timeout = 最长工具预期时间 + buffer

### 异常处理
- 默认 `gather`：**任一失败 → 取消其余 → 抛异常**
- `return_exceptions=True`：成功的仍返回，失败的为 Exception 对象
- 可 loop 检查 `isinstance(r, Exception)` 并使用 default value

### Microsoft Agent Framework

#### Sequential
```python
r1 = await orchestrator.run_agent("search_agent", query)
r2 = await orchestrator.run_agent("fetch_agent", r1.document_id)
```
- **同一 conversation ID** → Framework 自动维护 state/memory

#### Concurrent
```python
await asyncio.gather(
    orchestrator.run_agent("agent_a", conv_id=conv_id),
    orchestrator.run_agent("agent_b", conv_id=conv_id)
)
# 完成后第三 Agent 顺序合并
```

### 性能公式（考试）
- Sequential：**sum** of durations
- Concurrent：**max** of durations
- Partial：max(并发) + sequential 后续步骤

### Foundry Trace
- **Sequential**：span A 结束 → span B 开始，无重叠；总 duration = sum
- **Concurrent**：span 同时开始、不同结束时间，有重叠；总 duration = longest span
- **调试**：并发 span 若不重叠 → 代码意外变成 sequential（缺 await/gather）

## 考试要点

- Sequential = 依赖链，sum 耗时；Concurrent = 独立，max 耗时
- Search-then-fetch = sequential；三城市天气 = concurrent
- Partial concurrency：并行 + 后续顺序合并；总时间 = max + sequential
- `asyncio.gather`；返回顺序 = 输入顺序
- `return_exceptions=True` vs 默认全取消
- Orchestrator + **同一 conversation ID** 传递 state
- Foundry Trace：顺序 span 不重叠，并发 span 重叠

## English Short Summary

Sequential execution runs agents/tools one after another with no time overlap; total duration is the sum (A+B+C). Use when later steps depend on earlier outputs (search-then-fetch). Concurrent execution runs independent tasks in parallel via asyncio.gather; total duration is the maximum. Partial concurrency mixes both—e.g., parallel fetches then sequential summarization. gather preserves result order regardless of completion time; default cancels all on first error unless return_exceptions=True. In the Agent Framework, share the same conversation ID for state passing. Foundry Trace shows non-overlapping spans for sequential and overlapping spans for concurrent execution.

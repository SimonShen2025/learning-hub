---
title: "Unit 13: Sequential vs Concurrent Agent Execution"
lectureId: 34
section: 2
sectionTitle: "Code Walkthroughs"
date: "2026-07-01"
tags:
  - asyncio
  - concurrent-execution
  - sequential-execution
  - async-gather
  - lab
---

## 中文短总结

用 **asyncio** 包装 LLM 调用，演示 **ConcurrentAgent**（`asyncio.gather` 并行独立任务）与 **SequentialAgent**（任务链式依赖，`use_previous_result` / `use_original_arg` kwargs 传递结果）。

## 中文长总结

### Bicep

- Foundry + Project + GPT-4.1 mini（无 Content Safety）

### 三类

| 类 | 作用 |
|----|------|
| **LLMCalls** | `async def` 包装 `chat.completions.create` via `asyncio.to_thread` |
| **ConcurrentAgent** | 并行执行独立任务 |
| **SequentialAgent** | 顺序执行有依赖任务 |

### Concurrent 模式

```python
tasks = [
    {"func": llm.get_weather, "args": ["London"], "description": "..."},
    {"func": llm.get_exchange_rate, "args": ["USD", "EUR"], "description": "..."}
]
results = await asyncio.wait_for(
    asyncio.gather(*coroutines, return_exceptions=True),
    timeout=120
)
# 总耗时 ≈ 最慢任务耗时
```

- 任务**独立**，无依赖
- `asyncio.gather` — **考试必记**
- `return_exceptions=True` → 部分失败仍继续
- `asyncio.wait_for` → timeout handling

### Sequential 模式

```python
tasks = [
    {"func": llm.analyze_sentiment, "args": [text]},
    {"func": llm.generate_response, "kwargs": {
        "use_previous_result": True,
        "use_original_arg": True
    }}
]
# 总耗时 ≈ 各任务耗时之和
```

- Task B 需要 Task A 输出时使用 `use_previous_result`
- `use_original_arg` 向后续任务传递原始 user text
- 顺序执行，不可并行

### async 包装 LLM

```python
async def _call_llm(self, prompt):
    return await asyncio.to_thread(
        self.client.chat.completions.create, ...
    )
```

所有 LLM 函数须 `async def`。

### 实测

- Concurrent 两任务：~69s（受最慢任务限制；weather 较慢）
- Sequential 两任务：~65s（本例相近因任务本身耗时）
- Timeout 默认需调大（如 120s）；max_tokens 影响速度

## 考试要点

- **Concurrent**：`asyncio.gather`，任务独立，耗时 = max(各任务)
- **Sequential**：链式依赖，耗时 = sum(各任务)
- Coroutines 用 `async def` 定义
- `asyncio.gather(..., return_exceptions=True)` 支持 partial failure
- `asyncio.wait_for` 实现 timeout
- `use_previous_result` / `use_original_arg` 传递 inter-task 数据
- Magentic manager 模式本质是 sequential；本单元展示通用 async 模式

## English Short Summary

Unit 13 demonstrates sequential vs concurrent LLM execution using asyncio. ConcurrentAgent runs independent tasks in parallel via asyncio.gather (total time = slowest task). SequentialAgent chains dependent tasks using use_previous_result/use_original_arg kwargs (total time = sum). LLM calls wrapped with asyncio.to_thread. Exam focus: asyncio.gather, when to use concurrent vs sequential, timeout/partial failure handling, and async def coroutines.

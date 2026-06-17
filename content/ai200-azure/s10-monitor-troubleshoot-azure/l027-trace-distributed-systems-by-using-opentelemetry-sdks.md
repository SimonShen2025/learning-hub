---
title: "Trace distributed systems by using OpenTelemetry SDKs"
lectureId: 27
section: 10
sectionTitle: "Monitor and troubleshoot Azure solutions"
date: "2026-06-17"
tags: ["OpenTelemetry", "Application Insights", "Distributed Tracing", "Spans", "Azure Monitor"]
---

## 中文短总结

本讲演示使用 **OpenTelemetry SDK** 将分布式追踪数据发送到 **Application Insights**。创建 Application Insights 资源，复制 connection string，Python 程序（fake RAG pipeline）通过 `azure-monitor-opentelemetry` 配置 trace exporter，在 `retrieve_documents` 和 `generate_response` 函数中创建 **Span** 并设置自定义属性（query text、result count）。在 Portal **Transaction search** 中查看 trace 及各 span 耗时，用于定位性能瓶颈。

## 中文长总结

### OpenTelemetry 与 Application Insights

- **OpenTelemetry（OTel）**：开源可观测性标准（traces、metrics、logs）
- **Application Insights**：Azure 监控服务，接收 OTel 数据
- Python 包：`azure-monitor-opentelemetry`、`opentelemetry-sdk`、`opentelemetry-exporter-otlp`

### 设置流程

1. Portal 创建 **Application Insights**（关联 Log Analytics workspace）
2. 复制 Overview 页的 **Connection String**
3. 设为环境变量 `APPLICATIONINSIGHTS_CONNECTION_STRING`

### 代码模式（hotel demo / otel demo）

```python
from azure.monitor.opentelemetry import configure_azure_monitor
from opentelemetry import trace

configure_azure_monitor(connection_string=os.environ["APPLICATIONINSIGHTS_CONNECTION_STRING"])
tracer = trace.get_tracer(__name__)

with tracer.start_as_current_span("retrieve_documents") as span:
    span.set_attribute("query.text", query)
    span.set_attribute("results.count", len(results))
    # ... work ...
```

### Span 概念

- **Trace**：一次完整请求的执行路径
- **Span**：trace 中的一个操作单元，含名称、耗时、自定义属性
- `span.set_attribute()` 附加 metadata（query、result count 等）
- 类似 log，但结构化且带时序关系

### 演示：Fake RAG Pipeline

- `retrieve_documents`：~50ms（模拟向量检索）
- `generate_response`：~200ms（模拟 OpenAI 调用）
- 总 trace `rag_pipeline`：~250ms
- Portal → Application Insights → **Transaction search** → 查看 trace 详情与各 span 耗时

### 用途

- 定位慢操作（哪个 span 耗时最长）
- 理解分布式调用链（Container App → OpenAI 等）
- 生产环境性能优化与故障排查

## 考试要点

- **OpenTelemetry** 是跨平台追踪标准；Azure 通过 **Application Insights** 接收
- Python：`azure-monitor-opentelemetry` 的 `configure_azure_monitor()`
- 核心概念：**Trace**（完整请求）→ **Span**（单个操作）
- `tracer.start_as_current_span()` 创建 span；`span.set_attribute()` 添加 metadata
- Application Insights **Connection String** 用于配置 exporter
- Portal **Transaction search** 查看 traces 和 span 耗时 breakdown
- 与 logging 互补：tracing 关注请求路径与耗时，logging 关注事件消息
- AI-200 场景：追踪 RAG pipeline 各阶段（retrieve → generate）

## English Short Summary

This lecture demonstrates distributed tracing with OpenTelemetry SDKs sending data to Application Insights. An Application Insights resource is created, and its connection string configures the Azure Monitor OpenTelemetry exporter. A fake RAG pipeline creates spans for `retrieve_documents` and `generate_response`, setting custom attributes (query text, result count). Portal Transaction search reveals trace duration and per-span timing (~50ms retrieve, ~200ms generate). OpenTelemetry provides standardized observability; Application Insights is the Azure backend. Key concepts: traces (full request paths), spans (individual operations with timing and metadata), and `configure_azure_monitor()` for Python integration.

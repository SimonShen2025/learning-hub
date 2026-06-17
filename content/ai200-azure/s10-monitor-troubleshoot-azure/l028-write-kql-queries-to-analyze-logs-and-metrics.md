---
title: "Write KQL queries to analyze logs and metrics"
lectureId: 28
section: 10
sectionTitle: "Monitor and troubleshoot Azure solutions"
date: "2026-06-17"
tags: ["KQL", "Kusto Query Language", "Log Analytics", "Application Insights", "Traces"]
---

## 中文短总结

本讲介绍 **KQL（Kusto Query Language）** 分析 Application Insights 日志与指标。在 Portal **Logs** 面板查看 tables（dependencies、traces 等），从 Simple 模式切换到 **KQL 模式**编写查询。示例：从 `dependencies` 表筛选最近一小时内 `generate_response` 和 `retrieve_documents` 的平均耗时并生成时间图表。更新程序加入 **logging** 模块，通过 `configure_azure_monitor` 将 log 发送到 **traces** 表，可按 severity 过滤分析。

## 中文长总结

### Log Analytics 与 Application Insights

- Application Insights 关联 **Log Analytics workspace**
- Portal → Application Insights → **Monitoring → Logs** 打开查询窗口
- 左侧 **Tables** 列出可用表（约 11 个 App Insights 表）

### 常用表

| 表名 | 内容 |
|------|------|
| **dependencies** | 外部依赖调用（方法名、耗时、成功与否） |
| **traces** | 应用日志与 OpenTelemetry span 消息 |
| **requests** | HTTP 请求 |
| **exceptions** | 异常记录 |
| **customEvents** | 自定义事件 |
| **availabilityResults** | 可用性测试结果 |

### KQL 基础

- KQL 是 Azure 日志查询语言，语法类似 SQL 但有差异
- 管道 `|` 串联操作
- 简单查询：`dependencies`（等同 SELECT * FROM dependencies）

### 示例查询

```kusto
dependencies
| where timestamp > ago(1h)
| where name in ("generate_response", "retrieve_documents")
| summarize avg(duration) by name
| render timechart
```

- `ago(1h)`：最近一小时
- `summarize avg(duration) by name`：按方法名聚合平均耗时
- `render timechart`：生成时间图表

### Logging 集成

- Python `logging` 模块 + `configure_azure_monitor`
- `logging.info("Starting RAG pipeline")` 等语句写入 **traces** 表
- 可设 severity level（INFO、WARNING、ERROR）
- 结合 KQL 查询：`traces | where severityLevel >= 2`

### 分析用途

- 性能分析：哪些方法耗时最长
- 故障排查：过滤 failed dependencies
- 趋势监控：timechart 观察指标变化
- AI 场景：分析 RAG pipeline 各阶段 latency

## 考试要点

- **KQL（Kusto Query Language）** 是 Azure Log Analytics / Application Insights 查询语言
- 常用表：**dependencies**、**traces**、**requests**、**exceptions**
- 基本语法：表名 → `|` → `where` → `summarize` → `render`
- 时间过滤：`timestamp > ago(1h)`、`bin(timestamp, 5m)`
- 聚合：`summarize avg(duration), count() by name`
- 可视化：`render timechart`、`render barchart`
- Python logging + `configure_azure_monitor` → traces 表
- KQL 与 SQL 类似但不相同（管道式、无 JOIN 为主）
- AI-200：编写 KQL 分析 App Insights 中 AI 应用日志与性能

## English Short Summary

This lecture covers writing KQL (Kusto Query Language) queries to analyze Application Insights logs and metrics. The Logs panel exposes tables like dependencies, traces, and requests. A sample query filters the dependencies table for recent `generate_response` and `retrieve_documents` calls, summarizes average duration, and renders a timechart. The demo program is updated to use Python logging with `configure_azure_monitor`, sending log messages to the traces table with severity levels. KQL uses pipe-delimited operations (where, summarize, render) and time functions like `ago(1h)`. Key exam skill: querying App Insights data to diagnose performance and failures in AI applications.

---
title: "Lab: Running Some KQL Queries (Hands-On Lab)"
lectureId: 135
section: 15
sectionTitle: "AI App Observability and Monitoring"
date: "2026-09-22"
tags: ["kql", "log-analytics", "application-insights", "traces-table"]
---

## 中文短总结

Application Insights 由 Log Analytics 工作区支撑，可直接进入该工作区资源，或从 Application Insights 的 Logs 区域跳转过去，用 KQL（Kusto 查询语言，语法类似 SQL 但完全不同，常用于安全分析场景）查询数据。核心是 `traces` 表，其结构类似关系表：包含客户端 IP、操作系统等列，以及承载用户问题/系统提示/助手响应等 JSON 内容的 `customDimensions` 动态列。示例查询使用 `project` 子句（相当于 SQL 的 SELECT）按时间戳降序提取时间戳、操作 ID、Provider（如 Azure.OpenAI）、用户问题与助手响应；另一查询按关键字（如 "installation" 或 "code samples"）过滤助手回复内容。

## 中文长总结

### KQL 与 Log Analytics 简介

- KQL（Kusto Query Language）语法结构上类似 SQL，但关键字与写法完全不同，常用于安全运营中心（SOC）对日志进行近实时分析
- 支撑 Application Insights 的底层存储是 **Log Analytics 工作区**：可以直接在 Azure 门户中打开该工作区资源，或从 Application Insights 的 **Logs** 区域（Monitoring 分类下）跳转进入

### traces 表结构

- Log Analytics 工作区中与追踪相关的数据存储在 **traces** 表中，其结构类似关系型数据库表，包含多种数据类型的列（datetime、string、int、dynamic 等）
- 部分关键列：客户端 IP、客户端操作系统等来源信息；`message` 列存储用户查询文本；`customDimensions`（dynamic 类型，JSON）存储系统提示、用户查询、助手响应、工具调用详情等结构化内容
- 查询该表需切换到 KQL 模式（而非简单模式），输入表名 `traces` 并运行即可看到记录（示例中共 4 条：系统指令、用户查询、助手响应、工具调用相关记录）

### 示例查询一：提取用户问答对

- 使用 `project` 子句（类似 SQL 的 SELECT）指定输出列：时间戳、操作 ID（operation ID）、Provider（如 `Azure.OpenAI`）、消息文本等
- 按时间戳降序排序
- 结果展示了用户查询（"最新的 Foundry SDK 代码示例"）与对应的助手响应，便于分析客户与智能体的具体交互内容

### 示例查询二：按关键字过滤助手回复

- 查询目标：筛选出助手回复内容中包含特定短语（如 "installation" 或 "code samples"）的记录，输出时间戳、操作 ID、助手回复列
- 同样按时间戳降序排列，验证结果中确实包含目标关键字
- 建议：编写 KQL 查询时可借助 ChatGPT/Copilot 等 AI 工具辅助生成，降低学习成本

## English Short Summary

Application Insights is backed by a Log Analytics workspace, reachable directly or via the Logs blade, queried using KQL (SQL-like but different syntax, common in security log analysis). The core `traces` table resembles a relational table, with columns for client IP/OS and a dynamic `customDimensions` column holding JSON (prompt, query, response, tool calls). One query used `project` to extract timestamp, operation ID, provider, and response by timestamp; another filtered replies by keyword.

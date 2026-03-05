---
title: "Step Functions"
lectureId: 227
section: "19"
sectionTitle: "Serverless Overviews from a Solution Architect Perspective"
date: "2026-03-05"
tags: ["step-functions", "serverless", "workflow", "orchestration", "lambda"]
---

## 中文短总结

AWS Step Functions 是无服务器可视化工作流编排服务，主要用于协调 Lambda 函数。设计有向图定义每步成功/失败后的下一步。支持顺序执行、并行、条件、超时和错误处理。集成 EC2、ECS、On-premises 服务器、API Gateway、SQS、DynamoDB 等多种 AWS 服务。支持**人工审批步骤** (Human Approval)。用例：订单处理、数据处理、Web 应用等复杂工作流。

## 中文长总结

### Step Functions 概述

- **无服务器可视化工作流编排**服务
- 设计状态机 (State Machine) 图形化流程
- 每一步可定义**成功/失败的后续操作**

### 核心能力

| 功能 | 说明 |
|------|------|
| 顺序执行 (Sequencing) | 按步骤依次执行 |
| 并行执行 (Parallel) | 多分支同时执行 |
| 条件分支 (Conditions) | 基于条件选择路径 |
| 超时 (Timeouts) | 步骤级别超时控制 |
| 错误处理 (Error Handling) | 捕获和处理异常 |
| 人工审批 (Human Approval) | 等待人工确认后继续 |

### 集成服务

不仅限于 Lambda，还集成：
- **EC2 实例**
- **ECS Tasks**
- **On-premises 服务器**
- **API Gateway**
- **SQS Queues**
- **DynamoDB**
- 以及更多 AWS 服务

### 用例
- **订单处理** (Order Fulfillment)
- **数据处理** (Data Processing)
- **Web 应用**
- 任何需要**图形化描述的复杂工作流**

## 考试要点

- Step Functions 用于**复杂工作流编排**，可视化状态机
- **不仅限于 Lambda** — 集成多种 AWS 服务（EC2、ECS、SQS、DynamoDB 等）
- 支持**人工审批步骤** (Human Approval)
- 内置顺序/并行/条件/超时/**错误处理**功能
- 用例关键词：订单处理、数据处理、需要图形化表示的复杂流程
- 完全无服务器

## English Short Summary

AWS Step Functions is a serverless visual workflow orchestration service, primarily for coordinating Lambda functions but also integrating with EC2, ECS, on-premises servers, API Gateway, SQS, DynamoDB, and more. Design state machine graphs to define success/failure paths at each step. Built-in features: sequencing, parallel execution, conditions, timeouts, error handling, and human approval workflows. Use cases include order fulfillment, data processing, and any complex workflow requiring visual graph representation.

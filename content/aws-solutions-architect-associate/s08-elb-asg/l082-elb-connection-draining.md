---
title: "Elastic Load Balancer - Connection Draining"
lectureId: 82
section: 8
sectionTitle: "High Availability and Scalability: ELB & ASG"
date: "2026-03-05"
tags: ["elb", "connection-draining", "deregistration-delay"]
---

## 中文短总结

Connection Draining（CLB 术语）/ Deregistration Delay（ALB/NLB 术语）：当实例被注销或标记为不健康时，给予现有连接一段时间完成正在进行的请求，同时 ELB 不再向该实例发送新请求。超时范围 1-3600 秒，默认 300 秒（5 分钟），设为 0 则禁用。短请求应用可设较短时间（如 30 秒），长请求应用需设较长时间。

## 中文长总结

**概念：**
- **CLB**：称为 Connection Draining
- **ALB/NLB**：称为 Deregistration Delay
- 当实例进入 draining 状态（被注销或不健康）时：
  - 已有连接：给予时间完成正在处理的请求
  - 新连接：ELB 将新请求路由到其他健康实例

**参数配置：**
- 范围：1 ~ 3,600 秒
- 默认：300 秒（5 分钟）
- 设为 0：禁用 draining（立即断开）

**最佳实践：**
- 短请求应用（< 1秒）：设较短时间（如 30 秒），实例快速下线
- 长请求应用（文件上传等）：设较长时间，确保请求完成
- 权衡：时间越长，实例下线越慢

## 考试要点

- CLB = Connection Draining，ALB/NLB = Deregistration Delay
- 默认 300 秒，范围 1-3600 秒，0 为禁用
- 实例 draining 时只完成现有请求，不接收新请求
- 根据请求时长调整 draining 超时

## English Short Summary

Connection Draining (CLB) / Deregistration Delay (ALB/NLB) allows in-flight requests to complete when an instance is being deregistered or marked unhealthy, while the ELB stops sending new requests to it. Configurable from 1 to 3,600 seconds (default 300s, set to 0 to disable). Short-request applications benefit from shorter draining periods; long-lived requests need longer periods.

---
title: "Application Load Balancer (ALB)"
lectureId: 72
section: 8
sectionTitle: "High Availability and Scalability: ELB & ASG"
date: "2026-03-05"
tags: ["alb", "layer-7", "target-group", "routing", "microservices"]
---

## 中文短总结

Application Load Balancer (ALB) 工作在 Layer 7（HTTP），支持基于 URL 路径、主机名、查询字符串的路由规则，将请求转发到不同的 Target Group。Target Group 可以是 EC2 实例、ECS 任务、Lambda 函数或私有 IP 地址。ALB 特别适合微服务和容器架构。客户端真实 IP 通过 X-Forwarded-For 头传递给后端。

## 中文长总结

**ALB 核心特性：**
- Layer 7（仅 HTTP）负载均衡器
- 支持 HTTP/2 和 WebSocket
- 支持 HTTP → HTTPS 自动重定向

**路由规则（基于 Target Group）：**
- **URL 路径路由**：`/users` → Target Group A，`/posts` → Target Group B
- **主机名路由**：`one.example.com` → TG1，`other.example.com` → TG2
- **查询字符串/头部路由**：`?Platform=Mobile` → TG1，`?Platform=Desktop` → TG2

**Target Group 类型：**
- EC2 实例（可由 ASG 管理）
- ECS 任务（容器）
- Lambda 函数（Serverless）
- 私有 IP 地址（含本地数据中心服务器）

**Health Check：** 在 Target Group 级别执行

**客户端 IP 传递：**
- ALB 做连接终止（Connection Termination），后端看到的是 ALB 的私有 IP
- 真实客户端 IP 通过 `X-Forwarded-For` 头获取
- 端口通过 `X-Forwarded-Port`，协议通过 `X-Forwarded-Proto`

**对比 CLB：**
- CLB 每个应用需要一个独立的负载均衡器
- ALB 一个即可服务多个应用（通过路由规则）

## 考试要点

- ALB = Layer 7，支持基于路径/主机名/查询字符串的路由
- Target Group 支持 EC2、ECS、Lambda、私有 IP
- 客户端真实 IP 通过 X-Forwarded-For 获取
- ALB 适合微服务和容器架构
- Health Check 在 Target Group 级别

## English Short Summary

ALB operates at Layer 7 (HTTP) and supports routing rules based on URL path, hostname, and query strings to different target groups. Target groups can be EC2 instances, ECS tasks, Lambda functions, or private IPs. ALB is ideal for microservices and container-based architectures. True client IP is passed via the X-Forwarded-For header since ALB performs connection termination.

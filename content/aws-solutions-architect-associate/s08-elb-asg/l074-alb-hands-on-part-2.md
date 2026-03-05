---
title: "Application Load Balancer (ALB) - Hands On - Part 2"
lectureId: 74
section: 8
sectionTitle: "High Availability and Scalability: ELB & ASG"
date: "2026-03-05"
tags: ["alb", "security-group", "listener-rules", "hands-on"]
---

## 中文短总结

实操 ALB 进阶：(1) 网络安全加固 — 修改 EC2 安全组入站规则，将来源从 0.0.0.0/0 改为 ALB 安全组，确保只能通过 ALB 访问 EC2 实例，直接访问公网 IP 会超时。(2) 监听器规则 — 为 ALB 添加条件规则（如路径匹配 /error），可配置转发到目标组、重定向 URL 或返回固定响应（如 404 自定义错误页）。规则支持按路径、主机头、请求方法、源 IP、查询字符串等条件匹配。

## English Short Summary

Advanced ALB hands-on: (1) Network security — modify EC2 inbound rules to allow traffic only from the ALB security group instead of 0.0.0.0/0, blocking direct public IP access. (2) Listener rules — add conditional rules (e.g., path match /error) to forward to target groups, redirect to URLs, or return fixed responses (e.g., custom 404). Rules support conditions on path, host header, HTTP method, source IP, and query strings with configurable priorities.

---
title: "Network Load Balancer (NLB) - Hands On"
lectureId: 76
section: 8
sectionTitle: "High Availability and Scalability: ELB & ASG"
date: "2026-03-05"
tags: ["nlb", "target-group", "security-group", "hands-on"]
---

## 中文短总结

实操创建 NLB：创建 Internet-facing NLB 选择所有 AZ（每个 AZ 分配固定 IPv4），创建专用安全组允许 HTTP 入站，创建 TCP 协议的 Target Group 注册 EC2 实例（Health Check 用 HTTP）。关键问题：EC2 安全组需额外添加允许来自 NLB 安全组的 HTTP 入站规则，否则健康检查失败。与 ALB 的安全组配置方式类似。

## English Short Summary

Hands-on creating an NLB: create an internet-facing NLB across all AZs (each gets a fixed IPv4), set up a dedicated security group allowing HTTP inbound, create a TCP target group registering EC2 instances with HTTP health checks. Key issue: EC2 security groups must explicitly allow HTTP inbound from the NLB security group; otherwise health checks fail. The security group pattern is similar to ALB configuration.

---
title: "Application Load Balancer (ALB) - Hands On - Part 1"
lectureId: 73
section: 8
sectionTitle: "High Availability and Scalability: ELB & ASG"
date: "2026-03-05"
tags: ["alb", "target-group", "hands-on", "health-check"]
---

## 中文短总结

实操创建 ALB：先启动两个 EC2 实例（带 User Data 的 Web 服务器），创建 Target Group 注册两个实例，然后创建 Internet-facing ALB 并绑定 Target Group。通过 ALB 的 DNS 名称访问，刷新页面可观察请求在两个实例间轮转。停止一个实例后，Target Group 自动标记为 unhealthy，ALB 只将流量发送到健康实例。恢复后自动重新纳入。

## English Short Summary

Hands-on creating an ALB: launch two EC2 instances with web server User Data, create a target group registering both instances, then create an internet-facing ALB linked to the target group. Accessing the ALB DNS shows requests rotating between instances. Stopping one instance marks it unhealthy in the target group; the ALB stops sending traffic to it. After restarting, the instance becomes healthy again and receives traffic.

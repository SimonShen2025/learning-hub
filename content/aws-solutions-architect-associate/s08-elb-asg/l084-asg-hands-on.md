---
title: "Auto Scaling Groups Hands On"
lectureId: 84
section: 8
sectionTitle: "High Availability and Scalability: ELB & ASG"
date: "2026-03-05"
tags: ["asg", "launch-template", "target-group", "hands-on"]
---

## 中文短总结

实操创建 ASG：先创建 Launch Template（定义 AMI、实例类型、安全组、User Data），然后创建 ASG 选择多 AZ、关联已有 ALB Target Group、启用 ELB 健康检查。设置 Min=1, Max=1, Desired=1 后 ASG 自动创建一个 EC2 实例并注册到 ALB。演示扩容（Desired 1→2 自动创建第二个实例）和缩容（Desired 2→1 自动终止一个实例）。Activity History 记录所有扩缩容事件。

## English Short Summary

Hands-on creating an ASG: first create a Launch Template (AMI, instance type, security group, User Data), then create an ASG across multiple AZs, attach it to an existing ALB target group, and enable ELB health checks. With min=1/max=1/desired=1, ASG auto-creates one EC2 instance registered to the ALB. Demonstrated scaling out (desired 1→2 creates a second instance) and scaling in (desired 2→1 terminates one instance). Activity History tracks all scaling events.

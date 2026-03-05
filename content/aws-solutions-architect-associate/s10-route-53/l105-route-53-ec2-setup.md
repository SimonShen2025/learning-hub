---
title: "Route 53 - EC2 Setup"
lectureId: 105
section: 10
sectionTitle: "Route 53"
date: "2026-03-05"
tags: ["Route 53", "EC2", "ALB", "Hands-On"]
---

## 中文短总结

本讲为后续 Route 53 路由策略演示准备基础设施：在三个不同 Region（Frankfurt eu-central-1、Northern Virginia us-east-1、Singapore ap-southeast-1）各创建一个 EC2 实例，每个实例通过 User Data 脚本输出包含 AZ 信息的 Hello World 页面。同时在 Frankfurt 创建了一个 ALB（Application Load Balancer）并配置 Target Group 指向该 Region 的 EC2 实例。验证了所有实例和 ALB 的 HTTP 访问正常工作。

## English Short Summary

This hands-on sets up infrastructure for Route 53 routing policy demos: EC2 instances in three regions (Frankfurt eu-central-1, N. Virginia us-east-1, Singapore ap-southeast-1) with user data scripts displaying Hello World with AZ info, plus an ALB in Frankfurt with a target group pointing to the local EC2 instance. All instances and ALB HTTP access verified working.

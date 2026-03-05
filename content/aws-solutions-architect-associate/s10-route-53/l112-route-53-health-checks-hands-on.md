---
title: "Route 53 - Health Checks Hands On"
lectureId: 112
section: 10
sectionTitle: "Route 53"
date: "2026-03-05"
tags: ["Route 53", "Health Check", "Hands-On"]
---

## 中文短总结

本讲演示了创建 Route 53 Health Check 的完整流程。为三个 Region 的 EC2 实例分别创建了 Endpoint Health Check（指定 IP、端口 80、路径 /），配置包括检查间隔（30s 标准 / 10s 快速）、失败阈值、文本匹配、延迟图表等选项。通过删除安全组 HTTP 规则模拟端点不可用，验证 Health Check 正确报告 Unhealthy 并显示 Connection Timeout 错误。还创建了 Calculated Health Check（组合三个子检查，全部健康才算健康）。演示了 CloudWatch Alarm 类型的创建入口（用于私有资源监控）。

## English Short Summary

This hands-on creates Route 53 Health Checks for EC2 instances in three regions (endpoint type, IP-based, port 80, path /). Configuration options include check interval (30s standard / 10s fast), failure threshold, string matching, and latency graphs. Demonstrates health check failing (Unhealthy with Connection Timeout) when HTTP security group rule is removed. Also creates a Calculated Health Check combining three child checks (all must be healthy), and shows the CloudWatch Alarm health check creation interface for private resource monitoring.

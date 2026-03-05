---
title: "CloudWatch Network Synthetic Monitor"
lectureId: 275
section: "s24"
sectionTitle: "AWS Monitoring & Audit: CloudWatch, CloudTrail & Config"
date: "2026-03-05"
tags: [cloudwatch, network, synthetic-monitor, direct-connect, vpn]
---

## 中文短总结

CloudWatch Network Synthetic Monitor 用于检测本地数据中心与 AWS 之间（通过 Direct Connect 或 VPN 连接）的网络问题。检测指标：丢包率、延迟、抖动（Jitter）。测试 ICMP 或 TCP 流量（IPv4），无需安装 Agent。结果发布到 CloudWatch Metrics，实时确保混合网络连接质量。

## 中文长总结

CloudWatch Network Synthetic Monitor 是一项网络监控服务，专门用于监控混合云网络连接。

**适用场景：**
- 通过 Direct Connect 或 Site-to-Site VPN 连接 AWS 与本地数据中心
- 需要检测连接质量和网络问题

**监控指标：**
- 丢包率（Packet Loss）
- 延迟（Latency）
- 抖动（Jitter）

**技术特点：**
- 测试 ICMP 或 TCP 流量（IPv4）
- **无需安装 Agent**
- 结果发布到 CloudWatch Metrics
- 实时监控连接状态

## 考试要点

- Network Synthetic Monitor = 监控 Direct Connect / VPN 连接质量
- 检测丢包、延迟、抖动
- 无需安装 Agent
- 结果发布到 CloudWatch Metrics

## English Short Summary

CloudWatch Network Synthetic Monitor detects network issues between on-premises data centers and AWS through Direct Connect or VPN connections. Monitors packet loss, latency, and jitter by testing ICMP or TCP traffic (IPv4) without requiring agents. Results are published to CloudWatch Metrics for real-time hybrid network quality assurance.

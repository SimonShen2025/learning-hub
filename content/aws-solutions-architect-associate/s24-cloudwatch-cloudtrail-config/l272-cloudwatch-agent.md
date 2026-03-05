---
title: "CloudWatch Agent & CloudWatch Logs Agent"
lectureId: 272
section: "s24"
sectionTitle: "AWS Monitoring & Audit: CloudWatch, CloudTrail & Config"
date: "2026-03-05"
tags: [cloudwatch, unified-agent, logs-agent, ec2, metrics, on-premises]
---

## 中文短总结

EC2 实例默认不发送日志到 CloudWatch，需安装 Agent。两种 Agent：①CloudWatch Logs Agent（旧版，仅发送日志）②CloudWatch Unified Agent（新版，推荐，既发送日志又收集系统级指标）。Unified Agent 可收集的额外指标：CPU（active/guest/idle/system/user/steal）、磁盘（free/used/IO）、RAM（free/inactive/used/cached）、Netstat（TCP/UDP 连接）、进程（running/sleeping/dead 等）、Swap Space。EC2 自带指标仅高层级 CPU/磁盘/网络，**不含内存/Swap**。Unified Agent 可通过 SSM Parameter Store 集中配置。也可安装在**本地服务器**上。

## 中文长总结

CloudWatch Agent 用于从 EC2 实例或本地服务器推送日志和指标到 CloudWatch。

**两种 Agent 对比：**

| 特性 | CloudWatch Logs Agent（旧版） | CloudWatch Unified Agent（新版） |
|------|--------------------------|------------------------------|
| 日志发送 | ✅ 仅日志 | ✅ 日志 |
| 系统指标 | ❌ | ✅ 额外系统级指标 |
| SSM 集中配置 | ❌ | ✅ SSM Parameter Store |
| 推荐度 | 已弃用 | **推荐使用** |

**Unified Agent 额外指标（比 EC2 默认更详细）：**
- **CPU**：active, guest, idle, system, user, steal
- **磁盘**：free, used, total
- **磁盘 IO**：writes, reads, bytes, IOPS
- **RAM**：free, inactive, used, total, cached
- **Netstat**：TCP/UDP 连接数
- **进程**：total, dead, blocked, idle, running, sleeping
- **Swap Space**：free, used, use percentage

**EC2 默认指标 vs Unified Agent 指标：**
- EC2 默认：高层级 CPU、磁盘、网络（**不含内存、不含 Swap**）
- Unified Agent：所有上述细粒度指标

**关键点：**
- EC2 实例需要 IAM Role 授权发送日志
- 可安装在**本地服务器**（On-Premises）上
- 通过 SSM Parameter Store 实现集中配置管理

## 考试要点

- EC2 默认不发送日志 → 需安装 Agent
- **Unified Agent** = 推荐，日志 + 系统指标
- EC2 默认不采集内存和 Swap → 需要 Unified Agent
- 支持本地服务器（On-Premises）
- SSM Parameter Store 集中配置

## English Short Summary

EC2 instances don't send logs to CloudWatch by default — requires an agent. Two agents: CloudWatch Logs Agent (old, logs only) and CloudWatch Unified Agent (new, recommended, logs + system-level metrics). Unified Agent collects detailed CPU/Disk/RAM/Netstat/Process/Swap metrics not available in default EC2 monitoring (which lacks memory and swap). Can be installed on on-premises servers. Supports centralized configuration via SSM Parameter Store.

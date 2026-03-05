---
title: "Route 53 - Health Checks"
lectureId: 111
section: 10
sectionTitle: "Route 53"
date: "2026-03-05"
tags: ["Route 53", "Health Check", "DNS Failover", "CloudWatch"]
---

## 中文短总结

本讲介绍了 Route 53 Health Check 的三种类型及其工作机制。第一种：**监控端点**——约 15 个全球 Health Checker 向公共端点发送请求，超过 18% 的 Checker 报告健康则视为 Healthy，支持 HTTP/HTTPS/TCP，可检查响应前 5120 字节的文本内容，间隔 30 秒或 10 秒（更贵），需要安全组放行 Health Checker IP 范围。第二种：**Calculated Health Check**——将多个子 Health Check 合并为一个父检查，支持 OR/AND/NOT 逻辑，最多监控 256 个子检查。第三种：**CloudWatch Alarm**——用于**私有资源**，因为 Health Checker 在公网上无法访问 VPC 私有资源，通过 CloudWatch Metric → Alarm → Health Check 链接实现。

## 中文长总结

### 三种 Health Check 类型

#### 1. 监控端点（Endpoint Health Check）
- 约 **15 个全球 Health Checker** 从世界各地发送请求
- **阈值**：超过 **18%** 的 Checker 报告健康 → 视为 Healthy
- **协议**：HTTP、HTTPS、TCP
- **间隔**：30 秒（标准）或 10 秒（Fast，更贵）
- **响应判断**：需要 2xx 或 3xx 状态码
- **文本匹配**：可检查响应前 **5120 字节**中的特定文本
- **网络要求**：**必须**放行 Route 53 Health Checker 的 IP 范围

#### 2. Calculated Health Check（计算型）
- 将多个**子 Health Check** 合并为一个**父 Health Check**
- 组合条件：**OR / AND / NOT**
- 最多监控 **256** 个子 Health Check
- 用例：网站维护时避免所有 Health Check 同时失败

#### 3. CloudWatch Alarm Health Check
- 用于**私有资源**（Private VPC / On-premises）
- 原因：Health Checker 在**公网**，无法访问 VPC 内部
- 流程：私有 EC2 → **CloudWatch Metric** → **CloudWatch Alarm** → **Health Check**
- Alarm 进入 alarm 状态 → Health Check 标记为 Unhealthy

### Health Check 与路由策略集成
- Health Check 可关联到 DNS Record，实现**自动 DNS 故障转移**
- Health Check 指标可在 **CloudWatch Metrics** 中查看

## 考试要点

- Health Checker 来自全球约 **15 个位置**，**18%** 阈值判断健康
- 必须放行 Health Checker 的 **IP 范围**（安全组配置）
- 私有资源→用 **CloudWatch Alarm** 间接实现 Health Check
- Calculated Health Check 支持 **OR/AND/NOT**，最多 **256** 个子检查
- 可检查响应前 **5120 字节**的文本内容

## English Short Summary

Route 53 offers three Health Check types: (1) Endpoint monitoring — ~15 global health checkers send requests; healthy if >18% report OK; supports HTTP/HTTPS/TCP with 30s or 10s intervals; can check first 5,120 bytes for text; requires security group to allow health checker IPs. (2) Calculated Health Checks — combine up to 256 child checks using OR/AND/NOT logic. (3) CloudWatch Alarm — for private resources inaccessible to public health checkers; links private EC2 → CloudWatch Metric → Alarm → Health Check. Health checks integrate with DNS records for automated DNS failover.

---
title: "Amazon Inspector"
lectureId: 314
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [inspector, security-assessment, vulnerability, ec2, ecr, lambda, cve]
---

## 中文短总结

Amazon Inspector：自动安全漏洞评估服务。三大评估目标：①**EC2 实例**（需 SSM Agent，扫描已知漏洞 + 网络可达性）②**ECR 容器镜像**（推送时扫描）③**Lambda 函数**（部署时扫描代码和依赖库漏洞）。持续扫描，发现后发送到 **Security Hub** 和 **EventBridge**。使用 CVE 漏洞数据库，输出风险评分（Risk Score）用于优先级排序。只记住三个东西：EC2/ECR/Lambda 的自动化安全扫描。

## 中文长总结

Amazon Inspector 是自动安全漏洞评估服务。

**评估对象和方式：**

| 目标 | 扫描方式 | 检测内容 |
|------|---------|---------|
| **EC2 实例** | SSM Agent 推送 | 已知漏洞（CVE）+ 操作系统漏洞 + 网络可达性（非预期端口暴露） |
| **ECR 容器镜像** | 推送时评估 | 容器镜像内已知漏洞 |
| **Lambda 函数** | 部署时评估 | 函数代码和软件依赖库中的漏洞 |

**核心特性：**
- **持续自动扫描**：不是一次性的，持续监控
- **CVE 数据库**：基于已知漏洞数据库
- **风险评分**：每个发现都有 Risk Score → 优先级排序
- **EC2 依赖 SSM Agent**：通过 Systems Manager 推送扫描任务

**输出集成：**
```
Inspector Findings → Security Hub （集中查看）
                   → EventBridge （触发 SNS/Lambda 自动响应）
```

## 考试要点

- Inspector = EC2 + ECR + Lambda 的自动漏洞扫描
- EC2 需要 SSM Agent
- 持续扫描（非一次性）
- CVE 数据库 + 风险评分
- 输出：Security Hub + EventBridge
- 区分 GuardDuty（威胁检测）vs Inspector（漏洞评估）

## English Short Summary

Amazon Inspector: automated security vulnerability assessments. Three targets: (1) **EC2 instances** (via SSM Agent — known vulnerabilities + network reachability); (2) **ECR container images** (scanned on push); (3) **Lambda functions** (scanned on deploy — code + dependency vulnerabilities). Continuous scanning using CVE database. Outputs Risk Score for prioritization. Results sent to **Security Hub** and **EventBridge** for automated response.

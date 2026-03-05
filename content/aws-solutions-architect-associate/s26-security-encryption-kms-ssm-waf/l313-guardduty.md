---
title: "Amazon GuardDuty"
lectureId: 313
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [guardduty, threat-detection, ml, cloudtrail, vpc-flow-logs, dns, cryptocurrency]
---

## 中文短总结

Amazon GuardDuty：智能威胁发现服务，用机器学习检测异常行为。一键启用，30 天免费试用，无需安装任何软件。**数据来源：** CloudTrail Events（Management Events + S3 Data Events）、VPC Flow Logs、DNS Logs。**可选数据来源：** EKS Audit Logs、RDS/Aurora Login Activity、EBS、Lambda、S3 Data Events。可设置 EventBridge 规则对发现结果执行自动响应（通知 SNS/触发 Lambda）。特殊能力：**加密货币攻击检测**（CryptoCurrency Mining）。支持专用 Findings → EventBridge 通知。

## 中文长总结

Amazon GuardDuty 是 AWS 的智能威胁检测服务。

**核心特点：**
- 使用 **机器学习、异常检测、第三方数据** 发现威胁
- **一键启用**，30 天免费试用
- 无需安装任何软件/Agent

**数据输入来源：**

| 数据来源 | 检测内容 |
|---------|---------|
| **CloudTrail Management Events** | 异常 API 调用、未授权部署 |
| **CloudTrail S3 Data Events** | 异常数据访问（GetObject、ListObjects、DeleteObject） |
| **VPC Flow Logs** | 异常网络流量、异常 IP |
| **DNS Logs** | 被劫持的 EC2 实例发送编码数据到 DNS 查询 |

**可选数据来源（扩展）：**
- EKS Audit Logs
- RDS & Aurora Login Activity
- EBS Volume Data
- Lambda Network Activity
- S3 Data Events

**自动响应架构：**
```
GuardDuty Findings → EventBridge Rule → SNS 通知 / Lambda 自动修复
```

**特殊能力：**
- **加密货币攻击检测**（CryptoCurrency Mining）——考试重点
- 保护被劫持的 EC2 实例

## 考试要点

- GuardDuty = 一键启用的 ML 威胁检测
- 输入：CloudTrail Events + VPC Flow Logs + DNS Logs
- 可选输入：EKS/RDS/EBS/Lambda/S3
- 特殊功能：加密货币挖矿攻击检测
- EventBridge 集成做自动响应

## English Short Summary

Amazon GuardDuty: intelligent threat discovery using ML/anomaly detection. One-click enable, 30-day free trial, no software to install. **Data sources:** CloudTrail Events (Management + S3 Data), VPC Flow Logs, DNS Logs. **Optional:** EKS Audit, RDS/Aurora logins, EBS, Lambda, S3. Set up EventBridge rules for automated responses (SNS/Lambda). Special capability: **CryptoCurrency mining attack detection.** Protects against compromised EC2 instances.

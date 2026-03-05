---
title: "VPC Flow Logs"
lectureId: 337
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [vpc-flow-logs, monitoring, cloudwatch, s3, athena, troubleshooting]
---

## 中文短总结

VPC Flow Logs：捕获进入网络接口的 IP 流量元数据。三个级别：VPC / 子网 / ENI。发送到 S3、CloudWatch Logs 或 Kinesis Data Firehose。也捕获 AWS 托管服务流量（ELB/RDS/ElastiCache 等）。关键字段：源地址、目的地址、源端口、目的端口、Action（ACCEPT/REJECT）。**故障排查**：入站 REJECT = NACL 或 SG 问题；入站 ACCEPT + 出站 REJECT = **NACL 问题**（SG 有状态不会拒绝回复）。分析工具：S3 + Athena（批量查询）或 CloudWatch Logs Insights（流式分析）。

## 中文长总结

VPC Flow Logs 记录网络流量元数据，用于监控和故障排查。

**三个级别：**
- VPC 级别
- 子网级别
- ENI（弹性网络接口）级别

**日志格式字段：**
version / account-id / interface-id / **srcaddr** / **dstaddr** / **srcport** / **dstport** / protocol / packets / bytes / start / **action** / log-status

**故障排查 NACL vs SG：**

| 场景 | 入站 | 出站 | 原因 |
|------|------|------|------|
| 入站 REJECT | ❌ | - | NACL 或 SG |
| 入站 ACCEPT + 出站 REJECT | ✅ | ❌ | **仅 NACL**（SG 有状态，入站允许则出站自动允许） |
| 出站 REJECT | - | ❌ | NACL 或 SG |
| 出站 ACCEPT + 入站 REJECT | ✅ | ❌ | **仅 NACL** |

**分析架构：**
- **S3 + Athena**：批量 SQL 分析
- **CloudWatch Logs + Contributor Insights**：找 Top 10 IP
- **CloudWatch Logs + Metric Filter + Alarm → SNS**：异常 SSH/RDP 流量告警
- **S3 + Athena + QuickSight**：可视化

**IAM 权限：** VPC Flow Logs 服务需要 IAM 角色具有 logs:CreateLogGroup/CreateLogStream/PutLogEvents 权限。

## 考试要点

- 入站 ACCEPT + 出站 REJECT = NACL 问题（不是 SG）
- S3 + Athena 做批量 Flow Logs 分析
- CloudWatch Logs 做实时分析
- Flow Logs 捕获 AWS 托管接口流量（ELB/RDS 等）

## English Short Summary

VPC Flow Logs: capture IP traffic metadata at VPC/Subnet/ENI level. Sent to S3, CloudWatch Logs, or Kinesis Firehose. Key fields: srcaddr, dstaddr, srcport, dstport, action (ACCEPT/REJECT). **Troubleshooting**: Inbound ACCEPT + Outbound REJECT = **NACL issue only** (SG is stateful). Analysis: S3 + Athena (batch SQL), CloudWatch Logs Insights (streaming), Metric Filters + Alarms for anomaly detection.

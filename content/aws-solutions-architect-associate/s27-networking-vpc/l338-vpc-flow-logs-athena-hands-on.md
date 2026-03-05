---
title: "VPC Flow Logs Hands On + Athena"
lectureId: 338
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [vpc-flow-logs, hands-on, athena, s3, cloudwatch-logs]
---

## 中文短总结

实操 VPC Flow Logs + Athena：①创建两个 Flow Log——一个发送到 S3（自动创建 Bucket Policy），一个发送到 CloudWatch Logs（需创建 IAM Role + Log Group）②聚合间隔：1 分钟（快但贵）或 10 分钟（推荐）③CloudWatch Logs 中可看到按 ENI 的日志流，很多 REJECT 流量是扫描/攻击④S3 中的 Flow Logs 用 Athena 查询：创建表（指定 S3 路径）→ 添加分区（按日期）→ SQL 查询 REJECT 流量⑤可按 IP 分组找出攻击者。完成后删除所有资源避免费用。

## English Short Summary

Hands-on VPC Flow Logs + Athena: (1) Create two flow logs — one to S3 (auto bucket policy), one to CloudWatch Logs (need IAM Role + Log Group); (2) Aggregation: 1 min (fast, expensive) or 10 min (recommended); (3) CloudWatch shows per-ENI log streams with many REJECT entries from scanners; (4) Athena queries: create table → add partition by date → SQL query rejected traffic; (5) Group by IP to identify attackers. Clean up all resources afterward to avoid costs.

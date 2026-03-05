---
title: "Route 53 - Section Cleanup"
lectureId: 120
section: 10
sectionTitle: "Route 53"
date: "2026-03-05"
tags: ["Route 53", "Cleanup", "Hands-On"]
---

## 中文短总结

本讲指导如何清理 Route 53 章节中创建的资源以避免额外费用。域名保留在账户中（$12/年续费），Hosted Zone 如不使用可删除（$0.50/月），但需先清空所有记录。还需删除三个 Region 的 EC2 实例以及 Frankfurt 的 ALB 和 Target Group。

## English Short Summary

This lecture guides cleanup of Route 53 section resources to avoid costs. The registered domain stays ($12/year renewal). The hosted zone can be deleted ($0.50/month) after emptying all records. EC2 instances in three regions and the ALB with its target group in Frankfurt must be terminated/deleted.

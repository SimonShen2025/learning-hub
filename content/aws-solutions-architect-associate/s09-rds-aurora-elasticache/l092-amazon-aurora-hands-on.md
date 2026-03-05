---
title: "Amazon Aurora - Hands On"
lectureId: 92
section: 9
sectionTitle: "AWS Fundamentals: RDS + Aurora + ElastiCache"
date: "2026-03-05"
tags: ["Aurora", "Hands-On", "MySQL"]
---

## 中文短总结

本讲演示了创建 Aurora MySQL 数据库集群的完整流程。包括选择引擎版本、Aurora Standard vs IO Optimized 存储配置、实例类型（含 Serverless v2 ACU 选项）、创建 Aurora Replica 实现跨 AZ 高可用、公共访问和安全组设置。验证了 Writer Endpoint 和 Reader Endpoint 的存在，演示了添加更多 Reader、跨 Region Read Replica、Replica Auto Scaling 策略（基于 CPU 利用率或连接数）、以及添加 AWS Region 实现 Global Aurora。注意此操作会产生费用。最后演示了先删除 Reader、再删除 Writer、最后删除集群的删除流程。

## English Short Summary

This hands-on demonstrates creating an Aurora MySQL cluster, including engine version selection, Aurora Standard vs IO Optimized storage, instance type (with Serverless v2 ACU option), creating Aurora Replicas for cross-AZ high availability, and security configuration. It verifies Writer and Reader Endpoints, shows adding readers, cross-region Read Replicas, Replica Auto Scaling policies (based on CPU utilization or connection count), and adding AWS regions for Global Aurora. Deletion requires removing reader → writer → cluster in order.

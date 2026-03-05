---
title: "Amazon DynamoDB - Hands-On"
lectureId: 223
section: "19"
sectionTitle: "Serverless Overviews from a Solution Architect Perspective"
date: "2026-03-05"
tags: ["dynamodb", "hands-on", "provisioned", "on-demand", "auto-scaling", "nosql"]
---

## 中文短总结

DynamoDB 控制台实操 — 创建表（指定分区键 user_id），演示两种容量模式设置：On-Demand（按实际读写付费，适合不可预测负载）和 Provisioned（设置 RCU/WCU，可配合 Auto Scaling 设置目标利用率如 70%）。插入数据项演示 NoSQL 灵活性 — 不同项可有不同属性（如 stephane 有 favorite_movie 而 alice 有 age），属性可随时添加无需预定义 Schema。

## English Short Summary

DynamoDB console hands-on: created a table with partition key (user_id) and explored both capacity modes — On-Demand (pay per read/write) and Provisioned (set RCU/WCU with Auto Scaling targeting 70% utilization). Demonstrated NoSQL flexibility by inserting items with different attributes (e.g., one user has favorite_movie, another has age). Different items can have different attributes without predefined schema. Estimated cost shown as $0.71/month for 1 RCU + 1 WCU.

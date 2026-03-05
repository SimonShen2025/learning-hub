---
title: "Athena Hands On"
lectureId: 244
section: "s22"
sectionTitle: "Data & Analytics"
date: "2026-03-05"
tags: [athena, s3, sql, hands-on]
---

## 中文短总结

实操演示在 Athena 中查询 S3 存储桶中的 Access Log 数据。步骤：①设置查询结果存储的 S3 桶②用 SQL 创建数据库③创建表（使用 AWS 文档提供的建表语句，修改 LOCATION 为目标桶路径）④运行 SQL 查询进行分析，如按 HTTP 状态码和请求 URI 聚合统计，或筛查 403 未授权访问记录。全程无需设置服务器，纯无服务器操作。

## English Short Summary

Hands-on demo querying S3 access logs with Athena. Steps: set up S3 bucket for query results, create database and table via SQL (using AWS documentation's CREATE TABLE statement, modifying LOCATION to target bucket), then run analytical SQL queries such as aggregating requests by HTTP status and request URI, or filtering 403 unauthorized access records. Entirely serverless with no server setup required.

---
title: "Lab: Connect to PostgreSQL with Psycopg SDK (Hands-On Lab)"
lectureId: 74
section: 8
sectionTitle: "Develop AI Solutions with Azure Database for PostgreSQL"
date: "2026-09-22"
tags: ["postgresql", "psycopg", "connection-pool", "python-sdk"]
---

## 中文短总结

使用 Psycopg（3.3.4）及 Psycopg Pool SDK 以代码方式连接 PostgreSQL：创建连接池（最小 2 个、最大 10 个活动连接）以避免每次请求都从零建立连接（节省 TLS 握手等延迟开销），通过游标执行 SELECT、WHERE 参数化过滤、比较运算符过滤、ORDER BY 排序、SUM+GROUP BY 聚合等查询，并可通过连接池的统计信息查看连接使用情况。

## 中文长总结

### 环境准备

- `.env` 文件配置数据库主机名（终结点）、数据库名（esgdb）、用户名、密码，均从 Azure 门户 Connect 区域获取
- 使用 Psycopg SDK（二进制发行版 3.3.4）建立连接，Psycopg Pool 用于维护连接池

### 连接池（Connection Pool）的意义

- 并发应用场景下，若每次请求都从零建立数据库连接，需要经历 TLS 握手等协议开销，带来明显延迟
- 连接池维护一组预先建立的活跃连接，应用可直接"借用"连接而无需每次新建，显著节省延迟
- 本课程创建的连接池最小维持 2 个活动连接，最大可扩展至 10 个

### 查询示例

- **基础 SELECT**：从连接池借用连接，通过游标（cursor）执行 `SELECT * FROM esg.companies`，并用 `fetchall()` 获取全部结果
- **参数化 WHERE 过滤**：使用 `%s` 占位符动态传入参数（如 `scope = %s`，值为 1），只返回范围一排放记录
- **比较运算符过滤**：筛选 CO2 排放量大于 500 千克的记录
- **ORDER BY 排序**：按 CO2 排放值升序排列结果
- **聚合函数**：使用 `SUM(co2_emissions)` 结合 `GROUP BY company_id` 计算各公司总排放量，避免重复行

### 连接池统计信息

- 可查看连接池统计（pool statistics），如当前活动连接数（2）、平均连接耗时（约 3058 毫秒）、请求次数（5 次）、总使用时长、池的最小/最大/当前大小

## English Short Summary

Used the Psycopg (3.3.4) and Psycopg Pool SDKs to connect to PostgreSQL programmatically: created a connection pool (min 2, max 10 connections) to avoid the latency of establishing fresh connections (TLS handshakes) per request, then ran SELECT, parameterized WHERE filters, comparison-operator filters, ORDER BY sorting, and SUM/GROUP BY aggregation queries via a borrowed connection's cursor, finishing with a look at connection pool statistics.

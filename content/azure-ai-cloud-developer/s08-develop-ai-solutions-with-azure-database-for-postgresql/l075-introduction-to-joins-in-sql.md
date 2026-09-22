---
title: "Introduction to JOINS in SQL"
lectureId: 75
section: 8
sectionTitle: "Develop AI Solutions with Azure Database for PostgreSQL"
date: "2026-09-22"
tags: ["sql", "joins", "relational-database"]
---

## 中文短总结

关系型数据库中，Join 用于基于公共键合并多张表的数据。常见类型包括：Inner Join（仅返回两表交集）、Left/Right Outer Join（返回一侧全部行加交集，非匹配处填 NULL）、Full Outer Join（返回两表全部行）、Semi-Join（返回左表中有匹配的行，但不带右表列）、Anti-Join（返回左表中无匹配的行）、Cross Join（笛卡尔积，穷举所有组合）。

## 中文长总结

### Join 的意义

- 企业数据通常分布在多张表中（如星型模型的事实表与维度表）
- 要获得跨表的业务洞察（如"客户及其订单"），需要基于公共键将数据合并，这正是 Join 操作的作用

### 各类 Join 详解

1. **Inner Join**：只返回两表基于公共键匹配的交集部分，是最常用的 join 类型，适合只需要交集数据的场景
2. **Left Outer Join（Left Join）**：返回左表全部行 + 与右表匹配的交集部分；左表中无匹配的行，右表对应列填 NULL
3. **Right Outer Join（Right Join）**：与左连接相反，返回右表全部行 + 匹配的交集部分
4. **Full Outer Join**：返回左表全部行、右表全部行以及两者交集，非匹配处填 NULL
5. **Semi-Join**：只返回左表中在右表存在匹配的行，但**不包含**右表的任何列（区别于 inner join）
6. **Anti-Join**：只返回左表中在右表**不存在**匹配的行
7. **Cross Join**：返回两表的笛卡尔积，即所有可能的行组合（若左表 3 行、右表 3 行，则结果为 9 行）；通常用于模拟场景或生成测试数据集，而非常规业务查询

## English Short Summary

Joins combine data from multiple tables based on a common key. Key types: Inner Join (intersection only), Left/Right Outer Join (all rows from one side plus matches, NULLs for non-matches), Full Outer Join (all rows from both sides), Semi-Join (left-table rows with a match, without right-table columns), Anti-Join (left-table rows with no match), and Cross Join (Cartesian product of all row combinations).

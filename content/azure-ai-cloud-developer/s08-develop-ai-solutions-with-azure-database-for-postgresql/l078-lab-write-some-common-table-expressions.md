---
title: "Lab: Write some Common Table Expressions (Hands-On Lab)"
lectureId: 78
section: 8
sectionTitle: "Develop AI Solutions with Azure Database for PostgreSQL"
date: "2026-09-22"
tags: ["postgresql", "cte", "pg-sql", "hands-on-lab"]
---

## 中文短总结

编写第一个 CTE `emission_summary`，按 company_id 汇总各公司总排放量，再与 companies 表内连接得到公司名和总排放量并按降序排序；随后编写嵌套 CTE 示例：第一个 CTE 汇总排放量，第二个 CTE 基于第一个结果按排放量排名（生成 rank 列），最终查询将排名结果与公司名内连接，按排放排名升序输出。

## 中文长总结

### 单个 CTE：计算各公司总排放量

- 使用 `WITH emission_summary AS (...)` 定义虚拟结果集：从 emission_records 表按 company_id 分组，计算 CO2 排放总和（total_emissions）
- 主查询将 emission_summary 虚拟表与 companies 表做 Inner Join（基于 company_id），选取公司名和总排放量，并按总排放量降序排序
- 执行结果展示各公司名称及对应总排放量

### 嵌套 CTE：排放量排名

- 第一个 CTE（`emission_summary`）仍是汇总各公司总排放量
- 第二个 CTE（`ranked_companies`）基于第一个 CTE 的结果，新增一个 emission_rank 排名列（排放量最高的公司排名第一）
- 最终查询将 ranked_companies 与 companies 表做 Inner Join，选取公司名、总排放量、排放排名，并按排名升序排序
- 执行结果显示例如 Aerofly Aviation 排放量最高（排名 1），其次是 Blue Ocean Shipping（3000 千克 CO2，排名 2）等

### 价值

- CTE 使复杂的多步骤聚合与排名逻辑变得模块化、易读，便于调试和维护

## English Short Summary

Wrote a first CTE (`emission_summary`) to aggregate total CO2 emissions per company, joined against the companies table for a readable ranked-by-emissions report. Then built a nested CTE example: one CTE computes totals, a second CTE ranks companies by those totals, and the final query joins the ranked results back to company names — demonstrating how CTEs modularize complex multi-step SQL logic.

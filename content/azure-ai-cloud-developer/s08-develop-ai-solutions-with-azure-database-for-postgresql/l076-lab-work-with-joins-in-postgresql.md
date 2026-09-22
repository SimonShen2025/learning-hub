---
title: "Lab: Work with JOINS in PostgreSQL"
lectureId: 76
section: 8
sectionTitle: "Develop AI Solutions with Azure Database for PostgreSQL"
date: "2026-09-22"
tags: ["postgresql", "pg-sql", "joins", "hands-on-lab"]
---

## 中文短总结

新建 `carbon_targets` 表（含公司减排目标年份及百分比）并补充更多示例数据后，依次演示 Inner Join（仅返回两表交集，如同时有公司名和目标值的行）、Left Join（保留左表全部公司，右表无匹配时填 NULL）、Right Join（保留右表全部目标记录，左表无匹配时公司名为 NULL）、Full Outer Join（合并两表所有行，双向填充 NULL）四种连接方式在 PostgreSQL 中的实际查询效果。

## 中文长总结

### 准备数据

- 创建 `carbon_targets` 表：target_id、company_id、target_year、target_reduction_percent，记录各公司在特定年份的减排目标百分比
- 插入示例数据（如某公司 2030 年目标减排 30%，2035 年目标 45%）
- 向 companies、emission_records、energy_consumption、reports 等表补充更多公司和记录，以便 Join 查询结果更具代表性

### Inner Join 示例

- 查询别名 C（companies）与 T（carbon_targets），基于 `company_id` 匹配，选取公司名和目标减排百分比
- 结果只包含在两张表中都存在对应记录的公司（如 Green Steel Limited 显示 30%/45%，EcoLogistics 显示 25%/50%，Solar Grid Energy 显示 40%/55%）

### Left Join 示例

- 与 Inner Join 语句几乎相同，仅将 JOIN 类型改为 LEFT JOIN
- 结果保留左表（companies）全部公司；对于在 carbon_targets 表中没有对应记录的公司（如 FutureTech AI、Green Foods Limited），减排目标列显示为 NULL

### Right Join 示例

- 保留右表（carbon_targets）全部记录；若某些减排目标记录（如 60%、70%）没有对应的公司名称（左表无匹配），则公司名列为 NULL

### Full Outer Join 示例

- 合并两表的全部行：既包含双方都匹配的记录，也包含仅存在于 companies 表（无目标值）或仅存在于 carbon_targets 表（无公司名）的记录，两侧无匹配处均填 NULL

## English Short Summary

After adding a `carbon_targets` table and more sample data, ran Inner Join (only companies with matching targets), Left Join (all companies, NULLs where no target exists), Right Join (all target records, NULLs where no matching company), and Full Outer Join (union of both tables with NULLs on either side) queries in PostgreSQL to compare their result sets directly.

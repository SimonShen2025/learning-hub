---
title: "Lab: Create Tables and Schema in PostgreSQL (Hands-On Lab)"
lectureId: 72
section: 8
sectionTitle: "Develop AI Solutions with Azure Database for PostgreSQL"
date: "2026-09-22"
tags: ["postgresql", "pg-sql", "schema", "hands-on-lab"]
---

## 中文短总结

在 PostgreSQL 服务器中创建新数据库 `ESGDB`，通过 pgAdmin 4 的 Query Tool 执行 PG SQL 脚本：先创建 `esg` schema，再依次创建 companies（含主键）、emission_records（含指向 companies 的外键约束）、energy_consumption（同样有外键）、sustainability_reports（同样有外键）四张表，并插入示例数据，最终通过 SELECT 语句验证插入结果。

## 中文长总结

### 创建数据库

- 在 Azure 门户 PostgreSQL 服务器的 Databases 区域新建数据库 `ESGDB`
- 刷新 pgAdmin 4 服务器树，确认新数据库出现在列表中

### 创建 Schema 与表

- 使用 Query Tool（通过右键数据库选择 Query Tool 打开）执行脚本
- `CREATE SCHEMA esg;` 创建逻辑分组用的 schema
- **companies 表**：company_id（整数，主键）、company_name（VARCHAR(100)，非空）、industry（VARCHAR(50)，非空）、country（2 字符国家代码）、created_date（时间戳）
- **emission_records 表**：record_id（主键）、company_id（外键，关联 companies）、emission_date、scope（1/2/3）、co2_emissions（DECIMAL，两位小数）、source；通过 `CONSTRAINT fk_emission_company FOREIGN KEY` 建立与 companies 表的外键约束
- **energy_consumption 表**：energy_id（主键）、company_id（外键）、energy_type、consumption、units（如千瓦时）
- **sustainability_reports 表**：report_id（主键）、company_id（外键）、report_text（描述性文本）

### 插入与验证数据

- 使用 `INSERT INTO` 依次向四张表插入示例数据（如公司 Green Steel Limited 属于制造业、印度；Urban Retail Corp 属于零售业、英国）
- 使用 `SELECT * FROM esg.companies;` 等语句验证数据插入成功，查看主键、外键及各字段值
- 最终在 pgAdmin 4 的 Schemas → esg → Tables 中确认四张表均已正确创建

## English Short Summary

Created a new `ESGDB` database, then used pgAdmin 4's Query Tool to run PG SQL scripts: created an `esg` schema, then four tables (companies with a primary key; emission_records, energy_consumption, and sustainability_reports each with a foreign key back to companies), inserted sample rows into each, and verified the data with `SELECT` statements.

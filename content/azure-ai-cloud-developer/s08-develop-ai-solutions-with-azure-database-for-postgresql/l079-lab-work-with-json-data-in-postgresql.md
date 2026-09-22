---
title: "Lab: Work with JSON Data in PostgreSQL (Hands-On Lab)"
lectureId: 79
section: 8
sectionTitle: "Develop AI Solutions with Azure Database for PostgreSQL"
date: "2026-09-22"
tags: ["postgresql", "jsonb", "pg-sql", "hands-on-lab"]
---

## 中文短总结

为 companies 表新增 JSONB 类型的 `esg_metadata` 列，插入包含嵌套结构（如 rating、esg_score、audits 对象）的 JSON 数据；演示如何用 `->` / `->>` 操作符提取顶层字段和嵌套字段值、如何声明 JSONB 变量、如何将 JSON 数组解析为行（`jsonb_to_recordset`）、如何用 `json_build_object` 从表字段构造 JSON 对象，以及如何用 JSON 聚合函数将同一公司多年的排放数据汇总为 JSON 数组。

## 中文长总结

### 新增 JSON 列

- 使用 `ALTER TABLE esg.companies ADD COLUMN esg_metadata JSONB;` 新增 JSONB 类型列
- 通过 `UPDATE` 语句为各公司插入 JSON 数据，例如包含 `rating`、`esg_score` 顶层字段，以及嵌套的 `audits` 对象（含 `passed`、`last_audit_year`）

### 提取 JSON 字段值

- 提取非嵌套字段（如 rating、esg_score）：使用 `->>` 操作符直接取值，并可结合类型转换（如转为整数）
- 提取嵌套对象字段（如 audits.passed、audits.last_audit_year）：先用 `->` 取出嵌套对象，再用 `->>` 逐层取出内部字段值

### JSON 变量与数组转行

- 使用 `DO` 块或直接声明 JSONB 类型变量存储 JSON 数组（如按年份记录排放值的数组）
- 使用 `jsonb_to_recordset` 函数结合 `AS` 子句，将 JSON 数组解析为标准的行/列结构（如 year、emissions 两列）

### 从表数据构造 JSON

- 使用 `json_build_object` 函数，将表中的字段（如 company_name、country）动态组合成 JSON 对象，为每一行生成一个 JSON 结构

### JSON 聚合函数

- 使用 JSON 聚合函数（如 `json_agg`）将同一 company_id 下多个年份的排放值汇总为一个 JSON 数组，存储在结果的单个列（emission_history）中

## English Short Summary

Added a JSONB `esg_metadata` column to the companies table with nested data (rating, esg_score, audits object), then demonstrated extracting top-level and nested field values with `->`/`->>` operators, declaring JSONB variables, parsing a JSON array into rows with `jsonb_to_recordset`, building JSON objects from table columns with `json_build_object`, and using JSON aggregation to roll up multi-year emissions into a single JSON array column.

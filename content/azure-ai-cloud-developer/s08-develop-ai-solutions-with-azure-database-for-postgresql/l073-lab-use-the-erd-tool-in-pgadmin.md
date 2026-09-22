---
title: "Lab: Use the ERD Tool in pgAdmin (Hands-On Lab)"
lectureId: 73
section: 8
sectionTitle: "Develop AI Solutions with Azure Database for PostgreSQL"
date: "2026-09-22"
tags: ["postgresql", "pgadmin", "erd", "hands-on-lab"]
---

## 中文短总结

使用 pgAdmin 4 内置的 ERD（实体关系图）工具，通过 Tools → ERD Tool 打开画布，右键 companies 表选择 "ERD for Table" 自动生成实体关系图，直观展示 companies 表作为父表，与 sustainability_reports、energy_consumption、emission_records 三张表之间基于 company_id 的外键关系。

## 中文长总结

### 打开 ERD 工具

- 在 pgAdmin 4 中点击 Tools → ERD Tool，打开空白画布
- 从左侧面板选择 companies 表，右键点击并选择 "ERD for Table"，工具会自动抓取当前 schema 数据并生成实体关系图

### 图表解读

- companies 表作为父表（parent table），其 company_id 字段在自身表中是主键，而在其他三张表中作为外键出现
- 可见三条关系连线：
  1. companies → sustainability_reports（通过 company_id）
  2. companies → energy_consumption（通过 company_id）
  3. companies → emission_records（通过 company_id）

### 用途

- ERD 工具提供了一种可视化方式来快速理解数据库中各表之间的主外键关系，便于在复杂 schema 中查漏补缺或向他人讲解数据模型

## English Short Summary

Used pgAdmin 4's built-in ERD tool (Tools → ERD Tool) to auto-generate an entity relationship diagram by right-clicking the companies table and selecting "ERD for Table," visually confirming that companies is the parent table with foreign-key relationships (via company_id) to sustainability_reports, energy_consumption, and emission_records.

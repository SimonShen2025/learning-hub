---
title: "Understand Common Table Expressions (CTEs)"
lectureId: 77
section: 8
sectionTitle: "Develop AI Solutions with Azure Database for PostgreSQL"
date: "2026-09-22"
tags: ["postgresql", "cte", "sql"]
---

## 中文短总结

公用表表达式（CTE）通过 `WITH` 关键字定义一个只在单次查询期间存在的临时命名结果集（"虚拟表"），可将复杂的多表连接操作拆解为循序渐进的步骤，从而提升 SQL 代码的可读性和可维护性，避免写出难以理解的"面条式"复杂查询。

## 中文长总结

### 问题背景

- 当表 A 和表 B 结构复杂、字段众多时，如果直接编写一条复杂的 join 查询而不做任何拆解，代码将难以理解——不仅同事难以理解，甚至几天后作者本人也可能看不懂

### CTE 的解决思路

- 借助 CTE，可以先将表 A 转换为一个"虚拟表"（临时命名结果集），作为第一步
- 第二步，再将这个虚拟表与表 B 做 join 操作，最终得到目标结果表
- 这种分步骤的方式比一次性编写复杂 join 查询更清晰、更易维护

### CTE 的本质

- CTE 提供了一种定义临时命名结果集的方式，这个结果集（"虚拟表"）只在该查询执行期间存在于内存中
- 使用 `WITH` 关键字声明一个 CTE，之后即可像引用普通表一样引用这个临时结果集

## English Short Summary

A Common Table Expression (CTE), declared with the `WITH` keyword, defines a temporary named result set (a "virtual table") that exists only for the duration of a single query. CTEs let you break down complex multi-table join logic into readable, step-by-step stages instead of one dense, hard-to-maintain query.

---
title: "Creating Tables"
lectureId: 340
section: 26
sectionTitle: "Supabase Crash Course: Building a Back-End!"
date: "2026-03-04"
tags: [supabase, tables, schema, postgres]
---

## 中文短总结

在 Supabase Table Editor 中创建 cabins、guests、settings 表。定义字段类型：text、int8、float8、bool、timestamptz。每表自动有 `id`（主键）和 `created_at`。插入测试数据验证。

## 中文长总结

### Cabins 表
| 字段 | 类型 | 说明 |
|------|------|------|
| id | int8 (auto) | 主键 |
| created_at | timestamptz | 创建时间 |
| name | text | 小木屋名称 |
| maxCapacity | int8 | 最大容量 |
| regularPrice | int8 | 常规价格 |
| discount | int8 | 折扣金额 |
| description | text | 描述 |
| image | text | 图片 URL |

### Guests 表
| 字段 | 类型 | 说明 |
|------|------|------|
| id | int8 (auto) | 主键 |
| created_at | timestamptz | 创建时间 |
| fullName | text | 全名 |
| email | text | 邮箱 |
| nationalID | text | 身份证号 |
| nationality | text | 国籍 |
| countryFlag | text | 国旗 emoji/URL |

### Settings 表
| 字段 | 类型 | 说明 |
|------|------|------|
| id | int8 (auto) | 主键 |
| created_at | timestamptz | 创建时间 |
| minBookingLength | int8 | 最短预订天数 |
| maxBookingLength | int8 | 最长预订天数 |
| maxGuestsPerBooking | int8 | 每次最多客人数 |
| breakfastPrice | float8 | 早餐价格 |

### 操作步骤
1. Table Editor → New Table
2. 填写表名和字段
3. 设置字段类型和默认值
4. 保存 → 插入测试数据验证

## English Short Summary

Create tables in Supabase Table Editor: cabins (name, capacity, price, discount), guests (name, email, nationality), settings (booking limits, breakfast price). Types: text, int8, float8, bool, timestamptz. Auto id + created_at.

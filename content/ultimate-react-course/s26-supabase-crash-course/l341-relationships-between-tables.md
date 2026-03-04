---
title: "Relationships Between Tables"
lectureId: 341
section: 26
sectionTitle: "Supabase Crash Course: Building a Back-End!"
date: "2026-03-04"
tags: [supabase, foreign-keys, relationships, bookings]
---

## 中文短总结

创建 bookings 表并建立外键关系。`cabinId` → cabins.id，`guestId` → guests.id。Supabase 自动识别外键关系，查询时可以 join 相关数据。Postgres 强制引用完整性。

## 中文长总结

### Bookings 表
| 字段 | 类型 | 说明 |
|------|------|------|
| id | int8 (auto) | 主键 |
| created_at | timestamptz | 创建时间 |
| startDate | timestamptz | 入住日期 |
| endDate | timestamptz | 退房日期 |
| numNights | int8 | 住宿晚数 |
| numGuests | int8 | 客人数量 |
| cabinPrice | float8 | 小木屋价格 |
| extrasPrice | float8 | 额外费用 |
| totalPrice | float8 | 总价 |
| status | text | 状态（unconfirmed/checked-in/checked-out） |
| hasBreakfast | bool | 是否含早餐 |
| isPaid | bool | 是否已付款 |
| observations | text | 备注 |
| **cabinId** | int8 | 外键 → cabins.id |
| **guestId** | int8 | 外键 → guests.id |

### 创建外键
```
cabinId → cabins(id) 
guestId → guests(id)
```

在 Supabase 中：
1. 添加字段 `cabinId` (int8)
2. 点击链接图标 → 选 cabins 表 → id 字段
3. 同理 `guestId` → guests(id)

### 外键效果
```js
// Supabase JS — 自动 join
const { data } = await supabase
  .from("bookings")
  .select("*, cabins(name), guests(fullName, email)");
// data[0].cabins.name → "Cabin 001"
// data[0].guests.fullName → "John Doe"
```

### 要点
- 外键保证**引用完整性**
- 不能插入不存在的 cabinId 或 guestId
- Supabase 查询可以通过外键自动 join

## English Short Summary

Create bookings table with foreign keys: `cabinId → cabins(id)`, `guestId → guests(id)`. Postgres enforces referential integrity. Supabase auto-detects relationships — queries can join related data via foreign key names.

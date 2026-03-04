---
title: "Modeling Application State"
lectureId: 339
section: 26
sectionTitle: "Supabase Crash Course: Building a Back-End!"
date: "2026-03-04"
tags: [supabase, data-modeling, state, tables]
---

## 中文短总结

分析应用状态来决定数据库表设计。四类数据：Cabins（小木屋）、Bookings（预订）、Guests（客人）、Settings（设置）。Bookings 是核心表，关联 Cabins 和 Guests（多对一关系）。

## 中文长总结

### 状态分类
| 表 | 描述 | 类型 |
|---|---|---|
| **cabins** | 小木屋信息 | 资源型 |
| **bookings** | 预订记录 | 事务型 |
| **guests** | 客人信息 | 资源型 |
| **settings** | 应用设置 | 配置型 |

### 表间关系
```
guests ──1:N──> bookings <──N:1── cabins
```
- 一个 guest 可以有多个 bookings
- 一个 cabin 可以被多次 booking
- 一个 booking 属于一个 guest 和一个 cabin

### 各表字段规划
**cabins**: name, maxCapacity, regularPrice, discount, description, image
**guests**: fullName, email, nationalID, nationality, countryFlag
**bookings**: startDate, endDate, numNights, numGuests, cabinPrice, extrasPrice, totalPrice, status, hasBreakfast, isPaid, observations, cabinId, guestId
**settings**: minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice

### 设计原则
- 以应用功能为导向设计表
- 一对多关系用外键
- Settings 只有一行数据

## English Short Summary

Model app state as database tables: cabins, bookings, guests, settings. Bookings is the central table with foreign keys to cabins and guests (many-to-one). Settings has single row. Design tables around application features.

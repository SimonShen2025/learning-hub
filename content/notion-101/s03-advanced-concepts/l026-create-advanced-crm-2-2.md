---
title: "Project: Create an advanced CRM (2/2)"
lectureId: 26
section: 3
sectionTitle: "Advanced concepts"
date: "2026-10-13"
tags: [notion-crm, notion-formulas, revenue-forecasting]
---

## 中文短总结

用 Last contact 日期加 14 天并与当前日期比较，生成 Outreach overdue 公式视图；再按 Expected close date 月份分组，并对 Estimated value 求和，形成线索收入预测。

## 中文长总结

- 加入 Last contact 日期字段，由成员更新最近联系时间；用日期公式计算最后联系日期加 14 天是否早于当前日期，标记需要再次跟进的线索。
- 新建 Outreach 视图，筛选公式结果为 true 的记录，让销售人员聚焦逾期跟进对象。间隔天数应按团队实际销售节奏调整。
- 为收入预测添加 Estimated value（货币）和 Expected close date 属性，再用公式从预计成交日期提取月份。
- 创建按成交月份分组的 Board view，并对每组 Estimated value 使用 Sum，汇总各月预期收入。该结果是基于预计成交日期和估值的预测，不是已确认收入。
- 通过修改日期或估值验证分组和总额是否动态更新；后续还可将 CRM 与客户数据库关联。

## English Short Summary

Calculate an outreach flag by adding 14 days to Last contact and comparing it with today, then filter a follow-up view. For forecasting, group leads by the month of Expected close date and sum Estimated value; treat the result as a forecast, not booked revenue.
---
title: "Power Apps - making custom forms 6"
lectureId: 158
section: 14
sectionTitle: "Expert - Creating Apps"
date: "2026-11-17"
tags: ["power-apps", "sliders", "number-columns", "custom-controls"]
---

## 中文短总结

可将数字输入控件改为 Slider，并设置最小值和最大值以匹配业务范围，例如评分 1–10。提交后应验证应用和 SharePoint 中保存的数字一致。

## 中文长总结

### 配置 Slider

- 在表单中将数字列控件改为 Slider。
- 按业务规则设置 **Min** 与 **Max**，例如将评分范围限制为 1 到 10。
- 在 Play 模式中创建测试记录并提交数值。

### 数据验证

确认控件允许的范围符合 List 列设置和业务规则，且提交后 SharePoint 中保存的值正确。若范围必须被强制执行，还需在可信的数据端实施验证。

## English Short Summary

Use a Slider for a numeric field and configure its minimum and maximum, such as a 1–10 rating. Test a submission and confirm the stored SharePoint value; enforce critical limits at the data layer as well.

---
title: "Automate PDF Reports from Google Sheets with n8n - Weekly Reports in Minutes"
lectureId: 29
section: 4
sectionTitle: "Unlocking with Automation - Problem-First Approach"
date: "2026-10-08"
tags: ["n8n", "google-sheets", "scheduled-workflow", "reporting"]
---

## 中文短总结

用定时 trigger 每周读取多个部门表格，通过 Limit 取最新记录并合并，再生成 HTML 报告并邮件发送。测试各表的数据选择和合并结果，避免旧数据、空值或字段错位进入报告。

## 中文长总结

示例流程每周一早上触发，分别读取销售、市场、支持、库存和 HR 表格。每个 Google Sheets 节点后接 Limit，配置为保留最后一条记录，再通过 Merge 按位置组合五路输入。

之后使用 HTML 节点生成报告模板，并连接 Gmail 发送 HTML 邮件。若需要 PDF，可从邮件打印或保存为 PDF；课程展示的是生成并发送报告内容的工作流。

配置 Google 凭据后，先单独执行 Sheets 节点，确认读取范围和最新行逻辑；再验证 Limit 输出、Merge 输入数量与字段，最后检查 HTML 和测试邮件。上线前还要确认时区、触发时间、表格权限、空表和失败通知，避免报告静默出错。

## English Short Summary

Schedule a weekly workflow to read each department sheet, select its latest row with Limit, merge inputs, render an HTML report, and email it. Test row selection and merged fields, and account for time zones, empty sheets, permissions, and failures.
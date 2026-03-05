---
title: "AWS Budget Setup"
lectureId: 31
section: 5
sectionTitle: "EC2 Fundamentals"
date: "2026-03-05"
tags: ["billing", "budget", "free-tier", "cost-management"]
---

## 中文短总结

演示如何设置 AWS 预算和账单告警以避免意外开支。首先需在 root 账户中激活 IAM 用户对账单信息的访问权限。在 Billing 控制台可查看月度费用、预测费用、按服务分类的费用明细。Free Tier 页面可监控免费额度使用情况。创建两种预算：Zero Spend Budget（花费 1 分钱即告警）和 Monthly Cost Budget（如 $10 上限，在 85%/100%/预测 100% 时邮件告警）。

## 中文长总结

**启用 IAM 用户账单访问：**
- 即使 IAM 用户有 AdministratorAccess，默认也无法访问账单数据
- 需在 root 账户中：Accounts → IAM user and role access to billing information → Activate IAM Access

**Billing 控制台功能：**
- **Cost Summary**：月度至今费用、预测费用、上月总费用
- **Bills**：按月查看，按服务分类的费用具体明细（如 EC2 中的 NatGateway、EBS、Elastic IP 等）
- **Free Tier**：监控当前使用量和预测使用量，超出免费额度时标红

**创建预算（Budgets）：**
1. **Zero Spend Budget**：花费任何金额（1 分钱）立即邮件告警
2. **Monthly Cost Budget**：设定上限（如 $10），在以下情况发邮件：
   - 实际花费达到 85%
   - 实际花费达到 100%
   - 预测花费将达到 100%

## 考试要点

- IAM 用户默认无法访问账单数据，需 root 账户手动开启
- 了解 AWS Free Tier 的监控方式
- 了解如何使用 Budgets 设置费用告警

## English Short Summary

Setting up AWS budgets and billing alerts to prevent unexpected charges. Enable IAM billing access from root account. Use Billing console to review costs by service and monitor Free Tier usage. Create two budgets: a Zero Spend Budget (alerts at $0.01) and a Monthly Cost Budget (e.g., $10 cap with alerts at 85%, 100%, and forecasted 100%).

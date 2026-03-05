---
title: "AWS Cost Anomaly Detection"
lectureId: 378
section: "s30"
sectionTitle: "Other Services"
date: "2026-03-05"
tags: [cost-anomaly-detection, machine-learning, billing, alerts]
---

## 中文短总结

AWS Cost Anomaly Detection：基于 ML 持续监控成本和使用量，检测异常支出。**无需设置阈值** — 使用机器学习自动建立基线。功能：①创建 Monitor（单个 AWS 服务/成员账号/Cost Allocation Tag/Cost Category）②收到异常警报时提供**根因分析**③通过 **SNS Alert** 发送通知（单条通知/每日或每周摘要 Digest）。用例：意外支出激增自动告警。

## 中文长总结

Cost Anomaly Detection 的三步流程：

```
Step 1: 创建 Anomaly Monitor
  ├─ 按 AWS 服务
  ├─ 按成员账号
  ├─ 按 Cost Allocation Tag
  └─ 按 Cost Category

Step 2: ML 持续学习基线
  └─ 无需人工设置阈值

Step 3: 检测到异常 → Alert
  ├─ 根因分析
  ├─ SNS 个别通知
  └─ SNS 每日/每周摘要
```

## 考试要点

- Cost Anomaly Detection = ML 检测异常支出
- 无需手动设置阈值
- 提供根因分析
- SNS 通知（个别 or 摘要）

## English Short Summary

AWS Cost Anomaly Detection: ML-powered continuous monitoring for unusual spending. **No manual thresholds** needed — ML establishes baselines automatically. Create monitors by AWS service/member account/cost allocation tag/cost category. Provides **root cause analysis** on anomalies. Alerts via **SNS** (individual notifications or daily/weekly digest summaries).

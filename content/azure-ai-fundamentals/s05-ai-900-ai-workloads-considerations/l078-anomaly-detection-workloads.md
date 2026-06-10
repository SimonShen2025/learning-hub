---
title: "Anomaly Detection Workloads"
lectureId: 78
section: 5
sectionTitle: "AI-900 - Describe AI workloads and considerations"
date: "2026-06-10"
tags: [anomaly-detection, machine-learning, workloads]
---

## 中文短总结

异常检测 = 自动大规模识别不符合预期模式的数据（"red flag"）。传统方法：为每种异常写规则，但攻击者进化、条件变化→不可穷举。ML 方法：训练模型学习"正常行为"，自动检测偏差（即使从未见过该模式）。应用：银行欺诈（异地大额消费）、网络安全（DDoS）、医疗（设备异常读数）、制造（设备故障预测）。

## 考试要点

- Anomaly = 不符合预期模式的数据点
- 传统规则方法无法穷举所有异常
- ML 学习"正常"然后识别"异常"
- 场景：金融欺诈、网络安全、医疗、制造

## English Short Summary

Anomaly detection identifies data points deviating from expected patterns ("red flags") automatically at scale. Traditional rule-based approach can't cover all cases. ML trains on historical data to learn "normal" behavior, then detects abnormalities even for unseen patterns. Use cases: banking fraud, cybersecurity (DDoS), healthcare, manufacturing.

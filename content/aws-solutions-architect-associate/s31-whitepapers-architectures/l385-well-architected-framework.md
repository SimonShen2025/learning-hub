---
title: "Well-Architected Framework & Well-Architected Tool"
lectureId: 385
section: "s31"
sectionTitle: "WhitePapers and Architectures"
date: "2026-03-05"
tags: [well-architected-framework, six-pillars, well-architected-tool]
---

## 中文短总结

AWS Well-Architected Framework：**6 大支柱**—①**卓越运营**（IaC/CI-CD/自动化/可观测性）②**安全性**（IAM/加密/检测控制/事件响应）③**可靠性**（灾备/扩展/自愈）④**性能效率**（选择正确资源/监控/权衡）⑤**成本优化**（按需付费/弹性/计费透明）⑥**可持续性**（最小化环境影响/最大化利用率）。**Well-Architected Tool**：AWS 控制台服务，选择工作负载 → 回答各支柱问题 → 获得风险评估和改进建议，生成改进计划。

## 中文长总结

6 大支柱是 SAA 考试的核心框架知识。

**6 大支柱详解：**

| # | 支柱 | 英文 | 关键词 |
|---|------|------|--------|
| 1 | 卓越运营 | Operational Excellence | IaC, CI/CD, 自动化, 可观测 |
| 2 | 安全性 | Security | IAM, 加密, 检测, 事件响应 |
| 3 | 可靠性 | Reliability | 灾备, 自动扩展, 自愈 |
| 4 | 性能效率 | Performance Efficiency | 正确资源, 监控, 权衡 |
| 5 | 成本优化 | Cost Optimization | 按需, 弹性, 计费透明 |
| 6 | 可持续性 | Sustainability | 环境影响最小化, 利用率最大化 |

**Well-Architected Tool：**
```
AWS Console → Well-Architected Tool
  → 定义工作负载
  → 回答各支柱问题
  → 获得：
     ├─ 风险评估（高/中风险项）
     ├─ 改进建议
     └─ 改进计划（Improvement Plan）
```

**注意**：不是 6 大支柱的排名——它们同等重要，不应该为了一个支柱牺牲另一个。

## 考试要点

- 6 大支柱必须记住名称
- Well-Architected Tool = 审查工作负载 → 风险 + 改进建议
- 支柱之间平衡，不牺牲任何一个
- 考试常考"哪个支柱涵盖 X 问题"

## English Short Summary

AWS Well-Architected Framework: **6 pillars** — (1) **Operational Excellence** (IaC/CI-CD/automation/observability), (2) **Security** (IAM/encryption/detective controls/incident response), (3) **Reliability** (DR/scaling/self-healing), (4) **Performance Efficiency** (right resources/monitoring/trade-offs), (5) **Cost Optimization** (pay-as-you-go/elasticity/billing transparency), (6) **Sustainability** (minimize environmental impact/maximize utilization). **Well-Architected Tool**: AWS console service — select workload → answer pillar questions → get risk assessment and improvement plan. Pillars are balanced — don't sacrifice one for another.

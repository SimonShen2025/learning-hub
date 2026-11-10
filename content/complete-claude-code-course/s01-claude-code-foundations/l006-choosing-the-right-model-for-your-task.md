---
title: "Choosing the Right Model for Your Task"
lectureId: 6
section: 1
sectionTitle: "Claude Code Foundations"
date: "2026-11-10"
tags: ["model-selection", "reasoning", "risk-management", "claude-code"]
---

## 中文短总结

按推理需求、影响范围、不确定性、出错风险和任务时长选择模型。先用合理的起点，根据实际结果升级或降级；模型更强也不能替代测试和人工审查。

## 中文长总结

### 五个判断维度

1. **推理：**是执行明确的机械修改，还是需要调查未知根因？
2. **范围：**修改一个组件，还是涉及多个服务、数据库和部署？
3. **不确定性：**解决方案是否已知，或需要持续提出并验证假设？
4. **风险：**认证、支付和迁移等高影响改动需要更严格的验证。
5. **时长：**短任务与需要多轮操作、恢复和验证的长周期任务不同。

### 动态调整

讲师建议以 Sonnet 作为常规开发的一个起点：简单操作可考虑 Haiku；反复未找到根因时可尝试 Opus；大型长周期任务可考虑 Fable。理解难点后也可以换回更高效的模型完成后续工作。

这是一条经验规则而非固定默认值。模型能力、官方推荐、费用和账户额度会变化，应结合[当前官方信息](https://platform.claude.com/docs/en/models/overview)与实际评测调整；敏感变更仍须测试和人工审核。

## English Short Summary

Assess reasoning needs, scope, uncertainty, risk, and duration. Start with a reasonable model, observe the outcome, and switch when the task proves simpler or harder than expected. Model strength does not replace tests or human review.

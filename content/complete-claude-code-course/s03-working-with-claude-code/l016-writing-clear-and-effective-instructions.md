---
title: "Writing Clear and Effective Instructions"
lectureId: 16
section: 3
sectionTitle: "Working with Claude Code"
date: "2026-11-10"
tags: ["prompting", "requirements", "acceptance-criteria", "constraints"]
---

## 中文短总结

清晰指令说明目标、必要背景、约束和成功标准，长度应匹配任务复杂度。优先描述期望结果与必须保留的行为，让 agent 根据项目实际情况决定实现方式。

## 中文长总结

- **目标：**明确要改变哪个功能以及期望的用户行为，而不是只说“改进页面”。
- **背景：**提供代码中不明显的信息，例如目标用户、现有系统依赖或已知症状；不知道根因时明确说明，不必编造。
- **约束：**说明不应改变的公共 API、数据库结构、依赖或现有视觉风格，并要求遵循项目已有模式。
- **验证标准：**复杂任务要指出可观察的完成条件和需要保持的旧行为。小修改可以保持简短，不需要套用固定长模板。
- **迭代：**先调查再实施，查看结果后补充反馈；对未知或高风险问题，可先要求解释发现，再决定是否修改。

## English Short Summary

Give the agent a clear objective, relevant context, constraints, and observable success criteria when needed. Describe outcomes rather than prescribing every implementation step, acknowledge uncertainty, and refine the result iteratively.

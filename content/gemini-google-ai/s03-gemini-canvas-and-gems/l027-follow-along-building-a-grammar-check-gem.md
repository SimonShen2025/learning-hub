---
title: "Follow-Along: Building a Grammar Check Gem"
lectureId: 27
section: 3
sectionTitle: "Working with Gemini Canvas and Gems"
date: "2026-10-14"
tags: [gemini-gems, prompt-design, grammar-checking]
---

## 中文短总结

构建语法检查 Gem 时，应明确角色、适用受众、检查范围、修改边界和期望输出，并可用标题组织指令。先手动完成目标任务多次，提炼稳定偏好再固化为 Gem 规则。课程发现 conversation starters 未按预期显示，因此将如何开始任务写进描述，比依赖隐藏的 starter prompt 更可靠。

## 中文长总结

- 在 Gem Manager 中创建 Gem，设置名称和描述，并在指令中定义角色，例如检查英文语法、拼写和标点，同时保留作者原有声音。
- 指令可按角色、目标受众、核心规则、输出形式等部分组织；明显的分节有助于维护和检查规则。
- 先手动执行目标任务数次，记录真实偏好和边界条件，再将其写入 Gem；避免在没有实践经验时一次性设计过度复杂的规则。
- 可选择 Canvas 作为默认工具，以便把校对结果放入可编辑的侧栏；也可根据任务加入知识文件。
- 演示中 conversation starter 没有稳定生效。尝试在指令中强制开场仍不可靠，最终将“提交文本开始”等操作提示放进 Gem 描述中，改善用户入口。
- 保存后用真实文本测试，并根据结果迭代规则；分享前也应确认 Gem 的输出符合预期。

## English Short Summary

Build a grammar Gem with explicit role, audience, editing rules, and output expectations. Derive rules from repeated manual use, test the saved Gem, and put clear start instructions in its description because conversation starters may not appear reliably.
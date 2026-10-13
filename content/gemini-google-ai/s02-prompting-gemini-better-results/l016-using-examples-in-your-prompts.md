---
title: "Using Examples in Your Prompts"
lectureId: 16
section: 2
sectionTitle: "Prompting Gemini for Better Results"
date: "2026-10-14"
tags: [few-shot-prompting, prompt-examples, prompt-engineering]
---

## 中文短总结

在提示中加入一个或多个示例，可展示期望的语气、结构、详细程度、答案格式或解决问题的思路。示例不只模仿文风，也能为模型提供思考框架；研究任务还可用示例规定证据呈现格式，并说明无可靠来源时如何处理。

## 中文长总结

- **One-shot / few-shot prompting** 分别通过一个或多个示例展示期望的回答模式。示例可表达正式或轻松的语气、句子长度、结构、技术深度及应避免的内容。
- 先给一版没有示例的指令，再添加风格参考，可观察示例如何使输出更贴近目标语气和组织方式。
- 示例还能塑造模型采用的思路，而不只是词句风格。例如，展示一个强调立即动手和小步成果的例子，可引导模型给出更实践导向的建议。
- 对研究类任务，可提供带来源和证据的回答样例，并规定找不到可靠依据时应明确说明，避免只要求一份链接列表。
- 交互式示例与静态示例不同：模型先反馈一个版本，用户再改进，后续轮次根据前一轮结果继续调整。

## English Short Summary

One-shot and few-shot examples demonstrate desired tone, structure, detail, output format, or reasoning style. For research, examples can model evidence-backed answers and how to report missing or unreliable sources; interactive examples add feedback and iteration.
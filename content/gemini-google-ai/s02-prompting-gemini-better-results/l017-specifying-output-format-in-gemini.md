---
title: "Specifying Output Format in Gemini"
lectureId: 17
section: 2
sectionTitle: "Prompting Gemini for Better Results"
date: "2026-10-14"
tags: [prompt-engineering, structured-output, research]
---

## 中文短总结

提示可明确规定回答的结构，例如报告、比较表、要点列表、Markdown 格式，或将可核实事实与解释分开。结构化要求能提升可读性和可用性；若首版格式不合适，可在后续对话中要求重排。

## 中文长总结

- 说明所需文档类型及组织方式，例如带标题和短段落的专业报告，避免得到难以使用的长篇文字。
- 比较产品或选项时，可指定表格列，如关键功能、优缺点及适用场景，让结果便于决策。
- 对研究问题，可要求列出使用的来源并说明各自支持哪些结论；也可分别呈现可验证事实与推理、假设或建议。
- 可要求使用 Markdown 标题、粗体、斜体和项目符号，以突出重点并提高扫描效率。
- 输出格式通常放在提示后部说明。若结果不符合需要，可以直接要求改成编号清单、表格或更短的段落，而不必重写整个任务。

## English Short Summary

Specify a useful structure such as a report, comparison table, source map, or separate sections for facts and interpretations. Clear format constraints improve usability, and follow-up prompts can reformat an otherwise sound answer.
---
title: "Keeping It Real: Practical Strategies to Minimize AI Hallucinations"
lectureId: 20
section: 2
sectionTitle: "Prompting Gemini for Better Results"
date: "2026-10-14"
tags: [ai-hallucinations, prompt-engineering, fact-checking, citations]
---

## 中文短总结

语言模型可能生成听起来可信但错误的内容，因此要警惕过度具体的数据、看似完美的引文、重复提问时不一致的答案和过度确定的表述。降低风险的方法包括明确允许模型承认不确定、要求可核验的证据、区分事实与解释，并在提示中加入假设检查和验证步骤；这些方法不能彻底消除错误。

## 中文长总结

- **成因与警讯**：模型根据上下文生成可能的后续内容，并不等于事实数据库。信息不足或请求含糊时，模型可能补全细节。对近期统计、精确数字、看似完美的引文、前后矛盾或不合理的确定语气应格外谨慎。
- **明确不确定性**：要求模型在无法验证时直接说明，而不是猜测；对于统计、报告或公司案例，要求标注时间范围、具体来源和不确定部分。
- **要求证据**：不要只索要链接，可要求提供来源中支持结论的具体原句，并逐项对应主张，以便人工核验。
- **使用结构化输出**：将直接来自资料的数据、计算结果及其计算过程、解释和缺失信息分开，避免把推断混成事实。
- **加入验证步骤**：要求列出分析假设、低置信度结论及最值得优先核实的内容，并补充验证结论所需的资料。
- 目标不是保证模型永不出错，而是建立更容易发现和纠正错误的工作流程，最终判断仍由用户负责。

## English Short Summary

Watch for unsupported precision, fabricated-looking citations, inconsistent answers, and unjustified certainty. Reduce risk by requesting explicit uncertainty, source passages tied to claims, structured facts versus interpretations, and a list of assumptions and verification steps; none of these eliminates hallucinations.
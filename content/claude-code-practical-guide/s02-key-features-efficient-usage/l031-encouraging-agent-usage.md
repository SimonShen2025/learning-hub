---
title: "Encouraging Agent Usage"
lectureId: 31
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "claude-md", "subagents"]
---

## 中文短总结

Subagent 的 description 提高自动触发概率，但在 CLAUDE.md 中写明确指令更可靠：「使用任何第三方库时必须查官方文档，用 Docs Explorer subagent」。这样无需每个 prompt 重复，且接近 100% 确保 subagent 被调用。

## 中文长总结

### 从「希望」到「确保」

| 方式 | 可靠性 |
|------|--------|
| 仅靠 subagent description | 高概率，非 100% |
| CLAUDE.md 强制指令 | 接近 100% |

### CLAUDE.md 示例指令

```
Whenever working with any third-party library, you must look up
official docs for up-to-date information. Use the Docs Explorer
subagent for efficient documentation lookup.
```

### 优势

- 每个 prompt 无需重复「请查文档」
- CLAUDE.md 自动注入每个 session
- 与 subagent 的 description 形成双保险

### 模式推广

任何应默认执行的行为（跑测试、用 Plan Mode、遵循 Spec）都适合写入 CLAUDE.md。

## English Short Summary

Don't just hope subagents trigger—add mandatory instructions in CLAUDE.md (e.g., "always use Docs Explorer subagent for third-party library docs"). Auto-loaded every session, ~100% reliable vs. relying on description alone.

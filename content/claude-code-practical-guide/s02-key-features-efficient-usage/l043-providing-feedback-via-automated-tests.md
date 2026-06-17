---
title: "Providing Feedback via Automated Tests"
lectureId: 43
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "vitest", "testing", "feedback-loop"]
---

## 中文短总结

除 browser access 外，automated tests（Vitest unit/integration/e2e）是更可靠的 AI 自验证方式。安装 Vitest 后可 prompt Claude Code 编写测试套件，形成「写代码 → 跑测试 → 修复失败」的 feedback loop。

## 中文长总结

### 测试作为 Feedback Loop

| 验证方式 | 优势 | 局限 |
|---------|------|------|
| Browser (Playwright) | 真实 UI 交互 | 慢、flaky |
| Automated Tests | 快速、可重复、CI 友好 | 需维护测试代码 |

### Vitest 集成

1. `bun add -d vitest` 安装
2. Prompt Claude Code 设置测试框架 + 编写测试
3. Claude 可运行 `bun test` 并根据失败结果 self-correct

### Prompt 策略

告知已安装 Vitest，要求为关键功能编写 tests。Claude 执行测试 → 读失败输出 → 修复代码 → 重跑。

### 最佳实践

- 在 CLAUDE.md 中要求「改动后跑相关 tests」
- 结合 hooks 在 PostToolUse 自动跑 test suite
- Unit + integration + e2e 分层覆盖

## English Short Summary

Automated tests (Vitest) provide reliable AI self-verification vs. browser access. Install Vitest, prompt Claude to write tests, then it runs bun test and self-corrects on failures. Faster, more repeatable feedback loop for agentic engineering.

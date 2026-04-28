---
title: "Playwright vs Cypress"
lectureId: 2
section: 1
sectionTitle: "Preparation"
date: "2026-04-29"
tags: [playwright, cypress, framework-comparison]
---

## 中文短总结

Playwright 与 Cypress 对比。Playwright 优势：更快执行、多语言支持、免费并行（单文件内并行）、多 tab/iframe 处理、XPath 支持。Cypress 优势：更快脚本编写、更好的 auto-waiting、优秀文档、更好的 Test Runner、Dashboard 付费服务。两者都是强大的框架。

## 中文长总结

### Playwright 优势

- **执行速度** — 略快于 Cypress
- **多语言支持** — JS/TS、Python、Java、C#（默认 TypeScript）；Cypress 仅支持 JS/TS
- **并行执行** — 开箱即用，支持单 spec 文件内并行；Cypress 需付费 Dashboard 或开源插件，且只能按 spec 文件级别并行
- **多 Tab 处理** — 可处理新标签页导航；Cypress 架构限制无法做到
- **iframe 支持** — 无缝切换 iframe；Cypress 有时不够流畅
- **Selenium 迁移友好** — locator 语法和同步流程类似
- **XPath 支持** — 开箱即用（但不推荐使用）

### Cypress 优势

- **更快的脚本编写** — 隐藏不必要细节，代码行数更少，维护更简单
- **Auto-waiting** — 等待元素可见/可点击的机制更好更稳定
- **文档质量** — 官方文档非常完善，无需额外查询
- **Test Runner** — 可回看执行步骤，分析测试过程（Playwright UI Runner 类似但稍逊）
- **Dashboard Service（付费）** — 在线报告、执行历史、截图/视频存储，可团队共享

### 结论

两个框架都非常强大，选择任一都不会错。核心区别在于架构和部分能力差异。

## English Short Summary

Playwright pros: faster execution, multi-language support, free parallel execution (within single spec file), multi-tab/iframe handling, Selenium migration friendly. Cypress pros: faster scripting, better auto-waiting, excellent docs, superior test runner, paid Dashboard service. Both are powerful — no wrong choice.

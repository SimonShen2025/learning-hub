---
title: "Test Execution with CLI"
lectureId: 18
section: 3
sectionTitle: "Playwright Hands-On Overview"
date: "2026-04-29"
tags: [playwright, cli, test-execution]
---

## 中文短总结

CLI 测试执行命令：`npx playwright test`（全部）、`--project=chromium`（指定浏览器）、`--headed`（有头模式）、`<filename>`（指定文件）、`-g "test name"`（指定测试名）。`npx playwright show-report` 查看报告。`test.skip` 跳过测试，`test.only` 仅运行指定测试。

## 中文长总结

### 核心 CLI 命令

| 命令 | 说明 |
|------|------|
| `npx playwright test` | 运行所有测试（默认三浏览器并行、无头模式） |
| `--project=chromium` | 指定浏览器（chromium/firefox/webkit） |
| `--headed` | 有头模式，显示浏览器窗口 |
| `npx playwright test example.spec.ts` | 运行指定文件 |
| `npx playwright test -g "has title"` | 按测试名筛选运行 |
| `npx playwright show-report` | 打开 HTML 报告 |

### 测试控制

- **`test.skip`** — 跳过测试，报告中显示 skipped 状态
- **`test.only`** — 仅运行标记的测试，其余忽略

### 默认行为

- 默认在 `playwright.config.ts` 的 `projects` 中配置的所有浏览器上运行
- 默认无头（headless）执行
- HTML 报告包含每个测试的步骤、before/after hooks 详情

### 适用场景

CLI 主要用于 CI/CD 服务器或快速无头执行。日常开发推荐使用 UI 模式（下一课）。

## English Short Summary

Key CLI commands: `npx playwright test` (all), `--project=chromium` (browser), `--headed` (visible), `-g "name"` (filter by name). Use `test.skip`/`test.only` for test control. `npx playwright show-report` for HTML report. CLI is best for CI/CD; use UI mode for development.

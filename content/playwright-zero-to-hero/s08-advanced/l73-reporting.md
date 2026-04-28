---
title: "Reporting"
lectureId: 73
section: 8
sectionTitle: "Advanced"
date: "2026-04-29"
tags: [playwright, reporter, html, json, junit, allure, config]
---

## 中文短总结

Playwright 内置多种 reporter：`html`（可视化报告）、`list`（控制台列表）、`json`（JSON 文件，用于系统集成）、`junit`（XML 格式，CI/CD 常用）。可同时使用多个 reporter（数组配置）。也可安装第三方 reporter 如 Allure：先安装系统级 allure 工具，再安装 `allure-playwright` 包，添加到 reporter 配置中，运行后用 `allure generate` 生成 HTML 报告。

## English Notes

### Built-in Reporters

```typescript
// playwright.config.ts
reporter: [
  ['html'],
  ['json', { outputFile: 'test-results/json-report.json' }],
  ['junit', { outputFile: 'test-results/junit-report.xml' }],
]
```

| Reporter | Output | Use Case |
|---|---|---|
| `html` | Interactive HTML report | Visual debugging, sharing |
| `list` | Console output | Quick terminal feedback |
| `json` | JSON file | Downstream system integration |
| `junit` | XML file | CI/CD server integration |

### Multiple Reporters

Configure as array — all run in parallel:

```typescript
reporter: [
  ['html'],
  ['json', { outputFile: 'test-results/json-report.json' }],
  ['junit', { outputFile: 'test-results/junit-report.xml' }],
]
```

### Third-Party: Allure Reporter

```bash
# 1. Install Allure system tool
brew install allure          # Mac
scoop install allure         # Windows

# 2. Install Allure Playwright package
npm install allure-playwright --save-dev --force

# 3. Add to config
reporter: [['html'], ['allure-playwright']]

# 4. Generate report after test run
allure generate allure-results
```

### Viewing Reports

```bash
npx playwright show-report           # HTML report
allure open allure-report             # Allure report
```

## English Short Summary

Playwright offers built-in reporters (HTML, list, JSON, JUnit). Configure multiple reporters in an array. Install `allure-playwright` for third-party Allure reports with rich visualizations.

---
title: "NPM Scripts and CLI Commands"
lectureId: 61
section: 8
sectionTitle: "Advanced"
date: "2026-04-29"
tags: [playwright, npm-scripts, cli, package-json, sequential, parallel]
---

## 中文短总结

将常用 CLI 命令封装为 NPM scripts 避免每次手动输入长命令。在 `package.json` 的 `scripts` 中定义命名脚本，用 `npm run <name>` 执行。可以用 `&&`（双 ampersand）顺序执行多个脚本，或 `&`（单 ampersand）并行执行。任何终端命令都可以放入 scripts 中，不限于 Playwright。

## English Notes

### Defining NPM Scripts

```json
// package.json
{
  "scripts": {
    "pageObjects-chrome": "npx playwright test use-page-objects.spec.ts --project=chromium",
    "pageObjects-firefox": "npx playwright test use-page-objects.spec.ts --project=firefox",
    "pageObjects-all": "npm run pageObjects-chrome && npm run pageObjects-firefox"
  }
}
```

### Running Scripts

```bash
npm run pageObjects-chrome    # Run specific script
npm run pageObjects-all       # Run combined scripts
```

### Chaining Scripts

| Operator | Behavior | Example |
|---|---|---|
| `&&` | Sequential — second runs after first completes | `npm run a && npm run b` |
| `&` | Parallel — both run simultaneously | `npm run a & npm run b` |

### Benefits

- Avoid typing long commands with typos
- Reusable named shortcuts
- Combine multiple scripts into larger workflows
- Not limited to Playwright — any terminal command works

## English Short Summary

Define reusable NPM scripts in `package.json` to avoid long CLI commands. Chain scripts sequentially with `&&` or in parallel with `&`.

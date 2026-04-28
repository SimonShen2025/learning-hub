---
title: "Playwright Installation"
lectureId: 17
section: 3
sectionTitle: "Playwright Hands-On Overview"
date: "2026-04-29"
tags: [playwright, installation, project-structure]
---

## 中文短总结

通过 `npm init playwright@latest` 安装 Playwright。选择 TypeScript，安装浏览器。生成的项目结构：`node_modules/`（依赖）、`tests/`（测试文件，命名 `.spec.ts`）、`playwright.config.ts`（主配置文件）、`package.json`（项目配置与依赖）。

## 中文长总结

### 安装命令

```bash
npm init playwright@latest
```

安装向导选项：
- 语言：**TypeScript**（Playwright 默认/推荐）
- 测试目录：`tests`（默认）
- GitHub Actions：No（暂时）
- 安装浏览器：Yes

### 项目结构

| 文件/目录 | 说明 |
|-----------|------|
| `node_modules/` | 依赖库，含 Playwright 框架。可安全删除后 `npm install` 重建 |
| `tests/` | 测试文件，命名规范 `*.spec.ts` |
| `test-examples/` | 示例测试，可删除 |
| `playwright.config.ts` | **主配置文件**，管理框架设置 |
| `package.json` | 项目配置，`devDependencies` 管理依赖，`scripts` 管理 npm 脚本 |
| `package-lock.json` | 锁定依赖版本，可安全删除重建 |
| `.gitignore` | 排除 test-results、playwright-report 等 |

### 关键点

- Playwright 可安装为独立项目或集成到现有项目
- `playwright.config.ts` 后续课程会详细讲解各配置项

## English Short Summary

Install with `npm init playwright@latest`, choose TypeScript. Key files: `tests/` (test files as `*.spec.ts`), `playwright.config.ts` (main config), `package.json` (dependencies). Can be standalone or integrated into existing projects.

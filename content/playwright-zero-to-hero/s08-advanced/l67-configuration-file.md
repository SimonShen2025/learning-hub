---
title: "Configuration File"
lectureId: 67
section: 8
sectionTitle: "Advanced"
date: "2026-04-29"
tags: [playwright, config, projects, use, global-settings, custom-config]
---

## 中文短总结

Playwright 配置文件分为两大部分：**全局设置**（retries、reporter、timeout 等）和 **项目设置**（projects 数组，每个项目可覆盖全局设置）。项目不仅用于浏览器区分，还可用于环境分组、测试子集分组等。项目级 `use` 覆盖全局级 `use`。最佳实践：删除不相关的默认配置，只保留需要的设置。可创建自定义配置文件（如 `playwright-prod.config.ts`），通过 `--config=filename` 使用。

## English Notes

### Config Structure

```
defineConfig({
  // ── Global Settings ──
  retries: 1,
  reporter: [['html']],
  timeout: 40000,

  // ── Global Use (runtime settings) ──
  use: {
    baseURL: 'http://localhost:4200',
    trace: 'on-first-retry',
    video: 'off',
  },

  // ── Projects ──
  projects: [
    {
      name: 'chromium',
      // Project-level use OVERRIDES global use
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox', video: 'on' },  // override video
    },
  ],
})
```

### Settings Hierarchy

```
Global settings (lower priority)
  └── Project settings (higher priority — overrides global)
```

### Projects Are Not Just Browsers

```typescript
{
  name: 'pageObject-fullscreen',
  testMatch: 'use-page-objects.spec.ts',
  use: { viewport: { width: 1920, height: 1080 } },
}
```

- Group tests by purpose, environment, or subset
- Control which specs run with `testMatch`

### Custom Config Files

```bash
npx playwright test --config=playwright-prod.config.ts
```

### Available Settings Reference

| Section | Examples |
|---|---|
| **Test config** | retries, reporter, workers, webServer, testMatch, testIgnore |
| **Use options** | baseURL, storageState, viewport, locale, colorScheme, trace, video, screenshot, proxy |

### Best Practice

- Delete all default config values you don't use
- Keep config clean and compact
- Only include settings relevant to your project

## English Short Summary

Playwright config has global and project sections. Project settings override global ones. Projects can group tests by browser, environment, or purpose. Use `--config` flag for custom config files. Keep config clean by removing unused defaults.

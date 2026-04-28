---
title: "Mobile Device Emulator"
lectureId: 72
section: 8
sectionTitle: "Advanced"
date: "2026-04-29"
tags: [playwright, mobile, emulation, devices, viewport, responsive, project]
---

## 中文短总结

Playwright 可模拟移动设备运行测试。在 `projects` 中创建独立的 mobile project，使用 `...devices['iPhone 13 Pro']` 设置设备参数。移动视图下某些元素可能需要额外操作（如点击汉堡菜单展开导航）。使用 `testInfo.project.name` 创建条件逻辑，让同一测试在桌面和移动端通用。也可用 `viewport` 自定义分辨率代替预设设备。

## English Notes

### Project Configuration

```typescript
// playwright.config.ts
projects: [
  {
    name: 'mobile',
    testMatch: 'test-mobile.spec.ts',
    use: { ...devices['iPhone 13 Pro'] },
  },
]
```

### Available Devices

VS Code IntelliSense shows all options: Galaxy, BlackBerry, iPad, iPhone, Pixel, Nexus, etc.

### Handling Mobile-Specific UI

```typescript
// Mobile may need hamburger menu click
await page.locator('.sidebar-toggle').click();

// Custom viewport instead of device preset
use: { viewport: { width: 414, height: 896 } }
```

### Universal Test (Desktop + Mobile)

```typescript
test('form test', async ({ page }, testInfo) => {
  // Mobile-specific step
  if (testInfo.project.name === 'mobile') {
    await page.locator('.sidebar-toggle').click();
  }

  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();

  // Close menu on mobile
  if (testInfo.project.name === 'mobile') {
    await page.locator('.sidebar-toggle').click();
  }

  // ... rest of test (same for both)
});
```

### Key Points

| Concept | Detail |
|---|---|
| `devices` array | Built-in device presets (viewport, user agent, etc.) |
| `testMatch` | Scope mobile project to specific specs |
| `testInfo.project.name` | Conditional logic for platform-specific steps |
| Responsive UI | Mobile views may hide navigation behind menus |

## English Short Summary

Create a mobile project with `...devices['iPhone 13 Pro']` to emulate mobile testing. Use `testInfo.project.name` for conditional platform-specific steps to share tests between desktop and mobile.

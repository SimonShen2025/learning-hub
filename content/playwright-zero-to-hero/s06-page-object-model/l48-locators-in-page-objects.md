---
title: "Locators in Page Objects"
lectureId: 48
section: 6
sectionTitle: "Page Object Model"
date: "2026-04-29"
tags: [playwright, page-object, locators, constructor, KISS, DRY, opinion]
---

## 中文短总结

Playwright 官方推荐将 Locator 从方法中抽离，定义为 class 字段，在 constructor 中赋值，方法中引用字段。好处是遵循 DRY 避免重复。但作者认为此方式在大型项目中会导致：大量字段难以阅读、多人协作易产生同义重复 locator、含参数的 locator 无法抽离导致混用。因此作者倾向 KISS 原则，将 locator 保留在方法内，便于调试和维护。本课最终恢复了简单写法。

## English Notes

### Playwright's Recommended Approach

Separate locators into class fields:

```typescript
export class NavigationPage {
  readonly formLayoutsMenuItem: Locator;
  readonly datePickerMenuItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.formLayoutsMenuItem = page.getByText('Form Layouts');
    this.datePickerMenuItem = page.getByText('Datepicker');
  }

  async formLayoutsPage() {
    await this.selectGroupMenuItem('Forms');
    await this.formLayoutsMenuItem.click();
  }
}
```

### Advantages (DRY)

- Locators defined once, reused across multiple methods
- No duplication of locator strings

### Author's Counter-Arguments (KISS)

| Problem | Description |
|---|---|
| **Readability** | 30-40 fields + constructor assignments become hard to scan |
| **Duplicate locators** | Multiple engineers may create same locator with different names |
| **Dead locators** | Unused locators accumulate without cleanup |
| **Mixed placement** | Parameterized locators (e.g., `getByTitle(param)`) can't be extracted — some stay in methods |
| **Debugging** | Errors point to the method line, but locator is defined elsewhere |

### Author's Preference

> Keep locators **inside** the functional methods. In practice, you'll have at most 2-3 duplications. The debugging and maintenance benefit outweighs the small duplication.

### Takeaway

- Both approaches are valid — it's a team/project decision
- Official Playwright docs recommend separating locators
- Author follows KISS, keeping locators in methods
- The lesson reverts all changes, continuing with the simpler approach

## English Short Summary

Playwright recommends separating locators into class fields (DRY). The author prefers keeping them in methods (KISS) for easier debugging and maintenance. Both are valid — choose based on project needs.

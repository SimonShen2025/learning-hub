---
title: "Page Objects Helper Base"
lectureId: 52
section: 6
sectionTitle: "Page Object Model"
date: "2026-04-29"
tags: [playwright, page-object, inheritance, extends, super, helper-base, shared-utilities]
---

## 中文短总结

创建 HelperBase 基类存放可跨 Page Object 复用的通用方法（如 `waitForNumberOfSeconds()`）。各 Page Object 通过 `extends HelperBase` 继承，constructor 中用 `super(page)` 替代手动声明 `page` 字段，基类方法自动可用。最终架构：Test 调用 PageManager → PageManager 管理各 Page Object → Page Object 继承 HelperBase 获得共享方法。这是面向对象的 inheritance 概念应用。

## English Notes

### HelperBase Class

```typescript
import { Page } from '@playwright/test';

export class HelperBase {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForNumberOfSeconds(timeInSeconds: number) {
    await this.page.waitForTimeout(timeInSeconds * 1000);
  }
}
```

### Extending HelperBase

```typescript
import { HelperBase } from './helper-base';

export class NavigationPage extends HelperBase {
  constructor(page: Page) {
    super(page); // pass page to HelperBase constructor
  }

  async formLayoutsPage() {
    await this.selectGroupMenuItem('Forms');
    await this.page.getByText('Form Layouts').click();
    await this.waitForNumberOfSeconds(2); // inherited method!
  }
}
```

### Key Changes When Using Inheritance

| Before | After |
|---|---|
| `readonly page: Page;` in each class | Removed — inherited from HelperBase |
| `this.page = page;` in constructor | `super(page);` — delegates to parent |
| Define shared methods in each class | Define once in HelperBase |

### `super()` Keyword

- Calls the parent class constructor
- Must pass required parameters (here: `page`)
- Replaces manual `this.page = page` assignment

### Framework Architecture

```
Tests (spec files)
  └── PageManager (manages all page object instances)
        ├── NavigationPage  ──extends──> HelperBase
        ├── FormLayoutsPage ──extends──> HelperBase
        └── DatePickerPage  ──extends──> HelperBase
```

### Key Points

- `extends` = OOP **inheritance** — child class gets all parent methods/fields
- `super(page)` = call parent constructor
- Shared utilities go in HelperBase (data generation, common waits, etc.)
- Avoids copy-pasting utility methods across page objects
- All page objects need the same refactoring: `extends HelperBase` + `super(page)` + remove `readonly page`

## English Short Summary

Create a HelperBase class with shared utilities, then `extends` it in all page objects. Use `super(page)` in constructors. This OOP inheritance pattern eliminates duplicated helper code across page objects.

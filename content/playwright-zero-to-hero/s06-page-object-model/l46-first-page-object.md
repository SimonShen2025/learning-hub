---
title: "First Page Object"
lectureId: 46
section: 6
sectionTitle: "Page Object Model"
date: "2026-04-29"
tags: [playwright, page-object, class, constructor, export, new-keyword]
---

## 中文短总结

创建第一个 Page Object：新建 `page-objects/` 文件夹和 `NavigationPage` 类。类中导入 `Page` fixture，通过 constructor 接收并赋值给 `readonly` 字段，方法内用 `this.page` 访问。类必须 `export` 才能被测试文件导入。测试中用 `new NavigationPage(page)` 创建实例，通过实例调用方法。注意方法调用前加 `await`。

## English Notes

### Page Object Structure

```typescript
// page-objects/navigation-page.ts
import { Page } from '@playwright/test';

export class NavigationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async formLayoutsPage() {
    await this.page.getByText('Forms').click();
    await this.page.getByText('Form Layouts').click();
  }
}
```

### Key Components

| Component | Purpose |
|---|---|
| `export` | Makes class visible to other files |
| `readonly page: Page` | Class field to store the Page fixture |
| `constructor(page: Page)` | Receives Page fixture from the test |
| `this.page` | References the class's own Page instance |

### Using in Tests

```typescript
import { NavigationPage } from '../page-objects/navigation-page';

test('navigate to form page', async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  await navigateTo.formLayoutsPage();
});
```

### Key Concepts

- `new` keyword creates a new **instance** of the class
- Pass the `page` fixture to ensure test and page object share the **same browser context**
- Always `await` async method calls
- `this.page` inside methods refers to the fixture passed via constructor

## English Short Summary

Create a page object class with `export`, receive `Page` fixture via constructor, store in a `readonly` field, and use `this.page` in methods. Instantiate with `new ClassName(page)` in tests.

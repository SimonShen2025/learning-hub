---
title: "Page Objects Manager"
lectureId: 51
section: 6
sectionTitle: "Page Object Model"
date: "2026-04-29"
tags: [playwright, page-object, manager, single-instance, method-chaining, readability]
---

## 中文短总结

随着 Page Object 增多，每个测试都要 import 和 `new` 多个对象会产生大量重复。解决方案：创建 PageManager 类，在其 constructor 中统一创建所有 Page Object 实例（传递同一个 `page` fixture），并提供返回各实例的方法（如 `navigateTo()`、`onFormLayoutsPage()`）。测试中只需创建一个 `pm = new PageManager(page)`，通过 `pm.navigateTo().formLayoutsPage()` 链式调用。代码可读性极佳，形如自然语言。

## English Notes

### Problem

Each test requires:

```typescript
import { NavigationPage } from '...';
import { FormLayoutsPage } from '...';
import { DatePickerPage } from '...';

const navigateTo = new NavigationPage(page);
const onFormLayoutsPage = new FormLayoutsPage(page);
const onDatePickerPage = new DatePickerPage(page);
```

This repeats for **every test**.

### Solution: Page Manager

```typescript
import { Page } from '@playwright/test';
import { NavigationPage } from './navigation-page';
import { FormLayoutsPage } from './form-layouts-page';
import { DatePickerPage } from './date-picker-page';

export class PageManager {
  private readonly page: Page;
  private readonly navigationPage: NavigationPage;
  private readonly formLayoutsPage: FormLayoutsPage;
  private readonly datePickerPage: DatePickerPage;

  constructor(page: Page) {
    this.page = page;
    this.navigationPage = new NavigationPage(this.page);
    this.formLayoutsPage = new FormLayoutsPage(this.page);
    this.datePickerPage = new DatePickerPage(this.page);
  }

  navigateTo() {
    return this.navigationPage;
  }

  onFormLayoutsPage() {
    return this.formLayoutsPage;
  }

  onDatePickerPage() {
    return this.datePickerPage;
  }
}
```

### Usage in Tests

```typescript
import { PageManager } from '../page-objects/page-manager';

test('test with page manager', async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().formLayoutsPage();
  await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption(
    'test@test.com', 'Welcome1', 'Option 1'
  );
  await pm.navigateTo().datePickerPage();
  await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(5);
});
```

### Benefits

| Benefit | Detail |
|---|---|
| **Single import** | Only `PageManager` needed in test files |
| **Single instance** | One `new PageManager(page)` per test |
| **Cascading fixture** | Page fixture flows: test → PM → each page object |
| **Readable code** | `pm.navigateTo().formLayoutsPage()` reads like natural language |
| **IntelliSense** | `pm.` shows all available page objects |
| **Scalable** | Add new page objects only in PageManager |

## English Short Summary

Create a PageManager that centralizes all page object instances. Tests import only the manager, call `pm.navigateTo().pageName()` for readable, DRY code with full IntelliSense support.

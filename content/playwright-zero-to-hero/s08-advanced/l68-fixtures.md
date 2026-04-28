---
title: "Fixtures"
lectureId: 68
section: 8
sectionTitle: "Advanced"
date: "2026-04-29"
tags: [playwright, fixtures, extend, test-options, setup, teardown, auto, dependency]
---

## 中文短总结

Fixture 是 Playwright 强大的环境准备机制，类似 beforeEach/afterEach 但更灵活。通过扩展 `base.extend<T>()` 创建自定义 fixture，fixture 函数中 `await use()` 之前的代码是 setup，之后是 teardown。可设置 `{ option: true }` 作为配置项，或 `auto: true` 自动执行。Fixture 之间可声明依赖关系。使用 fixture 后测试更快，因为环境在浏览器加载前就开始准备。

## English Notes

### Creating Custom Fixtures

```typescript
// test-options.ts
import { test as base } from '@playwright/test';
import { PageManager } from './page-objects/page-manager';

export type TestOptions = {
  formLayoutsPage: string;
  pageManager: PageManager;
};

export const test = base.extend<TestOptions>({
  // Fixture with auto-init
  formLayoutsPage: [async ({ page }, use) => {
    await page.goto('/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
    await use('');                    // ← setup complete, run test
    console.log('Teardown');          // ← runs after test
  }, { auto: true }],

  // Fixture with dependency
  pageManager: async ({ page, formLayoutsPage }, use) => {
    const pm = new PageManager(page);
    await use(pm);
  },
});
```

### Fixture Lifecycle

```
1. formLayoutsPage setup (navigate to page)
2. pageManager setup (create instance)
3. ── TEST RUNS ──
4. pageManager teardown
5. formLayoutsPage teardown
```

### Using in Tests

```typescript
import { test } from './test-options';

test('fill form', async ({ pageManager }) => {
  // formLayoutsPage auto-initialized (auto: true)
  // pageManager depends on formLayoutsPage
  await pageManager.onFormLayoutsPage().submitForm(...);
});
```

### Fixture Options

| Option | Purpose |
|---|---|
| `auto: true` | Fixture runs automatically for every test |
| Dependency | List fixture name in params: `async ({ page, otherFixture }, use)` |
| `use()` before/after | Code before `use()` = setup; after = teardown |

### Benefits

- **Faster**: environment prepared before browser fully loads (~2.5s vs ~4.5s)
- **Isolated**: each test gets its own fixture instance
- **Composable**: fixtures can depend on other fixtures
- **Clean tests**: no beforeEach hooks needed

## English Short Summary

Extend the base `test` with custom fixtures for setup/teardown. Code before `await use()` runs as setup, after as teardown. Use `auto: true` for automatic init and declare fixture dependencies for composable test environments.

---
title: "Parametrized Methods"
lectureId: 49
section: 6
sectionTitle: "Page Object Model"
date: "2026-04-29"
tags: [playwright, page-object, parameters, string, boolean, JSDoc, reusable-methods]
---

## 中文短总结

本节创建 FormLayoutsPage 页面对象，包含两个参数化方法。`submitUsingTheGridFormWithCredentialsAndSelectOption(email, password, optionText)` 接收三个 string 参数填表并提交。`submitInlineFormWithNameEmailAndCheckbox(name, email, rememberMe)` 用 boolean 参数控制是否勾选 checkbox。参数化方法允许用不同测试数据复用同一方法。可用 JSDoc（`/** */`）为方法和参数添加描述，IntelliSense 会在悬停时显示。

## English Notes

### Page Object with Parameterized Methods

```typescript
export class FormLayoutsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Fill out the grid form with user credentials
   * @param email - valid email for the test user
   * @param password - password for the test user
   * @param optionText - 'Option 1' or 'Option 2'
   */
  async submitUsingTheGridFormWithCredentialsAndSelectOption(
    email: string,
    password: string,
    optionText: string
  ) {
    const usingTheGridForm = this.page.locator('nb-card', { hasText: 'Using the Grid' });
    await usingTheGridForm.getByRole('textbox', { name: 'Email' }).fill(email);
    await usingTheGridForm.getByRole('textbox', { name: 'Password' }).fill(password);
    await usingTheGridForm.getByRole('radio', { name: optionText }).check({ force: true });
    await usingTheGridForm.getByRole('button').click();
  }

  async submitInlineFormWithNameEmailAndCheckbox(
    name: string,
    email: string,
    rememberMe: boolean
  ) {
    const inlineForm = this.page.locator('nb-card', { hasText: 'Inline form' });
    await inlineForm.getByRole('textbox', { name: 'Jane Doe' }).fill(name);
    await inlineForm.getByRole('textbox', { name: 'Email' }).fill(email);
    if (rememberMe) {
      await inlineForm.getByRole('checkbox').check({ force: true });
    }
    await inlineForm.getByRole('button').click();
  }
}
```

### Usage in Tests

```typescript
const pm = new FormLayoutsPage(page);

await pm.submitUsingTheGridFormWithCredentialsAndSelectOption(
  'test@test.com', 'Welcome1', 'Option 1'
);

await pm.submitInlineFormWithNameEmailAndCheckbox(
  'John Smith', 'john@test.com', true
);
```

### JSDoc Annotations

```typescript
/**
 * This method fills out the inline form with user details
 * @param name - first and last name
 * @param email - valid email for the test user
 * @param rememberMe - true/false if user session to be saved
 */
```

- Hovering over the method in VS Code shows the description
- Each `@param` describes what the parameter expects

### Key Points

- Use descriptive method names — don't be afraid of long names
- Boolean parameters enable conditional logic inside methods
- Same method, different arguments → different test scenarios
- TypeScript types (`string`, `boolean`) enforce parameter contracts

## English Short Summary

Create parameterized page object methods with typed parameters (string, boolean) for flexible test data. Use JSDoc annotations to document methods. Same method with different arguments covers multiple scenarios.

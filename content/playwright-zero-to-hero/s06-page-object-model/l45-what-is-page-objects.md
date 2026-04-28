---
title: "What Is Page Objects"
lectureId: 45
section: 6
sectionTitle: "Page Object Model"
date: "2026-04-29"
tags: [playwright, page-object-model, design-pattern, DRY, KISS, best-practices]
---

## 中文短总结

Page Object Model (POM) 是测试自动化中组织代码、提高可维护性和可复用性的设计模式。核心思想：为每个页面创建独立 class，将操作封装为方法，测试中只调用方法。遵循两大原则——DRY（Don't Repeat Yourself，代码重复 3 次以上必须提取）和 KISS（Keep It Simple, Stupid，不要过度抽象）。注意使用描述性命名，避免创建只有一行代码的"微方法"。

## English Notes

### What is Page Object Model?

- A **design pattern** for test automation to organize code
- Improves **maintainability** and **reusability**
- No industry-wide standard — implementation varies by framework, language, and author

### Core Concept

- For every page of the app → create a **class**
- Each class has **methods** responsible for operations on that page
- Tests call methods instead of duplicating locator + action code

### Example: Login

**Without POM** (repeated in every test):

```typescript
await page.fill('#email', 'user@test.com');
await page.fill('#password', 'pass123');
await page.click('#login');
```

**With POM** (reusable method):

```typescript
await loginPage.performLogin('user@test.com', 'pass123');
```

### Two Key Principles

| Principle | Meaning | Rule of Thumb |
|---|---|---|
| **DRY** — Don't Repeat Yourself | Reduce code duplication | If code is repeated **3+ times**, extract it |
| **KISS** — Keep It Simple, Stupid | Don't over-engineer | Avoid excessive abstraction layers |

### Best Practices

- **Descriptive naming** — method/variable names should clearly communicate purpose
  - Naming is one of the hardest things in programming
  - Ask peers for code review if unsure
- **Avoid tiny methods** — don't create single-line methods like `clickSubmit()`
  - Methods should represent meaningful blocks of functionality
- **Key qualities**: reliability, readability, maintainability

## English Short Summary

POM organizes test code by creating classes per page with reusable methods. Follow DRY (extract code repeated 3+ times) and KISS (don't over-engineer). Use descriptive naming and avoid trivial single-line methods.

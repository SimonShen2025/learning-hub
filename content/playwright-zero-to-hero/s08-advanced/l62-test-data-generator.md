---
title: "Test Data Generator"
lectureId: 62
section: 8
sectionTitle: "Advanced"
date: "2026-04-29"
tags: [playwright, faker, test-data, random, npm-package]
---

## 中文短总结

使用 `@faker-js/faker` 库生成随机测试数据，避免每次运行使用相同静态值导致数据库重复。安装：`npm install @faker-js/faker --save-dev --force`。`faker.person.fullName()` 生成随机全名，`faker.number.int(1000)` 生成随机数字。可组合使用 JS 字符串插值和 `.replace(' ', '')` 构建随机邮箱。Faker 提供丰富分类（person、finance、commerce 等）。

## English Notes

### Installation

```bash
npm install @faker-js/faker --save-dev --force
```

### Usage

```typescript
import { faker } from '@faker-js/faker';

const randomFullName = faker.person.fullName();
const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`;

// Example output: "TracySwift742@test.com"
```

### Faker Categories

| Category | Examples |
|---|---|
| `faker.person` | fullName(), firstName(), lastName(), gender() |
| `faker.number` | int(), int(1000), int({ min: 1, max: 100 }) |
| `faker.internet` | email(), userName(), password() |
| `faker.company` | name(), catchPhrase() |
| `faker.finance` | accountNumber(), creditCardNumber() |

### Customization

```typescript
// Specific first name, random last name
faker.person.fullName({ firstName: 'John' });

// Only female names
faker.person.fullName({ sex: 'female' });

// Random integer within range
faker.number.int({ min: 1, max: 100 });
```

### Benefits

- Every test run uses unique data
- Easy to search/track test records in database
- Avoids duplicate entry errors
- Rich library with many data categories

## English Short Summary

Install `@faker-js/faker` to generate random test data (names, emails, numbers) for each test run, avoiding duplicates and static test data issues.

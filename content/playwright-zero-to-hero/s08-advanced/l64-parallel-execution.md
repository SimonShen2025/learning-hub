---
title: "Parallel Execution"
lectureId: 64
section: 8
sectionTitle: "Advanced"
date: "2026-04-29"
tags: [playwright, parallel, workers, serial, fullyParallel, config]
---

## 中文短总结

Playwright 默认为每个 spec 文件分配一个 worker 并行执行。`workers` 设为 1 可完全禁用并行。`fullyParallel: true` 让单个 spec 文件内的测试也并行（每个测试独立 worker）。可在 spec 级别用 `test.describe.configure({ mode: 'parallel' })` 或 `test.describe.parallel` 单独启用并行；用 `mode: 'serial'` 创建顺序依赖（前一个失败则跳过后续）。项目级也可独立配置并行设置。

## English Notes

### Default Behavior

- One worker per spec file → spec files run in parallel
- Tests within a spec file run **sequentially**
- Playwright determines max workers automatically

### Configuration Options

```typescript
// playwright.config.ts
workers: process.env.CI ? 1 : undefined,  // undefined = auto
fullyParallel: false,  // true = tests within spec also parallel
```

### Execution Modes

| Setting | Behavior |
|---|---|
| `workers: 1` | All tests sequential — single worker |
| `workers: undefined` | Auto — one worker per spec file |
| `fullyParallel: true` | Tests within spec also run in parallel |

### Per-Spec Configuration

```typescript
// Parallel within this describe block
test.describe.parallel('group', () => { ... });

// Or using configure
test.describe.configure({ mode: 'parallel' });

// Serial mode — skip dependent tests on failure
test.describe.configure({ mode: 'serial' });
```

### Controlling Execution Order

- Rename spec files with numeric prefix: `001-first.spec.ts`, `002-second.spec.ts`
- Playwright picks files randomly by default when parallel

### Per-Project Configuration

```typescript
projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
    fullyParallel: true,  // parallel only for this project
  },
]
```

### Key Points

- `serial` mode: if Test A fails, Test B is skipped (test dependency — not recommended)
- Parallel execution order is random
- Reduce workers for debugging, increase for speed

## English Short Summary

Playwright runs spec files in parallel by default (one worker each). Use `fullyParallel: true` for intra-file parallelism, `workers: 1` to disable, or `test.describe.configure({ mode: 'serial' })` for dependent test chains.

---
title: "Sliders"
lectureId: 43
section: 5
sectionTitle: "UI Components"
date: "2026-04-29"
tags: [playwright, slider, evaluate, setAttribute, boundingBox, mouse-movement]
---

## 中文短总结

Slider 有两种自动化方式。方式一：通过 `evaluate()` 直接修改 DOM 属性（cx/cy 坐标），然后触发 `click()` 让 UI 响应变化——这是快捷方式。方式二：模拟真实鼠标移动，使用 `boundingBox()` 获取元素坐标系，计算中心点，再通过 `mouse.move()` → `mouse.down()` → `mouse.move()` → `mouse.up()` 序列模拟拖拽。注意：操作前需 `scrollIntoViewIfNeeded()` 确保元素可见。

## English Notes

### Approach 1: Update Attributes (Shortcut)

Directly set the slider element's coordinate attributes:

```typescript
const tempGauge = page.locator('[tabtitle="Temperature"] temperature-dragger circle');

await tempGauge.evaluate(node => {
  node.setAttribute('cx', '232.63');
  node.setAttribute('cy', '232.63');
});

await tempGauge.click(); // trigger UI update
```

- `evaluate()` executes JavaScript on the DOM element
- Must trigger a click/event after `setAttribute` to reflect the change on UI

### Approach 2: Mouse Movement (Realistic)

```typescript
const tempBox = page.locator('[tabtitle="Temperature"] temperature-dragger');
await tempBox.scrollIntoViewIfNeeded();

const box = await tempBox.boundingBox();
const x = box.x + box.width / 2;   // center X
const y = box.y + box.height / 2;   // center Y

await page.mouse.move(x, y);        // move to center
await page.mouse.down();            // press mouse button
await page.mouse.move(x + 100, y);  // drag right
await page.mouse.move(x + 100, y + 100); // drag down
await page.mouse.up();              // release mouse button
```

### Bounding Box Concept

```
(0,0) ────────── X →
  │
  │    ┌──────────┐
  │    │  element  │
  │    │  center   │
  │    └──────────┘
  Y
  ↓
```

- Coordinates start at **top-left corner** (0, 0)
- X = horizontal, Y = vertical
- Can move **outside** the bounding box with larger/negative values
- Limited by browser viewport — `scrollIntoViewIfNeeded()` first

### Key Methods

| Method | Purpose |
|---|---|
| `evaluate(fn)` | Execute JS directly on a DOM node |
| `scrollIntoViewIfNeeded()` | Ensure element is visible in viewport |
| `boundingBox()` | Get x, y, width, height of element |
| `mouse.move(x, y)` | Move mouse to coordinates |
| `mouse.down()` | Press left mouse button |
| `mouse.up()` | Release mouse button |

## English Short Summary

Automate sliders by either updating DOM attributes via `evaluate()` + triggering a click, or by simulating mouse movement using `boundingBox()` coordinates with `mouse.move/down/up` sequences.

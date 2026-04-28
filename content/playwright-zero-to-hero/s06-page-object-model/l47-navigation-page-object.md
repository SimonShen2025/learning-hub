---
title: "Navigation Page Object"
lectureId: 47
section: 6
sectionTitle: "Page Object Model"
date: "2026-04-29"
tags: [playwright, page-object, navigation, private-method, aria-expanded, smart-methods]
---

## 中文短总结

为 NavigationPage 添加更多导航方法（DatePicker、Smart Table 等）。关键改进：创建 `private` 辅助方法 `selectGroupMenuItem()`，通过读取 `aria-expanded` 属性判断菜单组是否已展开——已展开则跳过点击，避免误折叠。这让每个导航方法变得"智能"，无论菜单当前状态如何都能正确工作。private 方法仅在类内部可见。

## English Notes

### Problem: Menu State

- Clicking a group menu item (e.g., "Forms") toggles expand/collapse
- If already expanded, clicking again **collapses** it
- Navigation methods must be **state-aware**

### Solution: Check `aria-expanded`

```typescript
private async selectGroupMenuItem(groupItemTitle: string) {
  const groupMenuItem = this.page.getByTitle(groupItemTitle);
  const expandedState = await groupMenuItem.getAttribute('aria-expanded');

  if (expandedState === 'false') {
    await groupMenuItem.click();
  }
}
```

### Updated Navigation Methods

```typescript
async formLayoutsPage() {
  await this.selectGroupMenuItem('Forms');
  await this.page.getByText('Form Layouts').click();
}

async datePickerPage() {
  await this.selectGroupMenuItem('Forms');
  await this.page.getByText('Datepicker').click();
}

async smartTablePage() {
  await this.selectGroupMenuItem('Tables & Data');
  await this.page.getByText('Smart Table').click();
}
```

### Key Concepts

| Concept | Detail |
|---|---|
| `private` method | Only accessible within the class — not from tests |
| `aria-expanded` | HTML attribute indicating expand/collapse state |
| `getAttribute()` | Returns attribute value as string |
| State-aware methods | Check current state before acting |

### Usage in Test

```typescript
await navigateTo.formLayoutsPage();
await navigateTo.datePickerPage();  // won't collapse "Forms" menu
await navigateTo.smartTablePage();
await navigateTo.tooltipPage();
```

## English Short Summary

Add a `private` helper that checks `aria-expanded` before clicking group menus, preventing accidental collapse. Each navigation method delegates to this helper for reliable state-aware navigation.

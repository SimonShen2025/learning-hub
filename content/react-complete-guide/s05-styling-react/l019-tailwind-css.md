---
title: "Tailwind CSS with React"
lectureId: 19
section: 5
sectionTitle: "Styling React Components"
date: "2026-03-03"
tags: ["react", "styling", "tailwind"]
---

## Summary

Tailwind CSS is a utility-first CSS framework that lets you build designs directly in your JSX without writing custom CSS. It integrates seamlessly with React and Vite.

## Key Concepts

- Utility classes map directly to CSS properties (`p-4` → `padding: 1rem`)
- No context switching between JSX and CSS files
- PurgeCSS removes unused styles in production — very small bundle
- `clsx` or `cn` helper for conditional class merging

## Detailed Notes

**Installation (Vite):**
```bash
npm install tailwindcss @tailwindcss/vite
```

**Example component:**
```jsx
function Alert({ type = 'info', message }) {
  const baseClasses = 'rounded-lg p-4 text-sm font-medium';
  const typeClasses = {
    info:    'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error:   'bg-red-100 text-red-800',
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      {message}
    </div>
  );
}
```

## Code Examples

```jsx
// Responsive design with Tailwind
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

---
title: "CSS Modules"
lectureId: 18
section: 5
sectionTitle: "Styling React Components"
date: "2026-03-03"
tags: ["react", "styling", "css-modules"]
---

## Summary

CSS Modules automatically scope class names to the component that imports them, eliminating class name collisions across the app.

## Key Concepts

- File must be named `*.module.css`
- Import as an object: `import styles from './Card.module.css'`
- Access classes as `styles.className`
- Class names get a unique hash in the build output

## Detailed Notes

**Card.module.css:**
```css
.card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.highlighted {
  background-color: #fef9c3;
}
```

**Card.jsx:**
```jsx
import styles from './Card.module.css';

function Card({ title, highlighted }) {
  return (
    <div className={`${styles.card} ${highlighted ? styles.highlighted : ''}`}>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}
```

## Code Examples

```jsx
// Conditional classes with clsx library (recommended)
import clsx from 'clsx';

<div className={clsx(styles.card, { [styles.highlighted]: highlighted })}>
```

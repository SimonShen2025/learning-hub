---
title: "State & useState Hook"
lectureId: 12
section: 3
sectionTitle: "React Essentials - Components, JSX, Props, State"
date: "2026-03-03"
tags: ["react", "state", "hooks", "useState"]
---

## Summary

State is data that can change over time and causes the component to re-render when updated. `useState` is the primary hook for managing state in function components.

## Key Concepts

- Call `useState(initialValue)` to declare a state variable
- Returns `[currentValue, setterFunction]` — always destructure
- Calling the setter triggers a re-render with the new value
- State is local to the component — not shared automatically

## Detailed Notes

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

**Updating objects in state:**
```jsx
const [user, setUser] = useState({ name: "Alice", age: 30 });

// ✅ Spread to preserve other fields
setUser(prev => ({ ...prev, age: 31 }));

// ❌ Do NOT mutate directly
// user.age = 31; // won't trigger re-render
```

## Code Examples

```jsx
// Toggle state
const [isOpen, setIsOpen] = useState(false);
<button onClick={() => setIsOpen(prev => !prev)}>
  {isOpen ? "Close" : "Open"}
</button>
```

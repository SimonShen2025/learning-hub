---
title: "useRef & Forwarding Refs"
lectureId: 14
section: 4
sectionTitle: "React Essentials - Deep Dive"
date: "2026-03-03"
tags: ["react", "hooks", "useRef", "refs"]
---

## Summary

`useRef` creates a mutable container that persists across renders without triggering re-renders. It is commonly used to access DOM nodes directly.

## Key Concepts

- `useRef(initialValue)` returns `{ current: initialValue }`
- Mutating `.current` does NOT cause a re-render
- Main uses: DOM manipulation, storing timers, keeping previous values
- `forwardRef` allows parent components to access a child's DOM node

## Detailed Notes

**Accessing a DOM element:**
```jsx
function TextInput() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus</button>
    </>
  );
}
```

**Storing a timer ID (no re-render needed):**
```jsx
function Stopwatch() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  function start() {
    timerRef.current = setInterval(() => setTime(t => t + 1), 1000);
  }

  function stop() {
    clearInterval(timerRef.current);
  }

  return <div>{time}s <button onClick={start}>Start</button> <button onClick={stop}>Stop</button></div>;
}
```

## Code Examples

```jsx
// forwardRef — expose child input to parent
const FancyInput = forwardRef(function FancyInput(props, ref) {
  return <input ref={ref} className="fancy" {...props} />;
});
```

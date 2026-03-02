---
title: "useReducer — Complex State Logic"
lectureId: 16
section: 4
sectionTitle: "React Essentials - Deep Dive"
date: "2026-03-03"
tags: ["react", "hooks", "useReducer", "state-management"]
---

## Summary

`useReducer` is an alternative to `useState` for managing complex state logic. It follows the same reducer pattern as Redux.

## Key Concepts

- `useReducer(reducer, initialState)` returns `[state, dispatch]`
- `dispatch({ type, payload })` triggers a state update
- The reducer is a pure function: `(state, action) => newState`
- Preferred over multiple `useState` calls when state transitions are complex

## Detailed Notes

```jsx
const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + state.step };
    case 'DECREMENT':
      return { ...state, count: state.count - state.step };
    case 'SET_STEP':
      return { ...state, step: action.payload };
    case 'RESET':
      return initialState;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count: {state.count} (step: {state.step})</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <input
        type="number"
        value={state.step}
        onChange={e => dispatch({ type: 'SET_STEP', payload: +e.target.value })}
      />
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}
```

## Code Examples

```jsx
// When to use useReducer vs useState:
// useState  — simple primitive values, independent state variables
// useReducer — multiple related state fields, complex update logic
```

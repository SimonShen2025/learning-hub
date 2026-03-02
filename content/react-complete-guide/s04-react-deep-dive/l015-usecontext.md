---
title: "useContext — Avoiding Prop Drilling"
lectureId: 15
section: 4
sectionTitle: "React Essentials - Deep Dive"
date: "2026-03-03"
tags: ["react", "hooks", "useContext", "context"]
---

## Summary

Context provides a way to pass data through the component tree without having to pass props down manually at every level — solving "prop drilling".

## Key Concepts

- Create context with `createContext(defaultValue)`
- Wrap the tree with `<Context.Provider value={...}>`
- Consume with `useContext(MyContext)` in any descendant
- Re-renders all consumers when the context value changes

## Detailed Notes

```jsx
// 1. Create the context
const ThemeContext = createContext('light');

// 2. Provide at the top level
function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Layout />
    </ThemeContext.Provider>
  );
}

// 3. Consume anywhere in the tree
function Button({ children }) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      className={theme === 'dark' ? 'btn-dark' : 'btn-light'}
      onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
    >
      {children}
    </button>
  );
}
```

## Code Examples

```jsx
// Best practice — custom hook to encapsulate context usage
function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
```

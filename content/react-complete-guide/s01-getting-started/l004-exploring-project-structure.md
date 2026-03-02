---
title: "Exploring the Project Structure"
lectureId: 4
section: 1
sectionTitle: "Getting Started"
date: "2026-03-03"
tags: ["setup", "project-structure"]
---

## Summary

A walkthrough of the files and folders in a Vite-generated React project, explaining the purpose of each.

## Key Concepts

- `index.html` is the single HTML file — React mounts into it
- `vite.config.js` controls the build and dev server behavior
- `src/` contains all component and logic files

## Detailed Notes

| File/Folder | Purpose |
|---|---|
| `index.html` | Entry HTML — contains `<div id="root">` |
| `src/main.jsx` | Bootstraps React into the DOM |
| `src/App.jsx` | Root component |
| `src/assets/` | Images and static files imported in JS |
| `public/` | Files served as-is (e.g. favicon) |
| `vite.config.js` | Vite configuration |
| `package.json` | Dependencies and scripts |

## Code Examples

```jsx
// src/App.jsx — default starter content
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return <h1>Hello from App!</h1>
}

export default App
```

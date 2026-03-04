---
title: "Advanced State Management System: Context + useReducer"
lectureId: 237
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, context-api, useReducer, state-management, pattern]
---

## 中文短总结

将 CitiesContext 中的多个 useState 替换为一个 useReducer。所有状态更新逻辑集中在 reducer。Action types：cities/loaded、city/loaded、city/created、city/deleted、loading、rejected。Context + useReducer = 强大的全局状态管理方案。

## 中文长总结

### Reducer 替代 useState
```jsx
const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };
    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };
    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}
```

### Provider 中使用
```jsx
function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] =
    useReducer(reducer, initialState);

  // async 函数中 dispatch
  async function fetchCities() {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(...);
      const data = await res.json();
      dispatch({ type: "cities/loaded", payload: data });
    } catch {
      dispatch({ type: "rejected", payload: "Error loading..." });
    }
  }
}
```

### 模式优势
- 所有状态转换逻辑集中
- 更容易追踪 state 变化
- 更好的调试体验
- 可扩展性强

## English Short Summary

Replace multiple useState with useReducer in CitiesContext. Centralized state logic: loading, cities/loaded, city/loaded, city/created, city/deleted, rejected. Context + useReducer = powerful global state management pattern. Async functions dispatch actions.

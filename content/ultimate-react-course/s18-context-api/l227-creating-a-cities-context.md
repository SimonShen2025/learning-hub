---
title: "Back to \"WorldWise\": Creating a CitiesContext"
lectureId: 227
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, context-api, worldwise, cities-context]
---

## 中文短总结

在 WorldWise 中创建 CitiesContext。将城市数据获取逻辑从 App 移到 CitiesProvider。包含 cities、isLoading、currentCity、GET/POST/DELETE 操作。App 组件变得更干净 — 只负责路由。

## 中文长总结

### CitiesContext.jsx
```jsx
const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("Error loading cities...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider
      value={{ cities, isLoading, currentCity, /* ... */ }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
```

### App 重构
```jsx
// 之前：App 管理 cities state
// 之后：App 只做路由
function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>...</Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}
```

## English Short Summary

Create CitiesContext for WorldWise: move city data fetching from App to CitiesProvider. Provider manages cities, isLoading, currentCity, CRUD operations. App becomes clean — only handles routing. Follow custom Provider + Hook pattern.

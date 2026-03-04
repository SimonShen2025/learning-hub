---
title: "CHALLENGE #1: Currency Converter"
lectureId: 158
section: 12
sectionTitle: "Effects and Data Fetching"
date: "2026-03-04"
tags: [react, challenge, useEffect, api, data-fetching]
---

## 中文短总结

挑战：构建货币转换器。两个 select（from/to 货币）+ 金额输入。用 useEffect 在 amount/from/to 变化时 fetch 汇率 API，计算转换结果。综合运用受控组件、useEffect、依赖数组、loading 状态、错误处理。

## 中文长总结

### 功能
- 输入金额
- 选择源货币和目标货币
- 自动 fetch 汇率 API
- 显示转换结果

### 核心实现
```jsx
const [amount, setAmount] = useState(1);
const [from, setFrom] = useState("USD");
const [to, setTo] = useState("EUR");
const [converted, setConverted] = useState("");
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  async function convert() {
    setIsLoading(true);
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
    );
    const data = await res.json();
    setConverted(data.rates[to]);
    setIsLoading(false);
  }

  if (from === to) return setConverted(amount);
  convert();
}, [amount, from, to]);
```

### 练习要点
- 多个依赖：`[amount, from, to]`
- 边界情况：同币种不 fetch
- Loading 状态

## English Short Summary

Challenge: currency converter. Select from/to currencies + amount input. useEffect with `[amount, from, to]` dependencies fetches exchange rate API. Displays converted result. Practices controlled elements, useEffect, dependency array, loading state. Edge case: same currency returns input amount directly.

---
title: "Making an API Call With Redux Thunks"
lectureId: 271
section: 20
sectionTitle: "Redux and Modern Redux Toolkit (With Thunks)"
date: "2026-03-04"
tags: [react, redux, thunks, api-call, currency-conversion]
---

## 中文短总结

用 Thunk 实现外币存款转换。选择货币 → 输入金额 → dispatch thunk → 调用 API 转换 → dispatch 转换后的金额。loading 状态管理。实际演示 thunk 解决异步数据获取。

## 中文长总结

### 外币存款 Thunk
```jsx
export function deposit(amount, currency) {
  if (currency === "USD")
    return { type: "account/deposit", payload: amount };

  return async function (dispatch) {
    dispatch({ type: "account/convertingCurrency" });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: "account/deposit", payload: converted });
  };
}
```

### Reducer 处理 loading
```jsx
case "account/convertingCurrency":
  return { ...state, isLoading: true };

case "account/deposit":
  return {
    ...state,
    balance: state.balance + action.payload,
    isLoading: false,
  };
```

### UI 中使用
```jsx
function AccountOperations() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.account.isLoading);

  function handleDeposit() {
    if (!amount) return;
    dispatch(deposit(amount, currency));
    setAmount("");
    setCurrency("USD");
  }

  return (
    <button onClick={handleDeposit} disabled={isLoading}>
      {isLoading ? "Converting..." : `Deposit ${amount}`}
    </button>
  );
}
```

## English Short Summary

Thunk for foreign currency deposit: dispatch async function → fetch exchange rate API → dispatch converted amount. Loading state with "convertingCurrency" action. UI disables button during conversion.

---
title: "Integrating Geolocation"
lectureId: 323
section: 24
sectionTitle: "Adding Redux and Advanced React Router"
date: "2026-03-04"
tags: [redux, geolocation, integration, form]
---

## 中文短总结

将 Redux 中的地理位置数据集成到订单表单。Dispatch `fetchAddress` thunk 获取位置。显示 loading 状态。地址自动填入 input。位置数据作为隐藏字段传给 action。

## 中文长总结

### 表单集成
```jsx
function CreateOrder() {
  const dispatch = useDispatch();
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: addressError,
  } = useSelector((state) => state.user);

  const isLoadingAddress = addressStatus === "loading";

  return (
    <Form method="POST">
      {/* Address 字段 */}
      <div>
        <label>Address</label>
        <div className="relative flex grow items-center">
          <input
            className="input grow"
            type="text"
            name="address"
            disabled={isLoadingAddress}
            defaultValue={address}
            required
          />
          {!position.latitude && !position.longitude && (
            <span className="absolute right-[3px] z-50">
              <Button
                type="small"
                disabled={isLoadingAddress}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get position
              </Button>
            </span>
          )}
        </div>
      </div>

      {/* 隐藏字段传递位置 */}
      <input
        type="hidden"
        name="position"
        value={
          position.longitude && position.latitude
            ? `${position.latitude},${position.longitude}`
            : ""
        }
      />
    </Form>
  );
}
```

### 要点
- "Get position" 按钮 dispatch thunk
- Loading 时禁用输入和按钮
- 获取成功后地址自动填入
- 位置通过 hidden input 传递给 action

## English Short Summary

Integrate geolocation into order form. "Get position" button dispatches `fetchAddress` thunk. Address auto-fills, position passed as hidden input. Loading state disables inputs. Error handling for failed geolocation.

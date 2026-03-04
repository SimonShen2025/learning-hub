---
title: "Connecting Supabase With Our React App"
lectureId: 343
section: 26
sectionTitle: "Supabase Crash Course: Building a Back-End!"
date: "2026-03-04"
tags: [supabase, react, client, api, integration]
---

## 中文短总结

将 Supabase 连接到 React 应用。安装 `@supabase/supabase-js` → 创建 client 单例（URL + anon key）→ 查询数据 `supabase.from('cabins').select('*')`。API 文档自动生成各表的查询代码。

## 中文长总结

### 安装客户端
```bash
npm install @supabase/supabase-js
```

### 创建 Supabase Client
```js
// services/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xxxxx.supabase.co";
const supabaseKey = "eyJhbGciOiJI..."; // anon key

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
```

### 查询数据
```js
// services/apiCabins.js
import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase
    .from("cabins")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
```

### 在组件中使用
```jsx
function Cabins() {
  const [cabins, setCabins] = useState([]);

  useEffect(() => {
    getCabins().then((data) => setCabins(data));
  }, []);

  return (
    <Table>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
}
```

### API 文档
- Supabase Dashboard → API → 选择表
- 自动生成 JavaScript 查询代码
- 包括 select、insert、update、delete 示例

### 注意事项
- anon key 可以安全放在前端（受 RLS 保护）
- 所有操作返回 `{ data, error }`
- 创建单例 client，不重复实例化

## English Short Summary

Connect Supabase to React: install `@supabase/supabase-js`, create client singleton with URL + anon key. Query with `supabase.from('table').select('*')`. Returns `{data, error}`. API docs auto-generate code for each table.

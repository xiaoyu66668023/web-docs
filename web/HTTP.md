## HTTP 是什么？

HTTP = HyperText Transfer Protocol（超文本传输协议）。大白话：**浏览器和服务器之间"说话"的规则**。

```
浏览器（客户端）  ──发送请求──▶  服务器
                  ◀──返回响应──
```

### HTTP 请求方法（最常用的两个）
| 方法 | 干啥用 | 类比 |
|---|---|---|
| **GET** | 从服务器**拿**数据 | 你去图书馆"借书" |
| **POST** | 向服务器**发**数据（让服务器存起来） | 你给编辑部"投稿" |
| PUT / DELETE | 更新/删除（Day7 前用不上） | 改稿 / 撤稿 |

### HTTP 状态码（服务器返回的"结果码"）
| 状态码 | 含义 |
|---|---|
| 200 | ✅ 成功 |
| 201 | 新建成功（POST 发数据后） |
| 301 / 302 | 重定向（换地址了） |
| 400 | ❌ 请求参数不对 |
| 401 | ❌ 没登录/没权限 |
| **404** | ❌ 资源不存在（最常见的错误之一） |
| **500** | ❌ 服务器自己炸了 |

---

## 免费的测试接口

本教程用 **JSONPlaceholder**（完全免费、跨域友好、不用注册）：
```
https://jsonplaceholder.typicode.com/
```

可用的几个端点：
- `GET /users` → 10 个用户
- `GET /users/1` → id=1 的用户
- `GET /posts` → 100 篇文章
- `GET /posts/1` → id=1 的文章
- `GET /posts/1/comments` → 某篇文章的评论

用浏览器直接访问 `https://jsonplaceholder.typicode.com/users` 就能看到一大坨 JSON 数据。

---

##  Fetch API（浏览器原生的请求工具）

### fetch("url") —— 发请求
- **作用**：向某个地址发 HTTP 请求
- **参数**：
  - 第 1 个（必填）：请求地址
  - 第 2 个（可选）：配置对象（请求方法、header、body 等）
- **返回值**：Promise（里面包着 Response 对象）
- **最简 GET 例子**：

```js
async function 请求用户列表() {
  try {
    // 1. 发请求，等服务器响应
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    // 2. ⚠️ 重要！fetch 只在"网络断了"时会抛错
    //    HTTP 404/500 不会自动进 catch，必须手动检查 res.ok
    if (!res.ok) {
      throw new Error("HTTP 错误：" + res.status);
    }

    // 3. 把 Response 里的 JSON 数据解析出来（还是 Promise，还要 await）
    const data = await res.json();

    // 4. data 就是真实数据了！可以用了
    console.log("拿到了", data.length, "个用户");
    console.log("第一个用户：", data[0].name);

  } catch (err) {
    console.log("请求失败：", err.message);
  }
}
请求用户列表();
```

### fetch 的 POST 例子（发数据）
```js
async function 发一条评论() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",                    // 请求方法
      headers: {
        "Content-Type": "application/json",  // 告诉服务器发的是 JSON
      },
      body: JSON.stringify({             // 要发的数据（必须转成字符串）
        title: "我的第一篇文章",
        body: "内容内容内容",
        userId: 1,
      }),
    });
    const result = await res.json();
    console.log("提交成功：", result);
  } catch (err) {
    console.log("失败：", err);
  }
}
// 发一条评论();
```

---

## Axios（更好用的请求库，Vue 项目里必用）

**Axios 比 Fetch 好在哪？**
| Fetch | Axios |
|---|---|
| HTTP 404 不会进 catch，要手动检查 | 404/500 **自动进 catch**，省心 |
| 返回的 Response 里 data 要 `.json()` 拿 | 直接 `res.data`，自动解析 |
| 没请求拦截器 | 有拦截器（自动带 token、统一错误提示） |
| 取消请求麻烦 | 简单 |
| 进度监听麻烦 | 自带 |

### 安装 Axios（Day7 的 Vue 项目里装）
```bash
npm install axios
```

### CDN 引入（纯 html 里不用 npm，直接引）
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### axios.get(url) / axios.post(url, data) —— 最常用
- **作用**：发请求，自动处理 JSON 和错误
- **返回值**：Promise（里面包着一个对象，**数据在 `.data` 属性里**）
- **例子（对比 Fetch）**：

```js
// 用 Axios 发同样的 GET 请求
async function axios版() {
  try {
    // Axios 自动帮你处理了 JSON 解析、错误判断
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    // res.data = 真实数据（不是 res.json()！）
    console.log("拿到了", res.data.length, "个用户");
  } catch (err) {
    // 404/500 自动进来了
    console.log("失败：", err.message);
  }
}
axios版();
```

### axios.create(配置) —— 创建一个"定制化 axios"
- **作用**：批量设置 baseURL、超时等，后面用不用都写一遍
- **返回值**：一个定制化的请求实例
- **例子**：

```js
// 造一个"专门请求 jsonplaceholder 的 axios"
const request = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 8000,          // 8 秒超时
});

// 以后用它：
async function getUser(id) {
  const res = await request.get(`/users/${id}`);   // 自动拼 baseURL
  console.log(res.data);
}
getUser(1);
```

###  拦截器（面试高频，先看懂就好）
```js
// 请求拦截器：每次发请求前自动执行
request.interceptors.request.use((config) => {
  console.log("👉 正在请求：", config.method, config.url);
  // config.headers.Authorization = "Bearer xxx";  // 自动带 token
  return config;
});

// 响应拦截器：每次拿到响应后自动执行
request.interceptors.response.use(
  (res) => res,          // 成功时啥也不做就返回
  (err) => {             // 失败时统一处理
    if (err.response?.status === 401) alert("请先登录！");
    if (err.response?.status === 500) alert("服务器炸了");
    return Promise.reject(err);
  }
);
```

---

## Day4 作业

### 作业：新建 `fetch-demo.html`，请求真实接口并渲染到页面

```html
<!DOCTYPE html>
<html lang="zh-CN">
<body>
  <h3>📋 真实接口请求 Demo</h3>
  <div id="loading">⏳ 加载中...</div>
  <ul id="userList"></ul>

  <script>
    const loadingEl = document.querySelector("#loading");
    const listEl = document.querySelector("#userList");

    async function 加载用户列表() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("HTTP " + res.status);
        const users = await res.json();

        loadingEl.style.display = "none";   // 隐藏"加载中"

        // 遍历渲染
        users.forEach(u => {
          const li = document.createElement("li");
          li.innerText = `${u.name} —— 📧 ${u.email}`;
          listEl.appendChild(li);
        });
      } catch (err) {
        loadingEl.innerHTML = "❌ 加载失败：" + err.message;
      }
    }
    加载用户列表();
  </script>
</body>
</html>
```

**验收**：
- [ ] 页面先显示 "加载中..."，然后显示 10 个用户名字和邮箱 ✅
- [ ] 断网或改坏 URL → 页面显示红色错误 ✅
- [ ] F12 → Network 面板能看到请求发出、Status 200 ✅

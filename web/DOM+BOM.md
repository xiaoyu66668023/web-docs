# DOM + BOM：让页面听你指挥

---

## DOM 是什么？

DOM = Document Object Model（文档对象模型）。**大白话：浏览器把 HTML 页面里的所有标签都变成了可以被 JS 操控的"对象"**。

```html
<!-- HTML 页面 -->
<div id="box">
  <p class="red">你好</p>
  <button>点我</button>
</div>
```

浏览器加载后，JS 可以这样操控：
```js
// document = 整个页面（DOM 的根）
// 选到 id="box" 的那个 div 元素
let box = document.querySelector("#box");

// 改里面的文字
box.innerText = "改了！";

// 给它加个样式
box.style.background = "red";
```

| 名称 | 类型 | 能不能自己改 |
|------|------|:---:|
| `box`、`p`、`btn` | 自定义变量名 | ✅ 随便改 |
| `document` | 浏览器自带对象 | ❌ 不能改 |
| `querySelector` | 自带方法 | ❌ 不能改 |
| `onclick` | 自带事件属性 | ❌ 不能改 |
| `innerText` | 自带属性 | ❌ 不能改 |
| `style` | 自带样式对象 | ❌ 不能改 |
| `color` / `background` | 样式属性 | ❌ 不能改 |
| `let`、`function` | JS 关键字 | ❌ 不能改 |
| `id="box"`、`class="red"` | HTML 自定义标识 | ✅ 你自己设置 |
---

## 选择器：怎么找到页面上的元素？

### document.querySelector("选择器") —— 选第一个匹配的
- **作用**：按 CSS 选择器语法选第一个符合的元素
- **参数**：一个字符串（CSS 选择器语法，比如 "#id"、".class"、"标签名"）
- **返回值**：选中的那个元素对象（没找到返回 `null`）
- **最简例子**：

```js
// 选 id="myInput" 的元素 → 用 #
let inp = document.querySelector("#myInput");

// 选 class="title" 的元素 → 用 .
let title = document.querySelector(".title");

// 选第一个 <button> 标签 → 直接写标签名
let btn = document.querySelector("button");

// 复合选择器（层级、组合都行）
let firstLi = document.querySelector("ul li:first-child");
```


### document.querySelectorAll("选择器") —— 选所有匹配的
- **作用**：选所有符合条件的，返回一个"类似数组"的集合
- **返回值**：NodeList（不是真的数组！要转数组才能用 map/filter）
- **例子**：

```js
// 选所有 <li>
let allLis = document.querySelectorAll("li");

// NodeList 可以直接 forEach
allLis.forEach(li => console.log(li));

// 想转成真数组（为了用 map/filter）：
let liArray = [...allLis];   // 扩展运算符一键转
```

### document.getElementById("id") —— 老写法，只能按 id 选
- 跟 `document.querySelector("#id")` 等价，但更旧
- 现代写法推荐直接用 `querySelector`

---

## 事件绑定：让元素"会反应"

### 元素.addEventListener("事件名", 回调函数)
- **作用**：告诉浏览器"当这个元素发生某件事时，执行这段代码"
- **参数**：
  - 第 1 个（必填）：事件名字符串（`"click"`、`"input"`、`"keydown"` 等）
  - 第 2 个（必填）：事件发生时执行的函数
- **返回值**：无
- **最简例子**：

```js
let btn = document.querySelector("#myBtn");

// 点击事件
btn.addEventListener("click", () => {
  alert("你点我了！");
});

// 也可以用 function 写法，函数参数是"事件对象"（记 e）
btn.addEventListener("click", (e) => {
  // e 里有很多信息：点击坐标、触发元素等
  console.log("点击位置：", e.clientX, e.clientY);
  console.log("触发事件的元素：", e.target);
});
```

### 常用事件名速查表
| 事件名 | 什么时候触发 |
|---|---|
| `"click"` | 鼠标左键点击 |
| `"dblclick"` | 双击 |
| `"input"` | 输入框内容变化时（打字就触发） |
| `"keydown"` | 按下某个键 |
| `"keyup"` | 松开某个键 |
| `"mouseover"` | 鼠标悬停上去 |
| `"mouseout"` | 鼠标移开 |
| `"submit"` | 表单提交 |
| `"load"` | 页面/图片加载完成 |

### 事件委托（性能优化，高频面试）
**问题**：一个列表里有 100 个 `<li>`，如果每个都绑事件 → 100 个监听器，又占内存又卡。

**解法**：利用"事件冒泡"机制，只给父元素绑一个监听器，判断点击的是不是目标元素。

```html
<ul id="fruitList">
  <li>🍎 苹果</li>
  <li>🍌 香蕉</li>
  <li>🍊 橘子</li>
</ul>
```

```js
// 只给 ul 绑一个点击事件，用冒泡监听所有 li 的点击
document.querySelector("#fruitList").addEventListener("click", (e) => {
  // e.target = 实际被点击的那个元素（不是 ul！）
  if (e.target.tagName === "LI") {
    // 只处理点击 <li> 的情况
    console.log("你点了：", e.target.innerText);
  }
});
```

---

## 增删改查 DOM 元素

### 改内容
```js
let box = document.querySelector("#box");

// 改文字（纯文本，不解析 HTML 标签）
box.innerText = "新文字";

// 改 HTML（会解析 <b>、<img> 等标签）
box.innerHTML = "<b>加粗文字</b>";

// 改样式
box.style.color = "red";
box.style.fontSize = "20px";
box.style.background = "#f0f0f0";

// classList：加/删/切换 class（比直接改 className 好用）
box.classList.add("active");       // 加一个 class
box.classList.remove("active");    // 删一个 class
box.classList.toggle("active");     // 有就删、没有就加
box.classList.contains("active");  // 查询是否有某个 class（返回 true/false）
```

### 创建元素 + 塞进页面
```js
// 1. 创建一个新的 <li> 元素
let newLi = document.createElement("li");

// 2. 给它装内容
newLi.innerText = "新的一项";
newLi.style.color = "blue";

// 3. 塞进父元素
let ul = document.querySelector("#list");
ul.appendChild(newLi);   // 插到 ul 末尾
```

### 删除元素
```js
let item = document.querySelector("#itemToDelete");
item.remove();   // 一键删除
```

---

## BOM：操控浏览器窗口

BOM = Browser Object Model，就是 `window` 对象下面的东西。

### 最常用的 4 个 BOM 对象

#### 1. window.location —— 地址栏相关
```js
location.href      // "https://www.baidu.com/" 完整网址（可读可写，写了会跳转）
location.hostname  // "www.baidu.com" 域名
location.pathname  // "/" 路径
location.search    // "?id=1&page=2" 查询参数
location.hash      // "#section2" 锚点

// 页面跳转（三种方式，都行）
location.href = "https://www.baidu.com";
location.assign("https://www.baidu.com");
location.replace("https://www.baidu.com");  // ← 不进历史记录，不能后退
```

#### 2. window.history —— 前进后退
```js
history.back();     // 后退一页（点浏览器 ←）
history.forward();  // 前进一页（点浏览器 →）
history.go(-3);     // 后退 3 页
```

#### 3. window.localStorage —— 本地存储（**Day3 Todo 必用**）
浏览器里存数据，关掉浏览器还在。**只能存字符串！**

```js
// 存
localStorage.setItem("userName", "张三");

// 取
let name = localStorage.getItem("userName");   // "张三"
let age = localStorage.getItem("age");          // null（没存过就是 null）

// 删
localStorage.removeItem("userName");

// 全清
localStorage.clear();

//  存对象/数组必须转字符串！取回来再转回来
let myData = { name: "张三", list: [1, 2, 3] };
localStorage.setItem("myData", JSON.stringify(myData));   // 对象→字符串

let 取回来 = JSON.parse(localStorage.getItem("myData"));   // 字符串→对象
console.log(取回来.name);   // "张三"
console.log(取回来.list);   // [1, 2, 3]
```

#### 4. window.navigator —— 浏览器信息（了解）
```js
navigator.userAgent   // 浏览器名字、版本、操作系统
navigator.language    // 浏览器语言，比如 "zh-CN"
navigator.platform    // 操作系统，比如 "Win32"
```

---

## Day3 核心作业：原生 Todo 应用

**目标**：写一个网页，能添加待办、删除待办、刷新页面数据不丢。

1. VS Code 新建 `todo.html`
2. 粘贴下面**逐行注释**的代码
3. 右键 → Open with Live Server 跑起来

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>我的待办</title>
  <style>
    /* 纯装饰性样式，看不懂就直接复制 */
    body { font-family: sans-serif; max-width: 400px; margin: 40px auto; }
    li { margin: 6px 0; }
    button { margin-left: 8px; cursor: pointer; }
    .done { text-decoration: line-through; color: #999; }
  </style>
</head>
<body>
  <h3>📝 我的待办清单</h3>

  <!-- 这是输入框，用户在这里打字 -->
  <input type="text" id="inp" placeholder="输入待办事项" style="width:240px;padding:6px;">

  <!-- 这是添加按钮 -->
  <button id="addBtn" style="padding:6px 12px;">添加</button>

  <!-- 这是列表，待办项都塞在这个 ul 里 -->
  <ul id="list"></ul>

  <script>
    // ========== 第一步：先"选到"页面上的元素 ==========
    const inpEl = document.querySelector("#inp");       // 输入框
    const addBtn = document.querySelector("#addBtn");    // 添加按钮
    const listEl = document.querySelector("#list");      // 列表容器

    // ========== 第二步：准备数据 ==========
    // 从 localStorage 读之前存的待办；没有就用空数组
    // JSON.parse 把 localStorage 里的字符串变回数组
    let todoList = JSON.parse(localStorage.getItem("myTodos")) || [];
    // localStorage 只能存字符串，所以读出来是字符串格式的数组
    // JSON.parse 负责把 "[\"吃饭\",\"睡觉\"]" → ["吃饭", "睡觉"]

    // ========== 第三步：定义三个函数 ==========

    // 函数 1：保存数据到 localStorage
    function save() {
      // localStorage.setItem(键名, 值) —— 值必须是字符串
      // JSON.stringify 把数组/对象变成字符串
      localStorage.setItem("myTodos", JSON.stringify(todoList));
    }

    // 函数 2：渲染（把 todoList 数组里的东西"画"到页面上）
    function render() {
      listEl.innerHTML = "";   // 先清空列表，准备重画

      // 遍历数组，每个待办项生成一个 <li>
      todoList.forEach((item, index) => {
        // 造一个新的 <li> 元素
        const li = document.createElement("li");
        li.innerText = item;   // 把待办文字塞进去

        // 造一个"删除"按钮
        const delBtn = document.createElement("button");
        delBtn.innerText = "删除";

        // 点击删除按钮时：
        delBtn.addEventListener("click", () => {
          // splice(从哪个下标开始, 删几个) —— 直接改原数组
          todoList.splice(index, 1);
          save();     // 存回 localStorage
          render();   // 重新画页面
        });

        // 把删除按钮塞进 li
        li.appendChild(delBtn);
        // 把 li 塞进 ul 列表
        listEl.appendChild(li);
      });
    }

    // 函数 3：添加待办
    function addTodo() {
      const val = inpEl.value.trim();   // 取输入框的值，trim() 去首尾空格
      if (!val) return;                  // 如果是空的，就什么也不做

      todoList.push(val);   // 推进数组
      inpEl.value = "";     // 清空输入框
      save();               // 存回 localStorage
      render();             // 重新画页面
    }

    // ========== 第四步：绑事件 + 启动 ==========

    // 点击"添加"按钮 → 执行 addTodo 函数
    addBtn.addEventListener("click", addTodo);

    // 在输入框按回车 → 也执行 addTodo 函数
    inpEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") addTodo();
    });

    // 页面加载时先渲染一次（把之前存的待办显示出来）
    render();
  </script>
</body>
</html>
```

**验收清单（跑起来后自测）**：
- [x] 输入框打字 → 点添加 → 列表多出一项 ✅
- [x] 点"删除" → 那一项消失 ✅
- [x] **刷新浏览器页面** → 之前添加的待办还在 ✅（这就是 localStorage 的威力！）
- [x] 空输入点添加 → 不会加空白项 ✅
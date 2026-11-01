# JavaScript基础学习

## 1. 语法基础
1. JavaScript（简称 JS）负责页面的行为和交互逻辑：点击按钮后发生什么、如何从后端获取数据、怎么动态更新页面内容。

```javascript
#可以打印东西到控制台，方便调试
console.log("你好");                 // 输出 "你好"
console.log(123);                    // 输出数字 123
console.log("结果是：", 1 + 2);      // 输出 "结果是：3"（多个值用逗号隔开）
console.log(true, false, null, undefined);  // 可以同时输出很多
```
2. 变量的声明和赋值
```javascript
// 声明变量 = 造一个盒子并给它起名字
// let / const / var 是造盒子的三种方式，先用 let 和 const 就行

let userName = "张三";    // 造个叫 userName 的盒子，装了个字符串 "张三"
let age = 18;             // 造个叫 age 的盒子，装了个数字 18
const pi = 3.14159;       // const 造的盒子"封死"了，装进去就不能换
// pi = 3;  ← 这行会报错！const 不能重新赋值

console.log(userName);    // 打开盒子 userName，打印里面的值 → "张三"
userName = "李四";        // let 造的盒子可以换内容 → 现在装的是 "李四"
console.log(userName);    // "李四"

//let：盒子内容可以换，推荐 90% 场景都用它
//const：盒子内容不能换，适合固定值（比如 π、配置、import）
//var：老写法，容易出 bug，别用
```

```javascript
// typeof 是一个运算符，用于判断变量的类型
typeof "你好"      // "string"
typeof 123         // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" ← 这是 JS 的历史 bug，永远这样，记住就行
typeof []          // "object" ← 数组也是 object！判断数组用 Array.isArray()

```

```javascript
// 对象 = 一个盒子装多件东西，每件东西有名字（叫 key）
let person = {
  name: "张三",      // key: value 形式，name 是名字，"张三"是值
  age: 18,
  gender: "男"
};
// 取值：盒子.key 或 盒子["key"]
console.log(person.name);      // "张三"
console.log(person["age"]);   // 18

// 数组 = 一堆东西按顺序排好的盒子（也是 Object）
let fruits = ["苹果", "香蕉", "橘子"];
// 取值：盒子[下标]，下标从 0 开始！
console.log(fruits[0]);   // "苹果"（第 1 个）
console.log(fruits[1]);   // "香蕉"（第 2 个）
console.log(fruits.length); // 3（数组长度）
```

```javascript
总结:// 基础类型：盒子里直接装值，赋值时"复制一份"
let a = 10;
let b = a;   // 把 a 的值 10 复制给 b
b = 20;      // 只改 b
console.log(a); // 10 ← a 不受影响 

// 对象/数组：盒子里装的是"地址"，两个盒子指向同一个地方
let obj1 = { name: "A" };
let obj2 = obj1;          // 把地址复制给 obj2，指向同一个对象！
obj2.name = "B";          // 修改了 obj2 指向的对象
console.log(obj1.name);   // "B" ← obj1 也变了！

// 想"复制对象让它们互不影响"：
let obj3 = { ...obj1 };   // 用扩展运算符 ... ，把 obj1 的所有属性复制到 obj3 中
obj3.name = "C";
console.log(obj1.name);   // "B" ← 没变 
```

```javascript
// 算术运算符
1 + 2        // 3
10 - 3       // 7
4 * 5        // 20
10 / 2       // 5
10 % 3       // 1（取余，10 除以 3 余 1）
3 ** 2       // 9（幂运算，3 的 2 次方）

// 字符串拼接（+ 号两边有字符串就变拼接）
"你好" + "世界"   // "你好世界"
"今年" + 2026     // "今年2026"（数字被自动转成字符串）

// 比较运算符（返回 true/false）
5 > 3        // true
5 < 3        // false
5 >= 5       // true
5 == "5"     // true（宽松等于，会自动转类型）
5 === "5"    // false（严格等于，不转类型，**推荐永远用 ===**）
null === undefined  // false

// 逻辑运算符
true && false   // false（并且）
true || false   // true（或者）
!true           // false（取反）

// 条件运算符
// 用于根据条件执行不同的代码块 if 判断 + for 循环
let score = 85;
if (score >= 90) {
  console.log("优秀 A");
} else if (score >= 80) {
  console.log("良好 B");    // ← 会走到这里
} else if (score >= 60) {
  console.log("及格 C");
} else {
  console.log("不及格 D");
}

// 三元运算符（if-else 只有一行时的简写）
// 条件 ? 真值 : 假值
let isAdult = score >= 60 ? "及格" : "不及格";

// 基本写法：for (起始值; 条件; 每次变多少)
for (let i = 0; i < 5; i++) {
  console.log("这是第", i, "次");
}
// 输出：这是第 0 次 / 第 1 次 / 第 2 次 / 第 3 次 / 第 4 次

// 遍历数组（两种写法）
let fruits = ["苹果", "香蕉", "橘子"];

// 写法 1：传统下标循环
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);   // 下标 + 值
}

// 写法 2：for...of（更现代，只读值）
for (let item of fruits) {
  console.log(item);           // 只有值
}

// 写法 3：for...in（遍历对象的 key）
let person = { name: "张三", age: 18 };
for (let key in person) {
  console.log(key, person[key]);  // name 张三 / age 18
}
```
## 2.函数基础

- 作用：把重复用的代码包起来，起个名字，以后要复用就调这个名字
- 参数：函数"干活"需要的原料（可以多个，逗号隔开，也可以没参数）
- 返回值：函数干完活"吐"出来的结果（用 return 指定）
- 例子：
```javascript
// 造一个叫 "greet" 的工具箱，需要 1 个参数（name）
function greet(name) {
  // 参数 name 是别人传进来的名字
  return "你好，" + name + "！";   // 干完活返回一句问候
}

// 用这个工具箱：
let result = greet("小明");   // 把 "小明" 传给 name，得到返回值
console.log(result);          // "你好，小明！"

// 没有 return 的函数默认返回 undefined
function sayHi() {
  console.log("Hi");
}
console.log(sayHi());   // undefine

//箭头函数
// 传统写法
function add(a, b) { return a + b; }

// 箭头写法（完全等价，只是更短）
const add = (a, b) => { return a + b; };
// 一行返回可以更短（省略 {} 和 return）
const addShort = (a, b) => a + b;

console.log(add(1, 2));      // 3
console.log(addShort(1, 2)); // 3
```

## 3.内置对象方法js自带
```javascript
// 字符串方法
// 用于操作字符串，比如获取长度、转换大小写、查找子字符串等
let s = "Hello World";

s.length                    // 11（字符串长度，注意是属性不是方法，没括号）
s.toUpperCase()             // "HELLO WORLD"（转大写）
s.toLowerCase()             // "hello world"（转小写）
s.includes("World")         // true（是否包含某段文本）
s.indexOf("World")          // 6（找位置，找不到返回 -1）
s.slice(0, 5)               // "Hello"（截取第 0 到第 5 个）
s.replace("World", "JS")    // "Hello JS"（替换）
s.split(" ")                // ["Hello", "World"]（按分隔符切成数组）
s.trim()                    // 去掉首尾空格

//Math数学方法
// 用于操作数字，比如取绝对值、取整、随机数等
Math.PI          // 3.141592653589793（π 的值）
Math.round(3.6)  // 4（四舍五入）
Math.ceil(3.1)   // 4（向上取整）
Math.floor(3.9)  // 3（向下取整）
Math.max(1,5,3)  // 5（最大数）
Math.min(1,5,3)  // 1（最小数）
Math.abs(-10)    // 10（绝对值）
Math.random()    // 0 到 1 之间的随机小数（比如 0.314）

// 常用：1-100 的随机整数
Math.floor(Math.random() * 100) + 1

//Date日期方法
// 创建一个日期对象（当前时间）
let now = new Date();

now.getFullYear()     // 2026（年）
now.getMonth()        // 9 ← ⚠️ 月份从 0 开始！10 月是 9
now.getDate()         // 28（几号）
now.getDay()          // 3（星期几，0=周日，1=周一…）
now.getHours()        // 小时
now.getMinutes()      // 分
now.getSeconds()      // 秒

// 补零（padStart：如果不够 2 位，前面补 "0"）
let m = String(now.getMonth() + 1).padStart(2, "0");
// String(9).padStart(2, "0") → "09"
```

## 4. 数组方法
1.1 arr.map(回调函数) —— 每个元素加工一下，返回新数组
作用：原数组每个元素做一遍相同的事，收集结果到新数组
```javascript
let nums = [1, 2, 3, 4];

// 把每个数字都翻倍
let doubled = nums.map((item, index) => {
  // item = 当前元素，比如第一次是 1
  // index = 当前下标，第一次是 0
  return item * 2;   // 返回加工后的结果
});
console.log(doubled);   // [2, 4, 6, 8]
console.log(nums);      // [1, 2, 3, 4] ← 原数组没变 
```
1.2 arr.filter(回调函数) —— 筛选出符合条件的元素，返回新数组
作用：原数组每个元素做一遍相同的事，收集符合条件的元素到新数组
```javascript
let nums = [1, 2, 3, 4, 5, 6];

// 只留偶数
let evens = nums.filter(item => item % 2 === 0);
console.log(evens);    // [2, 4, 6]
console.log(nums);      // [1, 2, 3, 4, 5, 6] ← 原数组没变 
```

1.3 arr.find(回调函数) —— 找到符合条件的第一个元素，返回该元素
作用：原数组每个元素做一遍相同的事，找到第一个符合条件的元素，返回该元素
```javascript
let nums = [1, 2, 3, 4, 5, 6];

// 找到第一个偶数
let firstEven = nums.find(item => item % 2 === 0);
console.log(firstEven);    // 2
console.log(nums);      // [1, 2, 3, 4, 5, 6] ← 原数组没变 
```
1.4 arr.findIndex(回调函数) —— 找到符合条件的第一个元素的下标，返回该下标，
作用：原数组每个元素做一遍相同的事，找到第一个符合条件的元素的下标，返回该下标
```javascript
let nums = [1, 2, 3, 4, 5, 6];

// 找到第一个偶数的下标
let firstEvenIndex = nums.findIndex(item => item % 2 === 0);
console.log(firstEvenIndex);    // 1
console.log(nums);      // [1, 2, 3, 4, 5, 6] ← 原数组没变 
```
1.5 arr.forEach(回调函数) —— 遍历数组每个元素，执行回调函数
作用：原数组每个元素做一遍相同的事，没有返回值
```javascript
let fruits = ["苹果", "香蕉", "橘子"];
fruits.forEach((item, i) => {
  console.log(`第 ${i + 1} 个水果是 ${item}`);
});
// 输出：
// 第 1 个水果是 苹果
// 第 2 个水果是 香蕉
// 第 3 个水果是 橘子
```

1.6 arr.reduce(回调函数, 初始值) —— 对数组每个元素执行回调函数，返回一个累计值
作用：原数组每个元素做一遍相同的事，累计结果，返回一个累计值
```javascript
let nums = [1, 2, 3, 4];

let sum = nums.reduce((累加器, 当前值) => {
  // 累加器 = 上一轮累加的结果（第一次是初始值 0）
  // 当前值 = 当前遍历到的元素（第一次是 1）
  return 累加器 + 当前值;
}, 0);   // ← 这个 0 就是累加器的初始值

console.log(sum);   // 10

// 执行过程大白话：
// 第 1 轮：0 + 1 = 1
// 第 2 轮：1 + 2 = 3
// 第 3 轮：3 + 3 = 6
// 第 4 轮：6 + 4 = 10 
```
1.7 arr.some(回调函数) —— 检查数组是否有符合条件的元素，返回布尔值
作用：原数组每个元素做一遍相同的事，检查是否有符合条件的元素，返回一个布尔值
```javascript
let nums = [1, 2, 3, 4, 5, 6];

// 检查是否有偶数
let hasEven = nums.some(item => item % 2 === 0);
console.log(hasEven);    // true
console.log(nums);      // [1, 2, 3, 4, 5, 6] ← 原数组没变 
```
## 5. 小试牛刀

```javascript
function formatDate(dateInput) {
  // 如果用户没传 dateInput，就用今天
  let d = dateInput ? new Date(dateInput) : new Date();

  // 分别取年、月、日、时、分、秒
  let y = d.getFullYear();
  let m = String(d.getMonth() + 1).padStart(2, "0");  // ⚠️ 月份要 +1
  let day = String(d.getDate()).padStart(2, "0");
  let h = String(d.getHours()).padStart(2, "0");
  let mi = String(d.getMinutes()).padStart(2, "0");
  let s = String(d.getSeconds()).padStart(2, "0");

  return `${y}-${m}-${day} ${h}:${mi}:${s}`;//输出值无法调用方法
}

// 测试
console.log(formatDate());                          // 现在的时间
console.log(formatDate("2024-01-05T09:08:07"));    // 2024-01-05 09:08:07
```

## 6. 异步函数
什么是异步函数？
- 同步（吃饭时你老婆问你话）
  - 老婆："吃啥？" → 你放下筷子回答 → 继续吃
  - 同步 = 一件事做完才做下一件，会"卡"住

- 异步（你妈在厨房喊你，你继续吃饭，吃完再去）
  - 妈在厨房喊："饭好了！" → 你继续吃菜不搭理 → 吃完了才去盛饭  
  - 异步 = 不等，先做后面的，等事情"办好"了再回来处理

- JS 里什么时候会异步？
  - setTimeout 定时器（延迟执行）
  - 网络请求（Fetch / Axios，请求发出去不知道对方什么时候回）
  - Promise、async/await（专门用来处理异步）

第一个异步 API：setTimeout(回调函数, 延迟毫秒数)

setTimeout(函数, 毫秒数)
- **作用**：延迟 N 毫秒后执行某件事（只执行一次）
- **参数**：
  - 第 1 个（必填）：延迟后要执行的函数
  - 第 2 个（必填）：延迟多少毫秒（1 秒 = 1000 毫秒）
- **返回值**：一个编号（用 `clearTimeout(编号)` 可以取消）
- **最简例子**：

```js
console.log("A");

// 延迟 2 秒后打印 "B"
setTimeout(() => {
  console.log("B（2 秒后）");
}, 2000);

console.log("C");
// 输出顺序：A → C → （等 2 秒）→ B
// 为什么 C 在 B 前面？因为 setTimeout 是异步，不阻塞后面的代码！
```

setInterval(函数, 毫秒数) —— 循环执行
```js
// 每隔 1 秒打印一次 "滴答"
let timerId = setInterval(() => {
  console.log("滴答");
}, 1000);

// 5 秒后停掉（5 次滴答后）
setTimeout(() => clearInterval(timerId), 5000);
```

---

Promise：异步的"合同"

Promise 是 JS 里专门用来表示"一件迟早会出结果的事"的对象。就像你在餐厅点单：服务员给你一个取餐号，餐做好了叫你 —— 这个"取餐号"就是 Promise。

- Promise 有三种状态（只会变一次）
```
pending（等待中）→ fulfilled（成功，拿到餐了）
                → rejected（失败，厨师说没食材了）
```

- new Promise((resolve, reject) => { ... }) —— 造一个 Promise
  - **作用**：手动造一个"未来会出结果"的东西
  - **参数**：一个函数，有两个参数 `resolve`（成功时调用）和 `reject`（失败时调用）
  - **返回值**：Promise 对象
  - **最简例子**：

```js
// 造一个 Promise，模拟"2 秒后告诉你成功还是失败"
let p = new Promise((resolve, reject) => {
  // 这里写"异步干活"的代码
  setTimeout(() => {
    let random = Math.random();   // 0-1 随机小数
    if (random > 0.3) {
      // 70% 概率成功
      resolve("🎉 成功！拿到数据了：" + random);
    } else {
      // 30% 概率失败
      reject(new Error("💥 失败！随机数太小了"));
    }
  }, 2000);   // 等 2 秒
});

// 用 .then 处理成功，用 .catch 处理失败
p.then((结果) => {
  // resolve 传进来的值在 "结果" 这里
  console.log("Promise 成功：", 结果);
}).catch((错误) => {
  // reject 传进来的错误在 "错误" 这里
  console.log("Promise 失败：", 错误.message);
}).finally(() => {
  // 无论成功还是失败都执行
  console.log("Promise 结束了，不管成败");
});
```

- 执行顺序（很重要）：
```
1. 打印 "p 已创建"
2. 2 秒等待…
3. 随机成功 → 进 .then ；随机失败 → 进 .catch
4. 都结束后进 .finally
```

---

- async / await：Promise 的"简写"，用同步的写法写异步

- 为什么需要 async/await？
Promise 套 Promise 会越来越深（叫"回调地狱"），async/await 让代码看起来像同步的，好读多了。

- async function 函数名() { await promise对象 }
  - **作用**：声明一个"会等异步结果"的函数
  - **规则**：
  1. `await` **必须**写在 `async` 函数里面
  2. `await` 会**停在那里等** Promise 出结果（成功继续，失败报错）
  3. 用 `try...catch` 捕获错误（否则报错会变成红色警告）
- **最简例子**（拿之前的 Promise 来用）：

```js
// 原来的 Promise 写法：
p.then(结果 => { console.log(结果); })
 .catch(错误 => { console.log(错误); });

// async/await 写法（看起来像同步代码，好读多了）：
async function 处理结果() {
  try {
    let 结果 = await p;      // ← 停在这里等 p 出结果
    console.log("成功：", 结果);  // 成功才会走到这里
  } catch (错误) {
    // Promise reject 时会跳到这里
    console.log("失败：", 错误.message);
  } finally {
    console.log("完事");
  }
}
处理结果();
```

- Promise.all([p1, p2, p3]) —— "并发等多个，全成功才成"
  - **作用**：同时发多个异步请求，**全部成功**才继续；**一个失败全部失败**
  - **参数**：一个数组，里面装多个 Promise
  - **返回值**：成功时返回所有结果组成的数组，顺序跟传进去的 Promise 顺序一致
  - **例子**：

```js
// 同时请求 3 个独立的数据
async function 批量请求() {
  try {
    let [u1, u2, u3] = await Promise.all([
      fetch("/users/1"),
      fetch("/users/2"),
      fetch("/users/3"),
    ]);
    console.log("3 个都成功了：", u1, u2, u3);
  } catch (err) {
    console.log("有一个失败了：", err.message);
  }
}
```

## 📝 Day2 作业

### 作业：封装一个模拟请求函数 + 用 async/await 调它

要求：
1. 写一个 `mockRequest(url)` 函数，返回 Promise，800ms 后随机成功/失败
2. 用 `async/await + try/catch` 调用它
3. 同时用 `Promise.all` 并发请求两个不同的 url

**参考答案**：
```js
// 1. 封装模拟请求
function mockRequest(url) {
  return new Promise((resolve, reject) => {
    // 模拟 800ms 网络延迟
    setTimeout(() => {
      // 85% 成功概率
      if (Math.random() > 0.15) {
        resolve({ url, code: 200, data: "这是 " + url + " 的数据" });
      } else {
        reject(new Error("请求 " + url + " 超时了"));
      }
    }, 800);
  });
}

// 2. 用 async/await 调用
async function testGet() {
  try {
    console.log("开始请求 /api/user ...");
    let resp = await mockRequest("/api/user");
    console.log("✅ 成功：", resp.data);
  } catch (err) {
    console.log("❌ 失败：", err.message);
  }
}
testGet();

// 3. 并发请求
async function testBatch() {
  try {
    let [user, posts] = await Promise.all([
      mockRequest("/api/user"),
      mockRequest("/api/posts"),
    ]);
    console.log("✅ 并发成功：", user.data, posts.data);
  } catch (err) {
    console.log("❌ 有失败：", err.message);
  }
}
// testBatch();   // 打开注释试试
```
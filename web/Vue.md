# 🟢 Day5 · Vue3 框架：让写网页快 10 倍（4h）

### 🕐 时间分配
| 阶段 | 做什么 |
|---|---|
| 第 1 小时 | 什么是 Vue、为什么用、vite 创建项目、目录结构 |
| 第 2 小时 | 6 大指令 + ref/reactive + 模板语法 |
| 第 3 小时 | `<script setup>` 语法糖 + computed/watch |
| 第 4 小时 | 写 Vue 版 Todo 应用 |

---

## 🤔 为什么需要 Vue？

Day3 我们用**原生 JS** 写了 Todo，里面有大量"手动同步 DOM"的代码：
```js
// 改了数组 → 手动清空 innerHTML → 手动 createElement → 手动 appendChild
listEl.innerHTML = "";
todoList.forEach(... createElement ... appendChild ...);
```

**Vue 的核心承诺**：你只管改数据，Vue 帮你同步到页面。

```vue
<!-- Vue 里：数据改了，页面自动跟着变 -->
<li v-for="item in todoList">{{ item }}</li>
<!-- 不用手动 createElement，不用手动 appendChild -->
<!-- todoList.push("新项") → 页面自动多出一个 <li> -->
```

---

## 🏗️ 创建 Vue3 项目（必须用命令行）

在 VS Code 终端里输入这几行（每输一行回车一次）：

```bash
npm create vite@latest vue-todo -- --template vue
cd vue-todo
npm install
npm run dev
```

**命令解释**：
| 命令 | 作用 |
|---|---|
| `npm create vite@latest ...` | 用 Vite 脚手架创建一个 Vue3 项目 |
| `cd vue-todo` | 进入项目目录 |
| `npm install` | 装依赖（第一次跑必须装） |
| `npm run dev` | 启动开发服务器（浏览器自动开） |

最后一行跑起来后，终端会提示类似 `Local: http://localhost:5173/`，浏览器打开就能看到默认页面。

### 目录结构速览
```
vue-todo/
├─ index.html              ← 入口 HTML（只有一个空的 #app）
├─ package.json            ← 项目配置 + 依赖清单
├─ vite.config.js          ← Vite 配置（alias 别名在这加）
├─ node_modules/           ← 依赖包（**不要手动改这个文件夹**）
├─ src/
│  ├─ main.js              ← 入口 JS（把 Vue 挂载到 #app 上）
│  ├─ App.vue              ← 根组件（我们主要改这个）
│  ├─ style.css            ← 全局样式
│  └─ assets/              ← 图片等静态资源
└─ .gitignore              ← Git 忽略文件
```

---

## 🧩 Vue 单文件组件（.vue 文件 = 模板 + 逻辑 + 样式）

打开 `src/App.vue`，你会看到三段结构：

```vue
<template>           ← 第一段：HTML 模板（页面骨架）
  <h1>{{ msg }}</h1>
</template>

<script setup>       ← 第二段：JS 逻辑（数据、函数，自动暴露给模板）
const msg = "Hello Vue!";
</script>

<style scoped>        ← 第三段：CSS 样式（scoped 表示只在这个组件里生效）
h1 { color: blue; }
</style>
```

这就是一个 Vue 组件。**`<script setup>` 是 Vue3 推荐的语法糖**，里面定义的变量/函数自动可以在 `<template>` 里用，不用 return。

---

## 🎯 6 大 Vue 指令（模板里的特殊标签）

指令都是 `v-xxx` 格式，Vue 会"偷偷"帮你干活。

### 1. `{{ }}` —— 插值（把 JS 值显示在页面上）
```vue
<template>
  <p>你好，{{ userName }}！</p>
  <p>1 + 2 = {{ 1 + 2 }}</p>      <!-- 可以直接写表达式 -->
  <p>名字长度：{{ userName.length }}</p>
</template>

<script setup>
const userName = "小明";
</script>
```

### 2. 📌 v-bind（简写 `:`）—— 动态绑定属性
- **作用**：把 JS 变量绑到 HTML 标签属性上（src、href、class 等）
- **例子**：

```vue
<script setup>
const imgUrl = "https://xxx.com/logo.png";
const isActive = true;
</script>

<template>
  <img v-bind:src="imgUrl">                    <!-- 完整写法 -->
  <img :src="imgUrl">                           <!-- 简写，推荐这个 -->

  <!-- 动态 class -->
  <div :class="{ active: isActive, big: true }">
    <!-- isActive 为 true → 加 active 这个 class -->
  </div>
</template>
```

### 3. 📌 v-on（简写 `@`）—— 绑定事件
- **作用**：给元素绑点击、输入等事件
- **例子**：

```vue
<script setup>
const count = ref(0);
function add() { count.value++; }
function sayHi() { alert("Hi"); }
</script>

<template>
  <button v-on:click="add">完整写法</button>
  <button @click="add">简写，推荐</button>
  <button @click="sayHi">点我</button>

  <!-- 事件修饰符（常用） -->
  <input @keyup.enter="add">       <!-- 按回车才触发 -->
  <a @click.prevent="sayHi">       <!-- .prevent 阻止默认行为（比如 <a> 跳转） -->
  </a>
</template>
```

### 4. 📌 v-if / v-else-if / v-else —— 条件渲染
- **作用**：根据条件决定**要不要创建这个元素**（真删真加）
- **例子**：

```vue
<script setup>
const score = ref(85);
</script>

<template>
  <div v-if="score >= 90">优秀 A</div>
  <div v-else-if="score >= 80">良好 B</div>
  <div v-else-if="score >= 60">及格 C</div>
  <div v-else>不及格 D</div>
</template>
```

### 5. 📌 v-show —— 条件显示（只是隐藏）
- **作用**：根据条件决定显不显示（用 `display: none` 隐藏，元素还在 DOM 里）
- **v-if vs v-show 怎么选？**
  - 频繁切换 → 用 `v-show`（性能好，不用反复创建销毁）
  - 很少变 → 用 `v-if`
- **例子**：

```vue
<div v-show="isLoading">加载中...</div>
<!-- 无论 isLoading 是 true 还是 false，这个 div 都在 DOM 里 -->
```

### 6. 📌 v-for —— 列表渲染
- **作用**：遍历数组/对象，生成一串相同的元素
- **必须加 `:key`**（Vue 用来追踪哪个元素变了，类似"身份证号"）
- **例子**：

```vue
<script setup>
const fruits = ref(["苹果", "香蕉", "橘子"]);
const persons = ref([
  { id: 1, name: "张三" },
  { id: 2, name: "李四" },
]);
</script>

<template>
  <!-- 遍历数组（item 是值，index 是下标） -->
  <li v-for="(item, index) in fruits" :key="index">
    {{ index + 1 }}. {{ item }}
  </li>

  <!-- 遍历对象数组（每个 item 是一个对象） -->
  <li v-for="p in persons" :key="p.id">
    用户 {{ p.id }}：{{ p.name }}
  </li>
</template>
```

### 7. 📌 v-model —— 双向绑定表单
- **作用**：让输入框的值和 JS 变量**实时同步**（改一边另一边自动变）
- **例子**：

```vue
<script setup>
const name = ref("");
</script>

<template>
  <!-- 输入框打字 → name 自动更新；name 被改 → 输入框自动显示新值 -->
  <input v-model="name" placeholder="输入名字">
  <p>你输入的是：{{ name }}</p>
</template>
```

---

## 🔄 ref / reactive —— Vue 的"响应式数据"

### 核心概念
- **响应式** = 数据一变，页面自动更新（Vue 的核心魔法）
- 在 `<script setup>` 里，**必须用 `ref` 或 `reactive` 包一下**，否则页面不会自动更新

### 📌 ref(初始值) —— 响应式包装
- **作用**：把一个值变成"响应式"
- **参数**：初始值（数字、字符串、数组、对象都行）
- **返回值**：一个"ref 对象"，**JS 里要 `.value` 取实际值，模板里直接写**（Vue 自动帮你解包）
- **例子**：

```vue
<script setup>
import { ref } from "vue";

// 造响应式数据
const count = ref(0);              // 数字
const name = ref("小明");          // 字符串
const list = ref([]);              // 数组
const config = ref({ theme: "dark" }); // 对象

// JS 里访问必须 .value
count.value++;            // → 1
console.log(count.value); // 1
console.log(name.value);  // "小明"

// list.push 不需要 .value.push，数组/对象内部方法自动响应
list.value.push("苹果");
</script>

<template>
  <!-- 模板里：直接写变量名，不用 .value -->
  <p>计数：{{ count }}</p>
  <button @click="count++">点我 +1</button>   <!-- 模板里也直接改 -->
</template>
```

### 📌 reactive({ ... }) —— 响应式包装对象
- **作用**：专门包装对象/数组（不能包装基本类型！会报错）
- **返回值**：一个响应式代理对象，**直接用，不用 `.value`**
- **例子**：

```vue
<script setup>
import { reactive } from "vue";

const state = reactive({
  name: "张三",
  age: 18,
  list: ["苹果", "香蕉"],
});

// 直接用，不用 .value
state.age++;             // 直接改
state.list.push("橘子"); // 直接 push
</script>

<template>
  <p>{{ state.name }} 今年 {{ state.age }} 岁</p>
</template>
```

### 🧠 ref vs reactive 怎么选？
| 场景 | 选哪个 |
|---|---|
| 基本类型（数字、字符串、布尔） | **ref**（reactive 包不了基本类型） |
| 对象、数组 | 都行，但**推荐 ref**（更一致，不用记两套写法） |
| store 返回多个值 | 用 reactive 包成大对象 |

---

## ⏱️ computed / watch —— 计算属性 / 监听变化

### 📌 computed(函数) —— "算出来的值"，自动追踪依赖
- **作用**：基于已有数据"算"一个新值，依赖变了自动重算
- **特点**：跟 `ref` 一样用，模板里直接写；但**不能手动赋值**（它是算出来的）
- **例子**：

```vue
<script setup>
import { ref, computed } from "vue";

const price = ref(100);
const discount = ref(0.8);

// 算出来的新值
const finalPrice = computed(() => {
  return price.value * discount.value;
});
</script>

<template>
  <p>原价：{{ price }}</p>
  <p>折扣：{{ discount }}</p>
  <p>**实付：{{ finalPrice }}**（自动跟着上面两个变）</p>
</template>
```

### 📌 watch(要监听的值, 回调函数) —— 监听数据变化，干点事
- **作用**：当某个值变化时，执行一段代码（常用于存 localStorage）
- **例子**：

```vue
<script setup>
import { ref, watch } from "vue";

const list = ref([1, 2, 3]);

// 监听 list 的变化
watch(list, (新值, 旧值) => {
  console.log("list 变了！", 旧值, "→", 新值);
  localStorage.setItem("myList", JSON.stringify(新值));
}, { deep: true });   // deep: true 表示"深度监听"（数组/对象内部变化也能抓到）
</script>
```

---

## 🎯 Day5 核心作业：Vue 版 Todo

**目标**：用 Vue 重写 Day3 的 Todo，体验"改数据 = 页面自动更新"的爽感。

**替换 `src/App.vue` 为**：

```vue
<template>
  <div style="max-width:400px;margin:40px auto;font-family:sans-serif;">
    <h3>📝 Vue 版待办</h3>

    <!-- 输入框 + v-model 双向绑定 -->
    <input
      v-model="inputVal"
      placeholder="输入待办，回车添加"
      @keyup.enter="add"
      style="width:240px;padding:6px;"
    >
    <button @click="add" style="padding:6px 12px;">添加</button>

    <!-- 列表 -->
    <ul style="padding-left:0;list-style:none;">
      <li v-for="(item, idx) in list" :key="idx"
          style="padding:6px 0;border-bottom:1px solid #eee;">
        <input type="checkbox" v-model="item.done">
        <span :class="{ done: item.done }">{{ item.text }}</span>
        <button @click="del(idx)" style="margin-left:8px;">删除</button>
      </li>
    </ul>

    <!-- 统计信息（用 computed） -->
    <p v-if="list.length === 0" style="color:#999;">暂无待办 ✨</p>
    <p>共 {{ list.length }} 条，已完成 {{ doneCount }} 条</p>
    <button @click="clearDone" :disabled="doneCount === 0">清除已完成</button>
  </div>
</template>

<script setup>
// 从 vue 包里导入需要的工具
import { ref, computed, watch } from "vue";

// ========== 数据 ==========
// 从 localStorage 读历史数据；没有就用空数组
const list = ref(
  JSON.parse(localStorage.getItem("vue-todos")) || []
);
const inputVal = ref("");

// ========== 计算属性（不用 .value） ==========
const doneCount = computed(() => list.value.filter(i => i.done).length);

// ========== 方法 ==========
function add() {
  const val = inputVal.value.trim();   // 取输入框的值
  if (!val) return;                     // 空的就不加

  list.value.push({ text: val, done: false });   // 推进数组
  inputVal.value = "";                            // 清空输入框
}

function del(index) {
  list.value.splice(index, 1);   // 从 index 开始删 1 个
}

function clearDone() {
  // filter 返回"没完成的"，重新赋值给 list
  list.value = list.value.filter(i => !i.done);
}

// ========== 监听 list 变化 → 自动存 localStorage ==========
watch(list, (val) => {
  localStorage.setItem("vue-todos", JSON.stringify(val));
}, { deep: true });

console.log("组件已挂载 ✅");
</script>

<style>
.done { text-decoration: line-through; color: #999; }
</style>
```

**验收清单**：
- [ ] `npm run dev` 启动正常，显示 Todo ✅
- [ ] 添加、删除、勾选正常 ✅
- [ ] 刷新页面数据不丢（watch + localStorage 生效）✅
- [ ] 模板里直接写 `list`、`doneCount`，没写 `.value` ✅

---

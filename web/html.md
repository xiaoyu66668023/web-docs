# 第一个网页
## 1. HTML 语法基础
1. 没有交互功能的网页；
2. 右键这个文件 → 选 "Open with Live Server"（装了插件才有这个选项）；
3. 浏览器自动打开一个页面，看到"你好，前端世界！🎉"，同时按 F12 → Console 面板里有一行绿色的字 = 一切就绪 ✅
4. 代码解释：
   - `<!DOCTYPE html>`：声明文档类型为 HTML5
   - `<html>`：根元素，包含整个文档
   - `<body>`：包含文档的主体内容
   - `<h1>`：标题元素，显示"你好，前端世界！🎉"
   - `<script>`：包含 JavaScript 代码，用于在页面加载完成后执行 
   - `console.log("我的第一个 JS 代码运行成功了！");`：打印"我的第一个 JS 代码运行成功了！"到控制台
  ```html ；
<!DOCTYPE html>
<html>
<body>
  <h1>你好，前端世界！🎉</h1>
  <script>
    // console.log = 打印东西到控制台，方便调试
    // Chrome 按 F12 → Console 面板就能看到输出
    console.log("我的第一个 JS 代码运行成功了！");
  </script>
</body>
</html>
```

5. 常见标签
    - HTML 由各种标签组成，标签用尖括号包裹，大多数标签成对出现（开始标签 + 结束标签），少数标签（如 `<br>` 换行、`<img>` 图片、`<input>` 输入框）不需要结束标签，因为它们不包裹内容：

```html
<!DOCTYPE html>
<html>
<body>
    <!-- 标题标签：h1 最大，h6 最小 -->
    <h1>一级标题</h1>
    <h3>三级标题</h3>

    <!-- 段落和文本格式 -->
    <p>普通段落，可以包含 <strong>加粗</strong> 和 <em>斜体</em> 文字。</p>

    <!-- 链接和图片 -->
    <a href="https://labuladong.online">这是一个链接</a>
    <br>
    <img src="https://placehold.co/200x80?text=HTML" alt="示例图片">

    <!-- 列表 -->
    <ul>
        <li>无序列表项 1</li>
        <li>无序列表项 2</li>
    </ul>

    <!-- 表单元素 -->
    <input type="text" placeholder="这是输入框">
    <button>这是按钮</button>

    <!-- div 容器 -->
    <div>
        <p>这段内容被 div 包裹，方便分组管理。</p>
    </div>
</body>
</html>
```

6. 标签的属性
  - `id`：为元素指定一个唯一的标识符，用于在 JavaScript 中引用该元素
  - `class`：为元素添加一个或多个类名，用于在 CSS 中选择该元素的样式

```html
<div id="user-profile">...</div>

<p class="highlight">这段文字需要高亮</p>
<p class="highlight">这段也需要高亮</p>
```
7.DOM树
```html
<html>
<head></head>
<body>
    <h1>一级标题</h1>
    <div>
        <p>姓名：张三</p>
        <p>职业：工程师</p>
    </div>
    <button>点击</button>
</body>
</html>
```

浏览器解析后生成的DOM树如下：
```html
html
├── head
└── body
    ├── h1 ("一级标题")
    ├── div
    │   ├── p ("姓名：张三")
    │   └── p ("职业：工程师")
    └── button ("点击")
```
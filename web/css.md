# css 学习
## 1. CSS 语法基础

1. CSS 的基本语法是「选择器 + 样式声明」：

```css
h1 {
    color: red;
}
选择器 {
    属性: 值;
    属性: 值;
}
```

## 2. CSS页面的渲染
```html
/* 标签选择器：所有 <p> 标签 */
p {
    color: gray;
}

/* class 选择器：所有 class="highlight" 的元素（注意前面有个点） */
.highlight {
    background-color: yellow;
}

/* id 选择器：id="title" 的那个元素（注意前面有个井号） */
#title {
    font-size: 32px;
}
```

   - 标签选择器：所有 `<p>`标签
   - class 选择器：所有 class="highlight" 的元素（注意前面有个点）
   - id 选择器：id="title" 的那个元素（注意前面有个井号）

## 3. 开发者工具
  -  Elements（元素）：查看和实时编辑页面的 HTML 和 CSS。你可以直接修改标签内容、调整样式，效果立即反映在页面上（刷新后恢复）
  -  Console（控制台）：执行 JavaScript 代码，查看报错信息。前端调试最常看的就是这个面板
  -  Network（网络）：查看所有网络请求，包括加载了哪些文件、请求了哪些 API、每个请求花了多长时间

  ```html
// 查看当前页面标题
document.title

// 把页面所有段落文字变成红色
// 等于给所有 <p> 标签加上 style="color: red;" 属性
document.querySelectorAll('p').forEach(el => el.style.color = 'red')

// 把本文的标题改掉
document.querySelector('h1').textContent = '被我用 JS 改了！'
  ```

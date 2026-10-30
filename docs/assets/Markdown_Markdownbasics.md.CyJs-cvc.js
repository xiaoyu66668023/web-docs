import{at as e,it as t,n,vt as r}from"./chunks/framework.C8Fy2rKT.js";var i=JSON.parse(`{"title":"Markdown速查","description":"","frontmatter":{},"headers":[],"relativePath":"Markdown/Markdownbasics.md","filePath":"Markdown/Markdownbasics.md","lastUpdated":0}`),a={name:`Markdown/Markdownbasics.md`};function o(n,i,a,o,s,c){return r(),t(`div`,null,[...i[0]||=[e(`<h1 id="markdown速查" tabindex="-1">Markdown速查 <a class="header-anchor" href="#markdown速查" aria-label="Permalink to “Markdown速查”">​</a></h1><div class="language-Markdown" dir="ltr"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">Markdown</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">顶层目录结构</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">文件/目录	说明</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.md	站点首页 — 定义了 Hero 区域和三大学习板块（Web、Go、Python）的特性卡片</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">README.md	项目说明文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">markdown-examples.md	Markdown 语法示例页</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">api-examples.md	API 示例页</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">package.json	项目配置文件 — 定义了依赖（VitePress）和脚本命令（dev/build/preview）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">package-lock.json	npm 依赖锁定文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.gitignore	Git 忽略规则</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.vitepress/ — VitePress 配置与缓存目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">路径	说明</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.vitepress/config.mts	核心配置文件 — 定义站点标题、导航栏、侧边栏（Web/Python/Go 三大板块）、本地搜索、GitHub 社交链接等</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.vitepress/cache/	VitePress 开发缓存 — 存储预构建的依赖文件（Vue、@vueuse、minisearch 等），加速开发时热更新</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.vitepress/Markdown/	Markdown 相关资源目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docs/ — 构建输出目录（生成的静态网站）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这是 VitePress 构建后生成的静态网站文件，包含：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docs/assets/ — 打包后的 JS、CSS、字体文件（Inter 字体家族的 woff2 文件）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docs/go/ — Go 语言页面的 HTML 输出（def.html、type.html）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docs/python/ — Python 页面的 HTML 输出（python.html、base.html）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docs/web/ — Web 页面的 HTML 输出（html.html、css.html、js.html）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docs/index.html — 构建后的首页</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">源文档（Markdown 文件）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">文件路径	所属板块	说明</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">web/html.md	Web 学习	HTML 基础学习笔记</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">web/js.md	Web 学习	JavaScript 基础学习笔记</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">web/css.md	Web 学习	CSS 基础学习笔记</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">python/python.md	Python 学习	Python 基础语法笔记</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">python/base.md	Python 学习	Python 基础补充笔记</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">go/type.md	Go 语言	Go 语言类型相关笔记</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">go/def.md	Go 语言	Go 语言基础/定义相关笔记</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">node_modules/ — 项目依赖</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@babel/ — JavaScript 编译器，VitePress 底层依赖</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@docsearch/ — 文档搜索组件（样式和 JS）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@iconify-json/simple-icons — 图标库</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.bin/ — 可执行命令（vitepress、vite、nanoid 等）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">🚀 常用命令（来自 package.json）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bash</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm run dev      # 启动开发服务器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm run build    # 构建静态网站（输出到 docs/）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm run preview  # 预览构建后的网站</span></span></code></pre></div>`,2)]])}var s=n(a,[[`render`,o]]);export{i as __pageData,s as default};
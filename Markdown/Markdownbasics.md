# Markdown速查
```Markdown
顶层目录结构
文件/目录	说明
index.md	站点首页 — 定义了 Hero 区域和三大学习板块（Web、Go、Python）的特性卡片

README.md	项目说明文件
markdown-examples.md	Markdown 语法示例页
api-examples.md	API 示例页
package.json	项目配置文件 — 定义了依赖（VitePress）和脚本命令（dev/build/preview）
package-lock.json	npm 依赖锁定文件
.gitignore	Git 忽略规则

.vitepress/ — VitePress 配置与缓存目录
路径	说明
.vitepress/config.mts	核心配置文件 — 定义站点标题、导航栏、侧边栏（Web/Python/Go 三大板块）、本地搜索、GitHub 社交链接等
.vitepress/cache/	VitePress 开发缓存 — 存储预构建的依赖文件（Vue、@vueuse、minisearch 等），加速开发时热更新
.vitepress/Markdown/	Markdown 相关资源目录

docs/ — 构建输出目录（生成的静态网站）
这是 VitePress 构建后生成的静态网站文件，包含：
docs/assets/ — 打包后的 JS、CSS、字体文件（Inter 字体家族的 woff2 文件）
docs/go/ — Go 语言页面的 HTML 输出（def.html、type.html）
docs/python/ — Python 页面的 HTML 输出（python.html、base.html）
docs/web/ — Web 页面的 HTML 输出（html.html、css.html、js.html）
docs/index.html — 构建后的首页

源文档（Markdown 文件）
文件路径	所属板块	说明
web/html.md	Web 学习	HTML 基础学习笔记
web/js.md	Web 学习	JavaScript 基础学习笔记
web/css.md	Web 学习	CSS 基础学习笔记
python/python.md	Python 学习	Python 基础语法笔记
python/base.md	Python 学习	Python 基础补充笔记
go/type.md	Go 语言	Go 语言类型相关笔记
go/def.md	Go 语言	Go 语言基础/定义相关笔记

node_modules/ — 项目依赖
@babel/ — JavaScript 编译器，VitePress 底层依赖
@docsearch/ — 文档搜索组件（样式和 JS）
@iconify-json/simple-icons — 图标库
.bin/ — 可执行命令（vitepress、vite、nanoid 等）

🚀 常用命令（来自 package.json）
bash
npm run dev      # 启动开发服务器
npm run build    # 构建静态网站（输出到 docs/）
npm run preview  # 预览构建后的网站
```
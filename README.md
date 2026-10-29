# 提交介绍


配置路径

- 打开这个文件 .vitepress/config.mts
找到 `sidebar`

如果是目录的情况,就复制紫色对象这一块

```js
    {
    text: 'web学习',
    items: [
        { text: 'JavaScript基础学习', link: '/web/js' }, //后面记得加逗号
        { text: 'css学习', link: '/web/css' }, //不需要增加md后缀
    ]
},
```

如果是页面的情况直接新增即可,需要查看目录是哪一个 如果是 python目录新增的文件就需要对应到python下面，其他也是一样的

```js
{ text: 'css学习', link: '/web/css' },
```
- 



如何同步到线上



1. 先打包`npm run build`


2. 提交代码`git add .`

3. 提交暂存区代码 `git commit -m "注释"`

4. 提交到远程 `git push origin master`

5. 等待1-2分钟刷新在线页面
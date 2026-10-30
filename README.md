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

如果出现 表示提交成功

```txt
类似于这种格式
Enumerating objects: 57, done.
Counting objects: 100% (57/57), done.
Delta compression using up to 16 threads
Compressing objects: 100% (36/36), done.
Writing objects: 100% (39/39), 53.78 KiB | 2.83 MiB/s, done.
Total 39 (delta 15), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (15/15), completed with 10 local objects.
To https://github.com/xiaoyu66668023/web-docs.git
   df6db4f..02f1a53  master -> master
```
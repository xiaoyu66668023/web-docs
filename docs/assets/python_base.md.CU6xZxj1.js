import{at as e,it as t,n,vt as r}from"./chunks/framework.C8Fy2rKT.js";var i=JSON.parse(`{"title":"不会的内容，存疑问题，需要进一步查找资料学习","description":"","frontmatter":{},"headers":[],"relativePath":"python/base.md","filePath":"python/base.md","lastUpdated":1793545630000}`),a={name:`python/base.md`};function o(n,i,a,o,s,c){return r(),t(`div`,null,[...i[0]||=[e(`<h1 id="不会的内容-存疑问题-需要进一步查找资料学习" tabindex="-1">不会的内容，存疑问题，需要进一步查找资料学习 <a class="header-anchor" href="#不会的内容-存疑问题-需要进一步查找资料学习" aria-label="Permalink to “不会的内容，存疑问题，需要进一步查找资料学习”">​</a></h1><div class="language-python" dir="ltr"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"># 简述以下代码中对变量 __name__ 值的判断语句的作用。</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">#! /usr/bin/env python</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> math</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cal_square</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;Calculates a base number raised to an exponent of two.&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> math.pow(n, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __name__</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;__main__&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    n </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Please enter a number: &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cal_square(n)</span></span></code></pre></div><ol><li>编写Python程序时无需对变量的类型进行声明，但Python仍是强类型语言（变量参与运算时，需对类型进行检查），这是如何做到的？ <ul><li>Python通过动态类型检查和类型转换来实现这一点。</li><li>当变量参与运算时，Python会自动检查变量的类型，如果类型不匹配，会尝试进行类型转换。</li><li>如果类型转换失败，会抛出异常。</li></ul></li></ol><p>python中一切皆为对象，一切对象皆有非真即假的特性。空列表、空字符串、空元组、空字典、空集合、空字节字符串等都为 False。</p><p>什么是函数的形参(formal parameter)？ 什么是函数的实参(actual parameter)？函数内部修改形参是否会影响实参？</p><ul><li>形参：在函数定义时指定的参数，用于接收函数调用时传递的实参。</li><li>实参：在函数调用时传递的参数，用于填充形参。</li><li>函数内部修改形参不会会影响实参，因为形参是函数调用时创建的新对象，与实参是不同的对象。</li><li>函数内部修改实参会会影响实参，因为实参是函数调用时传递的原始对象，函数内部修改了实参，也会修改原始对象。</li></ul><div class="language-" dir="ltr"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>可迭代器对象（iterable object）和迭代器（iterator）的区别？</span></span>
<span class="line"><span>- 可迭代器对象：可以被遍历的对象，例如列表、元组、字符串等。</span></span>
<span class="line"><span>- 迭代器：可以被遍历的对象，例如列表的迭代器、元组的迭代器等。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>什么是类（class）？什么是实例（instance）？什么是属性（attribute）？什么是方法（method）？什么是对象（object）？</span></span>
<span class="line"><span>- 类：定义了对象的属性和方法的模板。</span></span>
<span class="line"><span>- 实例：根据类创建的具体对象。</span></span>
<span class="line"><span>- 属性：对象的特征，例如姓名、年龄等。</span></span>
<span class="line"><span>- 方法：对象的行为，例如说、走等。</span></span>
<span class="line"><span>- 对象：类的实例，是具体的具体实现。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>何为python默认异常处理机制？python既有默认的异常处理机制，为什么要亲自处理异常？</span></span>
<span class="line"><span>- 默认的异常处理机制：当程序运行时，如果发生异常，Python会自动捕获异常并执行默认的异常处理代码。</span></span>
<span class="line"><span>- 为什么要亲自处理异常？</span></span>
<span class="line"><span>  - 自定义异常处理：根据程序的需求，对异常进行自定义处理，例如记录日志、发送邮件通知等。</span></span>
<span class="line"><span>  - 避免程序崩溃：在发生异常时，程序可以继续运行，而不是崩溃。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>python标准库（standard library）和第三方包（third-party package）的区别？二者分别如何使用？第三方包通常如何安装？</span></span>
<span class="line"><span>- 标准库：Python自带的库，包含了基本的功能和数据类型。</span></span>
<span class="line"><span>- 第三方包：由社区开发的库，提供了额外的功能和数据类型。</span></span>
<span class="line"><span>- 第三方包通常通过pip安装，例如：pip install requests。 </span></span>
<span class="line"><span>- 第三方包的使用：在程序中导入第三方包，例如：import requests。 </span></span>
<span class="line"><span>- 第三方包的安装：通过pip安装，例如：pip install requests。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>以下python模块包的导入方式，其对应的文件目录组织结构是什么？</span></span>
<span class="line"><span>- 导入方式：import dir1.dir2.module</span></span>
<span class="line"><span>- 文件目录组织结构：</span></span>
<span class="line"><span>  - dir1/</span></span>
<span class="line"><span>    - dir2/</span></span>
<span class="line"><span>      - module.py</span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span>import dir1.dir2.module</span></span></code></pre></div>`,7)]])}var s=n(a,[[`render`,o]]);export{i as __pageData,s as default};
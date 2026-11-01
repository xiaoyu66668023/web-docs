# 不会的内容，存疑问题，需要进一步查找资料学习

```python
# 简述以下代码中对变量 __name__ 值的判断语句的作用。
#! /usr/bin/env python
import math

def cal_square(n):
    """Calculates a base number raised to an exponent of two."""
    return math.pow(n, 2)

if __name__ == '__main__':
    n = int(input('Please enter a number: '))
    cal_square(n)
```
1. 编写Python程序时无需对变量的类型进行声明，但Python仍是强类型语言（变量参与运算时，需对类型进行检查），这是如何做到的？
   - Python通过动态类型检查和类型转换来实现这一点。
   - 当变量参与运算时，Python会自动检查变量的类型，如果类型不匹配，会尝试进行类型转换。
   - 如果类型转换失败，会抛出异常。 

python中一切皆为对象，一切对象皆有非真即假的特性。空列表、空字符串、空元组、空字典、空集合、空字节字符串等都为 False。

什么是函数的形参(formal parameter)？ 什么是函数的实参(actual parameter)？函数内部修改形参是否会影响实参？
- 形参：在函数定义时指定的参数，用于接收函数调用时传递的实参。
- 实参：在函数调用时传递的参数，用于填充形参。
- 函数内部修改形参不会会影响实参，因为形参是函数调用时创建的新对象，与实参是不同的对象。
- 函数内部修改实参会会影响实参，因为实参是函数调用时传递的原始对象，函数内部修改了实参，也会修改原始对象。
```

可迭代器对象（iterable object）和迭代器（iterator）的区别？
- 可迭代器对象：可以被遍历的对象，例如列表、元组、字符串等。
- 迭代器：可以被遍历的对象，例如列表的迭代器、元组的迭代器等。

什么是类（class）？什么是实例（instance）？什么是属性（attribute）？什么是方法（method）？什么是对象（object）？
- 类：定义了对象的属性和方法的模板。
- 实例：根据类创建的具体对象。
- 属性：对象的特征，例如姓名、年龄等。
- 方法：对象的行为，例如说、走等。
- 对象：类的实例，是具体的具体实现。

何为python默认异常处理机制？python既有默认的异常处理机制，为什么要亲自处理异常？
- 默认的异常处理机制：当程序运行时，如果发生异常，Python会自动捕获异常并执行默认的异常处理代码。
- 为什么要亲自处理异常？
  - 自定义异常处理：根据程序的需求，对异常进行自定义处理，例如记录日志、发送邮件通知等。
  - 避免程序崩溃：在发生异常时，程序可以继续运行，而不是崩溃。

python标准库（standard library）和第三方包（third-party package）的区别？二者分别如何使用？第三方包通常如何安装？
- 标准库：Python自带的库，包含了基本的功能和数据类型。
- 第三方包：由社区开发的库，提供了额外的功能和数据类型。
- 第三方包通常通过pip安装，例如：pip install requests。 
- 第三方包的使用：在程序中导入第三方包，例如：import requests。 
- 第三方包的安装：通过pip安装，例如：pip install requests。

以下python模块包的导入方式，其对应的文件目录组织结构是什么？
- 导入方式：import dir1.dir2.module
- 文件目录组织结构：
  - dir1/
    - dir2/
      - module.py
```python
import dir1.dir2.module
```
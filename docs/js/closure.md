# 闭包

- 闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一
个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域

## 闭包的特性：
- 函数内再嵌套函数
- 内部函数可以引用外层的参数和变量
- 参数和变量不会被垃圾回收机制回收
  
## 说说你对闭包的理解
- 使用闭包主要是为了设计私有的方法和变量。闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻
内存，会增大内存使用量，使用不当很容易造成内存泄露。在 js 中，函数即闭包，只有函数才会产生作
用域的概念

## 闭包的应用

### unary

`['1', '2', '3'].map(parseInt) => [1, NaN, NaN]`

原因在于 map有三个参数 `element`、`index`和`array`，而parseInt接受两个参数 `parse` 和 `radix`，按题目的传输方式，parseInt接受的参数为`parseInt(1, 0) parseInt(2, 1), parseInt(3, 2)`后两者不存在一进制的2和2进制的3，故为NaN

采用以下函数 接受一个给定的多函数参数，并把它转化为只接受一个参数的函数
`const unary = fn => fn.length === 1 ? fn : (arg) => fn(arg);`

`['1', '2', '3'].map(unary(parseInt)) => [1, 2, 3]`

### memoized

记忆函数
``` js
    const memoized = fn => {
        const lookupTable = {};
        return arg => lookupTable[arg] || (lookupTable[arg] = fn(arg));
    }

    let fastFactorial = memoized(n => {
        if (n === 0) {
            return 1;
        }
        return n * fastFactorial(n - 1);
    })
```

# 闭包

- 闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一
个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域

## 闭包的特性：
- 函数内再嵌套函数
- 内部函数可以引用外层的参数和变量
- 参数和变量不会被垃圾回收机制回收

## 说说你对闭包的理解
- 使用闭包主要是为了设计私有的方法和变量。闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。在 js 中，函数即闭包，只有函数才会产生作用域的概念

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

函数式编程 即 f(x) = Y 需满足如下条件：

- 函数必须总是接受一个参数
- 函数必须总是返回一个值
- 函数必须依据接受到的参数（例如x）而不是外部参数运行
- 对于一个给定的X，只会输出唯一的一个Y

### 柯里化

 > 柯里化是把一个多参数函数转化为一个嵌套的一元函数的过程<br>
 > function(a, b, c) => function(a)(b)(c)

柯里化的好处在于可以将参数有重复赋予部分的函数抽取出来

``` js
function curry(fn) {
    if (fn === undefined) {
        // throw error
    }
    return function curriedFn (...args) {
        if (args.length < fn.length) {
            return function () {
                return curriedFn.apply(null, args.concat([].slice.call(arguments)));
            }
        }
        return fn.apply(null, args);
    }
}
```

应用如下：

> 在数组内容中查找数字


``` js
let match = curry(function(expr, str) {
    return str.match(expr);
})

let hasNumber = match(/[0-9]+/);

let filter = curry(function(f, ary) {
    return ary.filter(f);
})

// 结合可创建新函数findNumInArr

let findNumInArr = filter(hasNumber);

findNumInArr(['js', 'aaa1']) // ['aaa1'];

```

### 偏应用

偏应用允许开发者部分地应用函数，其好处体现在可以将重复参数在后方，未知数在前方的函数抽取出来

``` js
function partial(...partArguments) {
    let args = partArguments;
    return functin (...fullArguments) {
        let arg = 0;
        for (let i = 0; i < args.length, args.length < fullArguments; i++) {
            if (args[i] === undefined) {
                args[i] = fullArguments[arg++];
            }
        }
        return fn.apply(null, args);
    }
}
```

应用如下：

``` js
let delayTenMs = partial(setTimeout, undefined, 10);
delayTenMs(() => console.log('我会被打印'));
```


### 组合和管道

> 每个程序的输出应该是另一个尚未可知的程序的输入

组合为从右往左的函数组合，右边的结果是左边的输入，而管道的结合方向相反

``` js
 const compose = (...fns) => {
     value => {
         reduce(fns.reverse(), (acc, fn) => fn(acc), value); // ([数组的项], [函数执行], [初始值])
     }
 }
 const pipe = (...fns) => {
     value => {
         reduce(fns, (acc, fn) => fn(acc), value);
     }
 }
```
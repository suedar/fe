### 作用域、闭包、柯里化、应用

作用域，顾名思义，函数或变量能够起作用的区域，“作用域”就是一组规则，它主宰着`引擎`如何通过`标识符名称`在当前的`作用域`，或者在包含它的任意`嵌套作用域`中来查询一个变量。

![](https://randomm.cdn.bcebos.com/interview%2Fa.png)

比如在一个函数中，我们用`let a = 5;`申明了一个变量，根据词法分析，首先`let a`会提升到函数的头部，这就 `LHS` 查询，也就是查询赋值的目标，但是在其他函数的区域内，我们是访问不到那个函数的`a`变量的，如果我们在函数中没有做相应处理并`console.log(a)`，这个时候引擎会报一个错`ReferenceError`。

函数一旦创建，`javascript` 引擎会在函数对象上附加一个名叫作用域链的属性，这个属性指向一个数组对象，数组对象包含着函数的作用域以及父作用域，一直到全局作用域

函数在执行的时候，会申请空间创建执行上下文，执行上下文会包含函数定义时的作用域链，其次包含函数内部定义的变量、参数等，当函数在当前作用域执行时，会首先查找当前作用域下的变量，如果找不到，就会向函数定义时的作用域链中查找，直到全局作用域，如果变量在全局作用域下也找不到，则会抛出错误。

而闭包是有权访问另一作用域变量的函数，也就是说我们可以在第一个函数中把这个变量返回出来，然后外部就可以对它进行访问。这是闭包的一个特性，也就是突破作用域链。还用闭包的一个应用是柯里化，柯里化是把一个多参数函数转化为一个嵌套的一元函数的过程。

怎么解决内存泄漏问题？

### promise原理

当我们需要发送多个异步请求，并且每个请求之间需要相互依赖，那这时我们只能以嵌套方式来解决，在以前的方式中，这会形成 "回调地狱"。

``` js
$.get(url, data1 => {
    console.log(data1)
    $.get(data1.url, data2 => {
        console.log(data1)
    })
})

```
1. `promise`相当于一个状态机，`promise`有三种状态，等待态（`Pending`）、执行态（`Fulfilled`）和拒绝态（`Rejected`）
（状态）
> `promise` 对象初始化状态为 `pending`<br>
> 当调用`resolve`(成功)，会由`pending` => `fulfilled`<br>
> 当调用`reject`(失败)，会由`pending` => `rejected`

2. thenable中运用了链式调用的思想，但是它返回的不是this，而是新的promise。

假如 then 函数执行返回 this 调用对象本身，那么 promise2 === promise1，promise2 状态也应该等于 promise1 同为 resolved。而 onResolved 回调中返回状态为 rejected 对象。考虑到 Promise 状态一旦 resolved 或 rejected就不能再迁移，所以这里 promise2 也没办法转为回调函数返回的 rejected 状态，产生矛盾。

3. 先执行同步代码，在执行微任务，再执行宏任务。（调用顺序）
也就是说，当遇到变量，会直接返回，如果状态是promise，则push进一个数组中，遇到resolve或者reject状态后返回。

`Promise`是一种封装和组合未来值得易于复用机制，实现关注点分离、异步流程控制、异常冒泡、串行/并行控制等。

promise.race 可以用作超时处理

> https://juejin.im/post/5a30193051882503dc53af3c#comment


#### 事件循环机制
![](https://randomm.cdn.bcebos.com/interview%2Fb.png)
![](https://randomm.cdn.bcebos.com/interview%2Fc.png)
JS 执行是单线程的，它是基于事件循环的。事件循环大致分为以下几个步骤:
(1)所有同步任务都在主线程上执行，形成一个执行栈(execution context stack)。
(2)主线程之外，还存在一个"任务队列"(task queue)。只要异步任务有了运行结果，就在"任务队列" 之中放置一个事件。
(3)一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些 对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
(4)主线程不断重复上面的第三步。


#### 如何停止一个promise

> https://promisesaplus.com/ <br>
> http://www.ituring.com.cn/article/66566

### 实现一个发布-订阅者模式


本周先这样
https://github.com/xieranmaya/blog/issues/5
https://github.com/kriskowal/q/blob/v1/q.js#L101
http://liubin.org/promises-book/javascript-promise-book.pdf
https://juejin.im/post/5a04066351882517c416715d

### 有几种判断数据类型的方式

### 箭头函数
- 如果箭头函数的函数体只有一条语句并且不需要返回值（最常见是调用一个函数），可以给这条语句前面加一个void关键字
- this指向
1. 箭头函数不会创建自己的this
2. 箭头函数继承而来的this指向永远不变
3. .call()/.apply()/.bind()无法改变箭头函数中this的指向
> https://juejin.im/post/6844903805960585224

- 箭头函数不能作为构造函数使用
- 箭头函数没有自己的arguments
- 箭头函数没有原型prototype
- 箭头函数不能用作Generator函数，不能使用yeild关键字

``` js

var id = 'Global';

function fun1() {
    setTimeout(function(){
        console.log(this.id);
    }, 2000);
}

function fun2() {
    setTimeout(() => {
        console.log(this.id);
    }, 2000)
}

fun1.call({id: 'Obj'});

fun2.call({id: 'Obj'});


// 'Global'
// 'Obj'

var id = 'GLOBAL';
var obj = {
  id: 'OBJ',
  a: function(){
    console.log(this.id);
  },
  b: () => {
    console.log(this.id);
  }
};

obj.a();    // 'OBJ'
obj.b();    // 'GLOBAL'
```

### 事件委托的原理
DOM2的事件流包含三个阶段
- 事件委托
- 目标阶段
- 事件冒泡

事件委托是利用事件冒泡机制实现的。

### apply和call的实现

``` js
Function.prototype.call2 = function (context) {
    var context = context || window;
    context.fn = this;

    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }

    var result = eval('context.fn(' + args +')');

    delete context.fn
    return result;
}

Function.prototype.apply = function (context, arr) {
    var context = Object(context) || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result;
}

Function.prototype._bind = function(_this, arguments) {
}

```

### this指向问题
``` js
var a = function() {
    data: 'i am a'
    b: function() {
        console.log(this.data);
    }
}
a.b() => i am a
```
this指向其调用方
> https://juejin.cn/post/6844903518101323784

### 变量提升
function 会跟 var 一样提升

```
function cloneDeep(origin) {
    if (!typeof origin === 'object') {
        return origin;
    }

    const target = origin instanceOf Array ? [] : {};

    for (let i in origin) {
        if (typeof origin[i] === 'object') {
            target[i] = cloneDeep(origin[i]);
        }
        else {
            target[i] = origin[i];
        }
    }

    return target;
}
```

## 排序

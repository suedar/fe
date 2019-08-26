### 作用域、闭包、柯里化、应用

作用域，顾名思义，函数或变量能够起作用的区域，“作用域”就是一组规则，它主宰着`引擎`如何通过`标识符名称`在当前的`作用域`，或者在包含它的任意`嵌套作用域`中来查询一个变量。

![](https://randomm.cdn.bcebos.com/interview%2Fa.png)

比如在一个函数中，我们用`let a = 5;`申明了一个变量，根据词法分析，首先`let a`会提升到函数的头部，这就LHS查询，也就是查询赋值的目标，但是在其他函数的区域内，我们是访问不到那个函数的`a`变量的，如果我们在函数中没有做相应处理并`console.log(a)`，这个时候引擎会报一个错`ReferenceError`。

而闭包是有权访问另一作用域变量的函数，也就是说我们可以在第一个函数中把这个变量返回出来，然后外部就可以对它进行访问。这是闭包的一个特性，也就是突破作用域链。还用闭包的一个应用是柯里化，柯里化是把一个多参数函数转化为一个嵌套的一元函数的过程。

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


### 实现一个发布-订阅者模式
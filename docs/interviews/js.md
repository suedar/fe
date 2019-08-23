### 作用域、闭包、柯里化、应用

作用域，顾名思义，函数或变量能够起作用的区域，“作用域”就是一组规则，它主宰着`引擎`如何通过`标识符名称`在当前的`作用域`，或者在包含它的任意`嵌套作用域`中来查询一个变量。

![](https://randomm.cdn.bcebos.com/interview%2Fa.png)

比如在一个函数中，我们用`let a = 5;`申明了一个变量，根据词法分析，首先`let a`会提升到函数的头部，这就LHS查询，也就是查询赋值的目标，但是在其他函数的区域内，我们是访问不到那个函数的`a`变量的，如果我们在函数中没有做相应处理并`console.log(a)`，这个时候引擎会报一个错`ReferenceError`。

而闭包是有权访问另一作用域变量的函数，也就是说我们可以在第一个函数中把这个变量返回出来，然后外部就可以对它进行访问。这是闭包的一个特性，也就是突破作用域链。还用闭包的一个应用是柯里化，柯里化是把一个多参数函数转化为一个嵌套的一元函数的过程。

### promise原理

当我们需要发送多个异步请求，并且每个请求之间需要相互依赖，那这时我们只能以嵌套方式来解决，这会形成 "回调地狱"。

1. `promise`相当于一个状态机，`promise`有三种状态，等待态（`Pending`）、执行态（`Fulfilled`）和拒绝态（`Rejected`）

(1) `promise` 对象初始化状态为 `pending`
(2) 当调用`resolve`(成功)，会由`pending` => `fulfilled`
(3) 当调用`reject`(失败)，会由`pending` => `rejected`

2. thenable中运用了链式调用的思想，但是它返回的不是this，而是新的promise。

假如 then 函数执行返回 this 调用对象本身，那么 promise2 === promise1，promise2 状态也应该等于 promise1 同为 resolved。而 onResolved 回调中返回状态为 rejected 对象。考虑到 Promise 状态一旦 resolved 或 rejected就不能再迁移，所以这里 promise2 也没办法转为回调函数返回的 rejected 状态，产生矛盾。

3. 

`Promise`是一种封装和组合未来值得易于复用机制，实现关注点分离、异步流程控制、异常冒泡、串行/并行控制等。

> https://juejin.im/post/5a30193051882503dc53af3c#comment

### 实现一个发布-订阅者模式
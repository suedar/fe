
![图片](https://agroup-bos.cdn.bcebos.com3824ddeff5f2b971b3831ba321cb960f79ce5990)

************************
### 问题举例

### js
1. 介绍js的基本数据类型，（说出原始数据类型和引用数据类型加分）
- Number
- String
- Boolean
- Object
- null
- undefined
- Symbol

typeof Symbol = function
typeof null = object

typeof是否能正确判断类型

Object.prototype.toString().call

2. 解释事件循环机制
JS 执行是单线程的，它是基于事件循环的。事件循环大致分为以下几个步骤:
(1)所有同步任务都在主线程上执行，形成一个执行栈(execution context stack)。
(2)主线程之外，还存在一个"任务队列"(task queue)。只要异步任务有了运行结果，就在"任务队列" 之中放置一个事件。
(3)一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些 对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
(4)主线程不断重复上面的第三步。

3. 讲讲对promise的理解（说到async/await加分）
- `promise`相当于一个状态机，`promise`有三种状态，等待态（`Pending`）、执行态（`Fulfilled`）和拒绝态（`Rejected`）
（状态）
- thenable中运用了链式调用的思想，但是它返回的不是this，而是新的promise。
- 先执行同步代码，在执行微任务，再执行宏任务。（调用顺序）
也就是说，当遇到变量，会直接返回，如果状态是promise，则push进一个数组中，遇到resolve或者reject状态后返回。

4. 讲讲对闭包的理解
5. 原型链
6. 作用域、闭包、柯里化、应用
闭包问题可以问到 bind/apply/call

7. es6
8. 节流和防抖（可放到实现）

``` js
function throttle(fn, interval = 300) {
    let canRun = true;
    return function () {
        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            canRun = true;
        }, interval);
    };
}
```
9. js时间线
10. 浏览器渲染流程
11. 浏览器缓存机制
12. 深拷贝
13. 写一个函数，可以控制最大并发数
14. 实现数组flat、filter等方法
15. 数组去重

### 浏览器
从输入URL到呈现页面过程

1、创建 Document 对象，开始解析 web 页面。解析 HTML 元素和他们的文本内容后添加 Element
对象和 Text 节点到文档中。这个阶段 document.readyState = 'loading'。
2、遇到 link 外部 css，创建线程加载， 并继续解析文档。
3、遇到 script 外部 js，并且没有设置 async、defer，浏览器加载，并阻塞，等待 js 加载完成并执 行该脚本，然后继续解析文档。
4、遇到 script 外部 js，并且设置有 async、defer，浏览器创建线程加载，并继续解析文档。 对于 async 属性的脚本，脚本加载完成后立即执行。(异步禁止使用 document.write())
5、遇到 img 等，先正常解析 dom 结构，然后浏览器异步加载 src，并继续解析文档。
6、当文档解析完成，document.readyState = 'interactive'。
7、文档解析完成后，所有设置有 defer 的脚本会按照顺序执行。(注意与 async 的不同,但同样禁止 使用 document.write());
8、document 对象触发 DOMContentLoaded 事件，这也标志着程序执行从同步脚本执行阶段， 转化为事件驱动阶段。
9、当所有 async 的脚本加载完成并执行后、img 等加载完成后，document.readyState = 'complete'，window 对象触发 load 事件。 10、从此，以异步响应方式处理用户输入、网络事件等。

强缓存、协商缓存
HTTP2
HTTP状态码
三次握手与四次挥手
跨域（JSONP/CORS）
跨域时如何处理cookie
垃圾回收机制

### css
1. 清除浮动的方式有哪些，请说出优缺点。
2. 了解BFC吗
3. 说出水平垂直居中的所有方式（7种）
4. 了解grid布局吗 怎么实现子元素居中
5. 伪类和伪元素的区别是什么
6. 盒子模型
7. 三栏布局
8. 选择器权重计算方式
9. 清除浮动的方法
10. flex
11. 什么是BFC、可以解决哪些问题
position属性
如何实现一个自适应的正方形
如何用css实现一个三角形

### 网络
1. http2
2. http和https的区别
3. 常见的状态码
4. 网络有几层结构 分别是什么

### 框架
1. vue双向数据绑定原理
2. vue生命周期
3. vuex
watch与computed的区别
vue生命周期及对应的行为
vue父子组件生命周期执行顺序
组件间通讯方法
如何实现一个指令
vue.nextTick实现原理
diff算法
如何做到的双向绑定
虚拟dom为什么快
如何设计一个组件
react跟vue的区别

### webpack
用过哪些loader和plugin
loader的执行顺序为什么是后写的先执行
webpack配置优化
webpack打包优化（happypack、dll）
plugin与loader的区别
webpack执行的过程
如何编写一个loader、plugin
tree-shaking作用，如何才能生效

### 安全
https
什么是xss，如何预防
什么是csrf，如何预防
为什么会造成csrf攻击

### 性能优化
首屏加载如何优化
一个网页从请求到呈现花了很长时间，如何排查

### 编码能力
1. 将数组扁平化
2. 求两个数组的交集
3. 实现首字母大写
4. 数组去重
5. 检查数值出现次数

深拷贝
写一个函数，可以控制最大并发数
实现数组flat、filter等方法

### 其他
git
1. reset、revert、rebase的作用
revert可以逆反一次commit
reset重置所有修改
rebase将分支上的修改复刻到master分支上
2. git merge 和 git pull的区别

nodejs
1. express 和 koa1、koa2的区别

什么是前端微服务
有使用过ts吗
### 软实力
用结构性思维进行解释加分
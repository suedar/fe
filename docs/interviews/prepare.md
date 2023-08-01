面试准备

## website

当时需要制作一个用于审核后台系统网站，我运用nestjs搭建后端，reactjs搭建前端，同时运用中间件配置拦截器、异常过滤器、类型守卫、日志系统，对于注册环节，我运用smtp构建邮件服务。从中我学会了全栈开发网站。

At that time, I needed to make a Internal site for reviewing. I used nestjs to build the backend and reactjs to build the frontend. I used middleware to configure interceptors, exception filters, type guards, and log systems. For the registration process, I used smtp to build mail services. During developing this project, I learned about how to be a full stack web developer.

## single-spa 迁移

维护 PC 端 OTA 管理平台，该平台提供 sdk 升级管理功能，基于 vue 全家桶构建。在当时前端项目非常臃肿，急需拆分，在当时我通过学习认识到微前端可以实现这个功能。
为了实现前端项目的独立运行、独立开发和独立部署，我主导了项目的前端微服务化，将子项目打包成单一的 js 文件存放在云服务对应的 bucket 中，编写脚本进行自动化打包跟部署，修改 import-map 对应的文件路径，在根文件运用 import-map 进行引用子项目的引用。 
项目成功地实现前端微服务化后, 项目得到了很好的扩展，提高了项目的可维护性，可扩展性，稳定性。

I maintain a PC-side OTA management platform, which provides sdk upgrade management functions and is built on the vue family bucket. At that time, the front-end project was very enormous and needed to be split urgently. In order to solve this problem, I realized through learning that micro-frontend can achieve this goal.

So I led the micro-frontend migration of the project which the sub-functional projects are abled to achieve independent operation, independent development and independent deployment. Packed the sub-projects into a single javascript file and stored them in the bucket of the cloud service, and wrote scripts for automatic packaging and deployment. Modify the file path inside the import-map file, and use the import-map in the root file to reference the subproject.

After the project successfully realizes the micro-frontend migration, the project has been well expanded, which improves the maintainability, scalability and stability of the project.

## 什么是React？

React是Facebook在2011年开发的前端JavaScript库。
它遵循基于组件的方法，该方法有助于构建可重用的UI组件。
它用于开发复杂的交互式Web和移动UI。
即使仅在2015年才开源，它还是支持它的最大社区之一。

React is a front-end JavaScript library developed by Facebook in 2011.
It follows a component-based approach, which helps in building reusable UI components.
It is used to develop complex interactive web and mobile UIs.
Even though it was only open sourced in 2015, it has one of the largest communities supporting it.
 
## 您对Virtual DOM有什么了解？解释它的工作。

虚拟DOM是轻量级的JavaScript对象，其最初只是真实DOM的副本。 它是一个节点树，列出了元素，它们的属性和内容。React的render函数从React组件中创建一个节点树。然后，它会响应由用户或系统执行的各种操作引起的数据模型中的突变来更新此树。该虚拟DOM只需三个简单的步骤。
1. 无论何时任何基础数据发生更改，整个UI都将以虚拟DOM表示形式重新呈现。
2. 然后计算先前的DOM表示和新的DOM表示之间的差异。
3. 一旦完成计算，将仅使用实际已更改的内容来更新实际DOM。

Virtual DOMs are lightweight JavaScript objects that are initially just copies of the real DOM. It is a node tree listing elements, properties and content. React's render function creates a tree of nodes from React components. It updates this tree in response to mutations in the data model caused by various actions performed by the user or the system. This virtual DOM takes just three simple steps.
1. Whenever any underlying data changes, the entire UI will be re-rendered in a virtual DOM representation.
2. Then compute the difference between the previous DOM representation and the new DOM representation.
3. Once the computation is done, the actual DOM will be updated with only what has actually changed.

## What are synthetic events in React?

Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers.

## Why is there a need for using keys in Lists?

Keys are very important in lists for the following reasons:

- A key is a unique identifier and it is used to identify which items have changed, been updated or deleted from the lists
- It also helps to determine which components need to be re-rendered instead of re-rendering all the components every time. Therefore, it increases performance, as only the updated components are re-rendered

## hooks 比 class 的区别和优势

Hooks 主要是利用闭包来保存状态，使用链表保存一系列 Hooks，将链表中的第一个 Hook 与 Fiber 关联。在 Fiber 树更新时，就能从 Hooks 中计算出最终输出的状态和执行相关的副作用。

使用 Hooks 的注意事项：

不要在循环，条件或嵌套函数中调用 Hooks。
只在 React 函数中调用 Hooks。

React 最终选择将 Hooks 设计为顺序结构，这也是 Hooks 不能条件调用的原因。

Hooks mainly use closures to save state, use linked lists to save a series of Hooks, and associate the first Hook in the linked list with Fiber. When the fiber tree is updated, the final output state and execution-related side effects can be calculated from the Hooks.

Notes on using Hooks:

Do not call Hooks in loops, conditionals or nested functions.
Only call Hooks in React functions and custom hooks.

React finally chose to design Hooks as a sequential structure, which is why Hooks cannot be called conditionally.

# useMemo、useCallback

useMemo和useCallback主要用于减少组件的更新次数、优化组件性能的。

useMemo接收一个回调函数以及依赖项，只有依赖项变化时才会重新执行回调函数。
useCallback接收一个回调函数以及依赖项，并且返回该回调函数的memorize版本，只有在依赖项重新变化时才会重新新的memorize版本。


# What do you understand by refs in React?
Refs is the short hand for References in React. It is an attribute which helps to store a reference to a particular React element or component, which will be returned by the components render configuration function. It is used to return references to a particular element or component returned by render(). They come in handy when we need DOM measurements or to add methods to the components.

# What do you know about controlled and uncontrolled components?
Controlled vs Uncontrolled Components
Controlled Components	
1. They do not maintain their own state	
2. Data is controlled by the parent component	
3. They take in the current values through props and then notify the changes via callbacks	

Uncontrolled Components
1. They maintain their own state
2. Data is controlled by the DOM
3. Refs are used to get their current values

# What are Higher Order Components(HOC)?
Higher Order Component is an advanced way of reusing the component logic. Basically, it’s a pattern that is derived from React’s compositional nature. HOC are custom components which wrap another component within it. They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components. You can say that HOC are ‘pure’ components.

高阶组件是重用组件逻辑的高级方法。基本上，它是一种源自 React 组合特性的模式。 HOC 是自定义组件，其中包含另一个组件。它们可以接受任何动态提供的子组件，但不会修改或复制其输入组件的任何行为。你可以说 HOC 是“纯”组件。

# What are Pure Components?
Pure components are the simplest and fastest components which can be written. They can replace any component which only has a render(). These components enhance the simplicity of the code and performance of the application.

=================================== ts =================================

## ts type、interface 的不同

type、interface
都可以描述一个对象或者函数
都允许拓展（extends）

type 可以声明基本类型别名，联合类型，元组等类型

对于同一个变量名的申明而言，interface 能够声明合并 而 type 不行
接口是通过继承的方式来扩展，类型别名是通过 & 来扩展。

type, interface
can describe an object or function
Both allow extensions (extends)

type can declare basic type aliases, union types, tuples, etc.

For declarations of the same variable name, interface can declare a combination but type cannot
Interfaces are extended by inheritance, and type aliases are extended by &.

=================================== javascript =================================

# 闭包

- 闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域

## 闭包的特性：
- 函数内再嵌套函数
- 内部函数可以引用外层的参数和变量
- 参数和变量不会被垃圾回收机制回收

## 说说你对闭包的理解
- 使用闭包主要是为了设计私有的方法和变量。
闭包的优点是可以避免全局变量的污染，
缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。
在 js 中，函数即闭包，只有函数才会产生作用域的概念

# Closure
- A closure is a function that has access to variables in the scope of another function. The most common way to create a closure is to create another function within a function, access the local variables of this function through another function, and use the closure can break the scope chain

## Characteristics of closures:
- nested functions within functions
- Inner functions can refer to outer parameters and variables
- Parameters and variables will not be collected by the garbage collection mechanism

## Talk about your understanding of closures
- Closures are mainly used to design private methods and variables.
The advantage of closures is that they can avoid the pollution of global variables,
The disadvantage is that the closure will be resident in memory, which will increase the amount of memory used. Improper use can easily cause memory leaks.
In js, functions are closures, and only functions generate the concept of scope

## 箭头函数跟普通函数的区别
箭头函数不会创建自己的this
箭头函数不会创建自己的this，所以它没有自己的this，它只会从自己的作用域链的上一层继承this。
箭头函数继承而来的this指向永远不变
.call()/.apply()/.bind()无法改变箭头函数中this的指向
箭头函数不能作为构造函数使用
箭头函数没有自己的arguments
箭头函数没有原型prototype
箭头函数不能用作Generator函数，不能使用yeild关键字

Arrow functions don't create their own this
An arrow function doesn't create its own this, so it doesn't have its own this, it just inherits this from one level up in its own scope chain.
The this pointer inherited from the arrow function will never change
.call()/.apply()/.bind() cannot change the point of this in arrow functions
Arrow functions cannot be used as constructors
Arrow functions don't have their own arguments
Arrow functions have no prototype
Arrow functions cannot be used as Generator functions and cannot use the yield keyword

# 原型链
原型链就是基于 __proto__ 的向上查找机制。当实例操作某个属性或方法时会在当前自己的作用域中查找，找到了则查找结束。没有找到就基于所创建类的原型对象上的 __proto__ 继续向上查找，直到找到基类的 Object.prototype 为止，如果还是没有找到则直接undefined

The prototype chain is an upward lookup mechanism based on __proto__. When an instance operates a property or method, it will search in its current scope, and the search will end if it is found. If it is not found, continue to look up based on the __proto__ on the prototype object of the created class until the Object.prototype of the base class is found, if it is still not found, it is directly return undefined

#### 事件循环机制 event loop mechanism
JS 执行是单线程的，它是基于事件循环的。事件循环大致分为以下几个步骤:
(1)所有同步任务都在主线程上执行，形成一个执行栈(execution context stack)。
(2)主线程之外，还存在一个"任务队列"(task queue)。只要异步任务有了运行结果，就在"任务队列" 之中放置一个事件。
(3)一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些 对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
(4)主线程不断重复上面的第三步。

JS execution is single threaded and it is based on an event loop. The event loop is roughly divided into the following steps:
(1) All synchronization tasks are executed on the main thread, forming an execution context stack.
(2) In addition to the main thread, there is also a "task queue" (task queue). As soon as the asynchronous task has a result, an event is placed in the "task queue".
(3) Once all the synchronization tasks in the "execution stack" are executed, the system will read the "task queue" to see what events are in it. Those corresponding asynchronous tasks then end the waiting state, enter the execution stack, and start execution.
(4) The main thread keeps repeating the third step above.

## 跨域

Protocol domain name port number

=================================== 个人 =================================

# strength and weakness？


opening and willing to learn, for example has nestjs 
strong team player, willing communicate with other team member

weakness？

public speaking, i am ok with small meeting, but as english is not my first language, i am always afraid of making mistackes and i become nervous when speaking to a larger group of people.i spent lots of time working on this by attending english center in company and practive english regular, i think i have improved more.

# where do you see yourself in 5 years? goals?

In five years, i would like to be recognized as an expert of front-end engineer in software development. i know i will have an oppotunity to do here. And i am also really excited about taking on more responsibilities and even take the lead role on some project.

期望能够在做业务的同时做一些基建沉淀自己的前端技术
I hope to be able to do some infrastructure to precipitate my own front-end technology while doing business

# 你为什么想从事这一行
在我的大学期间，我通过学校社团掌握了ps跟pr，而前端是一门很好得结合了计算机专业跟ps的岗位，在对js的学习中，我发现js不仅能写页面，还能写人工智能与硬件结合，还有很多的3D库，可以用来写游戏。越了解之后越喜欢js, 所以决定 commit to it。
During my college years, I mastered PS and PR through the school club, and the front-end is a job that combines computer science and Image Processing. In the study of js, I found that js can not only write pages, but also Writing artificial intelligence combined with hardware, 3D modeling and game production. The more I understand, the more I like js, so I decided to commit to it.
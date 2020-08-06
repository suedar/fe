这里讲述的是js的基础

js的数据类型
- Number
- String
- Boolean
- Object
- null
- undefined
- Symbol

### 事件循环机制

``` js
    let timer = new Date().getTime();
    let g;
    const a = setTimeout(() => {
        g.next('a');
    }, 1000)
    const b = setTimeout(() => {
        g.next('b')
    }, 1000)
    const c = setTimeout(() => {
        console.log(3)
    }, 1000);
    const d = setTimeout(() => {
        console.log(4)
    }, 1000);

    function* main() {
        const aa = yield a;
        const bb = yield b;
        console.log(`1.${aa}`);
        console.log(`2.${bb}`);
        console.log(new Date().getTime() - timer);
    }
    async function main1() {
        const aa = await c;
        const bb = await d;
        console.log(new Date().getTime() - timer);
    }
    g = main();
    g.next();
    main1();
```

上述代码的console结果为
``` js
    1
    1.a
    2.b
    1001
    3
    4
```


### class

可以在函数上面封装一层
<br>这里应用到链式调用 可连续调用函数
``` js
    class Container {
        constructor(value) {
            this.value = value;
        }
        of(value) {
            return new Container(value);
        }
        isNothing() {
            return (this.value === null || this.value === undefined);
        }
        map(fn) {
            return this.isNothing() ? this.of(null) : this.of(fn(this.value));
        }
    }
    let c = new Container();
    let b = c.of("string").map(x => x.toUpperCase());
    console.log(b)
```

### promise
``` js
    // 定义
    "use strict";
    var fs = require("fs");
    function File() {
        this.promise = Promise.resolve();
    }
    // Static method for File.prototype.read
    File.read = function (filePath) {
        var file = new File();
        return file.read(filePath);
    };
    File.prototype.then = function (onFulfilled, onRejected) {
        this.promise = this.promise.then(onFulfilled, onRejected);
        return this;
    };
    File.prototype["catch"] = function (onRejected) {
        this.promise = this.promise.catch(onRejected);
        return this;
    };
    File.prototype.read = function (filePath) {
        return this.then(function () {
        return fs.readFileSync(filePath, "utf-8");
    });
    };
    File.prototype.transform = function (fn) {
        return this.then(fn);
    };
    File.prototype.write = function (filePath) {
        return this.then(function (data) {
            return fs.writeFileSync(filePath, data)
        });
    };
    module.exports = File;

    // 使用
    var File = require("./fs-promise-chain");
    var inputFilePath = "input.txt",
    outputFilePath = "output.txt";

    File.read(inputFilePath)
        .transform(function (content) {
        return ">>" + content;
    })
    .write(outputFilePath);
    // => 处理流程类似以下的伪代码
    promise.then(function read(){
        return fs.readFileSync(filePath, "utf-8");
    }).then(function transform(content) {
        return ">>" + content;
    }).then(function write(){
        return fs.writeFileSync(filePath, data);
    });

    // 若是使用stream的话
    readableStream.pipe(transformStream).pipe(writableStream);
```

array

``` js
"use strict";

function ArrayAsPromise(array) {
    this.array = array;
    this.promise = Promise.resolve();
}
ArrayAsPromise.prototype.then = function (onFulfilled, onRejected) {
    this.promise = this.promise.then(onFulfilled, onRejected);
    return this;
};
ArrayAsPromise.prototype["catch"] = function (onRejected) {
    this.promise = this.promise.catch(onRejected);
    return this;
};
Object.getOwnPropertyNames(Array.prototype).forEach(function (methodName) {
    // Don't overwrite
    if (typeof ArrayAsPromise[methodName] !== "undefined") {
        return;
    }
    var arrayMethod = Array.prototype[methodName];
    if (typeof arrayMethod !== "function") {
        return;
    }
    ArrayAsPromise.prototype[methodName] = function () {
        var that = this;
        var args = arguments;
        this.promise = this.promise.then(function () {
            that.array = Array.prototype[methodName].apply(that.array, args);
            return that.array;
        });
        return this;
    };
});
module.exports = ArrayAsPromise;
module.exports.array = function newArrayAsPromise(array) {
    return new ArrayAsPromise(array);
};
// test
"use strict";
var assert = require("power-assert");
var ArrayAsPromise = require("../src/promise-chain/array-promise-chain");
describe("array-promise-chain", function () {
    function isEven(value) {
        return value % 2 === 0;
    }

    function double(value) {
        return value * 2;
    }
    beforeEach(function () {
        this.array = [1, 2, 3, 4, 5];
    });
    describe("Native array", function () {
        it("can method chain", function () {
            var result = this.array.filter(isEven).map(double);
            assert.deepEqual(result, [4, 8]);
        });
    });
    describe("ArrayAsPromise", function () {
        it("can promise chain", function (done) {
            var array = new ArrayAsPromise(this.array);
            array.filter(isEven).map(double).then(function (value) {
                assert.deepEqual(value, [4, 8]);
            }).then(done, done);
        });
    });
});

// reduce获取结果
// 顺序执行
function getURL(URL) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', URL, true);
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(new Error(req.statusText));
        };
        req.send();
    });
}
var request = {
    comment: function getComment() {
        return getURL('http://azu.github.io/promises-book/json/comment.json').then(JSON.parse);
    },
    people: function getPeople() {
        return getURL('http://azu.github.io/promises-book/json/people.json').then(JSON.parse);
    }
};

function main() {
    function recordValue(results, value) {
        results.push(value);
        return results;
    }
    var pushValue = recordValue.bind(null, []);
    var tasks = [request.comment, request.people];
    return tasks.reduce(function (promise, task) {
        return promise.then(task).then(pushValue);
    }, Promise.resolve());
}
// 运行示例
main().then(function (value) {
    console.log(value);
}).catch(function (error) {
    console.error(error);
});
```

yarn 的优先
> 速度快。速度快主要来自以下两个方面：

- 并行安装：无论 npm 还是 Yarn 在执行包的安装时，都会执行一系列任务。npm 是按照队列执行每个 package，也就是说必须要等到当前 package 安装完成之后，才能继续后面的安装。而 Yarn 是同步执行所有任务，提高了性能。
- 离线模式：如果之前已经安装过一个软件包，用Yarn再次安装时之间从缓存中获取，就不用像npm那样再从网络下载了。

> 安装版本统一：为了防止拉取到不同的版本，Yarn 有一个锁定文件 (lock file) 记录了被确切安装上的模块的版本号。每次只要新增了一个模块，Yarn 就会创建（或更新）yarn.lock 这个文件。这么做就保证了，每一次拉取同一个项目依赖时，使用的都是一样的模块版本。npm 其实也有办法实现处处使用相同版本的 packages，但需要开发者执行 npm shrinkwrap 命令。这个命令将会生成一个锁定文件，在执行 npm install 的时候，该锁定文件会先被读取，和 Yarn 读取 yarn.lock 文件一个道理。npm 和 Yarn 两者的不同之处在于，Yarn 默认会生成这样的锁定文件，而 npm 要通过 shrinkwrap 命令生成 npm-shrinkwrap.json 文件，只有当这个文件存在的时候，packages 版本信息才会被记录和更新。
> 更简洁的输出：npm 的输出信息比较冗长。在执行 npm install  的时候，命令行里会不断地打印出所有被安装上的依赖。相比之下，Yarn 简洁太多：默认情况下，结合了 emoji直观且直接地打印出必要的信息，也提供了一些命令供开发者查询额外的安装信息。
**多注册来源处理：**所有的依赖包，不管他被不同的库间接关联引用多少次，安装这个包时，只会从一个注册来源去装，要么是 npm 要么是 bower, 防止出现混乱不一致。
> 更好的语义化： yarn改变了一些npm命令的名称，比如 yarn add/remove，感觉上比 npm 原本的 install/uninstall 要更清晰。
